import LANGUAGES from "@/helpers/languages";
import Home from "@/components/Pages/Home";

export default function Page({params}) {
  return <Home {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
