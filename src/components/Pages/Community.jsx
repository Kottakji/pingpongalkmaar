"use client";

import Hero from "@/components/Hero";
import Block from "@/components/Block";
import useTranslation from "@/hooks/useTranslation";

export default function Community() {
  const { t } = useTranslation();

  return (
    <main className="bg-[#121316] py-24">
      {t("community.blocks").map((block, index) => (
        <Block
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
}