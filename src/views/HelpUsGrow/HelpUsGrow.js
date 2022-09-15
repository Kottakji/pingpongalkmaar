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

export default function HelpUsGrow(props) {
  const [data, isLoading] = usePrerenderData(props);
  console.log("data", data);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <Header language={data.language} />
          <Slideshow slides={data.slideshow} />
          <Articles articles={data.edges} />
          <Downloads
            downloads={data.downloads}
            language={data.language}
            only={"help_us_grow"}
          />
          <Footer language={data.language} />
        </>
      )}
    </>
  );
}
