import Home from "@/components/Pages/Home";

export default async function Page({ params }) {
  const { language } = await params;

  return <Home language={language} />;
}
