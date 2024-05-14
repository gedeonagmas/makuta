import React from "react";

const Loading = (props) => {
  return (
    <div
      className={`flex gap-2 ${props.width} mt-3 ${props.color} ${
        props.text ? props.text : "text-white"
      } py-[7px] px-4 items-center justify-center rounded-sm`}
    >
      <div className="loader"></div>
      <p className="font-semibold">Loading...</p>
    </div>
  );
};

export default Loading;
