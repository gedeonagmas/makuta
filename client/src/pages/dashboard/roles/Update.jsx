import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useReadQuery,
  useUpdateMutation,
} from "../../../features/api/apiSlice";
import LoadingButton from "../../../components/loading/LoadingButton";
import Response from "../../../components/Response";

const Update = () => {
  const location = useLocation();

  const { data } = useReadQuery({
    id: location?.hash?.split("#")[1],
  });

  const [tables, setTables] = useState([]);

  useEffect(() => {
    if (data) {
      setTables(Object.keys(data?.roles));
    }
  }, [data]);

  const [roleData, roleResponse] = useUpdateMutation();
  const [pending, setPending] = useState(false);

  const [dataToBeSent, setData] = useState({
    role_name: data?.role_name,
    roles: {},
    id: location?.hash?.split("#")[1],
  });

  useEffect(() => {
    if (data) setData({ roles: data?.roles, role_name: data.role_name });
  }, [data]);

  const roleUpdateHandler = () => {
    dataToBeSent &&
      roleData({ ...dataToBeSent, id: location?.hash?.split("#")[1] });
  };

  return (
    <>
      <Response response={roleResponse} setPending={setPending} />
      <input
        onChange={(e) =>
          setData({ ...dataToBeSent, role_name: e.target.value })
        }
        className="p-2 border-2 border-gray-500 rounded-sm"
        type="text"
        placeholder="role name"
        defaultValue={dataToBeSent.role_name}
      />
      {tables &&
        tables.map((each, i) => {
          return (
            <div key={i}>
              <div
                style={{ display: "flex", margin: 4 }}
                className="flex border gap-6 p-4 border-blue-500"
              >
                <div className="flex items-center gap-2">
                  <p className="">{each}</p>
                  <input
                    id="create"
                    checked={
                      dataToBeSent?.roles[each].includes("create")
                        ? true
                        : false
                    }
                    onChange={() => {}}
                    type="checkbox"
                    onClick={(e) => {
                      if (e.target.checked) {
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: ["create"],
                          },
                        });
                      } else {
                        let oldArray = [...dataToBeSent.roles[each]];
                        if (oldArray.includes("create")) {
                          let index = oldArray.indexOf("create");
                          oldArray.splice(index, 1);
                        }
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: oldArray,
                          },
                        });
                      }
                    }}
                    className="m-2"
                    placeholder="Create"
                  />
                  <p>Create</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    checked={
                      dataToBeSent?.roles[each].includes("update")
                        ? true
                        : false
                    }
                    onClick={(e) => {
                      if (e.target.checked)
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: [...dataToBeSent.roles[each], "update"],
                          },
                        });
                      else {
                        let oldArray = [...dataToBeSent.roles[each]];
                        if (oldArray.includes("update")) {
                          let index = oldArray.indexOf("update");
                          oldArray.splice(index, 1);
                        }
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: oldArray,
                          },
                        });
                      }
                    }}
                    onChange={() => {}}
                    type="checkbox"
                    className="m-2"
                    placeholder="Create"
                  />
                  <p>Update</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    checked={
                      dataToBeSent?.roles[each].includes("read") ? true : false
                    }
                    onClick={(e) => {
                      if (e.target.checked)
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: [...dataToBeSent.roles[each], "read"],
                          },
                        });
                      else {
                        let oldArray = [...dataToBeSent.roles[each]];
                        if (oldArray.includes("read")) {
                          let index = oldArray.indexOf("read");
                          oldArray.splice(index, 1);
                        }
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: oldArray,
                          },
                        });
                      }
                    }}
                    onChange={() => {}}
                    type="checkbox"
                    className="m-2"
                    placeholder="Create"
                  />
                  <p>Read</p>
                </div>
                <div className="flex items-center gap-2">
                  <input
                    checked={
                      dataToBeSent?.roles[each].includes("delete")
                        ? true
                        : false
                    }
                    onClick={(e) => {
                      if (e.target.checked)
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: [...dataToBeSent.roles[each], "delete"],
                          },
                        });
                      else {
                        let oldArray = [...dataToBeSent.roles[each]];
                        if (oldArray.includes("delete")) {
                          let index = oldArray.indexOf("delete");
                          oldArray.splice(index, 1);
                        }
                        setData({
                          ...dataToBeSent,
                          roles: {
                            ...dataToBeSent.roles,
                            [each]: oldArray,
                          },
                        });
                      }
                    }}
                    onChange={() => {}}
                    type="checkbox"
                    className="m-2"
                    placeholder="Create"
                  />
                  <p>Delete</p>
                </div>
              </div>
              <hr />
            </div>
          );
        })}{" "}
      <LoadingButton
        pending={pending}
        onClick={roleUpdateHandler}
        title="Update role"
        color="bg-blue-500"
      />
    </>
  );
};

export default Update;
