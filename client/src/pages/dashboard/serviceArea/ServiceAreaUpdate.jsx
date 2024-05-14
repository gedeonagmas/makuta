import React, { useEffect, useState } from "react";
import Response from "../../../components/Response";
import LoadingButton from "../../../components/loading/LoadingButton";
import {
  useGetSingleServiceAreaQuery,
  useUpdateServiceAreaMutation,
} from "../../../features/api/apiSlice";

const ServiceAreaUpdate = () => {
  const { data } = useGetSingleServiceAreaQuery({
    id: location?.hash?.split("#")[1],
  });

  const [serviceAreaData, serviceAreaResponse] = useUpdateServiceAreaMutation();
  const [pending, setPending] = useState(false);
  const [name, setName] = useState("");

  const serviceAreaUpdateHandler = () => {
    name &&
      serviceAreaData({
        country_name: name,
        id: location?.hash?.split("#")[1],
      });
  };

  useEffect(() => {
    if (data) setName(data?.name);
  }, [data]);

  return (
    <div className="w-auto flex flex-col items-center">
      <Response response={serviceAreaResponse} setPending={setPending} />
      <p className="">serviceArea type name</p>
      <input
        defaultValue={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
        className="border border-blue-400 focus:outline-blue-500 rounded-sm px-2 py-1 mt-2"
      />
      <LoadingButton
        pending={pending}
        onClick={serviceAreaUpdateHandler}
        title="Update"
        color="bg-blue-500" 
      />
    </div>
  );
};

export default ServiceAreaUpdate;
