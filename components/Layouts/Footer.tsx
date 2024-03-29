import dayjs from "dayjs";
import React from "react";

const WEBSITE_URL = "/";

const Footer = () => {
  return (
    <div>
      <footer>
        <div className="px-4 lg:px-8 w-full flex flex-col justify-center items-center  mx-auto bg-customPink-2">
          <nav className="w-full pb-4 pt-5 lg:pb-0">
            <div className="flex lg:flex-row flex-col justify-between">
              <div className="w-full overflow-hidden md:my-px md:px-px md:w-1/2 lg:mr-20 lg:w-7/12 pb-6">
                <div className="leading-10 uppercase text-customRed-1 text-sm">
                  About Us
                </div>
                <ul className="nav navbar-nav flex flex-col space-y-2 text-customGray-3 ">
                  <li className="text-sm text-justify">
                    Send &amp; Popular is a global web site of Indian Sales,
                    Thangadh. We are suppliers of high quality sanitary ware
                    from India. Located at Thangadh, Gujarat, we are placed at
                    the most important place for affordable sanitary ware. We
                    have been inthis sector since past 25 years and have
                    established ourselves as dependable supplier of sanitary
                    ware.
                  </li>
                  <li className="text-sm">
                    As traders of sanitary ware we pride ourselves to be one of
                    the leading buyer as well as seller of Ceramic goods in the
                    region.
                  </li>
                </ul>
              </div>

              <div className="w-full overflow-hidden md:my-px md:px-px md:w-1/2 lg:pr-2 lg:w-5/12 pb-6">
                <div className="leading-10 uppercase text-customRed-1 text-sm">
                  Useful Links
                </div>
                <ul className="nav navbar-nav flex flex-col space-y-2 text-customGray-3 ">
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL}`}
                    >
                      Home
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL}about-us`}
                    >
                      About Us
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL}products`}
                    >
                      Products
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL}production`}
                    >
                      Production
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL}quality`}
                    >
                      Quality
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL}markets`}
                    >
                      Markets
                    </a>
                  </li>
                  <li className="text-sm">
                    <a
                      className="hover:text-customGray-1 text-sm"
                      href={`${WEBSITE_URL + "#contact-us"}`}
                    >
                      Contacts
                    </a>
                  </li>
                </ul>
              </div>

              <div className="w-full overflow-hidden md:my-px md:px-px md:w-1/2 lg:pr-2  pb-6">
                <div className="leading-10 uppercase text-customRed-1 text-sm">
                  Get in Touch
                </div>
                <ul className="nav navbar-nav flex flex-col space-y-2 text-customGray-3 ">
                  <li className="text-sm font-bold">Popular Ceramic</li>
                  <li className="text-sm">
                    Tarnetar Road,Near Abhepar G.E.B, sub-station, Abhepar Road
                    <br />
                    Bye pass road, Thangadh - 363 530,
                    <br />
                    Dist. Surendranagar, Gujarat. <br />
                    <a href="mailto:popularcera@yahoo.com">
                      popularcera@yahoo.com
                    </a>
                    <br />
                    <a href="tel:+919825493614">+91 98254 93614</a>
                  </li>
                  <li className="text-sm font-bold">Prem Refactories</li>
                  <li className="text-sm">
                    Near City Railway crossing
                    <br />
                    Thangadh - 363 530,
                    <br />
                    Dist. Surendranagar, Gujarat. <br />
                    <a href="mailto:premrefactories@gmail.com">
                      premrefactories@gmail.com
                    </a>
                    <br />
                    <a href="tel:+919825493614">+91 98254 93614</a>
                  </li>
                  <li className="text-sm">
                    <a href="tel:+919913008614">+91 99130 08614</a>
                    &nbsp;&nbsp;&nbsp;
                    <a href="tel:+917096837814">+91 70968 37814</a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
        </div>
        <div className="w-full flex items-center justify-center bg-customPink-2">
          <p className="text-center text-customRed-3 text-xs mr-5 my-5 leading-6">
            Copyright {dayjs().format("YYYY")} SEND &amp; POPULAR All Rights
            Reserved
            <br /> Designed by{" "}
            <span className="font-bold uppercase">Backline Solution</span>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
