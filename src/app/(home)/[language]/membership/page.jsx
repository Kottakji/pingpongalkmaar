import LANGUAGES from "@/helpers/languages";
import Membership from "@/components/Pages/Membership";

export default function Page({params}) {
  return <Membership/>
}

export function generateStaticParams() {
  return LANGUAGES;
}
