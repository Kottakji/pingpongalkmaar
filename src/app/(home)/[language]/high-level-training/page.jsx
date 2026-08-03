import LANGUAGES from "@/helpers/languages";
import HighLevelTraining from "@/components/Pages/HighLevelTraining";

export default function Page() {
  return <HighLevelTraining/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
