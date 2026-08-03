import LANGUAGES from "@/helpers/languages";
import Activities from "@/components/Pages/Activities";

export default function Page() {
  return <Activities/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
