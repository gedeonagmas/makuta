import { AccessTime, Balance } from "@mui/icons-material";
import React, { createContext, useState } from "react";
import Header from "../../components/Header";
import Sidebar from "../../components/Sidebar";
import { Link, Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Dashboard";
import CaseChart from "./caseChart/CaseChart";
import Applications from "./applications/Applications";
import Chat from "./chat/Chat";
import Representative from "./representatives/Representative";
import Payment from "./payment/Payment";
import Lawyer from "./lawyers/Lawyer";
import CreateRole from "./roles/CreateRole";
import AllRoles from "./roles/AllRoles";
import Update from "./roles/Update";
import Detail from "./roles/Detail";
// import Customers from "./customers/Customers";
import Consulting from "./consulting/Consulting";
import Tutorials from "./tutorials/Tutorials";
import Reports from "./reports/Reports";

import ServiceAreaDetail from "./categories/ServiceAreaDetail";
import ServiceAreaRead from "./categories/ServiceAreaRead";
import ServiceAreaCreate from "./categories/ServiceAreaCreate";
import ServiceAreaUpdate from "./categories/ServiceAreaUpdate";
import CreateNewCase from "./caseChart/CreateNewCase";
import ActiveCase from "./caseChart/ActiveCase";
import ClosedCase from "./caseChart/ClosedCase";
import FinalHeader from "../../components/FinalHeader";

export const mobileContext = createContext();

const HomeDashboard = ({ role }) => {
  // const user = JSON.parse(sessionStorage.getItem("gsm-user"));
  const location = useLocation();
  const paths = location.pathname.split("/");

  const greetingHandler = () => {
    const hour = new Date().getHours();
    let greeting = "";
    if (hour < 10) greeting = "Good Morning";
    else if (hour < 20) greeting = "Good Afternoon";
    else greeting = "Good Evening";
    return greeting;
  };

  const dateHandler = () => {
    const date = new Date().toString().split(" ").splice(0, 4).join(" ");
    const time = new Date()
      .toString()
      .split(" ")[4]
      .split(":")
      .splice(0, 2)
      .join(":");
    const type = new Date().getHours() < 12 ? "AM" : "PM";
    return `${date}  ${time} ${type}`;
  };

  const [mobile, setMobile] = useState(false);
  const [nightMode, setNightMode] = useState(false);
  const borderColor = `${nightMode ? "border-gray-700" : "border-gray-200"}`;

  return (
    <mobileContext.Provider
      value={{
        mobile,
        setMobile,
        nightMode,
        setNightMode,
        borderColor,
        role: "super-admin",
      }}
    >
      <div
        className={`flex h-[100vh]  w-full flex-col ${
          nightMode ? "bg-gray-800 text-gray-400" : "bg-white text-gray-600"
        }`}
      >
        <div
          className={`flex border ${borderColor} justify-between items-center`}
        >
          <div className="flex items-center w-[300px] gap-2 p-2">
            <Balance fontSize="large" />{" "}
            <p className="title font-semibold">MACUTTA</p>
          </div>
          {/* <Header /> */}
          {/* <FinalHeader /> */}
        </div>
        <div className="w-full h-auto flex ">
          {mobile && (
            <Sidebar
              type="mobile"
              value={`h-[91.2vh] ${
                nightMode
                  ? "bg-gray-800 text-gray-500"
                  : "bg-white text-gray-500"
              } absolute md:hidden w-[300px] pb-5 z-20`}
            />
          )}
          <Sidebar value="h-[91.2vh] hidden md:block w-[300px] pb-5  z-20" />
          <div className="flex flex-col overflow-y-scroll w-full h-[90.5vh]  px-5 py-2">
            <div className="w-full flex justify-between items-center py-2 px-2">
              <div className="flex flex-col">
                <div className="title flex text-blue-500">
                  <p className="uppercase">
                    {paths[paths.length - 1].toString().split("")[0]}
                  </p>
                  <p>
                    {paths[paths.length - 1]
                      .replaceAll("-", " ")
                      .split("")
                      .splice(1, paths[paths.length - 1].length - 1)}
                  </p>{" "}
                </div>
                <div className="w-auto mb-2 mt-1 flex items-center">
                  {paths.map((path, i) => (
                    <div key={i} className="flex gap-4">
                      {i !== paths.length - 1 && (
                        <Link
                          to={location.pathname
                            .split("/")
                            .splice(0, i + 1)
                            .join("/")}
                        >
                          {path.replaceAll("-", " ")}/
                        </Link>
                      )}
                      {i === paths.length - 1 && (
                        <p className="text-blue-500">
                          {paths.pop().replaceAll("-", " ") + " >"}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
              <div className="hidden md:flex gap-1 flex-col items-end justify-end h-auto w-auto">
                <p className="font-semibold">{greetingHandler()} Tewodros</p>
                <p className="flex text-[10px] gap-1 items-center text-gray-400">
                  <AccessTime sx={{ width: 16, height: 16 }} />
                  {dateHandler()}
                </p>
              </div>
            </div>

            {/* {user && ( */}
            <Routes>
              <Route path="/" element={<Dashboard />}></Route>
              <Route path="/service-area" element={<ServiceAreaRead />} />
              <Route
                path="/service-area/update"
                element={<ServiceAreaUpdate />}
              />
              <Route
                path="/service-area/detail"
                element={<ServiceAreaDetail />}
              />
              <Route
                path="/service-area/create"
                element={<ServiceAreaCreate />}
              />
              <Route path="/case-chart" element={<CaseChart />} />
              <Route path="/applications" element={<Applications />} />
              <Route path="/chat" element={<Chat />} />
              <Route path="/representative" element={<Representative />} />
              <Route path="/payment" element={<Payment />} />
              <Route path="/lawyer" element={<Lawyer />} />
              <Route path="/role-create" element={<CreateRole />} />
              <Route path="/role-all" element={<AllRoles />} />
              <Route path="/role-all/update" element={<Update />} />
              <Route path="/role-all/detail" element={<Detail />} />
              {/* <Route path="/customers" element={<Customers />} /> */}
              <Route path="/consulting" element={<Consulting />} />
              <Route path="/tutorials" element={<Tutorials />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/create-new-case" element={<CreateNewCase />} />
              <Route path="/active-case" element={<ActiveCase />} />
              <Route path="/closed-case" element={<ClosedCase />} />
              <Route path="*" element={<p>Path not resolved</p>} />
            </Routes>
            {/* )} */}
          </div>
        </div>
      </div>
    </mobileContext.Provider>
  );
};

export default HomeDashboard;
