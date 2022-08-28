export default function Downloads({ language, downloads, only = null }) {
  if (only) {
    downloads = downloads.filter((d) => only === d.details.type);
  }
  console.log("downloads", downloads);

  const getTitle = (download) => {
    return download.details.title;
  };

  return (
    <div className="flex justify-center w-full my-12">
      <div className={"flex flex-col justify-center gap-4"}>
        <h2 className={"text-black text-center"}>Downloads</h2>
        {downloads.map((download) => (
          <p className={"text-center"}>
            <a
              href={`${download.details.file}`}
              target={"_blank"}
              className={"btn gap-4"}
            >
              {getTitle(download)}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="feather feather-download"
              >
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </a>
          </p>
        ))}
      </div>
    </div>
  );
}
