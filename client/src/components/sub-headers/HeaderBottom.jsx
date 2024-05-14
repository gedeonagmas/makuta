import { useState } from "react";
// icons
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { MdOutlineHelpOutline } from "react-icons/md";

// sub-headers
// NavMenuItem
import NavMenuItem from "./NavMenuItem";

const HeaderBottom = () => {
  // states
  const [isSideNavOpen, setIsSideNavOpen] = useState(false);
  const [isSubMenuOpen, setIsSubMenuOpen] = useState("Home");
  // nav list
  const navList = [
    {
      navText: "Home",
      path: "#",
    },
    {
      navText: "Our Services",
      subMenus: [
        {
          subMenuText: "Service i",
          path: "#",
        },
        {
          subMenuText: "Service ii",
          path: "#",
        },
        {
          subMenuText: "Service iv",
          path: "#",
        },
      ],
    },
    {
      navText: "Blogging",
      path: "#",
    },
    {
      navText: "Tutorial",
      subMenus: [
        {
          subMenuText: "Tutorial i",
          path: "#",
        },
        {
          subMenuText: "Tutorial ii",
          path: "#",
        },
        {
          subMenuText: "Tutorial iv",
          path: "#",
        },
        {
          subMenuText: "Tutorial v",
          path: "#",
        },
      ],
    },
    {
      navText: "Portfolio",
      subMenus: [
        {
          subMenuText: "Portfolio i",
          path: "#",
        },
        {
          subMenuText: "Portfolio ii",
          path: "#",
        },
      ],
    },
    {
      navText: "Our Team",
      subMenus: [
        {
          subMenuText: "Our Team i",
          path: "#",
        },
        {
          subMenuText: "Our Team ii",
          path: "#",
        },
        {
          subMenuText: "Our Team iv",
          path: "#",
        },
      ],
    },
    {
      navText: "Contact Us",
      path: "#",
    },
  ];

  // side nav toggler
  const sideNavToggler = () => {
    const mainSideNav = document.getElementById("main-side-nav");
    if (mainSideNav?.classList.contains("w-[0vw]")) {
      mainSideNav?.classList.remove("w-[0vw]");
      mainSideNav?.classList.add("w-[100vw]");
      setIsSideNavOpen(true);
    } else {
      mainSideNav?.classList.add("w-[0vw]");
      mainSideNav?.classList.remove("w-[100vw]");
      setIsSideNavOpen(false);
    }
  };
  return (
    <div className="w-full flex items-center justify-center">
      <div className="flex-grow flex items-center justify-between relative">
        {/* menu icon */}
        <div>
          <button
            className="sm:hidden"
            onClick={() => {
              sideNavToggler();
            }}
          >
            {isSideNavOpen ? (
              <AiOutlineClose className="my-1 text-3xl pt-1" />
            ) : (
              <AiOutlineMenu className="my-1 text-3xl pt-1" />
            )}
          </button>
        </div>
        {/* nav list */}
        <div
          className={`flex-grow absolute left-0 top-[100%] overflow-hidden sm:overflow-visible bg-gray-100 sm:bg-white h-[85vh] sm:relative sm:top-auto z-[150] sm:w-auto sm:h-auto transition-all ease-in-out duration-150 ${
            isSideNavOpen ? "w-[100vw]" : "w-[0vw]"
          }`}
          id="main-side-nav"
        >
          <ul className="flex flex-col sm:flex-row pl-[.75%] whitespace-nowrap sm:items-center sm:justify-center gap-x-[1%] [&>li]:py-1 [&>li]:relative text-[1rem]">
            {navList?.map((nav, index) => (
              <NavMenuItem
                key={index}
                nav={nav}
                setIsSideNavOpen={setIsSideNavOpen}
                isSubMenuOpen={isSubMenuOpen}
                setIsSubMenuOpen={setIsSubMenuOpen}
              />
            ))}
          </ul>
        </div>
        {/* right icon */}
        <div>
          <button className="sm:hidden">
            <MdOutlineHelpOutline className="my-1 text-3xl pt-1" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default HeaderBottom;
