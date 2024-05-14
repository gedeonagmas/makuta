import React, { useState } from "react";
import {
  useCreateMutation,
  useReadQuery,
} from "../../../features/api/apiSlice";
import Response from "../../../components/Response";
import LoadingButton from "../../../components/loading/LoadingButton";
import Tables from "../../../components/Tables";
import { Link } from "react-router-dom";

const ClientType = () => {
  const { data } = useReadQuery();
  const [clientData, clientResponse] = useCreateMutation();
  const [pending, setPending] = useState(false);
  const [client, setClient] = useState("");

  const clientCreateHandler = () => {
    client && clientData({ name: client });
  };

  const columns = [
    {
      name: "No",
      cell: (row, i) => <div>{i + 1}</div>,
      sortable: true,
    },
    {
      name: "name",
      selector: (row) => row.name,
      cell: (row) => <div style={{ fontSize: 12 }}>{row.name}</div>,
      sortable: true,
      // compact: true,
    },
    {
      name: "ID",
      selector: (row) => row.id,
      cell: (row) => <div style={{ fontSize: 12 }}>{row.id}</div>,
      sortable: true,
      // compact: true,
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
      // compact: true,
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
      // compact: true,
    },
    {
      name: "Actions",
      selector: (row) => row.roles,
      cell: (row) => (
        <div className="flex gap-2">
          <Link
            to={`/dashboard/clientType/update#${row.id}`}
            className="px-2 py-1 rounded-sm border text-white bg-yellow-500"
          >
            Update
          </Link>
        </div>
      ),
      sortable: true,
      // compact: true,
    },
  ];
  console.log(data, "data");
  return (
    <>
      <div>
        <Tables data={data} columns={columns} title="Total client types" />
      </div>
      <div className="flex relative flex-col items-center p-5 justify-start w-auto h-auto">
        <Response response={clientResponse} setPending={setPending} />
        <p className="self-start">Client type</p>
        <input
          onChange={(e) => setClient(e.target.value)}
          type="text"
          className="py-1 px-2 rounded-md border border-blue-400 focus:outline-blue-500"
          placeholder="Client type"
        />

        <LoadingButton
          pending={pending}
          onClick={clientCreateHandler}
          title="Create new"
          color="bg-blue-500"
        />
      </div>
    </>
  );
};

export default ClientType;
