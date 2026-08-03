"use client";

import { useEffect, useState } from "react";
import Block from "@/components/Block";
import useTranslation from "@/hooks/useTranslation";

// The new season schedule takes effect on this date. Before then, visitors see
// the current schedule plus an announcement; from this date on, the new one.
const NEW_SCHEDULE_START = new Date("2026-08-17T00:00:00");

export default function Schedule() {
  const { t } = useTranslation();
  const [showNewSchedule, setShowNewSchedule] = useState(false);

  useEffect(() => {
    setShowNewSchedule(new Date() >= NEW_SCHEDULE_START);
  }, []);

  const blocks = showNewSchedule
    ? t("schedule.blocksNew")
    : [t("schedule.announcement"), ...t("schedule.blocksOld")];

  return (
    <main className="bg-[#121316] py-24">
      {blocks.map((block, index) => (
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
}
