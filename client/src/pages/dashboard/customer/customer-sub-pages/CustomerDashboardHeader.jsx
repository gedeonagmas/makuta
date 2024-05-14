import { useContext, useState } from "react";

// image
import customerImage from "../../../../assets/images/customers/customer-i.jpg";
// react icons
// search icon
import { FiSearch } from "react-icons/fi";
// more
import { IoMdMore } from "react-icons/io";
// notifications
import { IoMdNotifications } from "react-icons/io";
// up and down arrow
import { IoIosArrowDown } from "react-icons/io";
// menu
import { GrMenu } from "react-icons/gr";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoIosSettings } from "react-icons/io";
import { CgProfile } from "react-icons/cg";
import { MdOutlineSecurity } from "react-icons/md";
import {
  IoStarOutline,
  IoStarHalfOutline,
  IoStarSharp,
  IoExitSharp
} from "react-icons/io5";
import { FaCamera } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { useUserLogoutMutation } from "../../../../features/api/apiSlice";
import Response from "../../../../components/Response";
import { NavLink } from "react-router-dom";

// import {  IoStarHalfOutline, IoStarSharp } from "react-icons/io5";
// import { FaCamera } from "react-icons/fa";
// import { CgProfile } from "react-icons/cg";
import { IoSettingsOutline } from "react-icons/io5";
import { IoExitOutline } from "react-icons/io5";
import { userContext } from "../../../../App";

