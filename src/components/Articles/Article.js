export default function Article({ article }) {
  console.log("article", article);
  const properties = {
    type: article.details.type,
    title: article.details.title,
    image: article.details.image,
    body: article.body,
  };

  if (!properties.title || !properties.body) {
    return <></>;
  }

  if (properties.type === "Image right / Text left") {
    return <ImageRight {...properties} />;
  }

  if (properties.type === "Image left / Text right") {
    return <ImageLeft {...properties} />;
  }

  if (properties.type === "Centered text (no image)") {
    return <CenteredText {...properties} />;
  }

  return <></>;
}

function ImageRight({ title, body, image }) {
  return (
    <div className={"flex flex-row w-full gap-4 flex-row-reverse"}>
      <Content image={image} body={body} title={title} />
    </div>
  );
}

function ImageLeft({ title, body, image }) {
  return (
    <div className={"flex flex-row w-full gap-4"}>
      <Content image={image} body={body} title={title} />
    </div>
  );
}

function Content({ title, body, image }) {
  return (
    <>
      <div className={"w-1/2 flex flex-col justify-center p-16"}>
        <img
          src={image}
          alt={title}
          className={"w-full max-h-full max-h-[20rem] object-contain"}
        />
      </div>
      <div className={"w-1/2 p-12 flex flex-col justify-center"}>
        <h2 className={"text-black"}>{title}</h2>
        <p className={"text-gray-500 whitespace-pre-line"}>{body}</p>
      </div>
    </>
  );
}

function CenteredText({ article }) {}
