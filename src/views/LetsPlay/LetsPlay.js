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
import JoinUs from "../../components/JoinUs/JoinUs";

export default function LetsPlay(props) {
  const [data, isLoading] = usePrerenderData(props);

  return (
    <>
      {isLoading && <p>Loading...</p>}
      {!isLoading && (
        <>
          <Header language={data.language} />
          <Slideshow slides={data.slideshow} />
          <JoinUs language={data.language} />
          <Articles articles={data.edges} />
          <PayToPlay paytoplay={data.paytoplay} language={data.language} />
          <Membership membership={data.membership} language={data.language} />
          <JoinUs language={data.language} />
          <Footer language={data.language} />
        </>
      )}
    </>
  );
}
