import React, { useEffect, useState } from "react";
import LoadingButton from "../../../components/loading/LoadingButton";
import { useCreateMutation } from "../../../features/api/apiSlice";
import Response from "../../../components/Response";
import { TableBar, TableChart, TableRows } from "@mui/icons-material";

const CreateRole = () => {
  const [roleAreas, setRoleAreas] = useState([
    {
      role_area: "client_types",
    },
    {
      role_area: "representatives",
    },
    {
      role_area: "service_areas",
    },
    {
      role_area: "service_catagories",
    },
    {
      role_area: "service_lists",
    },
    {
      role_area: "users",
    },
  ]);

  const [roleData, roleResponse] = useCreateMutation();
  const [pending, setPending] = useState(false);

  const [dataToBeSent, setData] = useState({
    role_name: "",
    roles: {},
  });

  const roleCreateHandler = () => {
    dataToBeSent && roleData(dataToBeSent);
  };

  console.log(dataToBeSent, "datas");
  return (
    <div className="w-full text-gray-500 flex items-center p-5 justify-center">
      <div className="w-[700px] rounded-md p-5 bg-white flex items-center justify-start flex-col">
        <Response response={roleResponse} setPending={setPending} />
        <p className="text-lg font-bold self-center">Create new role</p>
        <p className="label">Role name</p>
        <input
          onChange={(e) =>
            setData({ ...dataToBeSent, role_name: e.target.value })
          }
          className="px-2 py-[6px] border w-full border-gray-300 rounded-sm focus:outline-gray-400"
          type="text"
          placeholder="role name"
        />
        <p className="label">Permissions</p>
        {/* <table className="w-full p-5 rounded-md border border-gray-300">
          <tr className="px-4 py-2 uppercase text-xs border-b border-gray-300">
            <th className="px-4 py-2 border-b border-gray-300 w-auto text-center">
              Tables
            </th>
            <th className="px-4 py-2 border-b border-gray-300 w-auto text-center">
              create
            </th>
            <th className="px-4 py-2 border-b border-gray-300 w-auto text-center">
              read
            </th>
            <th className="px-4 py-2 border-b border-gray-300 w-auto text-center">
              update
            </th>
            <th className="px-4 py-2 border-b border-gray-300 w-auto text-center">
              delete
            </th>
          </tr>
          {roleAreas.map((each, i) => {
            return (
              <tr className="px-4 w-auto text-center">
                <td className="px-4 w-auto text-center">
                  <p className="">client type</p>
                </td>
                <td className="px-4 w-auto text-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-4 w-auto text-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-4 w-auto text-center">
                  <input type="checkbox" name="" id="" />
                </td>
                <td className="px-4 w-auto text-center">
                  <input type="checkbox" name="" id="" />
                </td>
              </tr>
            );
          })}
        </table> */}
        {roleAreas.map((each, i) => {
          return (
            <div
              key={i}
              className="shadow-sm border border-gray-200 rounded-md mt-2 flex items-center justify-center w-full"
            >
              <div className="flex items-center gap-6">
                <div className="flex flex-col gap-1">
                  <p className="text-sm border-bs border-gray-400 font-semibold">
                    Table name
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <TableChart fontSize="small" />
                    <p className="text-gray-400">{each.role_area}</p>
                  </div>
                </div>

                <div className="flex flex-col gap-1">
                  <p className="text-sm border-bs border-gray-400 font-semibold">
                    Actions
                  </p>
                  <div className="flex items-center justify-center gap-2">
                    <input
                      type="checkbox"
                      onClick={(e) => {
                        if (e.target.checked) {
                          setData({
                            ...dataToBeSent,
                            roles: {
                              ...dataToBeSent.roles,
                              [each.role_area]: ["create"],
                            },
                          });
                        } else {
                          let oldArray = [
                            ...dataToBeSent.roles[each.role_area],
                          ];
                          if (oldArray.includes("create")) {
                            let index = oldArray.indexOf("create");
                            oldArray.splice(index, 1);
                          }
                          setData({
                            ...dataToBeSent,
                            roles: {
                              ...dataToBeSent.roles,
                              [each.role_area]: oldArray,
                            },
                          });
                        }
                      }}
                      className="w-5 h-4"
                      placeholder="Create"
                    />
                    <p>Create</p>
                  </div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onClick={(e) => {
                    if (e.target.checked)
                      setData({
                        ...dataToBeSent,
                        roles: {
                          ...dataToBeSent.roles,
                          [each.role_area]: [
                            ...dataToBeSent.roles[each.role_area],
                            "update",
                          ],
                        },
                      });
                    else {
                      let oldArray = [...dataToBeSent.roles[each.role_area]];
                      if (oldArray.includes("update")) {
                        let index = oldArray.indexOf("update");
                        oldArray.splice(index, 1);
                      }
                      setData({
                        ...dataToBeSent,
                        roles: {
                          ...dataToBeSent.roles,
                          [each.role_area]: oldArray,
                        },
                      });
                    }
                  }}
                  type="checkbox"
                  className="m-2"
                  placeholder="Create"
                />
                <p>Update</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onClick={(e) => {
                    if (e.target.checked)
                      setData({
                        ...dataToBeSent,
                        roles: {
                          ...dataToBeSent.roles,
                          [each.role_area]: [
                            ...dataToBeSent.roles[each.role_area],
                            "read",
                          ],
                        },
                      });
                    else {
                      let oldArray = [...dataToBeSent.roles[each.role_area]];
                      if (oldArray.includes("read")) {
                        let index = oldArray.indexOf("read");
                        oldArray.splice(index, 1);
                      }
                      setData({
                        ...dataToBeSent,
                        roles: {
                          ...dataToBeSent.roles,
                          [each.role_area]: oldArray,
                        },
                      });
                    }
                  }}
                  type="checkbox"
                  className="m-2"
                  placeholder="Create"
                />
                <p>Read</p>
              </div>
              <div className="flex items-center gap-2">
                <input
                  onClick={(e) => {
                    if (e.target.checked)
                      setData({
                        ...dataToBeSent,
                        roles: {
                          ...dataToBeSent.roles,
                          [each.role_area]: [
                            ...dataToBeSent.roles[each.role_area],
                            "delete",
                          ],
                        },
                      });
                    else {
                      let oldArray = [...dataToBeSent.roles[each.role_area]];
                      if (oldArray.includes("delete")) {
                        let index = oldArray.indexOf("delete");
                        oldArray.splice(index, 1);
                      }
                      setData({
                        ...dataToBeSent,
                        roles: {
                          ...dataToBeSent.roles,
                          [each.role_area]: oldArray,
                        },
                      });
                    }
                  }}
                  type="checkbox"
                  className="m-2"
                  placeholder="Create"
                />
                <p>Delete</p>
              </div>

              <hr />
            </div>
          );
        })}
        <LoadingButton
          pending={pending}
          onClick={roleCreateHandler}
          title="Create role"
          color="bg-blue-500"
        />
      </div>
    </div>
  );
};

export default CreateRole;
