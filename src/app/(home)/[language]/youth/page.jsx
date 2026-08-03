import LANGUAGES from "@/helpers/languages";
import Youth from "@/components/Pages/Youth";

export default function Page() {
  return <Youth/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
