import Hero from "@/components/Hero";
import { Metadata } from "next";
import Block from "@/components/Block";

export const metadata = {
  title: "Ping Pong Alkmaar",
  description: "A social community",
  keywords: ["Ping Pong", "Tabletennis", "Community", "Alkmaar"]
};

export default function Page() {
  return (
    <main className="bg-[#121316]">
      <Hero />
      <Block variant={"image-left"} />
      <Block variant={"image-right"} />
    </main>
  );
};