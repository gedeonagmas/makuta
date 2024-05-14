import React, { useContext } from "react";
import { useReadQuery } from "../../../features/api/apiSlice";
import Loading from "../../../components/loading/Loading";
import { Link } from "react-router-dom";

const ServiceAreaRead = () => {
  const { data, isFetching, isError } = useReadQuery({
    url: `/user/categories`,
    tag: ["categories"],
  });

  console.log(isFetching, isError, data, "ddddd");

  return (
    <div className="w-full h-full flex flex-col items-center justify-center">
      {isFetching && <Loading />}
      {isError && <p>something went wrong unable to read the data</p>}
      <Link
        to="/dashboard/service-area/create"
        className="py-2 px-4 rounded-sm self-end bg-blue-500 text-white"
      >
        create new
      </Link>
      <div className="grids mt-2">
        {data ? (
          data?.data?.map((d, i) => {
            return (
              <div
                key={i}
                className="flex flex-col w-auto gap-2 rounded-md border p-3 border-gray-200 shadow-sm"
              >
                <p className="">{d.name}</p>
                <div className="flex justify-between w-full items-center">
                  <p className="text-lg font-bold">{d.type}</p>
                  <button>status: {d.deleted ? "deleted" : "active"}</button>
                </div>
                <div className="flex gap-2">
                  <Link
                    to="/dashboard/service-area/detail"
                    className="button-nb"
                    state={{ ...d }}
                  >
                    detail
                  </Link>
                  <Link
                    to="/dashboard/service-area/update"
                    className="button-nb"
                    state={{ ...d }}
                  >
                    update
                  </Link>
                </div>
              </div>
            );
          })
        ) : (
          <div className="center">There is no data to display</div>
        )}
      </div>
    </div>
  );
};

export default ServiceAreaRead;
