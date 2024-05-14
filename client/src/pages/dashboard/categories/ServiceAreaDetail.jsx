import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  useDeleteMutation,
  useReadQuery,
} from "../../../features/api/apiSlice";
import Loading from "../../../components/loading/Loading";
import LoadingButton from "../../../components/loading/LoadingButton";
import Popup from "../../../components/Popup";
import Response from "../../../components/Response";
import { Delete, History, Refresh } from "@mui/icons-material";

const ServiceAreaDetail = () => {
  const location = useLocation();

  const { data, isFetching, isError } =
    location.state &&
    useReadQuery({
      url: `/cases?category[eq]=${location?.state?._id}`,
      tag: ["categories"],
    });

  const [deleteData, response] = location?.state && useDeleteMutation();
  const [pending, setPending] = useState(false);
  const deleteHandler = () => {
    deleteData({
      url: `/categories?id=${location?.state?._id}`,
      type: location.state.deleted ? "active" : "delete",
      tag: ["categories"],
    });
  };

  return (
    <div className="center">
      {isFetching && <Loading />}
      {isError && <p>something went wrong unable to read the data</p>}
      <Response response={response} setPending={setPending} />
      <Popup
        content={
          <LoadingButton
            pending={pending}
            onClick={deleteHandler}
            title={location?.state?.deleted ? "Recover" : "Delete"}
            color="bg-red-500"
            width="w-full"
          />
        }
        trigger={
          location?.state?.deleted ? (
            <div className="flex cursor-pointer gap-2 rounded-sm p-1 items-center justify-center text-white bg-yellow-500">
              <Refresh /> Recover
            </div>
          ) : (
            <div className="flex cursor-pointer gap-2 rounded-sm p-1 items-center justify-center text-white bg-red-500">
              <Delete fontSize="small" /> Delete
            </div>
          )
        }
      />
      <div className="grids mt-2">
        {data ? (
          data?.data?.map((d, i) => {
            return (
              <div
                key={i}
                className="center flex-col border border-gray-200 p-2 rounded-md"
              >
                <p className="">case name: {d.name}</p>
                <p className="">category id: {d.category}</p>
                <p className="">
                  description: Lorem, ipsum dolor sit amet consectetur
                  adipisicing elit. Cupiditate animi consectetur, voluptatibus
                  recusandae reprehenderit impedit harum expedita quibusdam,
                  quidem magni quis dolor deserunt, adipisci tenetur. Explicabo
                  porro unde dignissimos nulla?
                </p>

                {/*  */}
              </div>
            );
          })
        ) : (
          <div className="center">There is no data to display</div>
        )}
      </div>
    </div>
  );
};

export default ServiceAreaDetail;
