import { h } from "preact";
import { useEffect } from "preact/hooks";
import Header from "../../components/Header/Header";
import { usePrerenderData } from "@preact/prerender-data-provider";
import Slideshow from "../../components/Slideshow/Slideshow";
import Articles from "../../components/Articles/Articles";

const Home = (props) => {
  console.log("props", props);
  const [data, isLoading] = usePrerenderData(props);
  console.log("data", data);

  /**
   * Netlify CMS's accept invite link land on home page.
   * This redirection takes it to the right place(/admin).
   */

  useEffect(() => {
    if (
      window !== undefined &&
      window.location.href.includes("#invite_token")
    ) {
      const { href } = window.location;
      window.location.href = `${href.substring(
        0,
        href.indexOf("#")
      )}admin${href.substring(href.indexOf("#"))}`;
    }
  }, []);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <Header />
          <Slideshow slides={data.slideshow} />
          <Articles articles={data.edges} />
        </>
      )}
    </>
  );
};

export default Home;
