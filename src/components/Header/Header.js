import React, { useState, useEffect, useRef, useCallback } from "react";

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
        {language === "nl" && <>Doe ook mee! Mail ons op</>}
        {language === "en" && <>Join us! Mail us at</>}
      </p>
      <p className={"text-sm w-full text-center hidden sm:flex"}>
        info@pingpongalkmaar.nl
      </p>
    </div>
  );
}

function Links({ language }) {
  const [isVisible, setIsVisible] = useState(false);

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
                onClick={() => setIsVisible(!isVisible)}
              >
                Menu
              </button>
              <ul
                className={`bg-base-content w-48 z-10 ${isVisible && "flex"}`}
              >
                {MENU.map((item, index) => (
                  <li key={index} className={`${isVisible && "flex"}`}>
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
