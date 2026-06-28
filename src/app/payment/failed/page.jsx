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
        Helaas, er is iets niet goed gegaan. De betaling is niet gelukt.
      </p>

      <p className="text-md leading-1.7 max-w-md mt-5 text-white/80">
        Mocht de betaling herhaaldelijk niet lukken, neem dan contact op met de
        penningmeester via{" "}
        <a href="mailto:herberich.f@gmail.com" className="text-[#E8604C] underline">
          herberich.f@gmail.com
        </a>
        .
      </p>

      <Link href="/" className="mt-10 text-[#E8604C] underline">
        Klik hier om terug te gaan naar de homepagina
      </Link>
    </main>
  );
}
