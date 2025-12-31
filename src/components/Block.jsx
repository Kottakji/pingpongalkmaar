import Link from "next/link";
import clsx from "clsx";

export default function Block({ subtitle, title, description, link = null, buttonTitle = null, buttonUrl = null, variant = "image-left", image }) {
  return (
    <div className="about_style__two lg:pt-30 pt-24 relative z-1">
      <div className="container">
        <div className="grid lg:grid-cols-12 gap-base items-center">
          <div className={clsx("lg:col-span-6 text-white", variant === "image-left" && "order-1", variant === "text" && "lg:col-span-12")}>
            <h5 className="font-cursive text-2md leading-1.5">{subtitle}</h5>
            <h2 className="section-title-v2">{title}</h2>
            <p className="text-md leading-1.7 mt-5 whitespace-pre-wrap">{description}</p>
            {link && (
              <a href={link.url} target={"_blank"} className="block text-md leading-1.7 text-[#E8604C] mt-5 whitespace-pre-wrap">{link.title}</a>
            )}
            {buttonTitle && buttonUrl && (
              <div className="mt-12">
                <Link href={buttonUrl} className="btn_primary__v1">{buttonTitle}</Link>
              </div>
            )}
          </div>
          <div className={clsx("lg:col-span-6", variant === "text" && "hidden")}>
            <div className="inline-block p-base border-dark-2 border wow fadeIn" data-wow-delay="0.2s">
              <img src={image.url} alt={image.alt} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};