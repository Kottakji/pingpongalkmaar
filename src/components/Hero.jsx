"use client";

import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "@/assets/images/hero.jpeg";
import Link from "next/link";
import useTranslation from "@/hooks/useTranslation";

export default function Hero() {
  const { t } = useTranslation();

  const slides = [
    {
      image: Image,
      title: t('hero.title'),
      description: t('hero.description')
    }
  ];

  const navigation = {
    nextEl: ".hero-next",
    prevEl: ".hero-prev"
  };

  return (
    <div className="hero_style__two relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        navigation={navigation}
        modules={[Navigation]}
      >
        {slides.map((slide, index) => (
          <SwiperSlide className="hero-two-single-slide" key={index}>
            <img src={slide.image.src} alt="cv" className="z-minus absolute w-full h-full object-cover zoom-image brightness-[0.4]" />
            <div className="container">
              <div className="max-w-[850px] mx-auto text-center text-white relative lg:pb-24 pb-20 lg:pt-[220px] pt-36">
                <h1 className="xl:text-7xl lg:text-4xl md:text-2xl text-2xl font-semibold leading-1.2">
                  {slide.title}
                </h1>
                <p className="lg:text-[25px] text-2md mt-4 leading-1.7">
                  {slide.description}
                </p>
                <div className="lg:mt-10 mt-7">
                  <Link href={process.env.NEXT_PUBLIC_SIGN_UP_FORM} className="btn_primary__v1" target={"_blank"}>
                    {t("header.join.title")}
                  </Link>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}