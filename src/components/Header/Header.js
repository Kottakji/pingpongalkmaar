export default function Header({ language }) {
  return (
    <div
      className={
        "flex flex-row justify-between w-full h-16 bg-base-content gap-2 px-4"
      }
    >
      <Links language={language} />
      <CenterText language={language} />
      <Icons />
    </div>
  );
}

function Icons() {
  return (
    <div className={"flex flex-col justify-center"}>
      <div className={"flex justify-center gap-2"}>
        <a
          href={"https://msng.link/o/?0681362917=wa"}
          target={"_blank"}
          className={"w-8 h-8"}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
          >
            <defs></defs>
            <path d="M713.5 599.9c-10.9-5.6-65.2-32.2-75.3-35.8-10.1-3.8-17.5-5.6-24.8 5.6-7.4 11.1-28.4 35.8-35 43.3-6.4 7.4-12.9 8.3-23.8 2.8-64.8-32.4-107.3-57.8-150-131.1-11.3-19.5 11.3-18.1 32.4-60.2 3.6-7.4 1.8-13.7-1-19.3-2.8-5.6-24.8-59.8-34-81.9-8.9-21.5-18.1-18.5-24.8-18.9-6.4-0.4-13.7-0.4-21.1-0.4-7.4 0-19.3 2.8-29.4 13.7-10.1 11.1-38.6 37.8-38.6 92s39.5 106.7 44.9 114.1c5.6 7.4 77.7 118.6 188.4 166.5 70 30.2 97.4 32.8 132.4 27.6 21.3-3.2 65.2-26.6 74.3-52.5 9.1-25.8 9.1-47.9 6.4-52.5-2.7-4.9-10.1-7.7-21-13z"></path>
            <path d="M925.2 338.4c-22.6-53.7-55-101.9-96.3-143.3-41.3-41.3-89.5-73.8-143.3-96.3C630.6 75.7 572.2 64 512 64h-2c-60.6 0.3-119.3 12.3-174.5 35.9-53.3 22.8-101.1 55.2-142 96.5-40.9 41.3-73 89.3-95.2 142.8-23 55.4-34.6 114.3-34.3 174.9 0.3 69.4 16.9 138.3 48 199.9v152c0 25.4 20.6 46 46 46h152.1c61.6 31.1 130.5 47.7 199.9 48h2.1c59.9 0 118-11.6 172.7-34.3 53.5-22.3 101.6-54.3 142.8-95.2 41.3-40.9 73.8-88.7 96.5-142 23.6-55.2 35.6-113.9 35.9-174.5 0.3-60.9-11.5-120-34.8-175.6z m-151.1 438C704 845.8 611 884 512 884h-1.7c-60.3-0.3-120.2-15.3-173.1-43.5l-8.4-4.5H188V695.2l-4.5-8.4C155.3 633.9 140.3 574 140 513.7c-0.4-99.7 37.7-193.3 107.6-263.8 69.8-70.5 163.1-109.5 262.8-109.9h1.7c50 0 98.5 9.7 144.2 28.9 44.6 18.7 84.6 45.6 119 80 34.3 34.3 61.3 74.4 80 119 19.4 46.2 29.1 95.2 28.9 145.8-0.6 99.6-39.7 192.9-110.1 262.7z"></path>
          </svg>
        </a>
        <a
          href={"https://www.instagram.com/pingpongalkmaar2018/"}
          target={"_blank"}
          className={"w-8 h-8"}
        >
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 378.7c-73.4 0-133.3 59.9-133.3 133.3S438.6 645.3 512 645.3 645.3 585.4 645.3 512 585.4 378.7 512 378.7zM911.8 512c0-55.2.5-109.9-2.6-165-3.1-64-17.7-120.8-64.5-167.6-46.9-46.9-103.6-61.4-167.6-64.5-55.2-3.1-109.9-2.6-165-2.6-55.2 0-109.9-.5-165 2.6-64 3.1-120.8 17.7-167.6 64.5C132.6 226.3 118.1 283 115 347c-3.1 55.2-2.6 109.9-2.6 165s-.5 109.9 2.6 165c3.1 64 17.7 120.8 64.5 167.6 46.9 46.9 103.6 61.4 167.6 64.5 55.2 3.1 109.9 2.6 165 2.6 55.2 0 109.9.5 165-2.6 64-3.1 120.8-17.7 167.6-64.5 46.9-46.9 61.4-103.6 64.5-167.6 3.2-55.1 2.6-109.8 2.6-165zM512 717.1c-113.5 0-205.1-91.6-205.1-205.1S398.5 306.9 512 306.9 717.1 398.5 717.1 512 625.5 717.1 512 717.1zm213.5-370.7c-26.5 0-47.9-21.4-47.9-47.9s21.4-47.9 47.9-47.9 47.9 21.4 47.9 47.9a47.84 47.84 0 0 1-47.9 47.9z"></path>
          </svg>
        </a>
        <a
          href="/nl"
          className={"w-8 h-8 flex flex-col justify-center text-3xl"}
        >
          🇳🇱
        </a>
        <a
          href="/en"
          className={"w-8 h-8 flex flex-col justify-center text-3xl"}
        >
          🇬🇧
        </a>
      </div>
    </div>
  );
}

function CenterText({ language }) {
  return (
    <div className={"flex flex-col justify-center"}>
      <p className={"text-sm w-full text-center hidden lg:flex"}>
        {language === "nl" && (
          <>Doe ook mee! Bel, app of mail coach Mark Smith</>
        )}
        {language === "en" && (
          <>Join us! Call, message or mail coach Mark Smith</>
        )}
      </p>
      <p className={"text-sm w-full text-center"}>
        0681362917 / info@pingpongalkmaar.nl
      </p>
    </div>
  );
}

function Links({ language }) {
  const MENU = [
    { nl: "Home", en: "Home", href: `/${language}` },
    { nl: "Nieuws", en: "News", href: `/${language}/news` },
    { nl: "Doe mee", en: "Let's play", href: `/${language}/lets-play` },
    { nl: "Bouw mee", en: "Help us grow", href: `/${language}/help-us-grow` },
    {
      nl: "Feest mee",
      en: "Let's have fun",
      href: `/${language}/lets-have-fun`,
    },
    { nl: "Scholen", en: "Schools", href: `/${language}/schools` },
    { nl: "Over ons", en: "About us", href: `/${language}/about-us` },
  ];
  return (
    <div className={"flex flex-col justify-center"}>
      <div className={"flex flex-row justify-center gap-1"}>
        <div className="tabs">
          <ul className="menu menu-horizontal bg-base-content">
            <li tabIndex="0">
              <button
                className={"btn btn-primary btn-xs rounded-xl text-sm py-0"}
              >
                Menu
              </button>
              <ul className="bg-base-content w-48 z-10">
                {MENU.map((item, index) => (
                  <li key={index}>
                    <a href={item.href}>{item[language]}</a>
                  </li>
                ))}
              </ul>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
