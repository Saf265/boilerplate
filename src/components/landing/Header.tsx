import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <Link className="flex items-center justify-center" href="/">
        <Image
          src="/logo.svg"
          alt="logo de QuickTome AI"
          width={28}
          height={28}
        />
        <span className="font-bold text-xl">QuickTome AI</span>
        <span className="sr-only">QuickTome AI</span>
      </Link>
    </header>
  );
}
