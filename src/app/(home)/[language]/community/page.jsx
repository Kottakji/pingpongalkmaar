import LANGUAGES from "@/helpers/languages";
import Membership from "@/components/Pages/Membership";
import Activities from "@/components/Pages/Activities";
import Community from "@/components/Pages/Community";

export default function Page({params}) {
  return <Community {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
