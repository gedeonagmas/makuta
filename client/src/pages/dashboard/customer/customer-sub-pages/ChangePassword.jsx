import React, { useContext, useEffect, useState } from "react";
import { userContext } from "../../../../App";
import { useUpdatePasswordMutation } from "../../../../features/api/apiSlice";
import Response from "../../../../components/Response";
import LoadingButton from "../../../../components/loading/LoadingButton";

const ChangePassword = () => {
  const context = useContext(userContext);

  const [updateData, updateResponse] = useUpdatePasswordMutation();
  const [pending, setPending] = useState(false);

  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const updateHandler = () => {
    updateData({ currentPassword, newPassword, confirmPassword });
  };

  console.log(context, "context"); 
  return (
    <div className="w-full h-[100vh] pb-10 pt-5 overflow-y-scroll px-5 flex flex-col gap-3">
      <Response response={updateResponse} setPending={setPending} type='reset' redirectTo='/login'/>
      <div className="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Current Password
        </label>
        <input
          onChange={(e) => setCurrentPassword(e.target.value)}
          type="text"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          required
        />
      </div>

      <div className="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          New Password
        </label>
        <input
          onChange={(e) => setNewPassword(e.target.value)}
          type="password"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="New password"
        />
      </div>

      <div className="mb-5">
        <label
          for="name"
          class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Confirm Password
        </label>
        <input
          onChange={(e) => setConfirmPassword(e.target.value)}
          type="password"
          id="name"
          class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Confirm password"
          required
        />
      </div>

      <div className="mb-10">
        <LoadingButton
          pending={pending}
          onClick={updateHandler}
          title="Update Password"
          color="bg-main"
          width="w-52"
        />
      </div>
    </div>
  );
};

export default ChangePassword;
