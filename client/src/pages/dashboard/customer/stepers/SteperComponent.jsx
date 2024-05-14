import { FaCheck } from "react-icons/fa";

// component
import SteperElement from "./steper-sub-components/SteperElement";

const SteperComponent = ({
  steps,
  stepsHint,
  stepCounter,
  setStepCounter,
}) => {
  const stepElements = Array.apply(null, Array(steps)).map((x, i) => i + 1);
  return (
    <div className="flex-grow bg-white shadow-md rounded-md">
      {/* step hint */}
      <div className="flex items-center justify-center px-[3%] pt-1 gap-1">
        {stepsHint?.map((hint, index) => (
          <div
            key={index}
            className={`flex-grow flex flex-col sm:flex-row sm:gap-x-1`}
          >
            {/* title */}
            <div className="flex items-center gap-1 mr-1">
              <div
                className={`step-hint-text-circle ${
                  stepCounter > index
                    ? "step-hint-text-circle-on"
                    : "step-hint-text-circle-off"
                }`}
              >
                <span>{index + 1}</span>
              </div>
              <h3
                className={`flex sm:hidden font-black text-sm ${
                  stepCounter > index
                    ? "step-hint-text-circle-on"
                    : "step-hint-text-circle-off"
                }`}
              >
                {hint.title}
              </h3>
            </div>

            {/* discrtption */}
            <div>
              <h3
                className={`hidden sm:flex font-black text-sm ${
                  stepCounter > index
                    ? "step-hint-text-circle-on"
                    : "step-hint-text-circle-off"
                }`}
              >
                {hint.title}
              </h3>
              <p
                className={`text-xs sm:text-sm ${
                  stepCounter > index
                    ? "step-hint-text-circle-on"
                    : "step-hint-text-circle-off"
                }`}
              >
                {hint.description}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* steper container */}
      <div className="flex items-center justify-center">
        {/* steps */}
        <div className="flex-grow flex items-center p-[3%]">
          {/* circle */}
          <div
            className={`step-circle ${
              stepCounter >= 1 ? "step-circle-on" : "step-circle-off"
            }`}
            onClick={() => {
              setStepCounter(0);
            }}
          >
            <FaCheck className="text-[.5rem] sm:text-[.75rem] md:text-[.9rem]" />
          </div>
          {stepElements.map((step, index) => (
            <SteperElement
              key={index}
              stepIndex={index + 1}
              currentStep={stepCounter}
              setStepCounter={setStepCounter}
              FaCheck={FaCheck}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default SteperComponent;
