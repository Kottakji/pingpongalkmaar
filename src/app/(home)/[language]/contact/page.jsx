import LANGUAGES from "@/helpers/languages";
import Contact from "@/components/Pages/Contact";

export default function Page({params}) {
  return <Contact {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
