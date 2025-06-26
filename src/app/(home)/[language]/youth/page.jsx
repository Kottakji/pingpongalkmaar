import LANGUAGES from "@/helpers/languages";
import Membership from "@/components/Pages/Membership";
import Activities from "@/components/Pages/Activities";
import Community from "@/components/Pages/Community";
import Youth from "@/components/Pages/Youth";

export default function Page({params}) {
  return <Youth {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
