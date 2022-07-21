export default function SimpleTable({ title, headers, items }) {
  return (
    <div className="flex justify-center w-full my-12">
      <div className={"flex flex-col justify-center gap-4"}>
        <h2 className={"text-black text-center"}>{title}</h2>
        <table className="table">
          {headers && (
            <thead>
              <tr>
                {headers.map((header) => (
                  <th className={"text-black bg-gray-50 border"}>{header}</th>
                ))}
              </tr>
            </thead>
          )}
          <tbody>
            <tr>
              {items.map((item) => (
                <td className={"text-black bg-gray-50 border"}>{item}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
