import { useState } from "react";
import { motion } from "framer-motion";
// icons
import { MdOutlineClose } from "react-icons/md";

const CaseCategory = ({
  caseCategories,
  stepCounter,
  setStepCounter,
  setNewCase,
  setNewCaseHistory,
}) => {
  const [caseCategory, setCaseCategory] = useState(null);

  return (
    <div className="py-[2%] h-min overflow-y-auto relative">
      <div className="w-full flex items-center justify-center">
        <h3 className="text-2xl font-black text-gray-700">
          Case Categories
        </h3>
      </div>
      {/* case categories */}
      <div className="flex h-[65vh] pb-5 overflow-auto flex-col lg:flex-row gap-5 p-[1%] pt-[3%]">
        {caseCategories?.map((item, index) => (
          <div
            key={index}
            className="w-[85%] lg:w-[calc(100%/3)]  bg-white h-min p-[3%] rounded-sm shadow-md "
          >
            <div className="flex items-center justify-center">
              <h3 className="text-lg font-semibold text-black my-1">
                {item.caseCategory?.toUpperCase()}
              </h3>
            </div>
            <div className="py-[3%] text-gray-800 border-t border-b border-gray-500 border-opacity-15">
              <p>
                {item.description?.substring(0, item.caseCategory === 'Commercial/Corporate' ? 172 : 167)}
                <span
                  className="font-bold cursor-pointer text-lg text-blue-600"
                  onClick={() => {
                    setCaseCategory(item);
                  }}
                >
                  ...
                </span>
              </p>
            </div>
            <div className="flex items-center justify-center my-[5%]">
              <button
                className={`px-[15%] py-1 rounded-sm text-white ${
                  item.caseCategory === "Civil"
                    ? "bg-yellow-400"
                    : item.caseCategory === "Criminal"
                    ? "bg-yellow-400"
                    : item.caseCategory === "Commercial/Corporate"
                    ? "bg-yellow-400"
                    : ""
                }`}
                onClick={() => {
                  setNewCaseHistory((prev) => {
                    return {
                      ...prev,
                      caseCategory: item?.caseCategory,
                    };
                  });
                  setNewCase(item);
                  setStepCounter(stepCounter + 1);
                }}
              >
                select
              </button>
            </div>
          </div>
        ))}

        {/* pop up */}
        {caseCategory ? (
          <motion.div
            initial={{ scale: 0.5, opacity: 0.75 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="absolute z-50 bg-white left-[2%] md:left-5 top-[5%] w-[95%]  rounded-sm shadow-md p-[3%] max-h-[60vh] overflow-y-auto"
          >
            <div className="flex items-center justify-center">
              <h3 className="text-xl font-bold text-gray-700 my-3">
                {caseCategory.caseCategory}
              </h3>
            </div>
            <div>
              <p className="text-gray-700">{caseCategory.description}</p>
            </div>
            <div>
              <div className="my-[5%] flex items-center p-[1%] gap-[5%] gap-y-5 flex-wrap">
                {caseCategory?.subCategories?.map((sub, index) => (
                  <div
                    key={index}
                    className="font-semibold px-[3%] rounded-sm shadow-md py-1"
                  >
                    {sub.caseName}
                  </div>
                ))}
              </div>
            </div>
            <button
              className="absolute top-3 right-3 text-xl p-1 rounded-full bg-gray-100 transition-all ease-in-out duration-300 hover:bg-gray-200"
              onClick={() => {
                setCaseCategory(null);
              }}
            >
              <MdOutlineClose />
            </button>
          </motion.div>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default CaseCategory;
