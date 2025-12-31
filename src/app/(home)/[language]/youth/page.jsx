import LANGUAGES from "@/helpers/languages";
import Youth from "@/components/Pages/Youth";

export default function Page({params}) {
  return <Youth {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
