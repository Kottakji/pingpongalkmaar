export default function Article({ article }) {
  console.log("article", article);
  const properties = {
    type: article.details.type,
    title: article.details.title,
    image: article.details.image,
    body: article.body,
  };

  if (!properties.title || !properties.body) {
    console.log("Empty properties", properties);
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

  console.log(properties.type);

  return <></>;
}

function ImageRight({ title, body, image }) {
  return (
    <div className={"flex flex-col md:flex-row-reverse w-full gap-4"}>
      <Content image={image} body={body} title={title} />
    </div>
  );
}

function ImageLeft({ title, body, image }) {
  return (
    <div className={"flex flex-col md:flex-row w-full gap-4"}>
      <Content image={image} body={body} title={title} />
    </div>
  );
}

function Content({ title, body, image }) {
  return (
    <>
      <div className={"flex flex-col justify-center p-16"}>
        <img
          src={image}
          alt={title}
          className={"max-w-[20rem] max-h-full max-h-[20rem] object-contain"}
        />
      </div>
      <div className={"p-12 flex flex-col justify-center flex-wrap"}>
        <h2 className={"text-black"}>{title}</h2>
        <p className={"text-gray-500 whitespace-pre-line"}>{body}</p>
      </div>
    </>
  );
}

function CenteredText({ title, body }) {
  return (
    <>
      <div
        className={"p-12 flex flex-col justify-center flex-wrap text-center"}
      >
        <h2 className={"text-black"}>{title}</h2>
        <p className={"text-gray-500 whitespace-pre-line"}>{body}</p>
      </div>
    </>
  );
}
