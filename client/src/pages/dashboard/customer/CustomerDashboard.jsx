import { useContext, useState } from "react";
import { Outlet, Route, Routes, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
/// images
import customerImage from "../../../assets/images/customers/customer-i.jpg";

// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { VscVerifiedFilled } from "react-icons/vsc";
import { MdClose } from "react-icons/md";

// customer-sub-pages
import CustomerDashboardHeader from "./customer-sub-pages/CustomerDashboardHeader";
import CustomerLeftSideNav from "./customer-sub-pages/CustomerLeftSideNav";

import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import CustomerDashboardHome from "./customer-sub-pages/CustomerDashboardHome";
import NewCase from "./customer-sub-pages/NewCase";
import { userContext } from "../../../App";

const CustomerDashboard = () => {
  // local states
  // console.log(location?.state?.email, "user email");
  const context = useContext(userContext);
  const [isMonthPopup, setIsMonthPopup] = useState(false);
  const [month, setMonth] = useState("August");

  // right side nav toggler
  const rightSideNavToggler = () => {
    let rightSideNav = document.getElementById(
      "customer-dashboard-right-side-bar"
    );
    if (
      rightSideNav?.classList.contains("right-[-100vw]") &&
      rightSideNav?.classList.contains("absolute")
    ) {
      rightSideNav?.classList.remove("right-[-100vw]");
      rightSideNav?.classList.add("right-0");
    } else {
      rightSideNav?.classList.add("right-[-100vw]");
      rightSideNav?.classList.remove("right-0");
    }
  };
  return (
    <div className="w-full h-[100vh] overflow-y-hidden relative flex ">
      <div className="fixed rounded-full border-2 border-blue-500 z-30 bottom-4 right-4 h-auto w-auto shadow-xl shadow-gray-500">
        <div className="flex w-[120px] py-1 px-2 bg-white border border-gray-400 shadow-xl shadow-gray-500 h-full rounded-md absolute right-14">
          <div className="w-full text-center text-xs">
            <p>
              Hi, How can we <br />
              help you today?
            </p>
          </div>
        </div>
        <div className="absolute h-3 w-3 rotate-45 bg-white border border-gray-400 border-l-0 border-b-0 z-30 right-[50px] top-5"></div>
        <div class="relative">
          <img class="w-11 h-11 rounded-full" src={customerImage} alt="" />
          <span class="top-2 -right-2 absolute  w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
        </div>
      </div>
      <CustomerLeftSideNav />
      <div className="ml-1 w-full">
        {/* header */}
        <CustomerDashboardHeader />
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
          <div className="h-full flex bg-white relative overflow-hidden">
            {/* main content */}
            <div className="w-full">
              <Outlet />
            </div>
            {/* right content */}
            <div
              className="p-3 overflow-y-auto pb-[3rem] absolute bg-white right-[-100vw] z-0 xl:inline-block xl:relative xl:right-0 transition-all ease-in-out duration-150 h-[90vh]"
              id="customer-dashboard-right-side-bar"
            >
              {/* close button */}
              <div className="xl:hidden absolute left-1 top-1">
                <button
                  className="p-[.1rem] rounded-full bg-gray-50 transition-all ease-in-out duration-150 hover:bg-gray-100"
                  onClick={() => {
                    rightSideNavToggler();
                  }}
                >
                  <MdClose className="text-[1.5rem] text-gray-700" />
                </button>
              </div>
              {/* user profile */}
              <div className="flex flex-col items-center p-3 mx-12">
                {/* image */}
                <div className="border-4 border-r-transparent border-t-sky-300 border-sky-700 rounded-full w-[78px] h-[78px] flex items-center justify-center">
                  {context?.user?.user?.profilePicture?.length > 1 ? (
                    <img
                      className="w-[64px] h-[64px] object-center rounded-full object-cover"
                      src={context?.user?.user?.profilePicture}
                      alt=""
                    />
                  ) : (
                    <div className="w-[64px] h-[64px] border-dotted font-bold  bg-white text-gray-500 flex items-center justify-center rounded-lg border-2 border-gray-400">
                      No profile picture!
                    </div>
                  )}
                </div>
              </div>
              {/* text */}
              <div className="w-full flex items-center flex-col">
                <div className="font-semibold text-sky-500">welcome</div>
                <div className="w-full flex items-center justify-center gap-1">
                  <span>
                    {context?.user?.user?.firstName
                      ? context?.user?.user?.firstName
                      : context?.user?.role?.split("-")[0]}
                  </span>
                  <span className="hidden md:inline-block">
                    {context?.user?.user?.middleName
                      ? context?.user?.user?.middleName
                      : ""}
                  </span>
                  <VscVerifiedFilled className="text-sky-500 text-lg" />
                </div>
                <div className="text-gray-500">
                  {context?.user?.role?.split("-")[1]} Account
                </div>
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

export default CustomerDashboard;
