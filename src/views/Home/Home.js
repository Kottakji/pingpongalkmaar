import { h } from "preact";
import { useEffect } from "preact/hooks";
import Header from "../../components/Header/Header";
import { usePrerenderData } from "@preact/prerender-data-provider";
import Slideshow from "../../components/Slideshow/Slideshow";
import Articles from "../../components/Articles/Articles";
import Schedule from "../../components/Schedule/Schedule";
import Downloads from "../../components/Downloads/Downloads";
import Membership from "../../components/Membership/Membership";
import PayToPlay from "../../components/PayToPlay/PayToPlay";
import Footer from "../../components/Footer/Footer";

const Home = (props) => {
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
          <Header language={data.language} />
          <Slideshow slides={data.slideshow} />
          <Articles articles={data.edges} />
          <Schedule schedule={data.schedule} language={data.language} />
          <Downloads downloads={data.downloads} language={data.language} />
          <Membership membership={data.membership} language={data.language} />
          <PayToPlay paytoplay={data.paytoplay} language={data.language} />
          <Footer language={data.language} />
        </>
      )}
    </>
  );
};

export default Home;
