import Article from "./Article";

export default function Articles({ articles }) {
  console.log(articles);
  return (
    <>
      {articles.map((article, index) => (
        <div key={index}>
          <Article article={article} />
        </div>
      ))}
    </>
  );
}
