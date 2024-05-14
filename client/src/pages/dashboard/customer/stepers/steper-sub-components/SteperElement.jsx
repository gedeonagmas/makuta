const SteperElement = ({ stepIndex, currentStep, setStepCounter,FaCheck }) => {
  return (
    <>
      {/* bar */}
      <div
        className={`step-bar ${
          currentStep >= stepIndex ? "step-bar-on" : "step-bar-off"
        }`}
      ></div>
      {/* cirlce */}
      <div
        className={`step-circle ${
          currentStep > stepIndex ? "step-circle-on" : "step-circle-off"
        }`}
        onClick={() => {
          if (currentStep > stepIndex) {
            setStepCounter(stepIndex);
          }
        }}
      >
        {/* {stepIndex + 1} */}
        <FaCheck className="text-[.5rem] sm:text-[.75rem] md:text-[.9rem]"/>
      </div>
    </>
  );
};

export default SteperElement;
