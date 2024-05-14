import React from "react";
import {
  IoMdStar,
  IoMdStarHalf,
  IoMdStarOutline,
  IoMdRepeat,
} from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { SiPostman } from "react-icons/si";
import { FaFacebookF, FaYoutube } from "react-icons/fa";
import {
  MdDashboard,
  MdOutlineFireplace,
  MdPhoneInTalk,
  MdOutlineMarkEmailRead,
  MdOutlineMediation,
} from "react-icons/md";
import { GiOpenFolder } from "react-icons/gi";
import { FaCircleCheck, FaXTwitter } from "react-icons/fa6";
import { IoFolder } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="bg-black text-gray-300">
      {/* footer top */}
      <div className="px-[1%] sm:px-[5%] py-3 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
        {/* top right */}
        <div className="w-[100%] md:w-[70%]">
          {/* menu list */}
          <div className="py-1 md:py-[7%] flex items-center justify-between text-[1rem]">
            {[1, 2, 3, 4].map((item, index) => (
              <div key={index}>
                <ul className="[&>li]:my-2">
                  <li>Desktop App</li>
                  <li>Mobile Apps</li>
                  <li>Plans</li>
                  <li>Security</li>
                  <li>Features</li>
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-3 flex items-center justify-between">
            <div className="flex flex-col items-center">
              <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                  alt=""
                />
              </div>
              <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                USA
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                  alt=""
                />
              </div>
              <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                Russia
              </h3>
            </div>

            <div className="flex flex-col items-center">
              <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"
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
                  src="https://img.freepik.com/premium-vector/germany-flag-flag-germany-vector-illustration_685751-83.jpg"
                  alt=""
                />
              </div>
              <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                Germany
              </h3>
            </div>
          </div>
        </div>
        {/* bottom left */}
        <div className="w-[90%] sm:w-[65%] self-center md:w-[45%] md:self-start">
          {/* header */}
          <header className="flex items-center gap-[15%] px-[5%] py-2 text-white rounded-sm bg-pink-600">
            <div className="p-2 rounded-full bg-white text-xl text-pink-600">
              <MdPhoneInTalk />
            </div>
            <h3 className="text-2xl font-bold">Let's Talk</h3>
          </header>
          {/* content */}
          <div className="flex flex-col p-[7%] gap-y-7">
            <div className="flex items-center gap-5">
              <div>
                <MdOutlineMarkEmailRead className="text-3xl text-blue-800" />
              </div>
              <div>
                <h3 className="text-lg font-medium">Business Inquiries</h3>
                <span>sales@company.com</span>
              </div>
            </div>

            <div className="flex items-center gap-5">
              <div>
                <MdOutlineMediation className="text-3xl text-blue-800" />
              </div>
              <div>
                <h3 className="text-lg font-medium">PR Of Media</h3>
                <span>marketing@company.com</span>
              </div>
            </div>
          </div>
          {/* footer */}
          <footer className="mt-5 px-[5%] flex items-center">
            {/* input */}
            <div className="flex-grow bg-blue-900 flex items-center rounded-full border-2 border-gray-400 p-[.13rem]">
              <input
                type="text"
                placeholder="Enter your email"
                className="w-full focus:outline-none focus:ring-0 bg-transparent border-none"
              />
              <button className="px-5 rounded-full bg-pink-600 h-full text-white py-[.5rem]">
                SIGNUP
              </button>
            </div>
          </footer>
        </div>
      </div>
      {/* footer bottom */}
      <footer className="px-[1%] mt-5 sm:px-[5%] flex items-center justify-between md:font-medium py-3  md:text-[1rem]">
        <div>
          <span>2024 Copyright</span>
        </div>
        <div>
          <span>Terms and Conditions | Privacy Policy</span>
        </div>
        <div className="flex items-center justify-center gap-5 text-2xl">
          <FaFacebookF />
          <FaXTwitter />
          <FaYoutube />
        </div>
      </footer>
    </div>
  );
};

export default Footer;
