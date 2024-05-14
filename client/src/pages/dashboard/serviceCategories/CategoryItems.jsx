import { MoreHoriz } from "@mui/icons-material";
import React, { useContext } from "react";
import Charts from "../../../components/Charts";
import SmallChart from "../../../components/SmallChart";
import { mobileContext } from "../HomeDashboard";

const CategoryItems = (props) => {
  const context = useContext(mobileContext);

  return (
    <div
      className={`h-[130px] py-2  w-full border ${context.borderColor} rounded-sm  flex flex-col gap-2 items-start justify-start px-3`}
    >
      <div className="flex title items-center justify-start gap-2 w-full">
        <div className={``}>{props.icon}</div>
        <p className={``}>{props.title}</p>
      </div>
      <div className={`flex items-center justify-center gap-2 self-start`}>
        <p className="title font-bold">{props.number}</p>
        <p className={`small `}>
          {props.description}{" "}
          <span className={`ml-2 ${props.textColor}`}>12% in last week</span>
        </p>
      </div>
      <div className=" -mt-[22px]  p-0 h-24  w-full">
        <SmallChart
          type="area"
          color={props.color}
          height={100}
          series={[
            {
              name: props.title,
              data: props.data,
            },
          ]}
        />
      </div>
    </div>
  );
};

export default CategoryItems;
