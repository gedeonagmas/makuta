import React from "react";
import { useLocation } from "react-router-dom";

const CaseChart = () => {
  const location = useLocation();
  console.log(location, "location");
  return <div>CaseChart</div>;
};

export default CaseChart;