// main
// CustomerDashboardHeader
const CustomerDashboardHeader = () => {
  const context = useContext(userContext);
  const [logout, logoutResponse] = useUserLogoutMutation();
  const [pending, setPending] = useState(false);

  const logoutHandler = () => {
    logout({});
  };
  // local state
  const [userDetail, setUserDetail] = useState(false);

  // functions
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
    <header className="py-2 px-1 flex items-center justify-between w-full border-b border-gray-200">
      {/* left header portion */}
      <div className="flex items-center">
        <Response
          response={logoutResponse}
          setPending={setPending}
          redirectTo="/login"
          type="logout"
        />
        {/* menu icon */}
        <div className="text-2xl text-gray-500 lg:hidden">
          <button
            onClick={() => {
              customerDashBoardLeftSideBarToggler();
            }}
          >
            <GrMenu />
          </button>
        </div>
        {/* search bar */}
        <div className="pl-[5%]">
          <div className="flex items-center bg-gray-100 rounded-md">
            <input
              type="text"
              placeholder="search"
              className="focus:outline-none focus:ring-0 bg-transparent border-none h-[24px] w-[150px] sm:w-[200px] md:w-[350px] text-sm"
            />
            {/* search icon */}
            <FiSearch className="text-xl my-2 mr-3" />
          </div>
        </div>
      </div>

      {/* user profile container */}
      <div className="flex items-center gap-x-3">
        {/* notification icon */}
        <div>
          <button className="text-xl text-gray-500 relative">
            <div className="absolute top-[.15rem] right-[.15rem] z-50 w-[5px] h-[5px] rounded-full bg-red-500"></div>
            <IoMdNotifications />
          </button>
        </div>
        {/* username and profile */}
        <div className="flex items-center justify-end gap-3">
          <div className="relative">
            {/* user name and profile with toggler button */}
            <div
              className="flex items-center justify-center gap-1 rounded-sm px-2 py-[.15rem] cursor-pointer border-[1px] border-black border-opacity-5 transition-opacity ease-in-out duration-300 hover:border-opacity-10"
              onClick={() => {
                setUserDetail(!userDetail);
              }}
            >
              {context?.user?.user?.profilePicture?.length > 1 ? (
                <img
                  className="w-[36px] h-[36px] object-center rounded-full object-cover"
                  src={context?.user?.user?.profilePicture}
                  alt=""
                />
              ) : (
                <div className="w-[36px] h-[36px] text-xl font-bold uppercase  bg-emerald-500 text-white flex items-center justify-center rounded-full border">
                  {context?.user?.email?.substring(0, 1)}
                </div>
              )}
              <div className="text-[.875rem] flex items-center gap-1">
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
              </div>
              <div className="flex items-center">
                <button className="flex items-center">
                  <IoIosArrowDown
                    className={`text-[1.05rem] text-gray-500 transition-transform ease-in-out duration-300 ${
                      userDetail ? "rotate-[-180deg]" : "rotate-0"
                    }`}
                  />
                </button>
              </div>
            </div>
            {/* user detail pop up */}
            <div
              className={`absolute top-[100%] right-0  border-gray-300 z-[45] overflow-hidden bg-transparent transition-all ease-in-out duration-300 ${
                userDetail ? "h-[450px] border-b" : "h-0"
              }`}
            >
              <div className="w-[320px] h-[500px] mt-[14px] rounded-md bg-gray-50 p-4 border-[1px] border-black border-opacity-5 shadow-lg relative before:absolute before:top-0 before:right-7 before:bg-inherit before:border-l before:border-t before:border-black before:border-opacity-5 before:w-[24px] before:h-[24px] before:rotate-45 before:mt-[-12px]">
                <div className="relative z-[45] w-full h-full">
                  {/* profile image container */}
                  <div className="w-full flex items-center justify-center p-1">
                    <div className="relative w-[250px] h-[180px] aspect-square rounded-md">
                      {/* image */}
                      {context?.user?.user?.profilePicture?.length > 1 ? (
                        <img
                          className="w-full h-full object-center rounded-sm object-cover"
                          src={context?.user?.user?.profilePicture}
                          alt=""
                        />
                      ) : (
                        <div className="w-full border-dotted h-full font-bold  bg-white text-gray-500 flex items-center justify-center rounded-lg border-2 border-gray-400">
                          No profile picture!
                        </div>
                      )}
                    </div>
                  </div>
                  {/* username and verified icon container */}
                  <div className="flex items-center justify-center gap-1 mt-2">
                    <div className="text-[.875rem] flex items-center gap-1">
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
                    </div>
                    <div className="flex items-center justify-center">
                      <button>
                        <VscVerifiedFilled className="text-[1.25rem] text-sky-500" />
                      </button>
                    </div>
                  </div>
                  <p className="w-full text-center">{context?.user?.email}</p>
                  {/* ratting */}
                  <div className="flex items-start justify-center my-2">
                    <div className="flex items-center justify-center text-lg px-2 font-bold p-2 gap-1 bg-green-400 text-white rounded-sm py-[.13rem]">
                      {/* <div className="flex items-center justify-center gap-1">
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarSharp />
                        <IoStarHalfOutline />
                        <IoStarOutline />
                      </div>
                      <div>
                        <span className="text-[.95rem] font-[600]">4.5</span>
                      </div> */}
                      {context?.user?.role?.split("-")?.join(" ")}
                    </div>
                  </div>
                  {/* bio paragraph container */}
                  <div className="m-1 text-center border-y border-black border-opacity-5 text-[.75rem] text-gray-500 p-2">
                    <p>
                      {context?.user?.user?.bio
                        ? context?.user?.user?.bio
                        : "No biography!"}
                    </p>
                  </div>
                  {/* action buttons */}
                  <div className="flex items-center justify-center gap-3 mt-5">
                    <a
                      href={`/dashboard/${
                        context?.user?.role === "private-customer" ||
                        context?.user?.role === "business-customer"
                          ? "customer"
                          : context?.user?.role === "lawyer"
                          ? "lawyer"
                          : null
                      }/profile`}
                    >
                      <button className="flex items-center justify-center gap-1 p-1 border border-black border-opacity-5 rounded-full transition-opacity ease-in-out duration-300 hover:border-opacity-15">
                        <CgProfile className="text-gray-500 text-[1.35rem]" />
                        <span className="text-gray-700">Profile</span>
                      </button>
                    </a>
                    <a
                      href={`/dashboard/${
                        context?.user?.role === "private-customer" ||
                        context?.user?.role === "business-customer"
                          ? "customer"
                          : context?.user?.role === "lawyer"
                          ? "lawyer"
                          : null
                      }/change-password`}
                    >
                      <button className="flex items-center justify-center gap-1 p-1 border border-black border-opacity-5 rounded-full transition-opacity ease-in-out duration-300 hover:border-opacity-15">
                        <svg
                          class="w-6 h-6 text-gray-500"
                          aria-hidden="true"
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <path
                            stroke="currentColor"
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M9.5 11.5 11 13l4-3.5M12 20a16.405 16.405 0 0 1-5.092-5.804A16.694 16.694 0 0 1 5 6.666L12 4l7 2.667a16.695 16.695 0 0 1-1.908 7.529A16.406 16.406 0 0 1 12 20Z"
                          />
                        </svg>

                        <span className="">Security</span>
                      </button>
                    </a>
                    <div onClick={logoutHandler}>
                      <button className="flex items-center justify-center gap-1 p-1 border border-black border-opacity-5 rounded-full transition-opacity ease-in-out duration-300 hover:border-opacity-15">
                        <IoExitOutline className="text-gray-500 text-[1.35rem]" />
                        <span className="text-gray-700">Logout</span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* drawer */}
          <div className="xl:hidden">
            <button
              onClick={() => {
                rightSideNavToggler();
              }}
            >
              <IoMdMore className="text-[1.5rem] text-gray-500 transition-colors ease-in-out duration-300 hover:text-gray-900" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default CustomerDashboardHeader;
