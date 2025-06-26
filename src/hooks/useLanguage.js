import { usePathname } from "next/navigation";

export default function useLanguage() {
  const pathname = usePathname();

  // Exception for the home page
  if (["", "/"].includes(pathname)) {
    return {
      language: "nl",
      nl: "/nl/",
      en: "/en/",
    }
  }

  return {
    language: pathname.startsWith("/nl") ? 'nl' : 'en',
    nl: pathname.replace("/en", "/nl"),
    en: pathname.replace("/nl", "/en")
  };
}