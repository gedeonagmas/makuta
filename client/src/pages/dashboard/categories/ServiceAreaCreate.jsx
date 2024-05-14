import { useState } from "react";
import { useCreateMutation } from "../../../features/api/apiSlice";
import LoadingButton from "../../../components/loading/LoadingButton";
import Response from "../../../components/Response";

const ServiceAreaCreate = () => {
  const [data, response] = useCreateMutation();
  const [name, setName] = useState();
  const [type, setType] = useState();

  const [pending, setPending] = useState(false);
  const createHandler = () => {
    data({ name, type, url: `/user/categories`, tag: ["categories"] });
  };

  return (
    <div className="center">
      <Response response={response} setPending={setPending} />

      <div className="w-52 flex flex-col gap-2">
        <p className="title">Category information</p>{" "}
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
          onClick={createHandler}
          title="create"
          color="bg-blue-500"
          width="w-full"
        />
      </div>
    </div>
  );
};

export default ServiceAreaCreate;
