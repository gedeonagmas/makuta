import { DarkThemeToggle } from "flowbite-react";
import React, { useEffect, useRef, useState } from "react";
import { io } from "socket.io-client";
import {
  useCreateMutation,
  useLazyReadChatQuery,
  useReadQuery,
} from "../features/api/apiSlice";
import Response from "../components/Response";
import LoadingButton from "../components/loading/LoadingButton";
import Loading from "../components/loading/Loading";
import { useLocation } from "react-router-dom";

// import { DarkThemeToggle } from "flowbite-react";
// import React, { useEffect, useRef, useState } from "react";
// import { io } from "socket.io-client";
// import {
//   useCreateMutation,
//   useLazyReadChatQuery,
//   useReadQuery,
// } from "./../../../../features/api/apiSlice";
// import Response from "../../../../components/Response";
// import LoadingButton from "../../../../components/loading/LoadingButton";
// import Loading from "../../../../components/loading/Loading";
// import { useLocation } from "react-router-dom";

const Chat = () => {
  const [socket, setSocket] = useState(null);
  const location = useLocation();
  const [sendMessageData, sendMessageResponse] = useCreateMutation();
  const [sender, setSenderId] = useState("");
  const [receiver, setReceiverId] = useState("");
  const [currentUser, setCurrentUser] = useState({
    // _id: "65eaae5c42838d4af4c23d8d",
  });
  const [onlineUsers, setOnlineUsers] = useState();
  const [message, setMessage] = useState("");
  const [pending, setPending] = useState(false);
  const [texts, setTexts] = useState();
  const [typing, setTyping] = useState(false);
  const [chatId, setChatId] = useState("");
  const refer = useRef(null);

  const [trigger, { data: messageData, isLoading, isError }] =
    useLazyReadChatQuery({ refetchOnFocus: false });

  useEffect(() => {
    if (receiver && sender) {
      trigger({
        url: `/chat/${sender}.${receiver}`,
        tag: ["chats"],
      });
    }
  }, [receiver, sender]);

  const {
    data: userData,
    isLoading: userIsFetching,
    isError: userIsError,
  } = useReadQuery({
    url: `/user/users?limits=40`,
    tag: ["users"],
  });

  useEffect(() => {
    const hash = location.hash.split("#").splice(1, 2);
    // console.log(hash, "locations now");
    if (location?.hash) {
      setCurrentUser({ _id: hash[0], userName: hash[1] });
    }
  }, []);

  const focusHandler = (id) => {
    ["group", "private", "manager", "lawyer", "all"].map((e) => {
      const ids = document.getElementById(e);
      ids?.classList?.remove(
        // "border-b",
        // "bg-gray-200",
        // "border-blue-600",
        "font-extrabold",
        "text-blue-600"
      );
      if (id === e) {
        ids?.classList?.add(
          // "border-b",
          // "bg-gray-200",
          // "border-blue-600",
          "font-extrabold",
          "text-blue-600"
        );
      }
    });
  };

  useEffect(() => {
    setSocket(io("http://localhost:5000"));
  }, []);

  useEffect(() => {
    socket?.emit("connect-user", currentUser?.userName);
    socket?.on("aaa", (val) => {
      setOnlineUsers(val);
    });
  }, [socket, currentUser]);

  const sendHandler = () => {
    sender &&
      receiver &&
      sendMessageData({
        chatId,
        sender: sender,
        receiver: receiver,
        message: {
          content: message,
          size: "20kb",
        },
        messageType: "text",
        chatType: "private",
        url: `/chat`,
        tag: ["chats"],
      });
  };

  useEffect(() => {
    if (messageData !== undefined) {
      setChatId(messageData?.data[0]?.chatId);
      setTexts(messageData?.data);
      socket?.emit("aa", messageData?.data, messageData?.data[0]?.chatId);
      socket?.on("bb", (text) => {
        setTexts(text);
      });
    }
  }, [messageData]);

  useEffect(() => {
    refer.current?.scrollIntoView();
  }, [texts]);

  useEffect(() => {
    refer.current?.scrollIntoView();
  }, [typing]);

  const createRoomHandler = (id) => {
    [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((e) => {
      const ids = document.getElementById(e);
      ids?.classList?.remove("bg-gray-200");
      if (id === e) {
        ids?.classList?.add("bg-gray-200");
      }
    });
  };

  const closeLists = () => {
    const i = document.getElementById("user_lists");
    const ii = document.getElementById("user_list_container");
    ii.classList?.remove("md:flex-[25%]");
    i?.classList?.value?.includes("hidden")
      ? (i.classList?.remove("hidden"),
        i.classList?.add("flex"),
        ii.classList?.add("md:flex-[25%]"))
      : (i.classList?.remove("flex"),
        i.classList?.add("hidden"),
        ii.classList?.remove("md:flex-[25%]"));
  };

  const popup = (id) => {
    const i = document.getElementById(id);
    i?.classList?.value?.includes("hidden")
      ? (i.classList?.remove("hidden"), i.classList?.add("flex"))
      : (i.classList?.remove("flex"), i.classList?.add("hidden"));
  };

  // typing handler
  const typingHandler = (e) => {
    if (e.target.value.length > 0) {
      socket?.emit("typing t", true, chatId);
      socket?.on("typing true", (bool) => {
        setTyping(bool);
      });
    } else {
      socket?.emit("typing f", false, chatId);
      socket?.on("typing false", (bool) => {
        setTyping(bool);
      });
    }
  };

  useEffect(() => {
    console.log(message);
    if (message.length > 0) {
      socket?.emit("typing t", true, chatId);
      socket?.on("typing true", (bool) => {
        setTyping(bool);
      });
    } else {
      socket?.emit("typing f", false, chatId);
      socket?.on("typing false", (bool) => {
        setTyping(bool);
      });
    }
  }, [message]);

  //##########################################################################
  // const [payload, setPayload] = useState();
  // const [videoFile, setVideoFile] = useState();

  // navigator.getUserMedia =
  //   navigator.getUserMedia ||
  //   navigator.webkitGetUserMedia ||
  //   navigator.mozGetUserMedia;

  // const successCallback = (stream) => {
  //   setPayload(stream);
  //   const video = document.getElementById("video");
  //   console.log(video, "video");
  //   window.stream = stream; // stream available to console
  //   if (window.URL && video) {
  //     video.srcObject = stream;
  //     video.onloadedmetadata = function (e) {
  //       video.play();
  //     };
  //   } else {
  //     video.srcObject = stream;
  //     video.onloadedmetadata = function (e) {
  //       video.play();
  //     };
  //   }
  // };

  // const errorCallback = (error) => {
  //   console.log("navigator.getUserMedia error: ", error);
  // };

  // useEffect(() => {
  //   navigator.getUserMedia(
  //     { audio: false, video: true },
  //     successCallback,
  //     errorCallback
  //   );
  // }, []);

  // useEffect(() => {
  //   socket?.emit("send-video", payload);
  //   socket?.on("receive-video", (payload) => {
  //     console.log(payload, "inside");
  //     setVideoFile(payload);
  //   });
  // }, [payload]);

  // console.log(videoFile, "received");
  // console.log(payload, "sent");
  return (
    // <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full h-auto gap-10 m-10 place-items-center">
    //   {[1, 2, 3, 4].map((e, i) => {
    //     return (
    //       <video
    //         key={i}
    //         id="video"
    //         autoPlay
    //         controls
    //         className="w-full h-52"
    //       ></video>
    //     );
    //   })}
    // </div>
    <div className="flex w-full h-[100vh">
      {/* side navigation */}
      <div className="hidden md:flex border-r py-2 items-start justify-start shadow-md">
        <ul className="space-y-0 font-medium">
          <li
            onClick={() => {
              // focusHandler("menu");
              closeLists();
            }}
          >
            <a
              href="#"
              id="menu"
              className="flex flex-col items-center px-9 border-gray-400 py-4 text-gray-900 dark:text-white group"
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M5 7h14M5 12h14M5 17h14"
                />
              </svg>
              {/* <span className="ms-3">Dashboard</span> */}
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("all")}>
            <a
              href="#"
              id="all"
              className="flex flex-col items-center font-extrabold  text-blue-600  p-2 dark:text-white group"
            >
              <svg
                className="w-6 h-6  dark:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9 17h6l3 3v-3h2V9h-2M4 4h11v8H9l-3 3v-3H4V4Z"
                />
              </svg>
              <span className="">All</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("group")}>
            <a
              href="#"
              id="group"
              className="flex flex-col items-center p-2  group"
            >
              <svg
                className="w-6 h-6 "
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeWidth="2"
                  d="M4.5 17H4a1 1 0 0 1-1-1 3 3 0 0 1 3-3h1m0-3a2.5 2.5 0 1 1 2-4.5M19.5 17h.5c.6 0 1-.4 1-1a3 3 0 0 0-3-3h-1m0-3a2.5 2.5 0 1 0-2-4.5m.5 13.5h-7a1 1 0 0 1-1-1 3 3 0 0 1 3-3h3a3 3 0 0 1 3 3c0 .6-.4 1-1 1Zm-1-9.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z"
                />
              </svg>

              <span className="">Groups</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("private")}>
            <a
              href="#"
              id="private"
              className="flex flex-col items-center p-2 group"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeWidth="2"
                  d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <span className="">Privates</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("manager")}>
            <a
              href="#"
              id="manager"
              className="flex flex-col items-center p-2 group"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M9.5 11.5 11 13l4-3.5M12 20A16.4 16.4 0 0 1 5 6.7L12 4l7 2.7A16.7 16.7 0 0 1 12 20Z"
                />
              </svg>

              <span className="">Managers</span>
            </a>
          </li>{" "}
          <li onClick={() => focusHandler("lawyer")}>
            <a
              href="#"
              id="lawyer"
              className="flex flex-col items-center p-2 group"
            >
              <svg
                className="w-6 h-6"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M15 9h3m-3 3h3m-3 3h3m-6 1c-.3-.6-1-1-1.6-1H7.6c-.7 0-1.3.4-1.6 1M4 5h16c.6 0 1 .4 1 1v12c0 .6-.4 1-1 1H4a1 1 0 0 1-1-1V6c0-.6.4-1 1-1Zm7 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                />
              </svg>

              <span className="">Lawyers</span>
            </a>
          </li>{" "}
        </ul>
      </div>

      <Response response={sendMessageResponse} setPending={setPending} />

      {/* search and user list */}
      <div id="user_list_container" className="hidden md:block md:flex-[25%]">
        <div
          id="user_lists"
          className="flex border-r flex-col flex-[25%] h-[100vh]"
        >
          {/* search */}
          <form className="px-2 mt-3">
            <label
              htmlFor="search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block w-full p-3 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search"
                required
              />
              <button
                type="submit"
                className="text-white absolute end-2 bottom-[5.5px] bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          {userIsFetching && <Loading text="text-gray-500" />}
          {userIsError && <p>something went wrong unable to read the users</p>}
          {/* user list */}
          <div className="flex flex-col  mt-3 h-full overflow-y-scroll">
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
                              src={user?.profilePicture}
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
                              {user?.userName}
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
      </div>

      <div className="flex flex-[62%]">
        <div className="flex-1  justify-between flex flex-col h-screen">
          {/* user profile detail */}
          <div className="w-full relative flex border-b justify-between items-center">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <a
                href="#"
                id="menu"
                className="flex flex-col md:hidden ml-2 items-center p-2 border-gray-400 text-gray-900 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 group"
              >
                <svg
                  className="w-6 h-6 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M5 7h14M5 12h14M5 17h14"
                  />
                </svg>
                {/* <span className="ms-3">Dashboard</span> */}
              </a>
              <div className="relative ml-4 py-2">
                <img className="w-10 h-10 rounded-full" src="gedi.jpg" alt="" />
                {/* <span className="top-6 left-7 absolute  w-3.5 h-3.5 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span> */}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate dark:text-white">
                  {currentUser?.userName}
                </p>

                <p className="text-sm text-gray-500 truncate dark:text-gray-400">
                  last seen recently
                </p>
              </div>
            </div>
            {/* <div className="w-44 h-auto p-4 rounded-md bg-white absolute right-20 top-10 z-30 border border-gray-400 shadow-lg">
              hello
            </div> */}
            <div className="flex items-center mr-4 gap-2 space-x-2">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg h-10 w-10 transition duration-500 ease-in-out text-gray-500 focus:outline-none"
              >
                <svg
                  className="w-7 h-7 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeWidth="2"
                    d="M12 6h0m0 6h0m0 6h0"
                  />
                </svg>
              </button>
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg h-10 w-10 transition duration-500 ease-in-out text-gray-500 focus:outline-none"
              >
                <svg
                  className="w-8 h-8 text-gray-800 dark:text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    strokeWidth="2"
                    d="M7 17v1c0 .6.4 1 1 1h8c.6 0 1-.4 1-1v-1a3 3 0 0 0-3-3h-4a3 3 0 0 0-3 3Zm8-9a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                  />
                </svg>
              </button>

              {/* <DarkThemeToggle /> */}
            </div>
          </div>

          {/* messages */}
          <div
            id="messages"
            className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
          >
            {isLoading && <Loading text="text-gray-500" />}
            {isError && <p>something went wrong unable to read the messages</p>}
            {receiver && sender ? (
              texts && texts?.length > 0 ? (
                texts?.map((message, i) => {
                  if (message?.sender !== currentUser?._id) {
                    return (
                      <div key={i} className="chat-message">
                        <div className="flex items-start">
                          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
                            <div>
                              <span className="px-4 py-2 rounded-lg inline-block rounded-bl-none bg-gray-300 text-gray-600">
                                {message?.message?.content}
                              </span>
                              <p className="text-xs">2 hours ago</p>
                            </div>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                            alt="My profile"
                            className="w-6 h-6 rounded-full order-1"
                          />
                        </div>
                      </div>
                    );
                  } else {
                    return (
                      <div key={i} className="chat-message">
                        <div className="flex items-end justify-end">
                          <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-1 items-end">
                            <div>
                              <span className="px-4 py-2 rounded-lg inline-block rounded-br-none bg-blue-600 text-white ">
                                {message?.message?.content}
                              </span>
                            </div>
                            <p className="text-xs font-light self-end">
                              2 hours ago
                            </p>
                          </div>
                          <img
                            src="https://images.unsplash.com/photo-1590031905470-a1a1feacbb0b?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=facearea&amp;facepad=3&amp;w=144&amp;h=144"
                            alt="My profile"
                            className="w-6 h-6 rounded-full order-2"
                          />
                        </div>
                      </div>
                    );
                  }
                })
              ) : (
                <div className="flex flex-col items-center justify-center space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                  say hi, to your friend.
                </div>
              )
            ) : (
              <div className="flex flex-col items-center justify-center space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
                select a user or group to chat with them
              </div>
            )}
            <div ref={refer} />
            {typing && (
              <p className="text-sm text-[#00aeff] flex gap-2 items-center justify-center ml-2 mt-1">
                typing...
              </p>
            )}
          </div>

          {/* message input field */}
          <div className="border-t relative border-gray-200  shadow-sm px-4 pt-3">
            <div
              id="file-send"
              className="hidden absolute bg-white z-20 flex-col items-start justify-start gap-3 bottom-0 left-0 rounded-sm w-full h-auto p-4 border shadow-xl"
            >
              <div className="flex w-full items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                  Send file
                </h3>
                <button
                  onClick={() => popup("file-send")}
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                >
                  <svg
                    className="w-3 h-3"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                    />
                  </svg>
                  <span className="sr-only">Close</span>
                </button>
              </div>
              <label
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                htmlFor="small_size"
              >
                File input
              </label>
              <input
                className="block w-full mb-5 text-xs text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400"
                id="small_size"
                type="file"
              />

              <label
                htmlFor="message"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                File description
              </label>
              <textarea
                id="message"
                rows="4"
                className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Write your description here..."
              ></textarea>

              <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                <button
                  type="button"
                  className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                >
                  Send
                </button>
                <button
                  onClick={() => popup("file-send")}
                  type="button"
                  className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  Cancel
                </button>
              </div>
            </div>

            <div className="relative items-center justify-center flex gap-2 border border-gray-300 rounded-lg mb-3">
              <button
                onClick={() => popup("file-send")}
                type="button"
                className="inline-flex items-center p-1  justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13"
                  ></path>
                </svg>
              </button>

              <input
                onChange={(e) => {
                  typingHandler(e);
                  setMessage(e.target.value);
                }}
                type="text"
                placeholder="Write your message!"
                className="w-full text-gray-600 focus:ring-0 focus:border-none p-3 border-none focus:outline-none focus:rounded-sm"
              />

              <button
                type="button"
                className="inline-flex items-center justify-center rounded-full h-10 w-10 transition duration-500 ease-in-out text-gray-500 hover:bg-gray-300 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="h-6 w-6 text-gray-600"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  ></path>
                </svg>
              </button>

              <LoadingButton
                pending={pending}
                onClick={sendHandler}
                title="Send"
                color="bg-blue-500"
                width="w-full"
              />
              {/* <button
                onClick={sendHandler}
                type="button"
                className="inline-flex items-center justify-center rounded-lg px-4 py-1  mr-2 transition duration-500 ease-in-out text-white bg-blue-600 hover:bg-blue-500 focus:outline-none"
              >
                <span className="font-bold">Send</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
                </svg>
              </button> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
