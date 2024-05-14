import React, { useState } from "react";
import LoadingButton from "../components/loading/LoadingButton";
import { useResetPasswordMutation } from "../features/api/apiSlice";
import Response from "../components/Response";
import { useLocation } from "react-router";

const Reset = () => {
  const resetToken = useLocation().search.split("?")[1];
  const [resetData, resetResponse] = useResetPasswordMutation();
  const [pending, setPending] = useState(false);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const resetHandler = () => {
    resetData({ password, confirmPassword, resetToken });
  };

  return (
    <div className="w-full gap-3 bg-gray-200 h-[100vh] flex items-start justify-start">
      {/* <div className="flex flex-[30%] bg-blue-500 h-[100vh]"></div>
      <div className="flex flex-[70%]  h-[100vh]"></div> */}
      {/* <div className="absolute p-20 top-0 left-0 w-full h-[100vh] bg-transparent rounded-lg"> */}
      <Response
        response={resetResponse}
        setPending={setPending}
        type="reset"
        redirectTo="/login"
      />
      <div className="w-full relative h-[75vh] shadow-lg flex flex-col lg:flex-row-reverse rounded-sm bg-white mt-8">
        <div className="w-full lg:flex relative bg-white  lg:flex-[50%] py-8 ">
          <a href="/" className="text-xl absolute left-5 top-2 font-bold">
            <svg
              class="w-6 h-6 text-gray-800 dark:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M5 12h14M5 12l4-4m-4 4 4 4"
              />
            </svg>
          </a>
          <div class="w-full flex flex-col justify-center px-5 lg:px-20 mx-auto">
            {" "}
            <p className="text-xl font-bold">Forget</p>
            <p className="mt-2">
              Please insert the email that we have sent in your email.
            </p>
            <div class="mb-2 w-full mt-4">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                New Password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="new password"
                required
              />
            </div>
            <div class="mb-5 w-full mt-4">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Confirm Password
              </label>
              <input
                onChange={e => setConfirmPassword(e.target.value)}
                type="password"
                id="password"
                class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="confirm password"
                required
              />
            </div>
            <LoadingButton
              pending={pending}
              onClick={resetHandler}
              title="Next"
              color="bg-blue-500"
              width="w-48"
            />
          </div>
        </div>
        <div className="hidden lg:flex flex-[50%] ">
          <img src="./bg-1.jpg" alt="" className="w-full brightness-75" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Reset;
