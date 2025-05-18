import FooterDataOne from "@/constant/common/FooterDataOne";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="footer_style__two lg:pt-[60px] pt-11 bg-cover bg-center bg-no-repeat"
            style={{ background: `url("${FooterDataOne?.bgImg2}")` }}
    >
      <div className="max-w-7xl mx-auto px-3">
        <div className="lg:grid grid-cols-2 pb-20 lg:pb-12">
          <div className="flex justify-center lg:space-x-5 space-x-3 flex-wrap md:flex-nowrap">
            <div className="md:basis-1/3 mt-base">
              <div className="flex justify-between lg:mb-base mb-5">
                <h3 className="text-white lg:text-[25px] text-2md font-semibold lg:leading-1.35">Links</h3>
              </div>
              <ul className="footer-link-list-v2">
                <li><Link href="/package-details-2" className="footer-nav-link-v2">Training schedule</Link></li>
                <li><Link href="/package-details-2" className="footer-nav-link-v2">Sign up here</Link></li>
                <li><Link href="/package-details-2" className="footer-nav-link-v2">Contact</Link></li>
              </ul>
            </div>
          </div>

          <div className="flex justify-center">
            <div className="flex-grow max-w-[341px] mt-base lg:col-span-7 md:col-span-6">
              <h3 className="text-white lg:text-[25px] text-2md  font-semibold leading-1.35 mb-base">Contact</h3>
              <ul>
                <li className="mt-5 first:mt-0 flex items-center text-stock-1 hover:text-primary-1 duration-200">
                  <div className="text-primary-1 shrink-0">
                    <svg width={20} height={20} viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M9.9999 11.1917C11.4358 11.1917 12.5999 10.0276 12.5999 8.5917C12.5999 7.15576 11.4358 5.9917 9.9999 5.9917C8.56396 5.9917 7.3999 7.15576 7.3999 8.5917C7.3999 10.0276 8.56396 11.1917 9.9999 11.1917Z"
                        stroke="#E8604C" strokeWidth="1.5" />
                      <path
                        d="M3.01675 7.07484C4.65842 -0.141827 15.3501 -0.133494 16.9834 7.08317C17.9417 11.3165 15.3084 14.8998 13.0001 17.1165C11.3251 18.7332 8.67508 18.7332 6.99175 17.1165C4.69175 14.8998 2.05842 11.3082 3.01675 7.07484Z"
                        stroke="currentColor" strokeWidth="1.5" />
                    </svg>
                  </div>
                  <Link href="#" className="leading-1.5 pl-[10px] lg:text-base text-sm">3891

                    Tochtwaard 20,<br />
                    1824 EZ Alkmaar<br />

                    <a href={"mailto:info@pingpongalkmaar.nl"}>info@pingpongalkmaar.nl</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="py-base border-t border-white border-opacity-10">
          <div className="flex md:justify-between flex-wrap text-dark-5 lg:text-base text-sm gap-6 text-center lg:text-start justify-center">
            <p className="order-2 lg:order-1">{FooterDataOne?.copyrightText}</p>
            <div className="flex flex-wrap items-center order-1 lg:order-2">
              <p>We Accept: </p>
              <div className="ml-[15px]"><img src="/assets/images/others/payment-cards.png" alt="cards" /></div>
            </div>
          </div>
        </div>
      </div>
    </footer>

  );
}