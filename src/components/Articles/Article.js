export default function Article({ article }) {
  const properties = {
    type: article.details.type,
    title: article.details.title,
    image: article.details.image,
    body: article.preview,
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
    <div className={"flex flex-row w-full"}>
      <div className={"w-1/2 p-12"}>
        <h2 className={"text-black"}>{title}</h2>
        <p className={"text-gray-500"}>{body}</p>
      </div>
      <div className={"w-1/2"}>
        <img src={image} alt={title} />
      </div>
    </div>
  );
}

function NewsRightAndImageLeft({ article }) {}

function CenteredText({ article }) {}

function Text({ article }) {}
