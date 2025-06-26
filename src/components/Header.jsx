"use client";

import Image from "next/image";
import Link from "next/link";
import { Fragment, useEffect, useRef, useState } from "react";
import useTranslation from "@/hooks/useTranslation";
import Logo from "@/assets/images/logo.png";

export default function Header() {
  const { t } = useTranslation();

  const NAVIGATION = t("header.navigation");
  const JOIN = t("header.join");

  const [toggle, setToggle] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 50) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`header-style herder-variant-two
           ${isSticky ? "sticky" : ""} 
           `}>
      <div className="desktop-menu max-w-7xl mx-auto justify-between items-center xl:flex hidden">

        <div className="main-menu flex items-center ">
          <Link href="/" className="shrink-0">
            <Image
              alt="logo"
              width="100"
              height="70"
              // layout="responsive"
              className="max-w-[58px]"
              src={Logo.src}
              priority
            />
          </Link>
          <div className="main-menu uppercase ml-4">
            <ul className="flex items-center nav-list">

              {NAVIGATION.map(({ title, url = "#", children = [] }, index) => (
                <Fragment key={index}>
                  {children.length > 0 ? (
                    <li className="group/step-one">
                      <Link href="#" className="nav-link has-dropdown">{title}</Link>
                      <ul className="nav-dropdown">
                        {children.map(({ url, title }, index) => (
                          <li key={index}><Link href={url}>{title}</Link></li>
                        ))}
                      </ul>
                    </li>
                  ) : (
                    <li>
                      <Link href={url} className="nav-link">{title}</Link>
                    </li>
                  )}
                </Fragment>
              ))}
            </ul>
          </div>
        </div>
        <div className="shrink-0">
          <Link href={process.env.NEXT_PUBLIC_SIGN_UP_FORM} className="btn_primary__v1 outlined" target={"_blank"}>
            {JOIN.title}
          </Link>
        </div>
      </div>

      {/* mobile menu */
      }
      <div className="mobile-menu xl:hidden flex justify-between items-center relative">
        <Link href="/" className="shrink-0 max-w-[50px]">
          <Image
            alt="logo"
            width="100"
            height="70"
            src={Logo.src}
          />
        </Link>
        <div className="space-x-4 flex items-center">
          <button
            className={`hamburger ${toggle ? "hum-active" : ""}`}
            id="hamburger"
            onClick={() => setToggle(!toggle)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
        <div id="mobile-menu" className={`mobil-menu ${toggle ? "mm-active" : ""}`}>
          <ul>
            {NAVIGATION.map(({ title, url = "#", children = [] }, index) => (
              <Fragment key={index}>
                {children.length > 0 ? (
                  <li className="group/step-one">
                    <Link href="#" className="nav-link nav-link-sm has-dropdown ">{title}</Link>
                    <ul className="ml-3 space-y-4 nav-link nav-link-sm">
                      {children.map(({ url, title }, index) => (
                        <li key={index}><Link href={url}>{title}</Link></li>
                      ))}
                    </ul>
                  </li>
                ) : (
                  <li key={index}>
                    <Link href={url} className="nav-link nav-link-sm">{title}</Link>
                  </li>
                )}
              </Fragment>
            ))}

          </ul>
        </div>
      </div>
    </header>
  );
};