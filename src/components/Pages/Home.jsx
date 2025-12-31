"use client";

import Hero from "@/components/Hero";
import Block from "@/components/Block";
import useTranslation from "@/hooks/useTranslation";

export default function Home({language, children}) {
  const { t } = useTranslation();

  return (
    <main className="bg-[#121316]">
      <Hero />

      {children}

      {t("home.blocks").map((block, index) => (
        <Block
          key={index}
          variant={block.variant}
          subtitle={block.subtitle}
          title={block.title}
          description={block.description}
          buttonUrl={block?.button?.url}
          buttonTitle={block?.button?.title}
          image={block.image}
        />
      ))}

    </main>
  );
};