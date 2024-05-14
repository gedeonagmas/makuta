import React, { useEffect, useState } from "react";
import Response from "../../../components/Response";
import {
  useReadQuery,
  useUpdateMutation,
} from "../../../features/api/apiSlice";
import LoadingButton from "../../../components/loading/LoadingButton";

const ClientTypeUpdate = () => {
  const { data } = useReadQuery({
    id: location?.hash?.split("#")[1],
  });

  const [clientData, clientResponse] = useUpdateMutation();
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");

  const clientUpdateHandler = () => {
    name && clientData({ name, id: location?.hash?.split("#")[1] });
  };

  useEffect(() => {
    if (data) setName(data?.name);
  }, [data]);

  return (
    <div className="w-auto flex flex-col items-center">
      <Response response={clientResponse} setPending={setPending} />
      <p className="">Client type name</p>
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="border border-blue-400 focus:outline-blue-500 rounded-sm px-2 py-1 mt-2"
      />
      <LoadingButton
        pending={pending}
        onClick={clientUpdateHandler}
        title="Update"
        color="bg-blue-500"
      />
    </div>
  );
};

export default ClientTypeUpdate;
