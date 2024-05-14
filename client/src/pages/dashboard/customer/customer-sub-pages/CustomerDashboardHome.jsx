import { useState } from "react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";

// icons
import { CiSearch, CiPhone, CiEdit } from "react-icons/ci";
import { MdOutlineMail, MdOutlineMoreVert } from "react-icons/md";
import { BiSolidUserDetail } from "react-icons/bi";
import { VscVerifiedFilled } from "react-icons/vsc";
import { IoMdClose } from "react-icons/io";
import {
  IoStarOutline,
  IoStarHalfOutline,
  IoStarSharp,
  IoAlarmOutline,
  IoReload
} from "react-icons/io5";

// data files
import { caseHistory } from "../../../../DataFile";

// data files
import { caseTeams } from "../../../../DataFile";
// main
// CustomerDashboardHome
const CustomerDashboardHome = () => {
  // local states
  const [isUserMore, setIsUserMore] = useState(null);
  const [isUserMorePopup, setIsUserMorePopup] = useState(null);

  const state = {
    series: [
      {
        data: [
          {
            x: "Jan 22 2024",
            y: [2800, 4500]
          },
          {
            x: "May 22 2024",
            y: [3200, 5100]
          },
          {
            x: "Jan 22 2024",
            y: [2950, 6800]
          },
          {
            x: "Feb 22 2024",
            y: [3000, 4600]
          },
          {
            x: "June 22 2024",
            y: [3500, 5100]
          },
          {
            x: "October 22 2024",
            y: [4500, 6500]
          }
          // {
          //   x: "July 22 2024",
          //   y: [3100, 6600],
          // },
        ]
      }
    ],
    options: {
      chart: {
        height: 350,
        type: "rangeBar",
        zoom: {
          enabled: false
        }
      },
      plotOptions: {
        bar: {
          isDumbbell: true,
          columnWidth: 3,
          dumbbellColors: [["#008FFB", "#00E396"]]
        }
      },
      legend: {
        show: true,
        showForSingleSeries: true,
        position: "top",
        horizontalAlign: "left",
        customLegendItems: [
          "Oral litigation",
          "Oral ligigation",
          "Oral litigation",
          "Oral litigation"
        ]
      },
      fill: {
        type: "gradient",
        gradient: {
          type: "vertical",
          gradientToColors: ["#00E396"],
          inverseColors: true,
          stops: [0, 100]
        }
      },
      grid: {
        xaxis: {
          lines: {
            show: true
          }
        },
        yaxis: {
          lines: {
            show: false
          }
        }
      },
      xaxis: {
        tickPlacement: "on"
      }
    }
  };

  return (
    <div className="p-[2%] relative h-[91vh] overflow-y-auto pb-1">
      {isUserMorePopup ? (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-sm z-[5000]">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
            className="bg-white z-[1200] w-max right-0 top-[2rem] rounded-md cursor-default shadow-xl flex flex-col items-center p-3"
            onClick={e => {
              e.stopPropagation();
            }}
          >
            {/* user profile */}
            <div className="p-2 shadow-md w-max rounded-md">
              <img
                src={isUserMorePopup?.profile}
                alt=""
                className="w-[200px] h-[200px] rounded-sm"
              />
            </div>
            {/* username */}
            <div className="my-1 text-gray-700 font-semibold flex items-center justify-center gap-x-1">
              <span>
                {isUserMorePopup?.first_name} {isUserMorePopup?.last_name}
              </span>
              <VscVerifiedFilled className="text-lg text-sky-500" />
            </div>
            {/* ratting */}
            <div className="flex items-center justify-center gap-1 bg-emerald-500 text-white px-2 py-1 rounded-sm my-1">
              <div className="flex items-center justify-center gap-x-1">
                <IoStarSharp />
                <IoStarSharp />
                <IoStarSharp />
                <IoStarHalfOutline />
                <IoStarOutline />
              </div>
              <span className="font-semibold">4.35</span>
            </div>
            {/* bio */}
            <div>
              <p className="w-[350px] text-xs italic my-1 p-2 border-y border-gray-200">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit
                cum quia fuga delectus dolore a aliquam accusamus.
              </p>
            </div>
            {/* logout */}
            <div className="flex items-center justify-center gap-x-3">
              <button className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
                <CiPhone className="text-xl mr-1" />
                <span>Call</span>
              </button>
              <button className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700">
                <MdOutlineMail className="text-xl mr-1" />
                <span>Message</span>
              </button>
              <button
                className="flex items-center justify-between my-1 px-3 py-[.25rem] text-gray-500 border border-gray-100 rounded-sm transition-all ease-in-out duration-150 hover:border-gray-300 hover:text-gray-700"
                onClick={e => {
                  e.stopPropagation();
                  setIsUserMorePopup(null);
                }}
              >
                <IoMdClose className="text-xl mr-1" />
                <span>close</span>
              </button>
            </div>
          </motion.div>
        </div>
      ) : (
        <></>
      )}
      {/* top */}
      <div className="rounded-md relative bg-sky-100">
        <div className="flex items-center justify-between px-[5%] py-[2%]">
          {/* left */}
          <div className="flex-grow w-[100%] flex flex-col gap-y-3">
            <div>
              <h3 className="font-bold">
                Ma<span className="text-blue-700">ku</span>ta
              </h3>
            </div>
            <div>
              <h1 className="text-xl font-bold">Legal Management System</h1>
              <p>
                Explore the network of{" "}
                <span className="font-black text-blue-700">500+</span> lawyers
                who are members of our service.
              </p>
            </div>
            <div>
              <button className="px-3 py-1 rounded-md bg-gray-800 text-white">
                Get Access
              </button>
            </div>
          </div>
          {/* right */}
          <div className="w-[40%] hidden md:flex items-center  justify-end">
            <div>
              <img
                src="https://th.bing.com/th/id/R.175b3802f7c5c4c98b9bcbdf9a7b9945?rik=98ox9lTe%2ffYIwA&pid=ImgRaw&r=0"
                alt=""
              />
            </div>
            <div className="flex items-center justify-evenly gap-x-3">
              <div className="h-[7px] bg-white"></div>
              <div className="h-[7px] bg-white"></div>
              <div className=" h-[7px] bg-white"></div>
            </div>
          </div>
        </div>
      </div>
      {/* middle */}
      <div className="flex flex-col md:flex-row items-center md:items-end gap-3 py-[3%]">
        {/* left */}
        <div className="p-2 rounded-md shadow-lg w-[100%] md:w-[50%] py-[4%]">
          <div className="">
            <h3 className="text-[1.1rem] text-gray-800 font-semibold">
              Next Appointment
            </h3>
            <div className="flex gap-1">
              <span className="text-gray-500 font-medium">Type:</span>
              <span className="text-gray-500">Oral Litigation</span>
            </div>
            <div>
              <h3 className="text-[1.1rem] text-gray-500 font-bold my-1">
                5 March, 2024
              </h3>
            </div>
            <div className="relative w-full flex items-center justify-end mt-[-.4rem] pt-2">
              <div className="relative flex items-center">
                <IoAlarmOutline className=" absolute right-[65%] text-7xl text-purple-400" />
                <span className="relative z-50 px-3 py-1 rounded-full bg-purple-700 text-sm font-semibold text-white">
                  {new Date().getHours()}:{new Date().getMinutes()}AM
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* right */}
        <div className="w-full p-2 rounded-md shadow-lg">
          {/* <Chart
            // type={chartType[chartIndex]}
            type="area"
            width={"100%"}
            height={140}
            series={[
              {
                name: "spent",
                data: [500, 400, 550, 350, 450, 500],
              },
            ]}
            options={{
              colors: ["#168df5"],
              tooltip: {
                followCursor: true,
              },
              grid: {
                show: false,
              },
              dataLabels: {
                formatter: (val) => `${val}Br.`,
                style: {
                  colors: ["#010205"],
                },
              },
              yaxis: {
                labels: {
                  show: false,
                },
              },
              xaxis: {
                tickPlacement: "on",
                categories: [1990, 1995, 2000, 2005, 2010, 2015],
              },
              legend: {
                show: false,
              },
            }}
          ></Chart> */}
          <Chart
            width={"100%"}
            height={155}
            type="bar"
            series={[
              {
                name: "spent",
                data: [
                  120,
                  100,
                  145,
                  170,
                  100,
                  200,
                  125,
                  125,
                  160,
                  150,
                  130,
                  100
                ]
              }
            ]}
            options={{
              legend: {
                show: false
              },
              dataLabels: {
                show: false,
                formatter: val => ``
              },
              tooltip: {
                fillSeriesColor: true
              },
              xaxis: {
                categories: [
                  "Sep",
                  "Oct",
                  "Nov",
                  "Dec",
                  "Jan",
                  "Feb",
                  "Mar",
                  "Apr",
                  "May",
                  "Jun",
                  "Jul",
                  "Aug"
                ],
                tickPlacement: "off"
              },
              yaxis: {
                labels: {
                  show: false
                }
              },
              grid: {
                show: false
              },
              plotOptions: {
                bar: {
                  distributed: true
                  // colors: ["#00B136", "#B23601", "#011CB2", "#A001B2"],
                }
              }
            }}
          ></Chart>
          {/* <div className="flex items-center justify-center">
            <button
              className="text-[1.25rem] active:animate-spin"
              onClick={() => {
                chartTypeSwitcher();
              }}
            >
              <IoReload />
            </button>
          </div> */}
        </div>
      </div>
      {/* bottom */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-1 pb-[1%]">
        {/* left table */}
        <div className="w-full rounded-md bg-sky-100 p-[1%]">
          {/* header */}
          <header className="flex items-center justify-between border-b border-gray-300 pb-3">
            <div>
              <h3 className="text-gray-700 font-bold">Case Team</h3>
            </div>
            <div className="flex items-center">
              <div className="flex items-center justify-start bg-white rounded-sm">
                <CiSearch className="text-lg ml-1" />
                <input
                  type="text"
                  placeholder="search ..."
                  className="focus:outline-none w-[120px] sm:w-[150px] md:w-[250px] focus:ring-0 bg-transparent border-none text-xs my-[.05rem] h-[28px]"
                />
              </div>
            </div>
            <div>
              <button className="text-gray-500 text-xs font-semibold">
                view all
              </button>
            </div>
          </header>
          {/* table container */}
          <div
            className="max-h-[26vh] overflow-y-auto mt-[.13rem] pr-1"
            id="case-team-table-container"
          >
            <table className="w-full">
              <tbody>
                {caseTeams.map((team, index) => (
                  <tr
                    key={index}
                    className="bg-white mb-1 border-b-8 border-sky-100 text-xs text-gray-900"
                  >
                    <td>
                      <div className="flex items-center justify-start gap-x-1 p-1">
                        <div>
                          <img
                            src={team.profile}
                            alt=""
                            className="w-[24px] h-[24px] rounded-full"
                          />
                        </div>
                        <div>
                          <span>
                            {team.first_name} {team.last_name}
                          </span>
                        </div>
                      </div>
                    </td>
                    <td>{team.proffession}</td>
                    <td className="hidden xl:flex">
                      <span className="xl:mt-2">{team.phone}</span>
                    </td>
                    <td>
                      <button
                        className={`px-3 py-1 rounded-md ${
                          team.status === "ACTIVE"
                            ? "bg-yellow-400"
                            : "bg-red-400"
                        } text-white lowercase`}
                      >
                        {team.status}
                      </button>
                    </td>
                    <td>
                      <div className="relative">
                        <button
                          onClick={e => {
                            if (isUserMore) {
                              setIsUserMore(null);
                            } else {
                              setIsUserMore(team);
                            }
                          }}
                        >
                          <MdOutlineMoreVert className="text-xl" />
                        </button>
                        {caseTeams[index].first_name ===
                        isUserMore?.first_name ? (
                          <div className="absolute bg-white top-[100%] right-0 z-50 shadow-md border border-gray-300">
                            <ul className="px-3 py-1">
                              <li
                                className="flex items-center gap-x-1 py-1 font-semibold cursor-pointer mb-1 border-b border-gray-300"
                                onClick={e => {
                                  e.stopPropagation();
                                  setIsUserMorePopup(team);
                                  setIsUserMore(null);
                                }}
                              >
                                <BiSolidUserDetail className="text-lg text-gray-500" />
                                Detail
                              </li>
                              <li className="flex items-center gap-x-1 py-1 font-semibold cursor-pointer mb-1 border-b border-gray-300">
                                <MdOutlineMail className="text-lg text-gray-500" />
                                Message
                              </li>
                            </ul>
                          </div>
                        ) : (
                          <></>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        {/* right card */}
        <div className="shadow-sm p-[1%] w-full sm:w-[35%]">
          <header className="flex items-center justify-between border-b border-r-gray-300">
            <div>
              <h3 className="font-semibold text-gray-600">Case History</h3>
            </div>
            <div>
              <button className="text-xs font-semibold text-gray-500">
                view all
              </button>
            </div>
          </header>
          <div
            className="h-[30vh] w-[100%] sm:w-[230px] overflow-y-auto py-2 pr-2"
            id="case-history-list-container"
          >
            {/* case history cards */}
            {caseHistory?.length > 0 ? (
              <>
                {caseHistory.map((history, index) => (
                  <div
                    key={index}
                    className={`bg-white p-1 border-l-4 ${
                      history.status === "ACTIVE"
                        ? "border-green-400"
                        : "border-red-400"
                    } rounded-md shadow-md py-2 mt-5 pl-2`}
                  >
                    <div className="flex items-center justify-between text-gray-500 text-sm">
                      <div>
                        <span>{history.file_no}</span>
                      </div>
                      <div>
                        <button>
                          <CiEdit className="text-lg" />
                        </button>
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold ">{history.case_place}</h3>
                      <span className="text-xs font-semibold text-gray-500">
                        {history.caseType}
                      </span>
                    </div>
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-xs text-gray-500">
                          {history.status === "ACTIVE" ? (
                            <>starts {history.case_date} ago</>
                          ) : (
                            <>closed {history.case_date} ago</>
                          )}
                        </span>
                      </div>
                      <div className="relative flex-grow flex items-center justify-end">
                        <div className="absolute right-6">
                          <img
                            src={history.lawyers[0]}
                            alt=""
                            className="w-[22px] h-[22px] rounded-full"
                          />
                        </div>
                        <div className="absolute right-3">
                          <img
                            src={history.lawyers[1]}
                            alt=""
                            className="w-[22px] h-[22px] rounded-full"
                          />
                        </div>
                        <div className="relative z-[1200] w-[22px] h-[22px] border-2 border-gray-500 rounded-full flex items-center justify-center bg-white">
                          <span className="text-xs font-semibold text-gray-500">
                            +5
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </>
            ) : (
              <div>No Case History</div>
            )}
          </div>
        </div>
      </div>
      <div className="w-full pt-5 pb-10 border-t-[1px] border-black border-opacity-10">
              <div>
                <span className="font-medium text-gray-700">Designed by </span>
                <span className="font-black text-gray-500">
                  Skylight Technology
                </span>
              </div>
      </div>
    </div>
  );
};

export default CustomerDashboardHome;
