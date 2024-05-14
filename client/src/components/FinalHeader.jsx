import { useState, useEffect, useContext } from "react";

import { NavLink } from "react-router-dom";

// icons
import { FiPhone } from "react-icons/fi";
import { IoIosArrowDown, IoIosExit } from "react-icons/io";
import { FiSearch } from "react-icons/fi";
import {
  MdOutlineClose,
  MdMenu,
  MdDashboard,
  MdKeyboardArrowRight
} from "react-icons/md";
import { RiUserShared2Fill, RiArrowRightLine } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";
import { userContext } from "../App";
import Response from "./Response";
import { useUserLogoutMutation } from "../features/api/apiSlice";

const FinalHeader = () => {
  // states
  const context = useContext(userContext);
  const [isPhone, setIsPhone] = useState(false);
  const [isSearch, setIsSearch] = useState(false);
  const [isNav, setIsNav] = useState(null);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [menuIconToggler, setMenuIconToggler] = useState(false);
  const [isUserDropDown, setIsUserDropDown] = useState(false);

  const [logout, logoutResponse] = useUserLogoutMutation();
  const [pending, setPending] = useState(false);

  const logoutHandler = () => {
    logout({});
  };

  console.log(context?.user, "context data at header");
  // nav
  const nav = [
    {
      navText: "Civil"
    },
    {
      navText: "Criminal"
    },
    {
      navText: "Corporate"
    },
    {
      navText: "Other Services"
    }
  ];

  // civil sub list
  const civilSubNav = [
    {
      groupOne: [
        {
          navHeaderText: "Contract",
          subNavList: [
            {
              navHeaderText: "Contract of special movables (vehicles)",
              path: "contract-of-special-movables"
            },
            {
              navHeaderText: "Sale or lease of buildings",
              path: "#"
            },
            {
              navHeaderText: "Construction",
              path: "#"
            },
            {
              navHeaderText: "Supply of goods and services",
              path: "#"
            },
            {
              navHeaderText: "Rental of machineries and vehicles",
              path: "#"
            },
            {
              navHeaderText: "Loan",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            }
          ]
        },
        {
          navHeaderText: "Family",
          subNavList: [
            {
              navHeaderText: "Maintenances",
              path: "#"
            },
            {
              navHeaderText: "Adoption",
              path: "#"
            },
            {
              navHeaderText: "Divorce",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            }
          ]
        }
      ]
    },
    {
      groupTwo: [
        {
          navHeaderText: "Succession",
          path: "/succession"
        },
        {
          navHeaderText: "Employment",
          path: "/employment"
        },
        {
          navHeaderText: "Property",
          path: "/property"
        },
        {
          navHeaderText: "Torts",
          path: "/torts"
        },
        {
          navHeaderText: "Others",
          path: "#"
        }
      ]
    }
  ];
  // criminal sub list
  const criminalSubNav = [
    {
      navHeaderText: "Ordinary crime",
      path: "#"
    },
    {
      navHeaderText: "Corruption",
      path: "#"
    },
    {
      navHeaderText: "Money laundering (Financial fraud)",
      path: "#"
    },
    {
      navHeaderText: "Tax and customs related crimes",
      path: "#"
    }
  ];
  // commercial sub list
  const commercialSubNav = [
    {
      groupOne: [
        {
          navHeaderText: "Contract",
          subNavList: [
            {
              navHeaderText: "Contract of special movables (vehicles)",
              path: "#"
            },
            {
              navHeaderText: "Sale or lease of buildings",
              path: "#"
            },
            {
              navHeaderText: "Construction",
              path: "#"
            },
            {
              navHeaderText: "Supply of goods and services",
              path: "#"
            },
            {
              navHeaderText: "Rental of machineries and vehicles",
              path: "#"
            },
            {
              navHeaderText: "Loan",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            }
          ]
        },
        {
          navHeaderText: "Intellectual property",
          subNavList: [
            {
              navHeaderText: "Copyright",
              path: "#"
            },
            {
              navHeaderText: "Patent",
              path: "#"
            },
            {
              navHeaderText: "Trademark",
              path: "#"
            },
            {
              navHeaderText: "Utilities",
              path: "#"
            },
            {
              navHeaderText: "Geographical indications",
              path: "#"
            },
            {
              navHeaderText: "Varieties and plant breeders' right",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            }
          ]
        },
        {
          navHeaderText: "Financial sector",
          subNavList: [
            {
              navHeaderText: "Banking",
              path: "#"
            },
            {
              navHeaderText: "Insurance",
              path: "#"
            },
            {
              navHeaderText: "Capital market",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            }
          ]
        },
        {
          navHeaderText: "International trade and investment",
          subNavList: [
            {
              navHeaderText: "Incorporation",
              path: "#"
            },
            {
              navHeaderText:
                "Bankruptcy (Scheme of arrangement or dissolution)",
              path: "#"
            },
            {
              navHeaderText: "Merger",
              path: "#"
            },
            {
              navHeaderText: "Acquisition",
              path: "#"
            },
            {
              navHeaderText: "Reorganization",
              path: "#"
            },
            {
              navHeaderText: "Others",
              path: "#"
            }
          ]
        }
      ]
    },
    {
      groupTwo: [
        {
          navHeaderText: "Tax & customs",
          path: "#"
        },
        {
          navHeaderText: "Real estate, property and conveyance",
          path: "#"
        },
        {
          navHeaderText: "Joint venture",
          path: "#"
        },
        {
          navHeaderText: "Others",
          path: "#"
        }
      ]
    }
  ];
  // other services
  const otherServicesSubNavList = [
    {
      navHeaderText: "Training",
      path: "/training"
    },
    {
      navHeaderText: "Consulting",
      path: "/consulting"
    },
    {
      navHeaderText: "Research",
      path: "/researches"
    }
  ];

  // effects
  useEffect(() => {
    let element = document.getElementById("main-nav-container");
    if (element?.classList.contains("right-[-100vw] fixed")) {
      setMenuIconToggler(true);
    } else {
      setMenuIconToggler(false);
    }
  }, []);

  // nav drawer
  const mainNavDrawer = () => {
    const mainNav = document.getElementById("main-nav-container");
    if (mainNav?.classList.contains("right-[-100vw]")) {
      mainNav?.classList.remove("right-[-100vw]");
      mainNav?.classList.add("right-0");
    } else {
      mainNav?.classList.add("right-[-100vw]");
      mainNav?.classList.remove("right-0");
    }
  };

  return (
    <header className="shadow-bottomShadow fixed left-0 top-0 z-[1000] text-[.975rem] w-full bg-white text-black">
      <div className="px-[1%] sm:px-[2%] md:px-[3%] lg:px-[5%] xl:px-[12%] flex items-center justify-between">
        {/* logo container */}
        <Response
          response={logoutResponse}
          setPending={setPending}
          redirectTo="/login"
        />
        <div
          className="
        relative"
        >
          <div className="absolute z-50 left-0 p-1 shadow-lg bg-white mt-[-36px]">
            <NavLink className={"cursor-pointer"} to={"/"}>
              <div className="w-[110px] h-[90px] overflow-hidden cursor-pointer">
                <img
                  className="h-full w-full"
                  src="/images/site-logo/final-logo.png"
                  alt=""
                />
              </div>
            </NavLink>
          </div>
        </div>
        {/* header content */}
        <div className="flex-grow flex items-center justify-between relative">
          {/* nav container */}
          <div className="flex-grow flex items-center justify-center">
            <div
              className="fixed w-full sm:w-[75%] md:w-[50%] h-[calc(100vh-9vh)] bg-white shadow-lg lg:shadow-none  right-[-100vw] transition-all ease-in-out duration-300 top-[9vh] lg:relative lg:bg-transparent lg:right-auto lg:top-auto lg:w-auto lg:h-auto"
              id="main-nav-container"
            >
              <div className="w-full md:hidden flex items-center py-3 pt-16 px-[5%]">
                <div className="flex-grow flex items-center">
                  <div className="flex-grow flex items-center bg-white rounded-full sm:py-1 border-2 border-black ">
                    <FiSearch className="mx-2 text-[1.35rem]" />
                    <input
                      type="text"
                      placeholder="search"
                      className="w-full focus:ring-0 focus:outline-none border-none bg-transparent"
                    />
                  </div>
                </div>
              </div>
              <ul className="sm:pl-[30%] w-[90%] sm:w-[75%] mx-[5%] lg:mx-auto lg:w-full lg:flex lg:items-center lg:justify-center lg:gap-[10%]">
                {nav.map((item, index) => (
                  <li key={index} className="relative">
                    <NavLink
                      className={`flex items-center justify-between gap-1 py-2 md:py-[1.75rem] font-[600] text-[.975rem] transition-colors ease-in-out duration-300 hover:text-gray-500 relative after:absolute after:left-0 after:bottom-0 after:h-[6px] after:bg-black after:transition-all after:ease-in-out after:duration-300 hover:after:w-full whitespace-nowrap ${
                        isNav?.navText === item.navText
                          ? "after:w-full"
                          : "after:w-0"
                      }`}
                      onClick={() => {
                        setIsPhone(false);
                        if (isNav?.navText === item.navText) {
                          setIsNav(null);
                        } else {
                          setIsNav(item);
                        }
                      }}
                    >
                      <span>{item.navText}</span>
                      <IoIosArrowDown
                        className={`text-xl transition-transform ease-in-out duration-300 ${
                          isNav?.navText === item.navText
                            ? "rotate-[-180deg]"
                            : "rotate-0"
                        }`}
                      />
                    </NavLink>
                    {/* sub list pop up */}
                    <div
                      className={`bg-white transition-all ease-in-out duration-300 ${
                        isNav?.navText === item.navText
                          ? " scale-100 opacity-100 "
                          : "scale-0 opacity-0"
                      } ${
                        isNav?.navText === "Civil" ||
                        isNav?.navText === "Corporate"
                          ? "absolute left-0 top-[100%] z-[1000] lg:fixed lg:left-0 w-full pb-[100px] lg:pb-0 lg:top-[12.25vh] lg:w-screen h-[calc(100vh-9.5vh)] bg-white"
                          : "absolute left-0 top-[100%] z-[1000] w-[360px] whitespace-nowrap "
                      }`}
                    >
                      {isNav?.navText === "Civil" ? (
                        <div className="w-full h-full flex">
                          <div className="flex-grow py-[3%] lg:px-[20%] h-full w-[350px] my-1 lg:my-auto overflow-y-auto flex flex-col lg:flex-row gap-y-0 lg:justify-between">
                            {/* contract list */}
                            <div className="flex flex-col h-[350px] lg:h-auto">
                              <div>
                                <h3 className="font-semibold mb-3 text-[1.35rem]">
                                  {civilSubNav[0].groupOne[0].navHeaderText}
                                </h3>
                                <ul>
                                  {civilSubNav[0].groupOne[0].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink
                                          // to={`${item.path}`}
                                          to="/services"
                                          className={"hover:underline"}
                                          onClick={() => {
                                            setIsNav(null);
                                            mainNavDrawer();
                                            setMenuIconToggler(false);
                                          }}
                                        >
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="flex-grow h-full flex items-end pb-[150px]">
                                <div className="flex items-center justify-center gap-3 border-[4px] border-black rounded-full py-2 px-[7%] cursor-pointer hover:bg-black hover:text-white">
                                  <div>
                                    <span className="font-[600] text-[1.3rem]">
                                      Explore more
                                    </span>
                                  </div>
                                  <div>
                                    <RiArrowRightLine className="text-[1.5rem]" />
                                  </div>
                                </div>
                              </div>
                            </div>
                            {/* family list */}
                            <div className="flex flex-col h-[200px] lg:h-auto">
                              <div>
                                <h3 className="font-semibold mb-3 text-[1.35rem]">
                                  {civilSubNav[0].groupOne[1].navHeaderText}
                                </h3>
                                <ul>
                                  {civilSubNav[0].groupOne[1].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink
                                          to="/services"
                                          onClick={() => {
                                            setIsNav(null);
                                            mainNavDrawer();
                                            setMenuIconToggler(false);
                                          }}
                                          className={"hover:underline"}
                                        >
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="h-full flex-grow flex pb-[150px]">
                                <h3 className="font-[500] underline transition-colors ease-in-out duration-300 hover:opacity-75 cursor-pointer text-[1.25rem]">
                                  view all
                                </h3>
                              </div>
                            </div>
                            {/* list without sub list */}
                            <div>
                              <ul>
                                {civilSubNav[1].groupTwo.map((item, index) => (
                                  <li
                                    key={index}
                                    className="my-[.25rem] font-semibold text-[1.35rem]"
                                  >
                                    <NavLink
                                      to="/services"
                                      // to={`${item?.path}`}
                                      className={"hover:underline"}
                                      onClick={() => {
                                        setIsNav(null);
                                        mainNavDrawer();
                                        setMenuIconToggler(false);
                                      }}
                                    >
                                      {item.navHeaderText}
                                    </NavLink>
                                  </li>
                                ))}
                              </ul>
                            </div>
                            {/* see all button */}
                            <div className="hidden lg:flex absolute right-20 bottom-20">
                              <div className="flex items-center gap-1 font-[500] text-[1.35rem] cursor-pointer underline transition-colors ease-in-out duration-300 hover:opacity-75">
                                <div>See all civil services</div>
                                <div>
                                  <MdKeyboardArrowRight className="text-[2rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : isNav?.navText === "Criminal" ? (
                        <div>
                          <div className="p-[5%]">
                            <ul>
                              {criminalSubNav.map((item, index) => (
                                <li
                                  key={index}
                                  className="my-[.45rem] text-[1.125rem]"
                                >
                                  <NavLink
                                    to="/services"
                                    onClick={() => {
                                      setIsNav(null);
                                      mainNavDrawer();
                                      setMenuIconToggler(false);
                                    }}
                                    className={"hover:underline"}
                                  >
                                    {item.navHeaderText}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : isNav?.navText === "Corporate" ? (
                        <div className="w-full h-full flex">
                          <div className="flex-grow py-[3%] px-[2%] flex flex-col lg:flex-row h-full overflow-y-auto lg:overflow-hidden pb-[100px] my-1 lg:my-auto lg:pb-0 justify-between gap-5">
                            {/* contract list */}
                            <div className="flex flex-col">
                              <div>
                                <h3 className="font-semibold mb-3 text-[1.35rem]">
                                  {
                                    commercialSubNav[0].groupOne[0]
                                      .navHeaderText
                                  }
                                </h3>
                                <ul>
                                  {commercialSubNav[0].groupOne[0].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink
                                          to="/services"
                                          onClick={() => {
                                            setIsNav(null);
                                            mainNavDrawer();
                                            setMenuIconToggler(false);
                                          }}
                                          className={"hover:underline"}
                                        >
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="flex-grow h-full flex">
                                <h3 className="font-[500] underline transition-colors ease-in-out duration-300 hover:opacity-75 cursor-pointer text-[1.25rem]">
                                  view all
                                </h3>
                              </div>
                            </div>

                            {/* intellectual property list */}
                            <div className="flex flex-col">
                              <div>
                                <h3 className="font-semibold text-[1.35rem] mb-3">
                                  {
                                    commercialSubNav[0].groupOne[1]
                                      .navHeaderText
                                  }
                                </h3>
                                <ul>
                                  {commercialSubNav[0].groupOne[1].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink
                                          to="/services"
                                          onClick={() => {
                                            setIsNav(null);
                                            mainNavDrawer();
                                            setMenuIconToggler(false);
                                          }}
                                          className={"hover:underline"}
                                        >
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="h-full">
                                <h3 className="font-[500] underline transition-colors ease-in-out duration-300 hover:opacity-75 cursor-pointer text-[1.25rem]">
                                  view all
                                </h3>
                              </div>
                            </div>

                            {/* international trade and investment list */}

                            <div>
                              <div>
                                <h3 className="font-semibold mb-3 text-[1.35rem]">
                                  {
                                    commercialSubNav[0].groupOne[3]
                                      .navHeaderText
                                  }
                                </h3>
                                <ul>
                                  {commercialSubNav[0].groupOne[3].subNavList.map(
                                    (item, index) => (
                                      <li
                                        key={index}
                                        className="my-[.3rem] text-[1.125rem]"
                                      >
                                        <NavLink
                                          to="/services"
                                          onClick={() => {
                                            setIsNav(null);
                                            mainNavDrawer();
                                            setMenuIconToggler(false);
                                          }}
                                          className={"hover:underline"}
                                        >
                                          {item.navHeaderText}
                                        </NavLink>
                                      </li>
                                    )
                                  )}
                                </ul>
                              </div>
                              <div className="h-full pt-[60px]">
                                <div>
                                  <div className="flex items-center justify-center gap-3 border-[4px] border-black rounded-full py-2 px-[3%] cursor-pointer hover:bg-black hover:text-white">
                                    <div>
                                      <span className="font-[600] text-[1.3rem]">
                                        Explore more
                                      </span>
                                    </div>
                                    <div>
                                      <RiArrowRightLine className="text-[1.5rem]" />
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>

                            <div>
                              <h3 className="font-semibold mb-3 text-[1.35rem]">
                                {commercialSubNav[0].groupOne[2].navHeaderText}
                              </h3>
                              <ul>
                                {commercialSubNav[0].groupOne[2].subNavList.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="my-[.3rem] text-[1.125rem]"
                                    >
                                      <NavLink
                                        to="/services"
                                        onClick={() => {
                                          setIsNav(null);
                                          mainNavDrawer();
                                          setMenuIconToggler(false);
                                        }}
                                        className={"hover:underline"}
                                      >
                                        {item.navHeaderText}
                                      </NavLink>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            <div>
                              <ul>
                                {commercialSubNav[1].groupTwo.map(
                                  (item, index) => (
                                    <li
                                      key={index}
                                      className="my-[.25rem] font-semibold text-[1.35rem]"
                                    >
                                      <NavLink
                                        to="/services"
                                        onClick={() => {
                                          setIsNav(null);
                                          mainNavDrawer();
                                          setMenuIconToggler(false);
                                        }}
                                        className={"hover:underline"}
                                      >
                                        {item.navHeaderText}
                                      </NavLink>
                                    </li>
                                  )
                                )}
                              </ul>
                            </div>

                            {/* see all button */}
                            <div className="absolute right-20 bottom-20">
                              <div className="flex items-center gap-1 font-[500] text-[1.35rem] cursor-pointer underline transition-colors ease-in-out duration-300 hover:opacity-75">
                                <div>See all corporate services</div>
                                <div>
                                  <MdKeyboardArrowRight className="text-[2rem]" />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ) : isNav?.navText === "Other Services" ? (
                        <div>
                          <div className="p-[5%]">
                            <ul>
                              {otherServicesSubNavList.map((item, index) => (
                                <li
                                  key={index}
                                  className="my-[.3rem]  text-[1.125rem]"
                                >
                                  <NavLink
                                    to="/services"
                                    // to={`${item?.path}`}
                                    className={"hover:underline"}
                                    onClick={() => {
                                      setIsNav(null);
                                      mainNavDrawer();
                                      setMenuIconToggler(false);
                                    }}
                                  >
                                    {item.navHeaderText}
                                  </NavLink>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      ) : (
                        <></>
                      )}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* action container */}
          <div className="flex items-center justify-between gap-3">
            {/* phone */}
            <div className="relative py-[.975rem]">
              {/* button */}
              <div
                className={`flex items-center justify-center gap-1 p-[.35rem] md:py-[.5rem]  border-[.195rem] border-black rounded-full md:px-7 cursor-pointer transition-all ease-in-out duration-300 hover:bg-gray-500 hover:border-gray-500 hover:text-white`}
                onClick={() => {
                  if (!isPhone) {
                    setIsNav(null);
                  }
                  setIsPhone(!isPhone);
                }}
              >
                <FiPhone className="text-[1.5rem]" />
                <IoIosArrowDown
                  className={`hidden md:flex text-lg transition-transform text-[1.35rem] ease-in-out duration-300 ${
                    isPhone ? "rotate-[-180deg]" : "rotate-0"
                  }`}
                />
              </div>
              {/* pop-up */}
              <div
                className={`fixed bottom-0 left-0 w-full md:absolute md:left-0 md:top-[100%] bg-white md:w-max md:h-max whitespace-nowrap text-[.975rem] shadow-lg p-5 overflow-hidden transition-all ease-in-out duration-300 ${
                  isPhone ? "scale-100 opacity-100" : "scale-0 opacity-0"
                }`}
              >
                {/* close btn */}
                <div className="absolute top-1 right-1 md:hidden">
                  <button
                    onClick={() => {
                      setIsPhone(false);
                    }}
                  >
                    <MdOutlineClose className="text-3xl" />
                  </button>
                </div>
                <div className="font-medium">
                  <h3 className="font-bold text-[1.15rem]">Talk to Makuta</h3>

                  <h3 className="mt-3 font-bold">Local call center</h3>

                  <h3>Dial: 8383</h3>
                  <h3 className="mt-3 font-bold">International call center</h3>
                  <h3>Dial: (+251) 985 228 888 </h3>
                </div>
                <div className="mt-3 font-bold flex items-center justify-center">
                  <h3>Customer care hours</h3>
                </div>
                <div>
                  <div className="w-full flex items-center justify-center">
                    <div className="p-2 w-[70px] aspect-square overflow-hidden rounded-full bg-black bg-opacity-5 flex items-center justify-center">
                      <span className="text-[1.35rem] font-black">24/7</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* search */}
            <div className=" hidden md:flex">
              <div
                className="border-[.195rem] border-black rounded-full p-[.35rem] md:p-[.5rem] text-xl cursor-pointer transition-all ease-in-out duration-300 hover:border-gray-500 hover:bg-gray-500 hover:text-white"
                onClick={() => {
                  setIsSearch(true);
                }}
              >
                <FiSearch />
              </div>
            </div>

            {/* sign in or user */}
            {context?.user ? (
              <div className="relative">
                {/* image */}
                <div
                  className="flex items-center gap-1 p-[.1rem] rounded-sm border border-black border-opacity-0 transition-all ease-in-out duration-300 hover:border-opacity-5 cursor-pointer"
                  onClick={() => {
                    setIsUserDropDown(!isUserDropDown);
                  }}
                >
                  <div className="w-[36px] h-[36px] aspect-square rounded-full overflow-hidden">
                    {context?.user?.user?.profilePicture?.length > 1 ? (
                      <img
                        className="w-full h-full object-center object-cover"
                        src={context?.user?.user?.profilePicture}
                        alt=""
                      />
                    ) : (
                      <div className="w-[36px] text-xl font-bold uppercase h-[36px] bg-emerald-500 text-white flex items-center justify-center rounded-full border">
                        {context?.user?.email?.substring(0, 1)}
                      </div>
                    )}
                  </div>
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
                  <div>
                    <IoIosArrowDown
                      className={`text-xl transition-all ease-in-out duration-300 ${
                        isUserDropDown ? "rotate-[-180deg]" : "rotate-0"
                      }`}
                    />
                  </div>
                </div>
                {/* user drop down */}
                <div
                  className={`absolute left-1/2 -translate-x-1/2 top-[120%] overflow-hidden transition-all ease-in-out duration-300 ${
                    isUserDropDown ? "max-h-[100vh]  shadow-xl" : "max-h-0"
                  }`}
                >
                  <div className="py-3 px-5 bg-white rounded-md">
                    {/* image container */}
                    <div className="w-full flex items-center justify-center border-b border-black border-opacity-10 px-10">
                      <div className="flex flex-col items-center">
                        <div className="w-[72px] h-[72px] aspect-square rounded-full overflow-hidden">
                          {context?.user?.user?.profilePicture?.length > 1 ? (
                            <img
                              className="w-full h-full object-center object-cover"
                              src={context?.user?.user?.profilePicture}
                              alt=""
                            />
                          ) : (
                            <div className="w-[72px] h-[72px] text-xl font-bold uppercase bg-emerald-500 text-white flex items-center justify-center rounded-full border">
                              {context?.user?.email?.substring(0, 1)}
                            </div>
                          )}
                        </div>
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
                      </div>
                    </div>
                    {/* nav */}
                    <div>
                      <ul>
                        <li>
                          <a
                            href={`/dashboard/${
                              context?.user?.role === "private-customer" ||
                              context?.user?.role === "business-customer"
                                ? "customer"
                                : context?.user?.role === "lawyer"
                                ? "lawyer"
                                : null
                            }`}
                            className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75"
                          >
                            {/* icon */}
                            <div>
                              <MdDashboard className="text-[1.15rem]" />
                            </div>
                            {/* text */}
                            <div>
                              <span>Dashboard</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`/dashboard/${
                              context?.user?.role === "private-customer" ||
                              context?.user?.role === "business-customer"
                                ? "customer"
                                : context?.user?.role === "lawyer"
                                ? "lawyer"
                                : null
                            }/profile`}
                            className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75"
                          >
                            {/* icon */}
                            <div>
                              <CgProfile className="text-[1.25rem]" />
                            </div>
                            {/* text */}
                            <div>
                              <span>Profile</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <a
                            href={`/dashboard/${
                              context?.user?.role === "private-customer" ||
                              context?.user?.role === "business-customer"
                                ? "customer"
                                : context?.user?.role === "lawyer"
                                ? "lawyer"
                                : null
                            }/change-password`}
                            className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75"
                          >
                            {/* icon */}
                            <div>
                              <svg
                                class="w-7 h-7 -ml-1"
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
                            </div>
                            {/* text */}
                            <div>
                              <span>Security</span>
                            </div>
                          </a>
                        </li>
                        <li>
                          <NavLink
                            onClick={logoutHandler}
                            className="flex items-center gap-2 py-1 transition-all ease-in-out duration-300 hover:opacity-75"
                          >
                            {/* icon */}
                            <div>
                              <IoIosExit className="text-[1.35rem]" />
                            </div>
                            {/* text */}
                            <div>
                              <span>Logout</span>
                            </div>
                          </NavLink>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div>
                <NavLink
                  to="/login"
                  className="md:px-5 p-[.35rem] md:py-[.5rem] bg-black rounded-full text-white transition-all ease-in-out duration-300 hover:bg-gray-500 cursor-pointer flex items-center justify-center whitespace-nowrap"
                >
                  {/* text */}
                  <div className="hidden md:flex">
                    <span className="font-semibold">sign in</span>
                  </div>
                  {/* icon for small screen */}
                  <RiUserShared2Fill className="md:hidden text-[1.75rem]" />
                </NavLink>
              </div>
            )}

            {/* menu drawer */}
            <div className="lg:hidden">
              <div
                className="mx-2 text-[2.75rem] cursor-pointer"
                onClick={() => {
                  mainNavDrawer();
                  setMenuIconToggler(!menuIconToggler);
                }}
              >
                {menuIconToggler ? <MdOutlineClose /> : <MdMenu />}
              </div>
            </div>
          </div>
          {/* search bar */}
          {isSearch ? (
            <div className="absolute right-0 top-0 h-full w-full overflow-hidden  bg-white z-50 pr-[5%] pl-[15%] flex items-center">
              <div className="flex-grow flex items-center gap-3">
                {/* input */}
                <div className="flex-grow flex items-center px-3  border-2 border-black rounded-full">
                  <FiSearch className="text-xl mr-1" />
                  <input
                    type="text"
                    placeholder="search"
                    className="w-full focus:outline-none focus:ring-0 border-none bg-transparent"
                  />
                </div>
                {/* close btn */}
                <div>
                  <button
                    onClick={() => {
                      setIsSearch(!isSearch);
                    }}
                  >
                    <MdOutlineClose className="text-[2.35rem]" />
                  </button>
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </header>
  );
};

export default FinalHeader;
