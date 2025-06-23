import LANGUAGES from "@/helpers/languages";
import Schedule from "@/components/Pages/Schedule";

export default function Page({params}) {
  return <Schedule/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
