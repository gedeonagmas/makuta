import { useLocation } from "react-router-dom";
import { useReadQuery } from "../../../features/api/apiSlice";

const Detail = () => {
  const location = useLocation();
  const { data } = useReadQuery({
    id: location?.hash?.split("#")[1],
  });

  console.log(data, location);
  return (
    <div className="flex flex-col items-center gap-4">
      {data ? (
        <div className="flex flex-col items-center gap-6 ">
          {Object.keys(data?.roles).map((e, i) => (
            <div key={i}>
              <div className="flex gap-4 gap-y-1">
                Table name: <p className="font-bold text-blue-500">{e} </p>{" "}
                Permissions:{" "}
                <div className="flex gap-1">
                  {data?.roles[e].map((d, i) => (
                    <div key={i} className="flex gap-1">
                      {d === "read" && (
                        <p className="border border-green-500 text-green-500 rounded-sm px-1 py-[1px] bg-green-100">
                          {d}
                        </p>
                      )}
                      {d === "update" && (
                        <p className="border border-yellow-500 text-yellow-500 rounded-sm px-1 py-[1px] bg-yellow-100">
                          {d}
                        </p>
                      )}
                      {d === "create" && (
                        <p className="border border-blue-500 text-blue-500 rounded-sm px-1 py-[1px] bg-blue-100">
                          {d}
                        </p>
                      )}
                      {d === "delete" && (
                        <p className="border border-red-500 text-red-500 rounded-sm px-1 py-[1px] bg-red-100">
                          {d}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>there is no data to display</p>
      )}
    </div>
  );
};

export default Detail;
