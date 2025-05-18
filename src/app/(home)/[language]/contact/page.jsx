
import LANGUAGES from "@/helpers/languages";
import Community from "@/components/Community";
import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import Block from "@/components/Block";

export default function Page({params}) {
  return (
    <main className="bg-[#121316]">
      <Hero />
      <Block variant={"image-left"} />
      <Block variant={"image-right"} />
    </main>
  );
}

export function generateStaticParams() {
  return LANGUAGES;
}
