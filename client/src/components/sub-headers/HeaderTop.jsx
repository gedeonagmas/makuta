import { useState } from "react";
import { NavLink } from "react-router-dom";

// icons
import { LuPhone } from "react-icons/lu";
import { MdKeyboardArrowDown, MdKeyboardArrowUp } from "react-icons/md";
import { RiSearch2Line } from "react-icons/ri";
import { IoMdClose } from "react-icons/io";

const HeaderTop = () => {
  // local states
  const [isPhoneDetailOpen, setIsPhoneDetailOpen] = useState(false);
  const [isSearchBarOpen, setIsSearchBarOpen] = useState(false);
  return (
    <div className="shadow-bottomShadow p-[.75%] flex items-center justify-between relative mb-1">
      {/* logo */}

      <div className="flex-grow">
        <NavLink className={"text-xl font-black text-gray-700"}>JMS</NavLink>
      </div>

      <div className="flex-grow flex items-center justify-end gap-x-3">
        {/* phone */}
        <div className="relative">
          <NavLink
            className={
              "flex items-center justify-center border-2 border-black rounded-full px-5 py-2 text-xl transition-all ease-in-out duration-300 hover:border-gray-700 hover:bg-gray-700 hover:text-white"
            }
            onClick={() => {
              setIsPhoneDetailOpen(!isPhoneDetailOpen);
            }}
          >
            <LuPhone />
            {isPhoneDetailOpen ? (
              <MdKeyboardArrowUp />
            ) : (
              <MdKeyboardArrowDown />
            )}
          </NavLink>
          <div
            className={`absolute z-[200] left-1/2 -translate-x-1/2 top-[120%] bg-white shadow-lg overflow-hidden transition-all ease-in-out duration-300 ${
              isPhoneDetailOpen ? "h-[200px]" : "h-[0px]"
            }`}
          >
            <div className="w-max p-7 overflow-hidden">
              <div className="flex flex-col font-semibold gap-y-1">
                <span>Talk To JMS:</span>
                <span>(+251)905915180</span>
              </div>
              <h3 className="flex flex-col font-semibold my-3">
                Customer Care hours
              </h3>
              <div>
                <div className="flex flex-col">
                  <span>Mon–Fri 5 a.m.–7 p.m. PT</span>
                  <span>Weekends 7 a.m.–4 p.m. PT</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* search */}

        {isSearchBarOpen ? (
          <div
            className={`flex items-center gap-x-3 absolute pl-[25%] pr-[10%] bg-white overflow-hidden transition-all ease-linear duration-300 ${
              isSearchBarOpen ? "w-full h-full" : "w-[0px] h-[0px]"
            }`}
          >
            <div className="flex items-center rounded-full px-1 border-2 border-gray-700 text-gray-700 w-full overflow-hidden">
              <RiSearch2Line className="text-3xl mx-1" />
              <input
                type="text"
                placeholder="search"
                className="w-full focus:outline-none focus:ring-0 bg-transparent border-none"
              />
            </div>
            <div
              className="cursor-pointer flex items-center justify-center text-3xl text-gray-700"
              onClick={() => {
                setIsSearchBarOpen(false);
              }}
            >
              <button>
                <IoMdClose />
              </button>
            </div>
          </div>
        ) : (
          <></>
        )}
        <div
          className="p-2 cursor-pointer flex items-center justify-center rounded-full border-2 border-black transition-all ease-in-out duration-300 hover:border-gray-700 hover:bg-gray-700 hover:text-white"
          onClick={() => {
            setIsSearchBarOpen(true);
          }}
        >
          <button>
            <RiSearch2Line className="text-xl" />
          </button>
        </div>

        {/* sign in */}
        <div className="flex items-center justify-center rounded-full px-5 py-2 text-lg bg-black text-white transition-all ease-in-out duration-300 hover:bg-gray-700">
          <NavLink to={"/login"}>sign in</NavLink>
        </div>
      </div>
    </div>
  );
};

export default HeaderTop;
