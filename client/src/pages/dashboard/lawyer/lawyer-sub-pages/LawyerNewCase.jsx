import { useState } from "react";
import { NavLink } from "react-router-dom";
// icons
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { MdOutlineShareLocation } from "react-icons/md";
import { FaStar } from "react-icons/fa6";
import { TiTick } from "react-icons/ti";

// data
import { cunsultations } from "../../../../DataFile";

// main
// NewCase
const LawyerNewCase = () => {
  // local states
  const [isAllTypeOpen, setIsAllTypeOpen] = useState(false);
  const [allTypeHeaderText, setAllTypeHeaderText] = useState("All Types");
  const [isCityOpen, setIsCityOpen] = useState(false);
  const [allCityHeaderText, setAllCityHeaderText] = useState("All Cities");
  const [isAge, setIsAge] = useState(false);
  const [ageHeaderText, setAgeHeaderText] = useState("35+");
  const [isGenderOpen, setIsGenderOpen] = useState(false);
  const [genderHeaderText, setGenderHeaderText] = useState("All");

  // stepper count
  const [stepper, setStepper] = useState(0);

  // handle all type
  const handleAllTypeSelection = (text) => {
    // filtere here
    setAllTypeHeaderText(text);
  };
  // handle all type
  const handleCitySelection = (text) => {
    // filtere here
    setAllCityHeaderText(text);
  };
  // handle all type
  const handleAgeSelection = (text) => {
    // filtere here
    setAgeHeaderText(text);
  };
  // handle all type
  const handleGenderSelection = (text) => {
    // filtere here
    setGenderHeaderText(text);
  };

  return (
    <div className="bg-gray-100 h-full">
      <header className="h-[130px] bg-sky-100 flex items-center justify-center">
        {/* circle and bar */}
        <div className="flex items-center justify-center">
          {/* step-0 */}
          <div
            className={`${
              stepper >= 0 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              setStepper(0);
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-0 */}
          <div
            className={`${stepper > 0 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 1 */}
          <div
            className={`${
              stepper >= 1 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (stepper > 1) {
                setStepper(1);
              }
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-1 */}
          <div
            className={`${stepper > 1 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 2 */}
          <div
            className={`${
              stepper >= 2 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (stepper > 2) {
                setStepper(2);
              }
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-2 */}
          <div
            className={`${stepper > 2 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 3 */}
          <div
            className={`${
              stepper >= 3 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              if (stepper > 3) {
                setStepper(3);
              }
            }}
          >
            <TiTick className="text-xl" />
          </div>
          {/* bar-3 */}
          <div
            className={`${stepper > 3 ? "stepper-bar-on" : "stepper-bar-off"}`}
          ></div>

          {/* step 4 */}
          <div
            className={`${
              stepper >= 4 ? "steper-circle-on" : "steper-circle-off"
            }`}
            onClick={(e) => {
              e.stopPropagation();
              console.log(4);
            }}
          >
            <TiTick className="text-xl" />
          </div>
        </div>
      </header>
      {/* content */}
      {/* steps */}
      {stepper === 0 ? (
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-gray-500 text-lg font-bold my-3">Step - 1</h3>
            <button
              className="px-5 py-1 rounded-sm bg-blue-700 text-white"
              onClick={(e) => {
                e.stopPropagation();
                setStepper(1);
              }}
            >
              Next
            </button>
          </div>
        </div>
      ) : stepper === 1 ? (
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-gray-500 text-lg font-bold my-3">Step - 2</h3>
            <div className="flex items-center justify-between gap-x-5">
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setStepper(0);
                }}
              >
                back
              </button>
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setStepper(2);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : stepper === 2 ? (
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-gray-500 text-lg font-bold my-3">Step - 3</h3>
            <div className="flex items-center justify-between gap-x-5">
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setStepper(1);
                }}
              >
                back
              </button>
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setStepper(3);
                }}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : stepper === 3 ? (
        <div className="bg-white m-2 rounded-sm">
          <header className="flex items-center justify-between gap-3 py-2 px-[5%] border-b border-gray-200 rounded-sm">
            {/* all type */}
            <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
              <span className="text-gray-500">Type of counceling</span>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{allTypeHeaderText}</h3>
                <button
                  className="text-lg"
                  onClick={() => {
                    setIsAllTypeOpen(!isAllTypeOpen);
                  }}
                >
                  {isAllTypeOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {isAllTypeOpen ? (
                <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                  <ul>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsAllTypeOpen(false);
                        handleAllTypeSelection("All Types");
                      }}
                    >
                      <NavLink>All Types</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsAllTypeOpen(false);
                        handleAllTypeSelection("Option One");
                      }}
                    >
                      <NavLink>Option One</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsAllTypeOpen(false);
                        handleAllTypeSelection("Option Two");
                      }}
                    >
                      <NavLink>Option Two</NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* cities */}
            <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
              <span className="text-gray-500">City</span>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{allCityHeaderText}</h3>
                <button
                  className="text-lg"
                  onClick={() => {
                    setIsCityOpen(!isCityOpen);
                  }}
                >
                  {isCityOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {isCityOpen ? (
                <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                  <ul>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsCityOpen(false);
                        handleCitySelection("All Cities");
                      }}
                    >
                      <NavLink>All Cities</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsCityOpen(false);
                        handleCitySelection("City One");
                      }}
                    >
                      <NavLink>City One</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsCityOpen(false);
                        handleCitySelection("City Two");
                      }}
                    >
                      <NavLink>City Two</NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* age */}
            <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
              <span className="text-gray-500">Age</span>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{ageHeaderText}</h3>
                <button
                  className="text-lg"
                  onClick={() => {
                    setIsAge(!isAge);
                  }}
                >
                  {isAge ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {isAge ? (
                <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                  <ul>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsAge(false);
                        handleAgeSelection("35+");
                      }}
                    >
                      <NavLink>35+</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsAge(false);
                        handleAgeSelection("25+");
                      }}
                    >
                      <NavLink>25+</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsAge(false);
                        handleAgeSelection("45+");
                      }}
                    >
                      <NavLink>45+</NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
            {/* gender */}
            <div className="flex flex-col gap-y-3 relative border-r border-gray-200 pr-3 w-full">
              <span className="text-gray-500">Gender</span>
              <div className="flex items-center justify-between">
                <h3 className="font-semibold">{genderHeaderText}</h3>
                <button
                  className="text-lg"
                  onClick={() => {
                    setIsGenderOpen(!isGenderOpen);
                  }}
                >
                  {isGenderOpen ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </button>
              </div>
              {isGenderOpen ? (
                <div className="absolute bg-white-400  bg-white shadow-md top-[100%] p-2 right-0">
                  <ul>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsGenderOpen(false);
                        handleGenderSelection("All");
                      }}
                    >
                      <NavLink>All</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsGenderOpen(false);
                        handleGenderSelection("Male");
                      }}
                    >
                      <NavLink>Male</NavLink>
                    </li>
                    <li
                      className="cursor-pointer px-3 py-1 border border-gray-200 rounded-sm my-1"
                      onClick={(e) => {
                        setIsGenderOpen(false);
                        handleGenderSelection("Female");
                      }}
                    >
                      <NavLink>Female</NavLink>
                    </li>
                  </ul>
                </div>
              ) : (
                <></>
              )}
            </div>
          </header>
          {/* 
        ///////////////////////////////////////////
        content 
        //////////////////////////////////////////
        */}

          <div className="bg-gray-100 h-[68vh] overflow-y-auto p-2 grid grid-cols-2 md:grid-cols-3 gap-3">
            {/* cards */}
            {cunsultations?.length > 0 ? (
              <>
                {cunsultations.map((con, index) => (
                  <div
                    key={index}
                    className="bg-white shadow-md rounded-md p-3 h-max"
                  >
                    {/* profile */}
                    <div className="flex items-center justify-center gap-x-3 my-2">
                      {/* image */}
                      <div>
                        <img
                          src={con.profile}
                          alt=""
                          className="w-[32px] h-[32px] object-cover object-center rounded-full"
                        />
                      </div>
                      <div className="flex flex-col">
                        <span className="font-semibold">
                          {con.first_name} {con.last_name}
                        </span>
                        <span className="text-gray-500">{con.proffession}</span>
                      </div>
                    </div>
                    {/* rating and address */}
                    <div className="flex items-center justify-center gap-x-3">
                      {/* rating btn */}
                      <button
                        className={`px-3 py-[.13rem] rounded-full text-gray-100 ${
                          con.rating >= 4
                            ? "bg-emerald-500"
                            : con.rating >= 3
                            ? "bg-yellow-300"
                            : "bg-red-500"
                        } flex items-center justify-between`}
                      >
                        <FaStar className="mr-1 text-lg" /> {con.rating}
                      </button>
                      {/* address */}
                      <div className="flex items-center text-gray-500">
                        <MdOutlineShareLocation className="text-xl mr-1" />
                        <span>{con.address}</span>
                      </div>
                    </div>
                    {/* expereience */}
                    <div className="flex flex-col items-center text-gray-500 my-3">
                      <span>{con.experiene} years of experience</span>
                      <span>{con.consult}+ consultaions</span>
                    </div>
                    {/* btn container */}
                    <div className="flex items-center justify-center gap-x-3">
                      <button
                        className="px-[15%] py-2 rounded-full bg-blue-600 text-white"
                        onClick={(e) => {
                          e.stopPropagation();
                          setStepper(4);
                        }}
                      >
                        select
                      </button>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>No Cunsultaions</div>
            )}
          </div>
        </div>
      ) : stepper === 4 ? (
        <div className="flex items-center justify-center">
          <div>
            <h3 className="text-gray-500 text-lg font-bold my-3">Final</h3>
            <div className="flex items-center justify-between gap-x-5">
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  e.stopPropagation();
                  setStepper(3);
                }}
              >
                back
              </button>
              <button
                className="px-5 py-1 rounded-sm bg-blue-700 text-white"
                onClick={(e) => {
                  setStepper(4);
                }}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default LawyerNewCase;
