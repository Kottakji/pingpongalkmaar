import LANGUAGES from "@/helpers/languages";
import Membership from "@/components/Pages/Membership";
import Activities from "@/components/Pages/Activities";
import HighLevelTraining from "@/components/Pages/HighLevelTraining";
import Youth from "@/components/Pages/Youth";

export default function Page({params}) {
  return <Youth {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
