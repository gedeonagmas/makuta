import React, { useContext, useState } from "react";
import { useReadQuery } from "../../../../../features/api/apiSlice";
import Response from "../../../../../components/Response";
import Loading from "../../../../../components/loading/Loading";
import customerImage from "../../../../../assets/images/customers/customer-i.jpg";
import LoadingButton from "../../../../../components/loading/LoadingButton";
import { format } from "timeago.js";
import Pay from "../../../../Pay";
import { userContext } from "../../../../../App";

// icons
import { MdClose } from "react-icons/md";

const OnRequest = () => {
  // local state
  const [caseDetail,setCaseDetail] = useState(false)

  const [pending, setPending] = useState(false);
  const context = useContext(userContext);
  const { data: cases, isFetching, isError } = useReadQuery({
    url: `/user/cases?category[eq]=${"Civil"}&user[eq]=${
      context?.user?._id
    }&populatingType=cases&populatingValue=user`, //civil will be context
    tag: ["cases"]
  });

  console.log(context?.user, "context");
  const formatSalary = val => {
    return (val / 1).toLocaleString("en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1
    });
  };

  const caseAcceptHandler = () => {
    //
  };

  const caseRejectHandler = () => {
    //
  };
  const paymentHandler = () => {
    //
  };
  // console.log(cases?.data, "cases");
  return (
    <div className="w-full h-[84vh] px-[2%]">
      {!true ? (
        <>
          {/* <Response response={updateCaseResponse} setPending={setPending} /> */}
          {/* {isFetching && <Loading width="w-40" text="text-black" />}
          {isError && <p>something went wrong unable to read the data</p>} */}
          <div className="w-full flex  flex-col h-[100vh] overflow-y-scroll">
            {cases && cases?.data
              ? cases.data.map(c => {
                  return (
                    <div className="flex w-full flex-col gap-5 items-center border border-gray-200">
                      <div className="w-full flex gap-5 items-start justify-between  rounded-sm p-4">
                        <div className="flex max-w-[400px] flex-col gap-3 items-start justify-start">
                          <p className="text-lg font-bold uppercase">
                            {c?.category}
                          </p>
                          <p className="font-bold">
                            ID:{" "}
                            <span className="ml-2 font-normal">
                              {c?.caseId}
                            </span>
                          </p>
                          <p className="font-bold">
                            type:{" "}
                            <span className="ml-2 font-normal">{c?.type}</span>
                          </p>
                          <p className="font-bold">
                            sub type:{" "}
                            <span className="ml-2 font-normal">
                              {c?.subType}
                            </span>
                          </p>
                          <div className="flex font-bold flex-col gap-2">
                            services:
                            <div className="flex flex-col gap-2">
                              <span className="ml-2 font-normal">
                                {c?.services.map(s => (
                                  <p className="ml-4">
                                    - {s} <br />
                                  </p>
                                ))}
                              </span>
                            </div>
                          </div>
                          <p className="font-bold">
                            description:{" "}
                            <span className="ml-2 font-normal">
                              {c?.description}
                            </span>
                          </p>
                          <p className="font-bold">
                            created at:{" "}
                            <span className="ml-2 font-normal">
                              {format(c?.createdAt)}
                            </span>
                          </p>
                          <p className="font-bold">
                            status:{" "}
                            <span className="ml-2 font-normal">
                              {c?.status}
                            </span>
                          </p>
                          <p className="font-bold">
                            updated at:{" "}
                            <span className="ml-2 font-normal">
                              {format(c?.createdAt)}
                            </span>
                          </p>
                        </div>
                        <div className="flex font-bold flex-col gap-y-3 items-start justify-start">
                          <img
                            src={customerImage}
                            alt=""
                            className="w-40 h-40 self-center rounded-sm mt-4"
                          />
                          <p className="font-bold">
                            customer type:{" "}
                            <span className="ml-2 font-normal">
                              {c?.user?.role}
                            </span>
                          </p>
                          <p className="font-bold">
                            full name:{" "}
                            <span className="ml-2 font-normal">
                              {"gedeon agmas dires"}
                            </span>
                          </p>
                          <p className="font-bold">
                            address:{" "}
                            <span className="ml-2 font-normal">
                              {"Addiss ababa"}
                            </span>
                          </p>
                          <p className="font-bold">
                            email:{" "}
                            <span className="ml-2 font-normal">
                              {c?.user?.email}
                            </span>
                          </p>
                          <p className="font-bold">
                            premium status:{" "}
                            <span className="ml-2 font-normal">
                              {c?.user?.isPro ? "premium" : "basic"}
                            </span>
                          </p>
                          <p className="font-bold">
                            status:{" "}
                            <span className="ml-2 font-normal">
                              {c?.status}
                            </span>
                          </p>
                        </div>
                      </div>
                      <div className="flex p-4 flex-col w-full items-start gap-5 justify-between mt-2">
                        <div className="w-full flex flex-col gap-5">
                          <div>
                            <label
                              for="first_name"
                              class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                            >
                              Total salary
                            </label>
                            <p className="w-full font-bold text-xl p-4">
                              {c.paymentDetail.total}
                            </p>
                            {/* <input
                        onChange={(e) => setTotal(e.target.value)}
                        type="number"
                        id="first_name"
                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                        placeholder="52,000.00 birr"
                        value={total}
                        required
                      /> */}
                          </div>
                          <div className="flex flex-col  gap-5 w-full">
                            <div className="flex flex-col  gap-2">
                              <div class="flex flex-col gap-2  border  rounded-lg p-2.5 w-full pb-6 mb-4">
                                {/* <Lists
                            list={payment}
                            setList={setPayment}
                            lists={payments}
                            setLists={setPayments}
                            addLists={addPayments}
                            totalAmount={total}
                            setRemaining={setRemaining}
                            remaining={remaining}
                            payed={payed}
                            setPayed={setPayed}
                            onPending={onPending}
                            setOnPending={setOnPending}
                            paymentDetail={cases?.data[0].paymentDetail}
                            title="Payments"
                          /> */}
                                <div className="flex w-full flex-col gap-2">
                                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 items-start flex-col lg:flex-row gap-5 justify-between w-full my-2">
                                    <div className="flex flex-col items-start">
                                      <p className="font-bold text-lg">Total</p>
                                      <p className="">
                                        {formatSalary(
                                          c.paymentDetail.total / 1
                                        )}{" "}
                                        birr
                                        <span className="text-xs font-bold text-main ml-1">
                                          100%
                                        </span>
                                      </p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                      <p className="font-bold text-lg">
                                        Remaining
                                      </p>
                                      <p className="">
                                        {formatSalary(
                                          c.paymentDetail.remaining / 1
                                        )}{" "}
                                        birr
                                        <span className="text-xs font-bold text-main ml-1">
                                          {(
                                            (c.paymentDetail.remaining /
                                              c.paymentDetail.total) *
                                            100
                                          ).toFixed(2)}
                                          %
                                        </span>
                                      </p>
                                    </div>
                                    <div className="flex flex-col items-start">
                                      <p className="font-bold text-lg">Payed</p>
                                      <p className="">
                                        {formatSalary(
                                          c.paymentDetail.payed / 1
                                        )}{" "}
                                        birr{" "}
                                        <span className="text-xs font-bold text-main ml-1">
                                          {(
                                            (c.paymentDetail.payed /
                                              c.paymentDetail.total) *
                                            100
                                          ).toFixed(2)}
                                          %
                                        </span>
                                      </p>
                                    </div>{" "}
                                    <div className="flex flex-col items-start">
                                      <p className="font-bold text-lg">
                                        Pending
                                      </p>
                                      <p className="">
                                        {formatSalary(
                                          c.paymentDetail.pending / 1
                                        )}{" "}
                                        birr{" "}
                                        <span className="text-xs font-bold text-main ml-1">
                                          {(
                                            (c.paymentDetail.pending /
                                              c.paymentDetail.total) *
                                            100
                                          ).toFixed(2)}
                                          %
                                        </span>
                                      </p>
                                    </div>
                                  </div>
                                </div>

                                <div className="w-full grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 borders rounded-lg px-4">
                                  {c.paymentDetail?.rounds?.length > 0 ? (
                                    c.paymentDetail?.rounds.map((e, i) => {
                                      return (
                                        <div
                                          key={i}
                                          className=" border w-full py-1 px-2 rounded-lg border-gray-300 bg-gray-50 bg-dark flex items-center justify-between gap-2"
                                        >
                                          <div className="flex w-full p-2.5 h-auto flex-col gap-2">
                                            <div className="flex flex-col mt-2 gap-1 items-start">
                                              <div className="flex w-full items-center justify-between">
                                                <p className="">Amount</p>{" "}
                                                <p
                                                  className={`px-2 text-xs py-[2px] rounded-lg text-white ${
                                                    e.status === "Pending"
                                                      ? "bg-main"
                                                      : "bg-emerald-500"
                                                  }`}
                                                >
                                                  {e.status}
                                                </p>
                                              </div>
                                              <p className="bg-gray-50 border p-2.5 w-full bg-dark mr-3 rounded-lg border-gray-300 focus:outline-0 focus:ring-0 h-10">
                                                {e.amount}
                                              </p>
                                            </div>

                                            <div className="flex flex-col mt-2 gap-1 items-start">
                                              <p className="">Percent(%)</p>
                                              <p className="bg-gray-50 border p-2.5 w-full bg-dark mr-3 rounded-lg border-gray-300 focus:outline-0 focus:ring-0 h-10">
                                                {e.percent}
                                              </p>
                                            </div>

                                            <div className="flex flex-col mt-2 gap-1 items-start">
                                              <p className="">Deadline</p>
                                              <p className="bg-gray-50 border p-2.5 w-full bg-dark mr-3 rounded-lg border-gray-300 focus:outline-0 focus:ring-0 h-10">
                                                {e.deadline}
                                              </p>
                                            </div>
                                            {e.status === "Payed" ? (
                                              <p className="flex  gap-2 items-center justify-center h-10 mt-2 rounded-lg w-full cursor-default text-white bg-emerald-500">
                                                No Action
                                              </p>
                                            ) : (
                                              <Pay
                                                paymentDetail={c.paymentDetail}
                                                roundId={e._id}
                                                caseId={c?._id}
                                                amount={e.amount}
                                              />
                                            )}
                                          </div>
                                        </div>
                                      );
                                    })
                                  ) : (
                                    <></>
                                  )}
                                </div>

                                <div className="p-4">
                                  <label
                                    for="message"
                                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                  >
                                    Payment Description
                                  </label>
                                  {c.paymentDetail.paymentDescription}
                                </div>
                                {/* <div className="flex p-4 mt-2 items-center gap-10">
                            <LoadingButton
                              pending={pending}
                              onClick={caseAcceptHandler}
                              title="Accept"
                              color="bg-yellow-500"
                              width="w-48"
                            />
                            <LoadingButton
                              pending={pending}
                              onClick={caseRejectHandler}
                              title="Reject"
                              color="bg-red-500"
                              width="w-48"
                            />
                          </div> */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })
              : !isFetching && <div>There is no cases to display</div>}
          </div>
        </>
      ) : (
        <></>
      )}
      {/* case list */}
      <div className="w-full h-[84vh] bg-gray-100 rounded-sm relative">
        {/* header */}
        <header className="p-3 border-b-[1px] border-black border-opacity-10 mb-1">
          Header
        </header>
        {/* list */}
        <div className="w-full h-[82vh] bg-gray-100 overflow-y-auto p-3">
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
            {[...Array(20)].map((item, index) => (
              <div key={index} className="bg-white rounded-md shadow-md p-3">
                {/* header */}
                <header className="flex items-center justify-between">
                  {/* left */}
                  <div className="flex items-center gap-3">
                    <div className="p-1 rounded-full text-white bg-green-400 font-bold">
                      civ
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-700 mb-[-5px]">
                        Case Category
                      </h3>
                      <span className="mt-[-5px] text-[.7rem] text-gray-600">
                        CAS1120202988
                      </span>
                    </div>
                  </div>
                  {/* right */}
                  <div className="self-start">
                    <div>
                      <span className="px-2 py-1 rounded-full text-[.7rem] text-red-700 bg-red-100">
                        closed
                      </span>
                    </div>
                  </div>
                </header>
                {/* description */}
                <div className="text-[.85rem] my-2">
                  <h3 className="font-semibold">Description</h3>
                  <div>
                    <p>
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                  </div>
                </div>
                {/* footer */}
                <footer className="flex items-center justify-between">
                  {/* left */}
                  <div className="flex items-center gap-1">
                    <div className="w-[24px] aspect-square rounded-full overflow-hidden">
                      <img
                        className="w-full h-full object-cover object-center"
                        src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg"
                        alt=""
                      />
                    </div>
                    <div className="flex items-center gap-1 text-[.675rem] text-gray-700">
                      <span>Haddis</span>
                      <span>Fanta</span>
                    </div>
                  </div>
                  {/* right */}
                  <div>
                    <button className="px-3 py-[.1rem] transition-all ease-in-out duration-300 hover:bg-blue-100 rounded-full bg-blue-50 text-blue-700" onClick={()=>{
                      setCaseDetail(index)
                    }}>
                      detail
                    </button>
                  </div>
                </footer>
              </div>
            ))}
          </div>
        </div>

        {/* case detail pop up */}
        <div className={`absolute top-5 left-1/2 -translate-x-1/2 bg-white shadow-xl rounded-md p-5 flex items-center justify-between gap-10 transition-all ease-in-out duration-300 ${caseDetail ? 'scale-100 opacity-100' : 'scale-0 opacity-50'}`}>
          {/* user profile */}
          <div>
            <div className="w-[120px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-center"
                src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?size=626&ext=jpg&ga=GA1.1.1224184972.1712102400&semt=sph"
                alt=""
              />
            </div>
            <div className="p-3 rounded-md border-[1px] border-black border-opacity-5 my-3">
              <div className="flex items-center gap-1 my-1">
                <span className="text-gray-700 font-semibold">Name: </span>
                <div className="flex items-center gap-1">
                  <span>Haddis</span>
                  <span>Fanta</span>
                </div>
              </div>
              <div className="flex items-center gap-1 my-1">
                <span className="text-gray-700 font-semibold">Email: </span>
                <div className="flex items-center gap-1">
                  <span>haddisfun@gmail.com</span>
                </div>
              </div>
              <div className="flex items-center gap-1 my-1">
                <span className="text-gray-700 font-semibold">Phone: </span>
                <div className="flex items-center gap-1">
                  <span>+251923996736</span>
                </div>
              </div>
            </div>
          </div>
          {/* case detail */}
          <div className="self-start whitespace-nowrap p-3 border-l border-black border-opacity-10">
            <div className="flex items-center gap-2 my-1">
              <span className="font-bold">Case Category: </span>
              <span>Corporate / Commercial</span>
            </div>
            <div className="flex items-center gap-2 my-1">
              <span className="font-bold">File No: </span>
              <span>FNB12099393933</span>
            </div>
            <div className="flex items-center gap-2 my-1">
              <span className="font-bold">Case Status: </span>
              <span>Pending</span>
            </div>
            <div className="flex items-center gap-2 my-1">
              <span className="font-bold">Case Type: </span>
              <span>Intellectual Property</span>
            </div>
            <div className="flex items-center gap-2 my-1">
              <span className="font-bold">Case subtype: </span>
              <span>Copyright</span>
            </div>
            <div className="max-w-[300px] whitespace-normal my-3">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse
                reprehenderit repellendus ducimus qui explicabo beatae totam
                inventore vitae!
              </p>
            </div>
          </div>
          <div className="absolute bottom-1 right-1">
            <button className="p-1 rounded-full flex items-center justify-center bg-gray-50 transition-all ease-in-out duration-300 hover:bg-gray-200 text-[1.3rem] text-gray-700" onClick={()=>{
              setCaseDetail(null)
            }}>
              <MdClose />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnRequest;
