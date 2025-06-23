
import LANGUAGES from "@/helpers/languages";
import Community from "@/components/Community";
import Youth from "@/components/Youth";
import Hero from "@/components/Hero";
import Block from "@/components/Block";
import useTranslation from "@/hooks/useTranslation";

export default function Page({params}) {
  const {t} = useTranslation()

  return (
    <main className="bg-[#121316]">
      <Hero />
      <Block variant={"image-left"} subtitle={"Ping Pong Alkmaar"} title={"Recreational & performance"}  description={`
        Ping Pong Alkmaar is the most enthusiastic table tennis club in Alkmaar and an ambitious sports association where everyone is welcome.

        Since its founding in May 2018, we have grown tremendously. The club has launched several new initiatives, and with our programs that reach out into the neighborhood,
        we have reached more than 6,000 people in Alkmaar.

        The core of our club consists of 50 regular players, including 30 boys and girls between the ages of 5 and 16. As a member of our club, you can attend training
        sessions five days a week.
        `} buttonTitle={"More about"} buttonUrl={"/about"}/>
      {/*<Block variant={"image-right"} />*/}
    </main>
  );
}

export function generateStaticParams() {
  return LANGUAGES;
}
