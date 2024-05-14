import React, { useState } from "react";
import LoadingButton from "../components/loading/LoadingButton";
import { useUserLoginMutation } from "../features/api/apiSlice";
import Response from "../components/Response";
// import { ReactMediaRecorder } from "react-media-recorder";

const Login = () => {
  const [loginData, loginResponse] = useUserLoginMutation();
  const [pending, setPending] = useState(false);
  const [pass, setPass] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const loginHandler = () => {
    if (!pass) {
      setErrorPopup(true);
    } else {
      setErrorPopup(false);
      loginData({ email, password });
    }
  };

  return (
    <div className="w-full gap-3 bg-gray-200 h-[100vh] flex items-start justify-start">
      {/* <div className="hidden lg:flex lg:flex-[30%] bg-blue-500 h-[100vh]"></div>
      <div className="hidden lg:flex lg:flex-[70%]  h-[100vh]"></div> */}
      {/* <div className="absolute p-20 top-0 left-0 w-full h-[100vh] bg-transparent rounded-lg"> */}
      <Response response={loginResponse} setPending={setPending} type="login" />
      <div className="w-full relative h-[75vh] shadow-lg flex flex-col lg:flex-row-reverse rounded-sm mt-8">
        <div className="lg:flex px-5 relative bg-white w-full lg:flex-[50%] py-8 ">
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
          <div class="w-full lg:max-w-sm mx-auto">
            {" "}
            <p className="text-xl font-bold">Login</p>
            <div class="mb-5 w-full mt-7">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                onChange={e => setEmail(e.target.value)}
                type="email"
                id="email"
                class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                placeholder="name@flowbite.com"
                required
              />
            </div>
            <div class="mb-5 w-full">
              <label
                for="password"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your password
              </label>
              <input
                onChange={e => setPassword(e.target.value)}
                type="password"
                id="password"
                class="shadow-sm  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
                required
              />
            </div>
            <div class="flex items-start mb-5">
              <div class="flex items-center h-5">
                <input
                  onChange={e =>
                    e.target.checked
                      ? (setPass(true), setErrorPopup(false))
                      : (setPass(false), setErrorPopup(true))
                  }
                  id="terms"
                  type="checkbox"
                  value=""
                  class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
                  required
                />
              </div>
              <label
                for="terms"
                class="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                I agree with the{" "}
                <a
                  href="#"
                  class="text-blue-600 hover:underline dark:text-blue-500"
                >
                  terms and conditions
                </a>
              </label>
            </div>
            {errorPopup && (
              <p className="font-bold py-3 -mt-4">
                please agree with our terms and condition
              </p>
            )}
            <LoadingButton
              pending={pending}
              onClick={loginHandler}
              title="Login"
              color="bg-blue-500"
              width="w-48"
            />
            <p
              for="terms"
              class="mt-8 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Don't you have an account?
              <a
                href="/Signup"
                class="text-blue-600 ml-2 hover:underline dark:text-blue-500"
              >
                Register now
              </a>
            </p>
            <a
              href="/forget"
              class="mt-2 text-sm font-medium text-blue-600 hover:underline dark:text-blue-500"
            >
              Forget password?
            </a>
          </div>
        </div>
        <div className="hidden w-full lg:flex lg:flex-[50%] ">
          <img src="./bg-1.jpg" alt="" className="w-full brightness-75" />
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Login;
