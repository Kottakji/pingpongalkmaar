import LANGUAGES from "@/helpers/languages";
import HouseRules from "@/components/Pages/HouseRules";

export default function Page({params}) {
  return <HouseRules {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
