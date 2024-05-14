import React from "react";
import { Link } from "react-router-dom";
import { useReadQuery } from "../../../features/api/apiSlice";
import Tables from "../../../components/Tables";

const AllRoles = () => {
  const { data } = useReadQuery();
  const { data: role } = useReadQuery();
  // console.log(role, "roles");
  const columns = [
    {
      name: "No",
      cell: (row, i) => <div>{i + 1}</div>,
      sortable: true,
      width: "20px",
    },
    {
      name: "Role name",
      selector: (row) => row.role_name,
      cell: (row) => <div style={{ fontSize: 12 }}>{row.role_name}</div>,
      sortable: true,
      compact: true,
    },
    {
      name: "ID",
      selector: (row) => row.id,
      cell: (row) => <div style={{ fontSize: 12 }}>{row.id}</div>,
      sortable: true,
      compact: true,
    },
    {
      name: "Created at",
      selector: (row) => row.createdAt,
      cell: (row) => (
        <div style={{ fontSize: 12 }}>
          {row?.createdAt?.toString().split("T")[0].replaceAll("-", "/")}
        </div>
      ),
      sortable: true,
      compact: true,
    },
    {
      name: "Updated at",
      selector: (row) => row.updatedAt,
      cell: (row) => (
        <div style={{ fontSize: 12 }}>
          {row?.updatedAt?.toString().split("T")[0].replaceAll("-", "/")}
        </div>
      ),
      sortable: true,
      compact: true,
    },
    {
      name: "Actions",
      selector: (row) => row.roles,
      cell: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/dashboard/role-all/detail#${row.id}`}
            className="px-2 py-1 rounded-sm border text-white bg-green-500"
          >
            Detail
          </Link>
          <Link
            to={`/dashboard/role-all/update#${row.id}`}
            className="px-2 py-1 rounded-sm border text-white bg-yellow-500"
          >
            Update
          </Link>
        </div>
      ),
      sortable: true,
      compact: true,
    },
  ];
  return (
    <div>
      {/* <Tables data={data} columns={columns} title="Total roles" /> */}
    </div>
  );
};

export default AllRoles;
