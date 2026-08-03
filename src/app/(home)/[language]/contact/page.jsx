import LANGUAGES from "@/helpers/languages";
import Contact from "@/components/Pages/Contact";

export default function Page() {
  return <Contact/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
