import React, { useState } from "react";
import {
  useCreateMutation,
  useReadQuery,
} from "../../../features/api/apiSlice";
import Response from "../../../components/Response";
import LoadingButton from "../../../components/loading/LoadingButton";

const CreateNewCase = () => {
  const [createData, createResponse] = useCreateMutation();
  const {
    data: manager,
    isLoading: managerIsLoading,
    isError: managerIsError,
  } = useReadQuery({
    url: "/user/users?role[eq]=case-manager-main&populatingType=users&populatingValue=user",
    tag: ["cases"],
  });

  const [pending, setPending] = useState(false);

    console.log(manager,'manager');
  const createHandler = () => {
    createData({ url: `/user/cases`, tag: ["cases", "categories"] });
  };

  return (
    <div className="w-full h-auto flex flex-col items-center justify-center">
      <Response response={createResponse} setPending={setPending} />

      {/* form */}
      <div className="flex flex-col gap-5 w-[80%] p-10 border border-gray-300 rounded-xl">
        <div class="mb-5">
          <label
            for="email"
            class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >
            Case name
          </label>
          <input
            type="text"
            id="text"
            class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
            placeholder="Divorce"
            required
          />
        </div>
        <LoadingButton
          pending={pending}
          onClick={createHandler}
          title="Create"
          color="bg-blue-500"
          width="w-48"
        />
      </div>
    </div>
  );
};

export default CreateNewCase;
