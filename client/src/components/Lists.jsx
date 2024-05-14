import { useEffect, useState } from "react";

const Lists = (props) => {
  let total = 0;
  useEffect(() => {
    props.setRemaining(
      props.totalAmount - props.onPending - props.payed - props.list.amount * 1
    );
  }, [props.list.amount]);

  useEffect(() => {
    const payed = props.lists?.filter((e) => e.status === "Payed");
    let p = 0;
    payed?.map((e) => {
      p += e.amount;
    });
    props.setPayed(p);

    const onPending = props.lists?.filter((e) => e.status === "Pending");
    let pend = 0;
    onPending?.map((e) => {
      pend += e.amount * 1;
    });
    props.setOnPending(pend);

    props.setRemaining(props.remaining * 1 - props.list.amount * 1);
    console.log(props.lists, "adddddddddddddddd");
  }, [props.lists]);

  useEffect(() => {
    props.setRemaining(props.paymentDetail.remaining * 1);
  }, []);

  const format = (val) => {
    return (val / 1).toLocaleString("en-US", {
      minimumFractionDigits: 1,
      maximumFractionDigits: 1,
    });
  };

  // console.log(props.lists, "lists");
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        for="name"
        class="block mb-2 px-4 pt-2 text-lg font-bold text-gray-900 dark:text-white"
      >
        {props.title}
      </label>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 items-start flex-col lg:flex-row gap-5 justify-between w-full my-2">
        <div className="flex flex-col items-start">
          <p className="font-bold text-lg">Total</p>
          <p className="">
            {format(props.totalAmount)}
            birr <span className="text-xs font-bold text-main ml-1">100%</span>
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-bold text-lg">Remaining</p>
          <p className="">
            {format(props.remaining)} birr
            <span className="text-xs font-bold text-main ml-1">
              {(((props.remaining * 1) / props.totalAmount) * 100).toFixed(2)}%
            </span>
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-bold text-lg">Payed</p>
          <p className="">
            {format(props.payed)} birr{" "}
            <span className="text-xs font-bold text-main ml-1">
              {(((props.payed * 1) / props.totalAmount) * 100).toFixed(2)}%
            </span>
          </p>
        </div>{" "}
        <div className="flex flex-col items-start">
          <p className="font-bold text-lg">Pending</p>
          <p className="">
            {format(props.onPending)} birr{" "}
            <span className="text-xs font-bold text-main ml-1">
              {(((props.onPending * 1) / props.totalAmount) * 100).toFixed(2)}%
            </span>
          </p>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 mt-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  gap-4 borders rounded-lg px-4">
        {props.lists?.length > 0 ? (
          props.lists.map((e, i) => {
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
                          e.status === "Pending" ? "bg-main" : "bg-emerald-500"
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
                    <div
                      onClick={() => {
                        props.setLists(props.lists.filter((d) => d !== e));
                        props.setRemaining(props.remaining * 1 + e.amount * 1);
                      }}
                      className="flex cursor-pointer gap-2 items-center justify-center h-10 mt-2 rounded-lg w-full hover:bg-red-600 text-white bg-red-500"
                    >
                      <svg
                        class="w-4 h-4 cursor-pointer"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                        <path
                          stroke="currentColor"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M6 18 17.94 6M18 18 6.06 6"
                        />
                      </svg>
                      <p>Remove</p>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        ) : (
          <></>
        )}

        <div className=" border w-full py-1 px-2 rounded-lg border-gray-300 bg-gray-50 bg-dark flex items-center justify-between gap-2">
          <div className="flex w-full p-2.5 h-auto flex-col gap-2">
            <div className="flex flex-col gap-1 items-start">
              <p className="">Amount</p>
              <input
                onChange={(e) => {
                  props.setList({
                    ...props.list,
                    amount: e.target.value,
                    percent: (
                      100 -
                      ((props.totalAmount - props.list.amount) /
                        props.totalAmount) *
                        100
                    ).toFixed(2),
                  });
                  // props.setRemaining(totalRemaining * 1 + e.target.value * 1);
                }}
                type="Number"
                id="name"
                min={0}
                // max={props.remaining}
                class="bg-gray-50 w-full bg-dark mr-3 rounded-lg border-gray-300 focus:outline-0 focus:ring-0 h-10 "
                placeholder="Amount"
                value={props.list.amount}
                required
              />
            </div>

            <div className="flex flex-col mt-2 gap-1 items-start">
              <p className="">Percent(%)</p>
              <p className="bg-gray-50 border p-2.5 w-full bg-dark mr-3 rounded-lg border-gray-300 focus:outline-0 focus:ring-0 h-10 ">
                {(
                  100 -
                  ((props.totalAmount - props.list.amount) /
                    props.totalAmount) *
                    100
                ).toFixed(2)}
              </p>
            </div>
            <div className="flex flex-col mt-2 gap-1 items-start">
              <p className="">Deadline</p>
              <input
                onChange={(e) =>
                  props.setList({
                    ...props.list,
                    deadline: e.target.value,
                  })
                }
                type="date"
                id="name"
                class="bg-gray-50 w-full bg-dark mr-3 rounded-lg border-gray-300 focus:outline-0 focus:ring-0 h-10 "
                placeholder="Amount"
                value={props.list.deadline}
                required
              />
            </div>
            <div
              onClick={props.addLists}
              className="flex cursor-pointer gap-2 items-center justify-center h-10 mt-2 rounded-lg w-full hover:bg-yellow-500 text-white bg-main"
            >
              <svg
                class="w-6   h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14m-7 7V5"
                />
              </svg>
              <p>Add</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Lists;
