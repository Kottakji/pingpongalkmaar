import LANGUAGES from "@/helpers/languages";
import Membership from "@/components/Pages/Membership";
import Activities from "@/components/Pages/Activities";

export default function Page({params}) {
  return <Activities {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
