import { useState } from "react";
import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
/// images
import customerImage from "../../../assets/images/customers/customer-i.jpg";

// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import {
  IoStarOutline,
  IoStarHalfOutline,
  IoStarSharp,
  IoExitSharp,
} from "react-icons/io5";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// customer-sub-pages
import LawyerDashboardHeader from "./lawyer-sub-pages/LawyerDashboardHeader";
import LawyerLeftSideNav from "./lawyer-sub-pages/LawyerLeftSideNav";
import LawyerNewCase from "./lawyer-sub-pages/LawyerNewCase";
import LawyerDashboardHome from "./lawyer-sub-pages/LawyerDashboardHome";
import { MdClose } from "react-icons/md";

const LawyerDashboard = () => {
  // local states
  const [isMonthPopup, setIsMonthPopup] = useState(false);
  const [month, setMonth] = useState("August");
  return (
    <div className="w-full h-[100vh] overflow-y-hidden relative flex ">
      <LawyerLeftSideNav />
      <div className=" pl-1 w-full">
        {/* header */}
        <LawyerDashboardHeader />
        {/* components */}
        <div className="w-full h-full bg-white p-2">
          {/* header */}
          <header className="flex items-center justify-between">
            {/* left-container */}
            <div>
              <div className="flex items-center justify-start ml-[7%] w-full">
                {/* <h3 className="text-lg font-bold mr-3">Order</h3> */}
              </div>
            </div>
            {/* right */}
            {/* <div>right</div> */}
          </header>
          {/* content */}
          <div className="h-full flex bg-white">
            {/* main content */}
            <div className="w-full">
              <Outlet />
            </div>
            {/* right content */}
            <div
              className="p-3 overflow-y-auto pb-5 absolute bg-white right-[-100vw] z-0 xl:inline-block xl:relative xl:right-0 transition-all ease-in-out duration-150 h-[90vh]"
              id="customer-dashboard-right-side-bar"
            >
              {/* close button */}
              <div className="xl:hidden absolute left-1 top-1">
                <button className="p-[.1rem] rounded-full bg-gray-50 transition-all ease-in-out duration-150 hover:bg-gray-100" onClick={()=>{
                  rightSideNavToggler()
                }}>
                  <MdClose className="text-[1.5rem] text-gray-700"/>
                </button>
              </div>
              {/* user profile */}
              <div className="flex flex-col items-center p-3 mx-12">
                {/* image */}
                <div className="border-4 border-r-transparent border-t-sky-300 border-sky-700 rounded-full w-[78px] h-[78px] flex items-center justify-center">
                  <img
                    src={customerImage}
                    alt=""
                    className="w-[64px] h-[64px] rounded-full"
                  />
                </div>
              </div>
              {/* text */}
              <div className="w-full flex items-center flex-col">
                <div className="font-semibold text-sky-500">welcome</div>
                <div className="w-full flex items-center justify-center gap-1">
                  <span className="flexs font-bold">Meseret Seyoum</span>
                  <VscVerifiedFilled className="text-sky-500 text-lg" />
                </div>
                <div className="text-gray-500">Customer Account</div>
              </div>

              {/* calendar */}
              <div className="py-3 px-1 my-5 bg-gray-200 rounded-md">
                <header className="flex items-center justify-between">
                  <button>
                    <FaChevronLeft />
                  </button>
                  <h3 className="my-1 font-bold">March 2024</h3>
                  <button>
                    <FaChevronRight />
                  </button>
                </header>
                <div className="my-3 px-1 grid grid-cols-7 gap-x-[.05rem] [&>div]:cursor-pointer">
                  <div className="flex flex-col gap-y-5 p-1 items-center">
                    <span>M</span>
                    <span className="font-bold">19</span>
                  </div>
                  <div className="flex flex-col gap-y-5 p-1 items-center">
                    <span>T</span>
                    <span className="font-bold">20</span>
                  </div>
                  <div className="flex flex-col gap-y-5 p-1 items-center rounded-full bg-blue-950 text-white">
                    <span>W</span>
                    <span className="font-bold px-1 rounded-full bg-green-500">
                      21
                    </span>
                  </div>
                  <div className="flex flex-col gap-y-5 p-1 items-center">
                    <span>T</span>
                    <span className="font-bold">22</span>
                  </div>
                  <div className="flex flex-col gap-y-5 p-1 items-center">
                    <span>F</span>
                    <span className="font-bold">23</span>
                  </div>
                  <div className="flex flex-col gap-y-5 p-1 items-center">
                    <span>Sa</span>
                    <span className="font-bold">24</span>
                  </div>
                  <div className="flex flex-col gap-y-5 p-1 items-center">
                    <span>Su</span>
                    <span className="font-bold">25</span>
                  </div>
                </div>
              </div>

              {/* total balance */}
              <div className="shadow-sm border-t-2 mt-3 border-gray-200 ">
                {/* top */}
                <div className="p-2 border-b border-gray-200">
                  <div>
                    <span className="text-gray-500">Current Balance</span>
                    <h3 className="text-lg font-bold text-gray-900 my-2">
                      $21,328.00
                    </h3>
                    <div className="flex items-center justify-between gap-1 whitespace-nowrap">
                      <button className="px-1 py-1 rounded-md bg-yellow-400 text-white">
                        Add funds
                      </button>
                      <button className="px-1 py-1 rounded-md bg-yellow-400 text-white">
                        Withdraw funds
                      </button>
                    </div>
                  </div>
                </div>
                {/* bottom */}
                <div className="my-3">
                  <div className="flex items-center justify-between my-1 relative">
                    <h3 className="font-semibold">Expense Analysis</h3>
                    <button
                      className="text-gray-500 rounded-full border border-gray-500 flex items-center justify-between p-1 transition-all ease-in-out duration-300 hover:border-gray-900 hover:text-gray-900"
                      onClick={() => setIsMonthPopup(!isMonthPopup)}
                    >
                      <span>{month}</span>
                      {isMonthPopup ? (
                        <IoIosArrowUp className="text-[1.3rem] ml-1" />
                      ) : (
                        <IoIosArrowDown className="text-[1.3rem] ml-1" />
                      )}
                    </button>
                    {isMonthPopup ? (
                      <motion.div
                        initial={{ scale: 0.35, opacity: 0.35 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="bg-white absolute right-0 top-[100%] z-50 p-3 h-[170px] overflow-y-auto flex flex-col gap-y-1 rounded-md shadow-md"
                      >
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("September");
                            setIsMonthPopup(false);
                          }}
                        >
                          September
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("October");
                            setIsMonthPopup(false);
                          }}
                        >
                          October
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("November");
                            setIsMonthPopup(false);
                          }}
                        >
                          November
                        </span>

                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("December");
                            setIsMonthPopup(false);
                          }}
                        >
                          December
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("January");
                            setIsMonthPopup(false);
                          }}
                        >
                          January
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("February");
                            setIsMonthPopup(false);
                          }}
                        >
                          February
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("March");
                            setIsMonthPopup(false);
                          }}
                        >
                          March
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("April");
                            setIsMonthPopup(false);
                          }}
                        >
                          April
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("May");
                            setIsMonthPopup(false);
                          }}
                        >
                          May
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("June");
                            setIsMonthPopup(false);
                          }}
                        >
                          June
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("July");
                            setIsMonthPopup(false);
                          }}
                        >
                          July
                        </span>
                        <span
                          className="border border-gray-300 rounded-sm px-3 py-1 cursor-pointer"
                          onClick={() => {
                            setMonth("August");
                            setIsMonthPopup(false);
                          }}
                        >
                          August
                        </span>
                      </motion.div>
                    ) : (
                      <></>
                    )}
                  </div>
                  <div>
                    <span className="text-gray-500 font-semibold">Total</span>
                  </div>
                  <div className="grid grid-cols-3 w-full mt-1">
                    <div className="w-full border-b-4 border-purple-700 py-1">
                      <span className="text-gray-500 w-full">Total Spent</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                    <div className="w-full border-b-4 border-purple-500 py-1">
                      <span className="text-gray-500 w-full">Utility</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                    <div className="w-full border-b-4 border-purple-300 py-1">
                      <span className="text-gray-500 w-full">Total Refund</span>
                      <h3 className="font-semibold">$213.00</h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LawyerDashboard;
