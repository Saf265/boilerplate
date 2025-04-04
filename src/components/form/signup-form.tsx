"use client";

import { sendEmail } from "@/lib/action-user";
import { zodResolver } from "@hookform/resolvers/zod";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";
import { Button } from "../ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "../ui/form";
import { Input } from "../ui/input";

const formSchema = z.object({
  email: z
    .string()
    .email("Email invalide")
    .min(1, "Email requis")
    .max(100, "Email trop long"),
});

type formData = z.infer<typeof formSchema>;

export default function SignupForm() {
  const form = useForm<formData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  async function onSubmit(data: formData) {
    try {
      const response = await sendEmail(data?.email);

      if (response === true) {
        toast.success("Email envoyé");
      } else {
        toast.error("Email déjà envoyé");
      }

      form.reset();
    } catch (error) {
      console.error("Erreur lors de l'envoi de l'email:", error);
      toast.error("Une erreur est survenue");
    }
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex-1 sm:max-w-md space-y-4"
      >
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Entrez votre email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          disabled={form.formState.isSubmitting}
          type="submit"
          className="w-full"
        >
          {form.formState.isSubmitting ? "Chargement..." : "Me Notifier"}
          <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
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
    </Form>
  );
}
