import Table from "../Table/Table";
import moment from "moment";

const SELECTABLE_DATES = [
  "maandag",
  "dinsdag",
  "woensdag",
  "donderdag",
  "vrijdag",
  "zaterdag",
  "zondag",
];

const EN_DATES = {
  maandag: "monday",
  dinsdag: "tuesday",
  woensdag: "wednesday",
  donderdag: "thursday",
  vrijdag: "friday",
  zaterdag: "saturday",
  zondag: "sunday",
};

export default function Schedule({ language, schedule }) {
  let title =
    language === "nl" ? "Weekschema lessen" : "Weekly session schedule";

  let data = schedule.map((s) => {
    return {
      title: s.details.title,
      day: s.details.day,
      time: `${moment(s.details.from).format("HH:mm")} - ${moment(
        s.details.until
      ).format("HH:mm")}`,
    };
  });

  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  };

  // Format per day, order by day + time
  let info = [];
  for (let date of SELECTABLE_DATES) {
    info.push(
      data
        .filter((item) => item.day.toLowerCase().trim() === date)
        .sort((item) => item.time)
        .map((item, index) =>
          index === 0
            ? {
                title: item.title,
                day: capitalizeFirstLetter(
                  language === "nl" ? item.day : EN_DATES[item.day]
                ),
                time: item.time,
              }
            : {
                title: item.title,
                day: "",
                time: item.time,
              }
        )
    );
  }

  info = info.flat();

  if (!info.length) {
    return <></>;
  }

  return <Table title={title} keys={["day", "title", "time"]} items={info} />;
}
