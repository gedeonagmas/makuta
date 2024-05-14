import React, { useEffect, useState } from "react";
import { useUpdateMutation } from "../features/api/apiSlice";
import Response from "../components/Response";
import Loading from "../components/loading/Loading";
import PageNotFound from "../components/PageNotFound";

const Success = () => {
  const [updateCaseData, updateCaseResponse] = useUpdateMutation();
  const [pending, setPending] = useState(false);
  const paymentData = window.localStorage.getItem("macuta_law_firm_system");
  useEffect(() => {
    const data = JSON.parse(paymentData);
    let rounds = [];

    data?.paymentDetail?.rounds.map((e) => {
      if (e._id === data?.roundId) {
        e.amount = e.amount;
        e.percent = e.percent;
        e.deadline = e.deadline;
        e.status = "Payed";
        rounds.push(e);
      } else {
        rounds.push(e);
      }
      return rounds;
    });

    updateCaseData({
      url: `/user/cases?id=${data?.caseId}`,
      tag: ["cases"],
      paymentDetail: {
        ...data.paymentDetail,
        payed: data.paymentDetail.payed + data.amount,
        pending:
          data.paymentDetail.pending <= 0
            ? 0
            : data.paymentDetail.pending - data.amount,
        customerAgreementStatus: "Accepted",
        rounds,
      },
    });
  }, []);

  return (
    <div className="text-xl font-extrabold w-full h-full  flex gap-3 flex-col items-center justify-center">
      <Response
        response={updateCaseResponse}
        setPending={setPending}
        redirectTo="/dashboard/customer/on-request"
        type="payment"
      />
      {paymentData ? (
        <div className="p-5 rounded-lg border shadow-lg bg-white">
          <p className="font-bold">We are making things ready for you.</p>
          <p className="text-sm max-w-screen-sm">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti
            commodi explicabo a dignissimos sequi! Quisquam nostrum.
          </p>
          <div className="px-2 py-2 flex gap-1 items-center justify-center text-2xl font-extrabold">
            <Loading /> <p>Paying...</p>
          </div>
        </div>
      ) : (
        <PageNotFound />
      )}
    </div>
  );
};

export default Success;
