import Table from "../Table/Table";
import SimpleTable from "../SimpleTable/SimpleTable";

export default function PayToPlay({ paytoplay }) {
  paytoplay = paytoplay.sort(
    (a, b) => (a.details.sort ?? 999) - (b.details.sort ?? 999)
  );

  let headers = [];
  let items = [];

  for (let info of paytoplay) {
    headers.push(info.details.title);
    items.push(info.details.price);
  }

  return <SimpleTable headers={headers} items={items} title={"Pay to play"} />;
}
