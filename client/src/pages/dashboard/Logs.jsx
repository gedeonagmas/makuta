import { MoreHoriz } from "@mui/icons-material";
import React from "react";

const Logs = () => {
  return (
    <div className="flex bg-white px-2 py-2 flex-col">
      <p className="">
        Recent activity <span className="text-gray-400 text-xs">|today</span>
      </p>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-blue-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-green-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-yellow-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-indigo-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
      <div className="flex text-sm mt-1 w-full items-center justify-between text-gray-500 gap-2">
        <div className="flex items-center gap-2">
          <p className="text-sm text-gray-400">32 minutes ago</p>
          <div className="h-3 w-3 rounded-full bg-red-500"></div>
          <p>new application is just arrived</p>
        </div>
        <div className="flex self-end">
          <MoreHoriz className="" />
        </div>
      </div>
    </div>
  );
};

export default Logs;
