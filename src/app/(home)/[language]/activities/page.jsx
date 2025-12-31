import LANGUAGES from "@/helpers/languages";
import Activities from "@/components/Pages/Activities";

export default function Page({params}) {
  return <Activities {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
