import Block from "@/components/Block";
import formatDate from "@/helpers/formatDate";

export default function Instagram({ language, posts }) {
  // Nothing for now
  if (language !== "nl") return;

  return (
    <>
      {posts.splice(0, 5).map((post, index) => (
        <Block key={index}
               title={`Nieuws ${formatDate(post.createdAt)}`}
               description={post.caption}
               link={{
                 url: post.url,
                 title: "Instagram"
               }}
               image={{
                 url: `data:image/jpeg;base64,${post.image}`,
                 alt: post.alt
               }}
               variant={index % 2 ? "image-left" : "image-right"}
        />
      ))}
    </>
  );
}