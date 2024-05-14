import { NavLink, Outlet } from "react-router-dom";

// icons 
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
  IoMdRepeat
} from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import {
  FaCarCrash,
  FaShoppingCart,
  FaLinkedin,
  FaLinkedinIn,
  FaApple
  // FaFacebookF,
  // FaYoutube
} from "react-icons/fa";
import {
  MdDashboard,
  MdOutlineFireplace,
  MdPhoneInTalk,
  MdOutlineMarkEmailRead,
  MdOutlineMediation
} from "react-icons/md";
import { FaXTwitter } from "react-icons/fa6";

// components
import Header from "../components/Header";
import FinalHeader from "../components/FinalHeader";
import axios from "axios";
import { useEffect, useState } from "react";
import ChatBots from "./ChatBots";
// main
const FinalHome = () => {
  const [country, setCountry] = useState("");
  const ipHandler = async () => {
    const ip = await axios.get(
      "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
    );
    setCountry(ip?.data?.country_name);

    // const cc = await axios.get("https://restcountries.eu/rest/v2/all");
    console.log(ip, "cc");
  };

  useEffect(() => {
    ipHandler();
  }, []);

  return (
    <div className="w-screen h-screen pt-[12.5vh] font-workSans relative">
      {/* <Header /> */}
      <FinalHeader />
      <div className="h-[87.5vh] overflow-y-auto">
        <Outlet />
        <ChatBots />
        {/* footer container */}
        <div className="bg-black text-gray-300">
          {/* footer top */}
          <div className="px-[1%] sm:px-[5%] py-3 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            {/* top right */}
            <div className="w-[100%] md:w-[70%]">
              {/* menu list */}
              <div className="py-1 md:py-[7%] flex items-start justify-between gap-16 text-[1rem]">
                {/* about us */}
                <div>
                  <header className=" mb-5 py-1 border-b-[2px] border-gray-300 font-[600] text-[1.25rem]">
                    <h3>About Us</h3>
                  </header>
                  <ul className="flex flex-col gap-y-[10px] font-medium">
                    <li>
                      <NavLink className={"hover:underline"}>Company</NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        Vision & Mission
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        Board Members
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        Our Branch Office
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        Office Staffs
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        Social Responses
                      </NavLink>
                    </li>
                  </ul>
                </div>
                {/* partners */}
                <div>
                  <div>
                    <header className=" mb-5 py-1 border-b-[2px] border-gray-300 font-[600] text-[1.25rem]">
                      <h3>Support</h3>
                    </header>
                    <ul className="flex flex-col gap-y-[10px] font-medium">
                      <li>
                        <NavLink className={"hover:underline"}>
                          Customer Care
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={"hover:underline"}>
                          Join Our Attorney Network
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                  <div>
                    <header className=" my-3 py-1 border-b-[2px] border-gray-300 font-[600] text-[1.25rem]">
                      <h3>Learn More</h3>
                    </header>
                    <ul className="flex flex-col gap-y-[10px] font-medium">
                      <li>
                        <NavLink className={"hover:underline"}>
                          Legal Help Article
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={"hover:underline"}>
                          Legal Forms
                        </NavLink>
                      </li>
                      <li>
                        <NavLink className={"hover:underline"}>Library</NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                {/* locations */}
                <div>
                  <header className=" mb-5 py-1 border-b-[2px] border-gray-300 font-[600] text-[1.25rem]">
                    <h3>Locations</h3>
                  </header>
                  <ul className="flex flex-col gap-y-[10px] font-medium">
                    <li>
                      <NavLink className={"hover:underline"}>Ethiopia</NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>China</NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        United Arab Emirates
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>
                        United State of America
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>Egypt</NavLink>
                    </li>
                    <li>
                      <NavLink className={"hover:underline"}>Kenya</NavLink>
                    </li>
                  </ul>
                </div>
              </div>
              {/* countries */}
              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Ethiopia
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/1024px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    China
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://cdn.britannica.com/85/185-004-1EA59040/Flag-Egypt.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Egypt
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="data:image/png;base64,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"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Kenya
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/255px-Flag_of_the_United_Arab_Emirates.svg.png"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    UAE
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    USA
                  </h3>
                </div>
              </div>
              <footer className="mt-7 flex items-center justify-between md:font-medium py-3  md:text-[1rem]">
                <div>
                  <span>2024 Copyright</span>
                </div>
                <div>
                  <span>Terms and Conditions | Privacy Policy</span>
                </div>
              </footer>
            </div>

            {/* bottom left */}
            <div className="w-[90%] sm:w-[65%] self-center md:w-[45%] md:self-start  md:mt-12">
              {/* header */}
              <header className="flex items-center gap-[15%] px-[5%] py-2 text-white rounded-sm bg-yellow-600">
                <h3 className="text-2xl font-bold">Who we are?</h3>
              </header>
              {/* content */}
              <div className="my-5 text-[1rem]">
                <p>
                  Makuta Law Firm has launched a world class app, which connects
                  clients and lawyers internationally, to meet various legal
                  services. The app is available and will connect clients with
                  lawyers in real-time according to their needs, 24 hours a day,
                  internationally.
                </p>
                <div className="w-full flex items-center justify-center my-10">
                  <div className="w-[45%] h-[2px] bg-gray-400 flex items-center justify-center relative">
                    <div className="absolute w-[25%] h-[12px] rounded-full bg-inherit"></div>
                  </div>
                </div>
                <div>
                  <div className="flex items-center justify-center gap-5 text-2xl">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaYoutube />
                    <FaLinkedin />
                  </div>
                </div>
                <div className="mt-10 flex items-center justify-center">
                  <div className="flex items-center justify-center gap-5">
                    {/* android */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border-[2px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-300 hover:text-black border-gray-300">
                      <div className="w-[22px] aspect-square overflow-hidden">
                        <img
                          className="w-full h-full object-center object-cover"
                          src="https://www.svgrepo.com/show/223032/playstore.svg"
                          alt=""
                        />
                      </div>
                      <div>
                        <span className="text-[.785rem]">GET IT ON</span>
                        <h3 className="font-bold mt-[-3px]">Google Play</h3>
                      </div>
                    </div>
                    {/* mac */}
                    <div className="flex items-center gap-2 px-3 py-1 rounded-md border-[2px] cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-300 hover:text-black border-gray-300">
                      <div>
                        <FaApple className="text-[1.75rem]" />
                      </div>
                      <div>
                        <span className="text-[.785rem]">DOWNLOAD ON THE</span>
                        <h3 className="font-bold mt-[-3px]">App Store</h3>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* final footer part */}
          <div className="px-[1%] sm:px-[5%] pt-[4%] text-[.75rem]">
            <div className="w-full border-t-[2px] border-gray-400 pt-[5%]">
              {/* first paragraph */}
              <div>
                <p className="flex items-center">
                  <span className="text-[1.3rem] mr-1">©</span>
                  makutalawfirm.com All rights reserved.
                </p>
              </div>
              {/* second paragraph */}
              <div className="flex items-center">
                <div className="my-5 pr-[5%] md:pr-[5%]">
                  <p>
                    Makuta Law Firm will be the first law firm of its kind in
                    the country and in the continent of Africa. It is the first
                    law firm to be founded and led by a woman. Makuta Law firm
                    has laid the groundwork for the establishment of branches in
                    every country of Africa.
                  </p>
                </div>
                <div className="w-full flex items-center justify-center">
                  <div>
                    <img
                      className="w-[150px] opacity-85"
                      src="/png.png"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              {/* final paragraph */}
              <div className="pb-5">
                <p>
                  Design by{" "}
                  <span className="font-bold text-gray-400">
                    Skylight Technologies
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinalHome;
