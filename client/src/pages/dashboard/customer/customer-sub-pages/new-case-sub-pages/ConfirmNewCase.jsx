import { MdArrowRightAlt } from "react-icons/md";
import {
  MdArrowForwardIos,
  MdOutlineKeyboardArrowRight,
  MdOutlineSubdirectoryArrowRight,
} from "react-icons/md";
import siteLogo from "../../../../../assets/images/site-logo/final-logo.png";
import Response from "../../../../../components/Response";
import LoadingButton from "../../../../../components/loading/LoadingButton";
import { useContext, useState } from "react";
import { userContext } from "../../../../../App";
import { useCreateMutation } from "../../../../../features/api/apiSlice";

const ConfirmNewCase = ({ stepCounter, setStepCounter, newCaseHistory }) => {
  const context = useContext(userContext);
  const [caseData, caseResponse] = useCreateMutation();
  const [pending, setPending] = useState(false);

  console.log(context?.user, "user");
  const caseCreateHandler = () => {
    caseData({
      url: "/user/cases",
      tag: ["cases"],
      user: context?.user?._id,
      caseId: `${newCaseHistory.caseCategory.substring(0, 3).toUpperCase()}--${
        new Date().toISOString().split("T")[0]
      }`,
      category: newCaseHistory.caseCategory,
      type: newCaseHistory.subCaseCategory.title,
      subType: newCaseHistory.subCaseCategory.subSubCaseCategory
        ? newCaseHistory.subCaseCategory.subSubCaseCategory.title
        : newCaseHistory.subCaseCategory.title,
      services: newCaseHistory.services,
      description: newCaseHistory.description,
    });
  };

  console.log(newCaseHistory, "final data");
  return (
    <div className="w-full h-[72vh] p-[1%]">
      <Response response={caseResponse} setPending={setPending} type="signUp" />
      <div className="w-full h-full bg-white rounded-sm">
        <header className="px-[3%] py-1 border-b border-gray-100 flex items-center justify-between">
          <div>
            <h3 className="text-xl font-bold text-gray-700">Summary</h3>
          </div>
          <div>
            <img src={siteLogo} alt="" className="w-[90px] h-[75px]" />
          </div>
        </header>

        <div className="">
          <div className="p-[3%] ">
            <div className="border-b border-gray-200 pb-3">
              <div className="">
                {/* <span>Case Category: </span> */}
                <div className="text-gray-700 font-medium">Case Category:</div>
                <div className="ml-[10%] flex items-center gap-2">
                  <MdOutlineSubdirectoryArrowRight className="text-gray-500 text-lg" />
                  <span className="text-gray-500 font-medium">
                    {newCaseHistory?.caseCategory}
                  </span>
                </div>
              </div>
              {newCaseHistory?.subCaseCategory ? (
                <div className="ml-[15%] whitespace-nowrap flex items-center gap-2">
                  <MdOutlineSubdirectoryArrowRight className="text-gray-500 text-lg" />
                  <span className=" text-gray-500 font-medium">
                    {newCaseHistory?.subCaseCategory.title}
                  </span>
                </div>
              ) : (
                <></>
              )}
              {newCaseHistory?.subCaseCategory?.subSubCaseCategory ? (
                <div className="ml-[20%] whitespace-nowrap flex items-center gap-2">
                  <MdOutlineSubdirectoryArrowRight className="text-gray-500 text-lg" />
                  <span className=" text-gray-500 font-medium">
                    {newCaseHistory?.subCaseCategory?.subSubCaseCategory.title}
                  </span>
                </div>
              ) : (
                <></>
              )}
            </div>
            {newCaseHistory?.services?.length > 0 ? (
              <div className="border-b border-gray-200">
                <h3 className="text-gray-700 font-medium">Services:</h3>
                <div className="ml-[10%] flex gap-[1%] flex-wrap whitespace-nowrap">
                  {newCaseHistory?.services?.map((item, index) => (
                    <div
                      key={index}
                      className="mb-2 font-medium flex items-center gap-[3%] text-gray-700 px-[2%] py-[1%] transition-all ease-in-out duration-300 hover:shadow-md shadow-sm"
                    >
                      <input
                        id={`${index}`}
                        type="checkbox"
                        className="focus:outline-none focus:ring-0"
                        value={item}
                        checked
                        disabled
                        // onChange={inputChangeHandler}
                      />
                      <label htmlFor={`${index}`} className="cursor-pointer">
                        {item}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <></>
            )}

            <div className="flex items-center justify-center gap-3  mt-5">
              <button
                className="px-5 py-1 rounded-sm bg-gray-400 text-white"
                onClick={() => {
                  setStepCounter(0);
                }}
              >
                Cancel
              </button>
              <LoadingButton
                pending={pending}
                onClick={caseCreateHandler}
                title="Submit"
                color="bg-yellow-500"
                width="w-48"
              />
              {/* <button
                className="px-5 py-1 rounded-sm bg-blue-600 text-white"
                onClick={() => {
                  caseCreateHandler();
                  setStepCounter(stepCounter + 1);
                }}
              >
                confirm
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmNewCase;
