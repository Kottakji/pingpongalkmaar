import Home from "@/components/Pages/Home";
import { getInstagramPostsCached } from "@/api/instagram";
import Block from "@/components/Block";
import formatDate from "@/helpers/formatDate";
import Instagram from "@/components/Instagram";

export const revalidate = 3600; // Every hour

export default async function Page() {
  const posts = await getInstagramPostsCached();

  return (
    <Home language={"nl"}>
      <Instagram language={"nl"} posts={posts}/>
    </Home>
  );
};