import LANGUAGES from "@/helpers/languages";
import Membership from "@/components/Pages/Membership";
import Activities from "@/components/Pages/Activities";
import HighLevelTraining from "@/components/Pages/HighLevelTraining";

export default function Page({params}) {
  return <HighLevelTraining {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
