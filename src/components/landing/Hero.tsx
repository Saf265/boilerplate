import SignupForm from "../form/signup-form";
import { Badge } from "../ui/badge";

export default function Hero() {
  return (
    <div className="flex flex-col justify-center space-y-4 w-full py-4 px-2">
      <div className="space-y-4 texte-center flex items-center justify-center flex-col w-full">
        <Badge>Arrive bientôt !</Badge>
        <h1 className="text-3xl font-bold tracking-tighter sm:text-5xl xl:text-6xl/none text-center">
          Créer des ebook avec l&apos;IA
          <br />
          en{" "}
          <span className="underline decoration-primary">quelques minutes</span>
        </h1>
        <p className="max-w-[600px] text-muted-foreground md:text-lg text-sm text-center">
          Créez des ebooks de qualité professionnelle en quelques minutes
          seulement.
        </p>
      </div>
      <div className="flex flex-col gap-2 min-[400px]:flex-row ittems-center justify-center w-full">
        <SignupForm />
      </div>
    </div>
  );
}
