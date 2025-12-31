import LANGUAGES from "@/helpers/languages";
import HighLevelTraining from "@/components/Pages/HighLevelTraining";

export default function Page({params}) {
  return <HighLevelTraining {...params}/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
