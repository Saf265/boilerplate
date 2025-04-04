import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bientôt Disponible - QuickTome AI",
  description: "Inscrivez-vous pour être notifié lors de notre lancement",
  // metadataBase: new URL("http://localhost:3000"),
  // keywords: ["Keyword 1", "Keyword 2"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className={`${inter.className} antialiased size-full`}>
        <Toaster />
        {children}
        {/* <BtnSuggestion /> */}
      </body>
    </html>
  );
}
