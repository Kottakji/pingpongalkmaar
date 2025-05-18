import Hero from "@/components/Hero";
import { Metadata } from "next";
import Block from "@/components/Block";

export const metadata: Metadata = {
  title: "Home Dark | Arid - Travel & Tourism HTML/Tailwind CSS Template",
  description: "Welcome, Arid - Travel & Tourism HTML/Tailwind CSS Template",
  keywords: ["tour", "travel", "booking", "rental", "nextJs", "tailwind", "trip", "beach", "holidy", "cruise", "vacation"]
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