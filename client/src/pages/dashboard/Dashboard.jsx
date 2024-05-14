import React, { useContext } from "react";
import Charts from "../../components/Charts";
import Categories from "./serviceCategories/Categories";
import { AccessTime, Star, MoreHoriz, ArrowForward } from "@mui/icons-material";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import DataTable from "react-data-table-component";
import { mobileContext } from "./HomeDashboard";

const Dashboard = (props) => {
  const context = useContext(mobileContext);
  const data = [
    {
      id: 1,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Finished",
    },
    {
      id: 2,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Deleted",
    },
    {
      id: 3,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Pending",
    },
    {
      id: 4,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Finished",
    },
    {
      id: 5,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Deleted",
    },
    {
      id: 6,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebe",
      status: "Canceled",
    },
    {
      id: 7,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Pending",
    },
    {
      id: 8,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Finished",
    },
    {
      id: 9,
      category: "Family",
      caseName: "Divorce",
      clientName: "henok abrham",
      representative: "kidus abebe",

      lawyer: "tigist kebede",
      status: "Canceled",
    },
  ];

  const columns = [
    {
      name: "CATEGORY",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.category}
        </div>
      ),
      sortable: true,
    },
    {
      name: "CASE NAME",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.caseName}
        </div>
      ),
      sortable: true,
    },
    {
      name: "CLIENT NAME",
      selector: (row) => row.age,
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.clientName}
        </div>
      ),
      sortable: true,
    },

    {
      name: "REPRESENTATIVE",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.representative}
        </div>
      ),
      sortable: true,
    },
    {
      name: "LAWYER",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          {row.lawyer}
        </div>
      ),
      sortable: true,
    },
    {
      name: "STATUS",
      cell: (row) => (
        <div
          className={`px-2 py-1 w-[84px] text-center rounded-sm ${
            row.status === "Finished"
              ? "bg-green-500"
              : row.status === "Canceled"
              ? "bg-yellow-500"
              : row.status === "Deleted"
              ? "bg-red-500"
              : "bg-blue-500"
          } text-white`}
        >
          {row.status}
        </div>
      ),
      sortable: true,
    },
    {
      name: "Actions",
      cell: (row) => (
        <div
          className={`${context.nightMode ? "text-gray-400" : "text-gray-600"}`}
        >
          <MoreHoriz sx={{ width: 20, height: 20 }} />
        </div>
      ),
      sortable: true,
    },
  ];

  const role = context.role;
  let value = [5, 3, 4, 2, 4];
  return (
    <div className="flex flex-col w-full h-auto gap-4">
      <Categories />

      {/* first phase */}
      <div className="flex flex-col md:flex-row w-full gap-4 h-auto">
        <div
          className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm flex-[60%]  h-auto`}
        >
          <div
            className={`border-b ${context.borderColor} flex justify-between p-2 items-center`}
          >
            <p className="uppercase">Case chart</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 medium px-4 gap-4 justify-between items-center mt-2">
            <div className="flex py-2 flex-col items-start justify-start">
              <p className="">Total cases</p>
              <p className=" font-bold">
                125
                <span className={`ml-2 font-normal small text-red-500`}>
                  12% in last week
                </span>
              </p>
            </div>

            <div className="flex py-2 flex-col items-start justify-start">
              <p className="">Active cases</p>
              <p className="font-bold">
                32
                <span className={`ml-2 font-normal small text-green-500`}>
                  12% in last week
                </span>
              </p>
            </div>

            <div className="flex py-2 flex-col items-start justify-start">
              <p className="">Closed cases</p>
              <p className=" font-bold">
                35
                <span className={`ml-2 font-normal small text-blue-500`}>
                  12% in last week
                </span>
              </p>
            </div>
          </div>
          <div className="mt-3">
            <Charts
              type="area"
              height={200}
              series={[
                { name: "total cases", data: [20, 26, 58, 41, 56] },
                { name: "finished cases", data: [11, 20, 45, 32, 45] },
                { name: "available cases", data: [2, 11, 23, 12, 30] },
              ]}
            />
          </div>
        </div>

        <div className="flex flex-col gap-4 flex-[40%]">
          <div
            className={`flex flex-col items-center w-full border ${context.borderColor} h-auto`}
          >
            <div
              className={`border-b ${context.borderColor} flex w-full justify-between p-2 items-center`}
            >
              <p className="uppercase">
                {role === "customer" ? "Total spent" : "Total profit"}
              </p>
            </div>
            <div className="flex  flex-col md:flex-row h-auto justify-between mt-2 items-center md:items-start px-2">
              <div className="flex relative flex-col">
                <p className="medium">
                  {role === "customer" ? "Total outcome" : "Total income"}
                </p>
                <p className="title font-bold">
                  320,007 birr{" "}
                  <span className={`ml-2 font-normal small text-red-500`}>
                    21% last month
                  </span>
                </p>
                <p className="  ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Quaerat incidunt quas eius deleniti.
                </p>
              </div>
              <div className="flex w-48 relative py-2 items-start justify-center ">
                <CircularProgressbar value={66} text="25%" />
              </div>
            </div>
          </div>
          <div
            className={`flex flex-col ${context.borderColor} w-full px-2 py-4 border h-full`}
          >
            <div className="font-bold w-full flex justify-between items-center uppercase p-2">
              <p className="">Payment status</p>
              {/* <ArrowForward
                sx={{ width: 20, height: 20 }}
                className="cursor-pointer"
              /> */}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 items-center mt-2 justify-between">
              <div className="flex items-center flex-col">
                <CircularProgressbar
                  value={20}
                  className="h-12 w-12"
                  strokeWidth={24}
                  styles={buildStyles({
                    pathColor: `#0000001`,
                    textColor: "red",
                    trailColor: "rgb(209 213 219)",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <p className="title mt-1 font-bold">133,455</p>
                <p className="uppercase medium">Payed</p>
              </div>

              <div className="flex items-center flex-col">
                <CircularProgressbar
                  value={20}
                  className="h-12 w-12"
                  strokeWidth={24}
                  styles={buildStyles({
                    pathColor: `red`,
                    textColor: "red",
                    trailColor: "rgb(209 213 219)",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <p className="title mt-1 font-bold">122</p>
                <p className="uppercase medium">Pending</p>
              </div>

              <div className="flex items-center flex-col">
                <CircularProgressbar
                  value={20}
                  className="h-12 w-12"
                  strokeWidth={24}
                  styles={buildStyles({
                    pathColor: `orange`,
                    textColor: "red",
                    trailColor: "rgb(209 213 219)",
                    backgroundColor: "#3e98c7",
                  })}
                />
                <p className="title mt-1 font-bold">96</p>
                <p className="uppercase medium">Canceled</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* second phase */}
      {role === "super-admin" && (
        <div
          className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm h-auto`}
        >
          <div
            className={`border-b ${context.borderColor} flex justify-between p-2 items-center`}
          >
            <p className="uppercase">overview of total revenue and profit</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 justify-between py-1 w-full">
            <div className="flex py-2 w-full px-2 gap-1 flex-col items-start justify-start">
              <p className="medium">Last year profit</p>
              <p className=" font-bold">
                3,255,500 birr{" "}
                <span className={`ml-2 font-normal small text-green-500`}>
                  12% in last month
                </span>
              </p>
              <div className="h-2 mt-1 w-[80%] relative bg-gray-200">
                <div className="w-[70%] h-full bg-green-600"></div>
              </div>
            </div>
            <div className="flex py-2 w-full px-2 gap-1 flex-col items-start justify-start">
              <p className="medium">Last 6 month profit</p>
              <p className=" font-bold">
                2,323,500 birr{" "}
                <span className={`ml-2 font-normal small text-blue-500`}>
                  12% in last week
                </span>
              </p>
              <div className="h-2 mt-1 relative w-[80%] bg-gray-200">
                <div className="w-[70%] h-full bg-blue-600"></div>
              </div>
            </div>
            <div className="flex py-2 w-full px-2 gap-1 flex-col items-start justify-start">
              <p className="medium">Last month profit</p>
              <p className=" font-bold">
                32,500 birr{" "}
                <span className={`ml-2 font-normal small text-red-500`}>
                  12% in last week
                </span>
              </p>
              <div className="h-2 mt-1 relative w-[80%] bg-gray-200">
                <div className="w-[70%] h-full bg-red-600"></div>
              </div>
            </div>
            <div className="flex py-2 w-full px-2 gap-1 flex-col items-start justify-start">
              <p className="medium">This week profit</p>
              <p className=" font-bold">
                32,500 birr{" "}
                <span className={`ml-2 font-normal small text-yellow-500`}>
                  12% in last week
                </span>
              </p>
              <div className="h-2 mt-1 relative w-[80%] bg-gray-200">
                <div className="w-[70%] h-full bg-yellow-600"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* third phase */}
      <div
        className={`grid grid-cols-1 gap-4 md:grid-cols-2 ${
          role === "super-admin" || role === "representative-main"
            ? "lg:grid-cols-3"
            : null
        } `}
      >
        <div
          className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm h-auto`}
        >
          <div
            className={`border-b ${context.borderColor} flex justify-between p-2 items-center`}
          >
            <p className="uppercase">
              {role === "super-admin"
                ? "New clients"
                : role === "customer"
                ? "Lawyers"
                : "Your clients"}
            </p>
          </div>

          <div className="flex flex-col gap-2">
            {value.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`p-2 flex justify-between items-center border-b ${context.borderColor}`}
                >
                  <div className="flex gap-3">
                    <img
                      src="./gedi.jpg"
                      alt=""
                      className={`h-10 w-10 rounded-full border ${context.borderColor}`}
                    />
                    <div className="flex  flex-col items-start justify-start">
                      <p className="font-semibold">Gedion Agmas</p>
                      <p className="text-[11px]">gedeonagmas</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MoreHoriz
                      sx={{ width: 20, height: 20 }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div
          className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm h-auto`}
        >
          <div
            className={`border-b ${context.borderColor} flex justify-between p-2 items-center`}
          >
            <p className="uppercase">
              {role === "super-admin"
                ? "Representatives"
                : role === "representative"
                ? "Lawyers"
                : "Representatives"}
            </p>
          </div>
          <div className="flex flex-col gap-2">
            {value.map((e, i) => {
              return (
                <div
                  key={i}
                  className={`p-2 flex justify-between items-center border-b ${context.borderColor}`}
                >
                  <div className="flex gap-3">
                    <img
                      src="./gedi.jpg"
                      alt=""
                      className={`h-10 w-10 rounded-full border ${context.borderColor}`}
                    />
                    <div className="flex flex-col items-start justify-start">
                      <p className="font-semibold">Gedion Agmas</p>
                      <div className="flex w-full items-center gap-2">
                        <div className="h-[6px] mt-1 w-[80%] relative bg-gray-200">
                          <div
                            className={`w-[70%] h-full ${
                              e === 2
                                ? "bg-yellow-300"
                                : e === 3
                                ? "bg-yellow-400"
                                : e === 4
                                ? "bg-yellow-500"
                                : "bg-yellow-600"
                            } `}
                          ></div>
                        </div>
                        <div className="flex items-center justify-center gap-1">
                          <Star
                            sx={{ width: 16, height: 16 }}
                            className="text-yellow-600"
                          />
                          <p className="">4.5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start">
                    <p className="font-semibold">Addiss Ababa</p>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MoreHoriz
                      sx={{ width: 20, height: 20 }}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {role === "super-admin" ? (
          <div
            className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm h-auto`}
          >
            <div
              className={`border-b ${context.borderColor} bg-blue-600 text-white flex justify-between p-2 items-center`}
            >
              <div className="flex gap-1 flex-col">
                <p className="title font-extrabold uppercase">24 days</p>
                <p className="medium">Latest activities</p>
              </div>
              <AccessTime sx={{ width: 52, height: 52 }} />
            </div>

            <div className="flex flex-col h-auto gap-2">
              {value.map((e, i) => {
                return (
                  <div
                    key={i}
                    className={`p-2 flex justify-between items-center border-b ${context.borderColor}`}
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-3 h-3 rounded-full ${
                          e === 2
                            ? "bg-green-500"
                            : e === 3
                            ? "bg-red-500"
                            : e === 4
                            ? "bg-yellow-600"
                            : "bg-blue-500"
                        } `}
                      ></div>
                      <p className="">new user deleted permanently</p>
                    </div>

                    <div className="flex items-center justify-center gap-2">
                      <MoreHoriz
                        sx={{ width: 20, height: 20 }}
                        className="cursor-pointer"
                      />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ) : (
          role === "representative-main" && (
            <div
              className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm h-auto`}
            >
              <div
                className={`border-b ${context.borderColor} flex justify-between p-2 items-center`}
              >
                <p className="uppercase">
                  {role === "super-admin"
                    ? "Top rated lawyers"
                    : role === "representative-main"
                    ? "Lawyers"
                    : "Other Representatives"}
                </p>
              </div>
              <div className="flex flex-col gap-2">
                {value.map((e, i) => {
                  return (
                    <div
                      key={i}
                      className={`p-2 flex justify-between items-center border-b ${context.borderColor}`}
                    >
                      <div className="flex gap-3">
                        <img
                          src="./gedi.jpg"
                          alt=""
                          className={`h-10 w-10 rounded-full border ${context.borderColor}`}
                        />
                        <div className="flex flex-col items-start justify-start">
                          <p className="font-semibold">Gedion Agmas</p>
                          <div className="flex w-full items-center gap-2">
                            <div className="h-[6px] mt-1 w-[80%] relative bg-gray-200">
                              <div
                                className={`w-[70%] h-full ${
                                  e === 2
                                    ? "bg-yellow-300"
                                    : e === 3
                                    ? "bg-yellow-400"
                                    : e === 4
                                    ? "bg-yellow-500"
                                    : "bg-yellow-600"
                                } `}
                              ></div>
                            </div>
                            <div className="flex items-center justify-center gap-1">
                              <Star
                                sx={{ width: 16, height: 16 }}
                                className="text-yellow-600"
                              />
                              <p className="">4.5</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-col items-start justify-start">
                        <p className="font-semibold">Addiss Ababa</p>
                      </div>
                      <div className="flex items-center justify-center gap-2">
                        <MoreHoriz
                          sx={{ width: 20, height: 20 }}
                          className="cursor-pointer"
                        />
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )
        )}
      </div>

      {/* fourth phase */}
      <div
        className={`flex flex-col border ${context.borderColor} rounded-sm shadow-sm h-auto`}
      >
        <div
          className={`border-b ${context.borderColor} flex justify-between p-2 items-center`}
        >
          <p className="uppercase">
            {role === "super-admin" ? "Latest cases" : "Your latest cases"}
          </p>
        </div>

        <DataTable
          columns={columns}
          data={data}
          fixedHeader
          defaultSortAsc
          customStyles={{
            headRow: {
              style: {
                backgroundColor: context.nightMode ? "rgb(31 41 55)" : "white",
                color: context.nightMode ? "rgb(156 163 175)" : "rgb(75 85 99)",
              },
            },
            rows: {
              style: {
                backgroundColor: context.nightMode ? "rgb(31 41 55)" : "white",
                "&:nth-child(2n)": {
                  backgroundColor: context.nightMode
                    ? "rgb(31 41 55)"
                    : "white",
                },
              },
            },
          }}
        />
      </div>

      <p className="mt-4 mb-2  self-center">
        copyright &#169; 2024, Created and designed by{" "}
        <span className="font-bold">Skylight Technologies. </span>
        All rights reserved.
      </p>
    </div>
  );
};

export default Dashboard;
