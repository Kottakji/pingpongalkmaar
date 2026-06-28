import Image from "next/image";
import Link from "next/link";
import Logo from "@/assets/images/logo.png";

export default function Page() {
  return (
    <main className="min-h-screen bg-[#121316] flex flex-col items-center justify-center text-center px-6 text-white">
      <Image
        src={Logo}
        alt="Ping Pong Alkmaar"
        className="w-28 h-auto mb-10"
        priority
      />

      <p className="text-lg leading-1.7 max-w-md">
        Hartelijk dank, uw betaling is in goede orde ontvangen.
      </p>

      <Link href="/" className="mt-10 text-[#E8604C] underline">
        Klik hier om terug te gaan naar de homepagina
      </Link>
    </main>
  );
}
