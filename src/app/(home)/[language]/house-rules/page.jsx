import LANGUAGES from "@/helpers/languages";
import HouseRules from "@/components/Pages/HouseRules";

export default function Page() {
  return <HouseRules/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
