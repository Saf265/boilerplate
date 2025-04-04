"use client";

import { sendEmail } from "@/lib/action-user";
import { ArrowRight, Mail } from "lucide-react";
import Link from "next/link";
import { FormEvent, useState } from "react";
import { toast } from "react-hot-toast";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export default function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);

  async function onSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    const email = formData.get("email");
    const response = await sendEmail(email as string);
    setIsLoading(false);
    if (response) {
      toast.success("Vous avez été inscrit avec succès !", {
        duration: 3000,
      });
    } else {
      toast.error("Cet email est déjà inscrit !", {
        duration: 3000,
      });
    }
  }
  return (
    <form onSubmit={onSubmit} className="flex-1 sm:max-w-md space-y-4">
      <div className="grid gap-2">
        <div className="grid gap-1">
          <label className="sr-only" htmlFor="email">
            Email
          </label>
          <div className="flex items-center border rounded-md focus-within:ring-1 focus-within:ring-ring px-3">
            <Mail className="h-4 w-4 text-muted-foreground mr-2" />
            <Input
              className="flex h-10 border-0 bg-transparent shadow-none focus-visible:ring-0 focus-visible:ring-offset-0"
              id="email"
              placeholder="Entrez votre email"
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
            />
          </div>
        </div>
        <Button disabled={isLoading} type="submit" className="w-full">
          {isLoading ? "Chargement..." : "Me Notifier"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </div>
      <p className="text-xs text-muted-foreground text-center">
        En vous inscrivant, vous acceptez nos{" "}
        <Link
          href="/conditions-utilisation"
          className="underline underline-offset-2"
        >
          Conditions d&apos;Utilisation
        </Link>{" "}
        et notre{" "}
        <Link
          href="/politique-de-confidentialite"
          className="underline underline-offset-2"
        >
          Politique de Confidentialité
        </Link>
        .
      </p>
    </form>
  );
}
