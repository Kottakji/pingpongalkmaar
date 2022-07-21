export default function JoinUs({ language }) {
  const title = language === "nl" ? "Doe mee" : "Join us";

  return (
    <div className={"flex flex-col gap-2 my-12 w-full"}>
      <div className={"flex justify-center"}>
        <h2 className={"text-black"}>{title}</h2>
      </div>
      <div className={"flex justify-center mx-24"}>
        <p className={"text-black text-center"}>
          {language === "nl" && (
            <>
              Gebruik het
              <a
                href={"https://twv8tr0s1ao.typeform.com/to/U7NEbIn6"}
                target={"_blank"}
                className={"link mx-1"}
              >
                inschrijf formulier
              </a>
              om je aan te melden als je lid wilt worden na je 3 gratis
              proeflessen. <br />
              Je hoeft je niet aan te melden voor een proefles.
            </>
          )}
          {language === "en" && (
            <>
              Use our
              <a
                href={"https://twv8tr0s1ao.typeform.com/to/U7NEbIn6"}
                target={"_blank"}
                className={"link mx-1"}
              >
                sign up form
              </a>
              to join after our first 3 free lessons. <br />
              You don't need to sign up to for a free lesson.
            </>
          )}
        </p>
      </div>
    </div>
  );
}
