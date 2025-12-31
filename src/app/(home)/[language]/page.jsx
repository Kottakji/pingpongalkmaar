import LANGUAGES from "@/helpers/languages";
import Home from "@/components/Pages/Home";
import { getInstagramPostsCached } from "@/api/instagram";
import Instagram from "@/components/Instagram";

export const revalidate = 3600; // Every hour

export default async function Page({ params }) {
  const { language } = await params;
  const posts = await getInstagramPostsCached();

  return (<Home language={language}>
      <Instagram language={language} posts={posts}/>
    </Home>
  );
}

export function generateStaticParams() {
  return LANGUAGES;
}
