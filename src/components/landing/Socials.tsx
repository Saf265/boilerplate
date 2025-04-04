import { Instagram } from "lucide-react";
import Link from "next/link";
import { FaTiktok } from "react-icons/fa";

export default function Socials() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-muted">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">
              Suivez-nous !
            </h2>
            <p className="max-w-[600px] text-muted-foreground md:text-xl">
              Suivez-nous sur les réseaux sociaux pour obtenir les dernières
              mises à jour concernant notre lancement.
            </p>
          </div>
          <div className="flex space-x-4">
            <Link
              href="#" // TODO: change this
              referrerPolicy="no-referrer"
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <FaTiktok />
              <span className="sr-only">Tiktok</span>
            </Link>
            <Link
              href="#" // TODO: change this
              referrerPolicy="no-referrer"
              target="_blank"
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-input bg-background shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              <Instagram />
              <span className="sr-only">Instagram</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
