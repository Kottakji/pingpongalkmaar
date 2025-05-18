
import LANGUAGES from "@/helpers/languages";
import Activities from "@/components/Activities";
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
