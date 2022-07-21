export default function Table({ title, items, keys, headers = null }) {
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
            {items.map((item) => (
              <tr>
                {keys.map((key) => (
                  <td className={"text-black bg-gray-50 border"}>
                    {item[key]}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
