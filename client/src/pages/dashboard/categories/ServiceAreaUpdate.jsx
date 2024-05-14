import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import LoadingButton from "../../../components/loading/LoadingButton";
import { useUpdateMutation } from "../../../features/api/apiSlice";
import Response from "../../../components/Response";

const ServiceAreaUpdate = () => {
  const [data, response] = useUpdateMutation();
  const location = useLocation().state;
  const [name, setName] = useState();
  const [type, setType] = useState();

  useEffect(() => {
    setName(location.name);
    setType(location.type);
  }, [location]);

  const [pending, setPending] = useState(false);

  const updateHandler = () => {
    data({
      name,
      type,
      url: `/categories?id=${location?._id}`,
      tag: ["categories"],
    });
  };

  return (
    <div className="center">
      <Response response={response} setPending={setPending} />
      {location && (
        <div className="w-52 flex flex-col gap-2">
          <p className="title">Category information</p>
          <input
            onChange={(e) => setName(e.target.value)}
            type="text"
            className="input w-full"
            placeholder="name"
            defaultValue={name}
          />
          <input
            onChange={(e) => setType(e.target.value)}
            type="text"
            className="input w-full"
            placeholder="type"
            defaultValue={type}
          />

          <LoadingButton
            pending={pending}
            onClick={updateHandler}
            title="Update"
            color="bg-blue-500"
            width="w-full"
          />
        </div>
      )}
    </div>
  );
};

export default ServiceAreaUpdate;
