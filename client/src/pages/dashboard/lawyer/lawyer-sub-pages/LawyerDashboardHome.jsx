import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import Chart from "react-apexcharts";

// tanstack table
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  getFilteredRowModel,
} from "@tanstack/react-table";

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
  IoCloseOutline,
} from "react-icons/io5";
import { BiSolidMessageAdd } from "react-icons/bi";
import { IoMdMore } from "react-icons/io";
import { IoArrowDownSharp } from "react-icons/io5";
import { LuAlarmClock } from "react-icons/lu";
import { IoCalendarNumberOutline } from "react-icons/io5";
import { FiSearch } from "react-icons/fi";

import { VscDebugStackframeActive } from "react-icons/vsc";
import { MdOutlinePending } from "react-icons/md";
import { GiCardboardBoxClosed } from "react-icons/gi";
import { FaPlus } from "react-icons/fa6";
import { FaClock } from "react-icons/fa";

// data files
import { caseHistory, lawyerCustomers } from "../../../../DataFile";

/// sub pages
import LawyerCustomersTable from "./LawyerCustomersTable";

// main
// CustomerDashboardHome
const LawyerDashboardHome = () => {
  // local states
  const [isUserMore, setIsUserMore] = useState(null);
  const [isUserMorePopup, setIsUserMorePopup] = useState(null);

  const [filtering, setFiltering] = useState("");

  // custome cells
  const customeCustomersCell = ({ row }) => {
    const { first_name, last_name, profile } = row.original;
    return (
      <div className="flex items-center justify-start gap-1">
        {/* profile */}
        <div>
          <img
            src={profile}
            alt="lawyer customer profile"
            className="w-[24px] h-[24px] rounded-full object-center object-cover"
          />
        </div>
        <div className="flex flex-col">
          <span className="font-bold text-sm">{first_name}</span>
          <span className="text-gray-500 text-xs">{last_name}</span>
        </div>
      </div>
    );
  };
  const customeCustomersDateCell = ({ row }) => {
    const { start_date, end_date } = row.original;
    return <span>{start_date}</span>;
  };

  // lawyer customers columns
  const lawyerCustomersColumns = [
    {
      header: "customers",
      accessorKey: "firts_name",
      cell: customeCustomersCell,
    },
    {
      header: "start date",
      accessorKey: "start_date",
      // cell: customeCustomersDateCell,
    },
    {
      header: "end date",
      accessorKey: "end_date",
      // cell: customeCustomersDateCell,
    },
    {
      header: "file no",
      accessorKey: "file_no",
    },
    {
      header: "court place",
      accessorKey: "court_place",
    },
    {
      header: "court bench",
      accessorKey: "court_bench",
    },
    {
      header: "status",
      accessorKey: "status",
    },
    {
      header: "actions",
      accessorKey: "",
      cell: () => <button>action</button>,
    },
  ];

  // data
  const lawyerCustomersData = useMemo(() => lawyerCustomers, []);

  // table
  const lawyerCustomersTable = useReactTable({
    data: lawyerCustomersData,
    columns: lawyerCustomersColumns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      globalFilter: filtering,
    },
    onGlobalFilterChange: setFiltering,
  });

  return (
    <div className="p-[2%] relative h-[91vh] overflow-y-auto">
      {isUserMorePopup ? (
        <div className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white shadow-lg rounded-sm z-[5000]">
          <motion.div
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.15 }}
            className="bg-white z-[1200] w-max right-0 top-[2rem] rounded-md cursor-default shadow-xl flex flex-col items-center p-3"
            onClick={(e) => {
              e.stopPropagation();
            }}
          >
            <header className="flex items-center justify-between gap-16 py-2 border-b-2 border-gray-400">
              {/* left */}
              <div className="flex items-center gap-1">
                <div>
                  <img
                    src={isUserMorePopup.profile}
                    alt=""
                    className="w-[32px] h-[32px] rounded-full mr-1"
                  />
                </div>
                <div>
                  <div className="font-semibold text-gray-700">
                    Legal Case Appointment
                  </div>
                  <div className="flex items-center justify-start gap-1">
                    <span className="text-xs text-gray-500">
                      {isUserMorePopup.first_name}
                    </span>
                    <span className="text-xs text-gray-500">
                      {isUserMorePopup.last_name}
                    </span>
                  </div>
                </div>
              </div>
              {/* right */}
              <div>
                <button
                  className="flex items-center justify-center p-2 rounded-full bg-gray-200"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsUserMore(null);
                    setIsUserMorePopup(null);
                  }}
                >
                  <IoCloseOutline className="text-xl" />
                </button>
              </div>
            </header>
            {/* first portion */}
            <div className="my-2 py-2 border-b border-gray-200 text-gray-700 w-full flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">preivous shift</h3>
              </div>
              <div>
                <h3 className="my-1">Arrive</h3>
                <div>
                  <span className="bg-blue-500 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                  -<span>06:00</span>
                </div>
              </div>
              <div>
                <h3 className="my-1">depart</h3>
                <div>
                  <span className="bg-orange-400 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                </div>
              </div>
              <div>
                <h3 className="my-1">pasue</h3>
                <div>
                  <span>06:00</span>
                </div>
              </div>
            </div>
            {/* first portion */}
            <div className="my-2 py-2 border-b border-gray-200 text-gray-700 w-full flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">next shift</h3>
              </div>
              <div>
                <h3 className="my-">Arrive</h3>
                <div>
                  <span>09:30</span>-
                  <span className="bg-blue-500 text-white rounded-sm px-1 py-[.13rem]">
                    06:00
                  </span>
                </div>
              </div>
              <div>
                <h3 className="my-1">depart</h3>
                <div>
                  <span>09:30</span>
                </div>
              </div>
              <div>
                <h3 className="my-1">pasue</h3>
                <div>
                  <span className="bg-green-500 text-white rounded-sm px-1 py-[.13rem]">
                    06:00
                  </span>
                </div>
              </div>
            </div>
            {/* first portion */}
            <div className="my-2 py-2 border-b border-gray-200 text-gray-700 w-full flex items-center justify-between gap-3">
              <div>
                <h3 className="font-semibold">final shift</h3>
              </div>
              <div>
                <h3 className="my-1">Arrive</h3>
                <div>
                  <span className="bg-blue-500 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                  -<span>06:00</span>
                </div>
              </div>
              <div>
                <h3 className="my-1">depart</h3>
                <div>
                  <span className="bg-orange-500 text-white rounded-sm px-1 py-[.13rem]">
                    09:30
                  </span>
                </div>
              </div>
              <div>
                <h3 className="my-1">pasue</h3>
                <div>
                  <span>06:00</span>
                </div>
              </div>
            </div>
            <div className="my-2 py-3  w-full flex items-center justify-center">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsUserMore(null);
                  setIsUserMorePopup(null);
                }}
                className="text-white px-5 py-1 rounded-sm bg-blue-500"
              >
                save chnages
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
                Ma<span className="text-blue-700">ku</span>tta
              </h3>
            </div>
            <div>
              <h1 className="text-xl font-bold">Legal Management System</h1>
              <p>
                Explore the network of{" "}
                <span className="font-black text-blue-700">500+</span> lawyers
                who are members of our service
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
      <div className="py-[1%]">
        {/* numbers contaoner */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-5">
          {/* top left */}
          <div className="w-full shadow-md p-[1%] rounded-md">
            {/* header */}
            <header className="flex items-center justify-between">
              <div>
                <h3 className="text-gray-900 font-semibold">Total Cases</h3>
              </div>
              <div>
                <button className="text-xs px-3 py-1 rounded-full border border-gray-200 transition-all ease-in-out duration-300 hover:border-gray-400">
                  view detail
                </button>
              </div>
            </header>
            {/* content */}
            <div className="flex items-center justify-between gap-5 py-[3%]">
              <div>
                <h3 className="lawyer-case-number">23.4k</h3>
                <div className="text-green-500 flex items-center justify-center gap-1">
                  <VscDebugStackframeActive />
                  <span>active</span>
                </div>
              </div>
              <div>
                <h3 className="lawyer-case-number">13.4k</h3>
                <div className="text-orange-500 flex items-center justify-center gap-1">
                  <MdOutlinePending />
                  <span>pending</span>
                </div>
              </div>
              <div>
                <h3 className="lawyer-case-number">17.3k</h3>
                <div className="text-red-700 flex items-center justify-center gap-1 ">
                  <GiCardboardBoxClosed />
                  <span>closed</span>
                </div>
              </div>
              <div className="flex flex-col items-end justify-end">
                <h3 className="font-bold">43.7lk</h3>
                <span className="text-xs text-gray-500">total cases </span>
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-full flex items-center justify-between gap-5">
            {/* left */}
            <div className="w-[55%] px-[3%] rounded-md shadow-md">
              <header className="flex items-center justify-between gap-5">
                <div className="mb-5 mt-1">
                  <h3 className="text-gray-700 font-semibold text-[.975rem]">
                    customers
                  </h3>
                </div>
                <div className="mb-5 mt-1">
                  <span className="text-xs font-semibold">12.75k</span>
                </div>
              </header>
              <div className="flex items-center justify-between gap-5 mt-3 mb-4">
                <div>
                  <h3 className="text-3xl font-black text-yellow-600">789</h3>
                </div>
                <div>
                  <div className="flex items-center justify-center px-2 py-1 rounded-full border border-blue-700 bg-blue-50 text-blue-700 text-xs font-semibold">
                    <FaPlus />
                    <span>34.64</span>
                  </div>
                </div>
              </div>
            </div>
            {/* right */}
            <div className="w-[40%] px-[3%] rounded-md shadow-md">
              <header className="flex items-center justify-between gap-5">
                <div className="mb-5 mt-1">
                  <h3 className="text-gray-700 font-semibold text-[.975rem]">
                    services
                  </h3>
                </div>
                <div className="mb-5 mt-1">
                  <span className="text-xs font-semibold">12.75k</span>
                </div>
              </header>
              <div className="flex items-center justify-between gap-5 mt-3 mb-4">
                <div>
                  <h3 className="text-3xl font-black text-yellow-600">7/24</h3>
                </div>
                <div>
                  <div className="flex items-center justify-center px-2 py-1 text-xs font-semibold">
                    <LuAlarmClock className="text-3xl text-blue-700" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* table container */}
        <LawyerCustomersTable />
      </div>
    </div>
  );
};

export default LawyerDashboardHome;
