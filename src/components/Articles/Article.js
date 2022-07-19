export default function Article({ article }) {
  console.log("article", article);
  const properties = {
    type: article.details.type,
    title: article.details.title,
    image: article.details.image,
    body: article.body,
  };

  if (article.details.type === "news_left_and_image_right") {
    return <NewsLeftAndImageRight {...properties} />;
  }

  if (article.details.type === "news_right_and_image_left") {
    return <NewsRightAndImageLeft {...properties} />;
  }

  if (article.details.type === "centered_text") {
    return <NewsRightAndImageLeft {...properties} />;
  }

  if (article.details.type === "text") {
    return <Text {...properties} />;
  }

  return <></>;
}

function NewsLeftAndImageRight({ title, body, image }) {
  return (
    <div className={"flex flex-row w-full gap-4"}>
      <div className={"w-1/2 p-12"}>
        <h2 className={"text-black"}>{title}</h2>
        <p className={"text-gray-500 whitespace-pre-line"}>{body}</p>
      </div>
      <div className={"w-1/2 flex flex-col justify-center p-16"}>
        <img
          src={image}
          alt={title}
          className={"w-full max-h-full object-contain"}
        />
      </div>
    </div>
  );
}

function NewsRightAndImageLeft({ title, body, image }) {
  return (
    <div className={"flex flex-row w-full gap-4"}>
      <div className={"w-1/2 p-12"}>
        <h2 className={"text-black"}>{title}</h2>
        <p className={"text-gray-500 whitespace-pre-line"}>{body}</p>
      </div>
      <div className={"w-1/2 flex flex-col justify-center p-16"}>
        <img
          src={image}
          alt={title}
          className={"w-full max-h-full object-contain"}
        />
      </div>
    </div>
  );
}
function CenteredText({ article }) {}

function Text({ article }) {}
