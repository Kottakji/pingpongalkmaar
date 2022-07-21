import LOGO from "../../assets/logo.png";

export default function Footer({ language }) {
  return (
    <footer className="footer p-10 bg-black">
      <div className={"flex flex-col justify-center m-2 h-full"}>
        <img src={LOGO} alt={"Logo"} className={"w-16"} />
      </div>
      <div className={"m-2"}>
        <span className="footer-title">
          {language === "nl" ? "Over Ons" : "About us"}
        </span>
        {language === "nl" && (
          <p>
            Ping Pong Alkmaar is de meest enthousiaste tafeltennisclub van
            Alkmaar en een ambitieuze sportvereniging waar iedereen welkom is.
          </p>
        )}

        {language === "en" && (
          <p>
            Ping Pong Alkmaar celebrates a wonderful three years of growth since
            the club was set up in May 2018. <br />
            The club has delivered multiple new initiatives over this time with
            its outreach programmes reaching out to over 6000 people in Alkmaar.{" "}
          </p>
        )}
      </div>
      <div className={"m-2"}>
        <span className="footer-title">Links</span>
        <a
          className="link link-hover"
          target={"_blank"}
          href={"https://twv8tr0s1ao.typeform.com/to/U7NEbIn6"}
        >
          {language === "nl" ? "Schrijf je hier in" : "Sign up here"}
        </a>
      </div>
      <div className={"m-2"}>
        <span className="footer-title">Ping Pong Alkmaar</span>
        <addres>
          Tochtwaard 18,
          <br /> 1824 EZ Alkmaar
        </addres>
        <a href={"mailto:info@pingpongalkmaar.nl"}>info@pingpongalkmaar.nl</a>
      </div>
    </footer>
  );
}
