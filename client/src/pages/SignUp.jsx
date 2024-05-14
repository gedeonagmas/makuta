import LoadingButton from "../components/loading/LoadingButton";
import { useUserRegisterMutation } from "../features/api/apiSlice";
import Response from "../components/Response";
import { useState } from "react";
// import { ReactMediaRecorder } from "react-media-recorder";

const Signup = () => {
  const [signupData, signupResponse] = useUserRegisterMutation();
  const [pending, setPending] = useState(false);
  const [pass, setPass] = useState(false);
  const [errorPopup, setErrorPopup] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [role, setRole] = useState("private-customer");

  const signupHandler = () => {
    if (!pass) {
      setErrorPopup(true);
    } else {
      setErrorPopup(false);
      signupData({
        email,
        password,
        confirmPassword,
        role
      });
    }
  };
  console.log(role, "role");
  return (
    <div className="w-full relative py-10 h-auto gap-3  bg-gray-200  flex items-start justify-start">
      {/* <div className="flex flex-[30%] bg-blue-500 h-[100vh]"></div> */}
      {/* <div className="flex flex-[70%]  h-[100vh]"></div> */}
      {/* <div className=" w-full py-10  bg-transparent rounded-lg"> */}
      <Response
        response={signupResponse}
        setPending={setPending}
        type="signUp"
      />{" "}
      <div className="hidden h-auto w-full lg:flex lg:flex-[50%] ">
        <img src="./bg-1.jpg" alt="" className="w-full h-full brightness-75" />
      </div>{" "}
      <div className="flex h-auto relative bg-white w-full  lg:flex-[50%]">
        <div class="max-w-sm relative w-full  px-5 py-5 mx-auto">
          {" "}
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
          <p className="text-xl mt-5 font-bold">Sign up</p>{" "}
          <label
            for="password"
            class="block text-sm mt-5 font-medium text-gray-900 dark:text-white"
          >
            Register as
          </label>
          <select
            onChange={e => setRole(e.target.value)}
            name=""
            id=""
            className="w-full p-2 rounded-lg mt-2 border border-gray-300"
          >
            <option selected value="private-customer">
              Private customer
            </option>
            <option value="business-customer">Business customer</option>
            <option value="lawyer">Lawyer</option>
          </select>
          <div class="mb-5 mt-5">
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
              placeholder="example@gmail.com"
              required
            />
          </div>
          <div class="mb-5">
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
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
              required
            />
          </div>
          <div class="mb-5">
            <label
              for="repeat-password"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Repeat password
            </label>
            <input
              onChange={e => setConfirmPassword(e.target.value)}
              type="password"
              id="repeat-password"
              class="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:shadow-sm-light"
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
                class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-0 dark:bg-gray-700 dark:border-gray-600 "
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
            onClick={signupHandler}
            title="Create new account"
            color="bg-blue-500"
            width="w-48"
          />
          <div className="mb-4"></div>
        </div>
      </div>
    </div>
    // </div>
  );
};

export default Signup;
