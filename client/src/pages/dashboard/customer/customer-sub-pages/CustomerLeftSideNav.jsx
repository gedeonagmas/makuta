import { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// site logo
import siteMainLogo from "../../../../assets/images/site-logo/logoFinal.png";
import callCenter from "../../../../assets/images/call-center/call-center-1.png";

//icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import {
  MdClose,
  MdOutlineHomeRepairService,
  MdMessage,
  MdDashboard
} from "react-icons/md";
import { FaClock, FaRegChartBar } from "react-icons/fa";
import { SiCashapp } from "react-icons/si";
import { GrCompliance } from "react-icons/gr";
import { IoExitSharp } from "react-icons/io5";
import { FaPhoneVolume } from "react-icons/fa6";
import { useUserLogoutMutation } from "../../../../features/api/apiSlice";
import Response from "../../../../components/Response";
import { userContext } from "../../../../App";

// pop up nav
const subNavLinkPopUpVariant = {
  initialAnim: {
    scale: 0.75
  },
  finalAnim: {
    scale: 1,
    transition: {
      duration: 0.25
    }
  }
};
// main
// CustomerLeftSideNav
const CustomerLeftSideNav = () => {
  const user = useContext(userContext);
  const [logout, logoutResponse] = useUserLogoutMutation();
  const [pending, setPending] = useState(false);

  const logoutHandler = () => {
    logout({});
  };
  // local states
  // nav controller states
  const [isComplianceOpen, setIsComplianceOpen] = useState(false);
  const [isMyChartOpen, setIsMyChartOpen] = useState(false);
  const [isFinanceOpen, setIsFinanceOpen] = useState(false);
  const [isOtherServiceOpen, setIsOtherServiceOpen] = useState(false);

  // style
  const [isNav, setIsNav] = useState("DASHBOARD");

  // customer dashboard left side bar toggler
  const customerDashBoardLeftSideBarToggler = () => {
    let customerDashBoardLeftSideBar = document.getElementById(
      "customer-dashboard-leftside-nav-bar"
    );
    if (customerDashBoardLeftSideBar?.classList.contains("left-[-100vw]")) {
      customerDashBoardLeftSideBar?.classList.remove("left-[-100vw]");
      customerDashBoardLeftSideBar?.classList.add("left-0");
    } else {
      customerDashBoardLeftSideBar?.classList.add("left-[-100vw]");
      customerDashBoardLeftSideBar?.classList.remove("left-0");
    }
  };

  return (
    <div
      className="absolute left-[-100vw] h-[100vh] overflow-y-auto bg-white z-[300] border-r border-gray-300 lg:border-none lg:relative lg:left-0 w-[20%] min-w-[240px] flex flex-col justify-between pl-[2%] text-[1rem]"
      id="customer-dashboard-leftside-nav-bar"
    >
      <Response
        response={logoutResponse}
        setPending={setPending}
        redirectTo="/login"
        type="logout"
      />
      {/* logo and nav container */}
      <div className="relative">
        {/* close btn container */}
        <div className="absolute top-1 right-1 lg:hidden">
          <button
            className="text-3xl text-gray-500"
            onClick={e => {
              e.stopPropagation();
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <MdClose />
          </button>
        </div>
        {/* logo */}
        <div className="flex items-center justify-center mt-1">
          <NavLink
            to={"/"}
            className={"flex items-center justify-center pr-[25%]"}
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {/* icon */}
            <img src={siteMainLogo} alt="" className="w-[200px] h-[120px] " />
          </NavLink>
        </div>
        {/* nav container */}
        <div className="text-gray-500 text-[1rem]">
          {/* Dashboard */}
          <NavLink
            to={`/dashboard/${
              user?.user?.role === "private-customer" ||
              user?.user?.role === "business-customer"
                ? "customer"
                : user?.user?.role === "lawyer"
                ? "lawyer"
                : null
            }`}
            className={`flex items-center dashboard-link-item-my ${
              isNav === "DASHBOARD" ? "dashboard-active-link-color" : ""
            }`}
            onClick={e => {
              setIsNav("DASHBOARD");
              setIsComplianceOpen(false);
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <MdDashboard className="text-lg mr-2" />
            <span>Dashboard</span>
          </NavLink>
          {/* Compliance */}
          <div className="dashboard-link-item-my relative">
            {/* main text */}
            <div
              className={`dashboard-main-list-item ${
                isNav === "COMPLIANCE" ? "dashboard-active-link-color" : ""
              }`}
              onClick={e => {
                setIsNav("COMPLIANCE");
                setIsMyChartOpen(false);
                setIsFinanceOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(!isComplianceOpen);
              }}
            >
              <div className="flex items-center">
                <GrCompliance
                  className={`mr-2 text-lg ${
                    isComplianceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
                <span>Compliance</span>
              </div>
              {/* icon */}
              {isComplianceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isComplianceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isComplianceOpen ? "text-sky-500" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isComplianceOpen ? (
              <motion.div
                variants={subNavLinkPopUpVariant}
                initial="initialAnim"
                animate="finalAnim"
                className="font-normal relative"
              >
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/new-case`}
                    className={`dashboard-sub-link-items ${
                      isNav === "NEW-CASE" ? "dashboard-active-link-color" : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("NEW-CASE");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    New Case
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/on-request`}
                    className={`dashboard-sub-link-items ${
                      isNav === "ON-REQUEST"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("ON-REQUEST");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    On Request
                  </NavLink>
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
          {/* My Chart */}
          <div className="dashboard-link-item-my relative">
            {/* main text */}
            <div
              className={`dashboard-main-list-item ${
                isNav === "MY-CHART" ? "dashboard-active-link-color" : ""
              }`}
              onClick={e => {
                setIsNav("MY-CHART");
                setIsFinanceOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(false);
                setIsMyChartOpen(!isMyChartOpen);
              }}
            >
              <div className="flex items-center">
                <FaRegChartBar
                  className={`mr-2 text-lg ${
                    isMyChartOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
                <span>My Chart</span>
              </div>
              {/* icon */}
              {isMyChartOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isMyChartOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isMyChartOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isMyChartOpen ? (
              <motion.div
                variants={subNavLinkPopUpVariant}
                initial="initialAnim"
                animate="finalAnim"
                className="font-normal relative"
              >
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/case-team`}
                    className={`dashboard-sub-link-items ${
                      isNav === "CASE-TEAM" ? "dashboard-active-link-color" : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("CASE-TEAM");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Case Team
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/active-case`}
                    className={`dashboard-sub-link-items ${
                      isNav === "ACTIVE-CASE"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("ACTIVE-CASE");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Active Case
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/closed-case`}
                    className={`dashboard-sub-link-items ${
                      isNav === "CLOSED-CASE"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("CLOSED-CASE");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Closed Case
                  </NavLink>
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
          {/* message */}
          <NavLink
            to={`/dashboard/${
              user?.user?.role === "private-customer" ||
              user?.user?.role === "business-customer"
                ? "customer"
                : user?.user?.role === "lawyer"
                ? "lawyer"
                : null
            }/message`}
            className={`flex items-center dashboard-link-item-my ${
              isNav === "MESSAGE" ? "dashboard-active-link-color" : ""
            }`}
            onClick={e => {
              setIsNav("MESSAGE");
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              setIsComplianceOpen(false);
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <MdMessage className="text-lg mr-2" />
            <span>Message</span>
          </NavLink>
          {/* appointment */}
          <NavLink
            to={`/dashboard/${
              user?.user?.role === "private-customer" ||
              user?.user?.role === "business-customer"
                ? "customer"
                : user?.user?.role === "lawyer"
                ? "lawyer"
                : null
            }/appointment`}
            className={`flex items-center dashboard-link-item-my ${
              isNav === "APPOINTMENT" ? "dashboard-active-link-color" : ""
            }`}
            onClick={e => {
              setIsNav("APPOINTMENT");
              setIsMyChartOpen(false);
              setIsFinanceOpen(false);
              setIsOtherServiceOpen(false);
              setIsComplianceOpen(false);
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <FaClock className="text-lg mr-2" />
            <span>Appointment</span>
          </NavLink>
          {/* Finance */}
          <div className="dashboard-link-item-my relative">
            {/* main text */}
            <div
              className={`dashboard-main-list-item ${
                isNav === "FINANCE" ? "dashboard-active-link-color" : ""
              }`}
              onClick={e => {
                setIsNav("FINANCE");
                setIsMyChartOpen(false);
                setIsOtherServiceOpen(false);
                setIsComplianceOpen(false);
                setIsFinanceOpen(!isFinanceOpen);
              }}
            >
              <div className="flex items-center">
                <SiCashapp
                  className={`mr-2 text-lg ${
                    isFinanceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
                <span>Finance</span>
              </div>
              {/* icon */}
              {isFinanceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isFinanceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isFinanceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isFinanceOpen ? (
              <motion.div
                variants={subNavLinkPopUpVariant}
                initial="initialAnim"
                animate="finalAnim"
                className="font-normal relative"
              >
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/add-funds`}
                    className={`dashboard-sub-link-items ${
                      isNav === "ADD-FUNDS" ? "dashboard-active-link-color" : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("ADD-FUNDS");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Add Funds
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/requested-payment`}
                    className={`dashboard-sub-link-items ${
                      isNav === "REQUESTED-PAYMENT"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("REQUESTED-PAYMENT");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Requested Payment
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/refund-funds`}
                    className={`dashboard-sub-link-items ${
                      isNav === "REFUND-FUNDS"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("REFUND-FUNDS");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Refund Funds
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/recent-transactions`}
                    className={`dashboard-sub-link-items ${
                      isNav === "RECENT-TRANSACTION"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("RECENT-TRANSACTION");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Recent Transactions
                  </NavLink>
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
          {/* other services */}
          <div className="dashboard-link-item-my relative">
            {/* main text */}
            <div
              className={`dashboard-main-list-item ${
                isNav === "OTHER-SERVICES" ? "dashboard-active-link-color" : ""
              }`}
              onClick={e => {
                setIsNav("OTHER-SERVICES");
                setIsMyChartOpen(false);
                setIsFinanceOpen(false);
                setIsComplianceOpen(false);
                setIsOtherServiceOpen(!isOtherServiceOpen);
              }}
            >
              <div className="flex items-center">
                <MdOutlineHomeRepairService
                  className={`mr-2 text-lg ${
                    isOtherServiceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
                <span>Other Services</span>
              </div>
              {/* icon */}
              {isOtherServiceOpen ? (
                <IoIosArrowUp
                  className={`text-lg ml-1 ${
                    isOtherServiceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              ) : (
                <IoIosArrowDown
                  className={`text-lg ml-1 ${
                    isOtherServiceOpen ? "dahboard-active-link-icon-color" : ""
                  }`}
                />
              )}
            </div>
            {/* sub menu */}
            {isOtherServiceOpen ? (
              <motion.div
                variants={subNavLinkPopUpVariant}
                initial="initialAnim"
                animate="finalAnim"
                className="font-normal relative"
              >
                <div className="flex flex-col w-full bg-white">
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/training`}
                    className={`dashboard-sub-link-items ${
                      isNav === "TRAINING" ? "dashboard-active-link-color" : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("TRAINING");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Traning
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/consulting`}
                    className={`dashboard-sub-link-items ${
                      isNav === "CONSULTING"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("CONSULTING");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Consulting
                  </NavLink>
                  <NavLink
                    to={`/dashboard/${
                      user?.user?.role === "private-customer" ||
                      user?.user?.role === "business-customer"
                        ? "customer"
                        : user?.user?.role === "lawyer"
                        ? "lawyer"
                        : null
                    }/researches`}
                    className={`dashboard-sub-link-items ${
                      isNav === "RESEARCHES"
                        ? "dashboard-active-link-color"
                        : ""
                    }`}
                    onClick={e => {
                      e.stopPropagation();
                      setIsNav("RESEARCHES");
                      customerDashBoardLeftSideBarToggler();
                    }}
                  >
                    Research
                  </NavLink>
                </div>
              </motion.div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      {/* button container */}
      <div className="mr-9 my-3">
        {/* top */}
        <div className="py-3 px-1 rounded-md bg-sky-100 text-[.785rem] mb-5">
          <p className="font-semibold text-left">
            If any legal or technical difficulties, please contact the call
            center
          </p>
          <div>
            <h3 className="mt-1 ">Local call center</h3>
            <h3 className="font-bold text-[.85rem]">Dial: 8383</h3>
          </div>

          <div>
            <h3 className="mt-1 ">International call center</h3>
            <h3 className="font-bold text-[.85rem]">
              Dial: (+251) 985 228 888{" "}
            </h3>
          </div>

          {/* <div className="mb-1">
            <img
              src={callCenter}
              alt=""
              className="w-[120px] h-[100px] mt-[-24px] rounded-md"
            />
          </div>
          <button className="px-3 py-1 rounded-full text-white bg-green-500 flex items-center justify-center">
            <FaPhoneVolume className="text-xl mr-1" />{" "}
            <span className="font-bold text-lg">1234</span>
          </button> */}
        </div>
        {/* bottom */}
        <div>
          <button
            onClick={logoutHandler}
            className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700 font-normal"
          >
            <IoExitSharp className="text-xl mr-1" />
            <span>Logout</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default CustomerLeftSideNav;
