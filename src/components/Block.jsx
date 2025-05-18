import Training from "@/assets/images/training.jpg";
import Link from "next/link";
import clsx from "clsx";

export default function Block ({variant = "image-left"}) {
  return (
    <div className="about_style__two lg:pt-30 pt-24 relative z-1">
      <div className="absolute top-[5%] left-[1%] max-w-[9%] z-minus lg:inline-block hidden">
        <img src="./assets/images/illustration/bird-illustration.png" alt="leaf" />
      </div>
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-base items-center">
          <div className={clsx("lg:col-span-6 text-white", variant === "image-left" && "order-1")}>
            <h5 className="font-cursive text-2md leading-1.5">Ping Pong Alkmaar</h5>
            <h2 className="section-title-v2">Recreational & performance</h2>
            <p className="text-md leading-1.7 mt-5">

              Ping Pong Alkmaar is the most enthusiastic table tennis club in Alkmaar and an ambitious sports association where everyone is welcome.

              Since its founding in May 2018, we have grown tremendously. The club has launched several new initiatives, and with our programs that reach out into the neighborhood,
              we have reached more than 6,000 people in Alkmaar.

              The core of our club consists of 50 regular players, including 30 boys and girls between the ages of 5 and 16. As a member of our club, you can attend training
              sessions five days a week.
            </p>
            <div className="mt-12">
              <Link href="/about" className="btn_primary__v1">More About</Link>
            </div>
          </div>
          <div className="lg:col-span-6">
            <div className="inline-block p-base border-dark-2 border wow fadeIn" data-wow-delay="0.2s">
              <img src={Training.src} alt="Ping Pong Alkmaar training session" />
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};