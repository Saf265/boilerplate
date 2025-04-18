"use server";

import { redirect } from "next/navigation";
import { auth, signIn } from "./auth";
import { prisma } from "./db";
import { logger } from "./logger";
import { stripe } from "./stripe";

export const getUser = async (userId: string) => {
  return await prisma.user.findUnique({
    where: {
      id: userId,
    },
  });
};

export const signInResend = async (data: { email: string }) => {
  await signIn("resend", data);

  redirect("/dashboard");
};

export const buyAction = async () => {
  const session = await auth();

  const user = await prisma.user.findUnique({
    where: {
      id: session?.user?.id ?? "",
    },
    select: {
      id: true,
      stripeCustomerId: true,
    },
  });

  const stripeCustomerId = user?.stripeCustomerId ?? undefined;

  if (!stripeCustomerId || !user?.id) {
    throw new Error("User not found");
  }

  const checkout = await stripe.checkout.sessions.create({
    customer: stripeCustomerId,
    payment_method_types: ["card", "link"],
    mode: "payment",

    line_items: [
      {
        quantity: 1,
        price_data: {
          currency: "usd",
          product_data: {
            name: "PRO Plan", // ! edit this
          },
          unit_amount: 2000, // ! edit this
        },
      },
    ],
    metadata: {
      userId: user?.id as string, // ! edit this
    },

    cancel_url: "http://localhost:3000", // ! edit this
    success_url: "http://localhost:3000/success", // ! edit this
  });

  if (!checkout.url) {
    throw new Error("Failed to create checkout session");
  }

  redirect(checkout.url);
};

export const sendEmail = async (email: string) => {
  if (!email) {
    return false;
  }
  logger.info("sendEmail", email);
  const isEmailExist = await prisma.email.findFirst({
    where: {
      email: {
        equals: email,
      },
    },
  });

  if (isEmailExist) {
    return false;
  }

  await prisma.email.create({
    data: {
      email,
    },
  });

  return true;
};
