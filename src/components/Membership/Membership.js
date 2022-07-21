import Table from "../Table/Table";

export default function Membership({ language, membership }) {
  const title = language === "nl" ? "Lidmaatschap" : "Membership";
  let headers = [
    language === "nl" ? "Type lid" : "Membership type",
    language === "nl"
      ? "Aantal wekelijkse sessies"
      : "Amount of weekly sessions",
    language === "nl" ? "Per 6 maanden" : "Per 6 months",
    language === "nl" ? "Per jaar" : "Per year",
  ];
  let items = [];

  for (let info of membership) {
    items.push({
      title: info.details.title,
      weekly_sessions: info.details.weekly_sessions,
      price_per_6_months: info.details.price_per_6_months,
      price_per_year: info.details.price_per_year,
    });
  }

  return (
    <Table
      headers={headers}
      items={items}
      title={title}
      keys={[
        "title",
        "weekly_sessions",
        "price_per_6_months",
        "price_per_year",
      ]}
    />
  );
}
