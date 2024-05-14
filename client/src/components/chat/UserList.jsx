import React from "react";
import Loading from "../loading/Loading";
import customerImage from "../../assets/images/customers/customer-i.jpg";

const UserList = ({
  userIsFetching,
  userIsError,
  userData,
  currentUser,
  createRoomHandler,
  setReceiverId,
  setSenderId,
  onlineUsers,
}) => {
  return (
    <div
      id="user_lists"
      className="flex border-r flex-col flex-[25%] h-[100vh]"
    >
      {/* search */}
      <div className="w-full flex bg-gray-100 items-center justify-start border-b">
        <div className="flex w-full px-2 bg-yellow-400 text-white cursor-pointer justify-center flex-col border-r items-center h-14">
          <svg
            class="w-6 h-6 "
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
              d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
          <p className="text-sm  ">Lawyer</p>
        </div>

        <div className="flex w-full px-2  cursor-pointer justify-center flex-col border-r items-center h-14">
          <svg
            class="w-6 h-6 "
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
              d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
          <p className="text-sm  ">Manager</p>
        </div>
        <div className="flex w-full px-2  cursor-pointer justify-center flex-col border-r items-center h-14">
          <svg
            class="w-6 h-6 "
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
              d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.306-.613-.933-1-1.618-1H7.618c-.685 0-1.312.387-1.618 1M4 5h16a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
            />
          </svg>
          <p className="text-sm  ">Groups</p>
        </div>
      </div>

      {userIsFetching && <Loading text="text-gray-500" />}
      {userIsError && <p>something went wrong unable to read the users</p>}
      {/* user list */}
      <div className="flex flex-col  mt-3 h-full overflow-y-auto">
        <ul className="max-w-md divide-y divide-gray-200 dark:divide-gray-700">
          {userData && userData?.data?.length > 0 ? (
            userData?.data?.map((user, i) => {
              if (user?._id !== currentUser?._id) {
                return (
                  <li
                    key={i}
                    id={i.toString()}
                    onClick={() => {
                      createRoomHandler(i);
                      setReceiverId(user?._id);
                      setSenderId(currentUser?._id);
                      // setChatId(`${sender}.${receiver}`);
                      // fetchUsersMessage();
                    }}
                    className="p-3 hover:bg-gray-200"
                  >
                    <div className="flex cursor-pointer items-center space-x-4 rtl:space-x-reverse">
                      <div className="relative">
                        <img
                          className="w-10 h-10 rounded-full"
                          src={customerImage}
                          alt={user?.userName}
                        />
                        <span
                          className={`top-0 left-7 absolute  w-3.5 h-3.5 ${
                            onlineUsers?.includes(user?.userName)
                              ? "bg-green-400"
                              : "bg-gray-200"
                          }  border-2 border-white dark:border-gray-800 rounded-full`}
                        ></span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                          {user?.user?.firstName}
                        </p>
                        <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                          {user?.email}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              }
            })
          ) : (
            <div className="w-full text-center">No user found</div>
          )}
        </ul>
      </div>
    </div>
  );
};

export default UserList;
