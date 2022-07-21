import LOGO from "../../assets/logo.png";

export default function Footer({ language }) {
  return (
    <footer className="footer p-10 bg-black">
      <div className={"flex flex-col justify-center m-2 h-full"}>
        <img src={LOGO} alt={"Logo"} className={"w-16"} />
      </div>
      <div className={"m-2"}>
        <span className="footer-title">Over Ons</span>
        <p>
          Ping Pong Alkmaar is de meest enthousiaste tafeltennisclub van Alkmaar
          en een ambitieuze sportvereniging waar iedereen welkom is
        </p>
      </div>
      <div className={"m-2"}>
        <span className="footer-title">Links</span>
        <a className="link link-hover">Schrijf je hier in</a>
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
