import React from "react";
import Loading from "../loading/Loading";
import { format } from "timeago.js";

const Messages = ({
  isLoading,
  isError,
  receiver,
  sender,
  texts,
  currentUser,
}) => {
  return (
    <div
      id="messages"
      className="flex w-full flex-col h-[70vh] space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
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
                        <p className="text-xs">{format(message?.createdAt)}</p>
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
                      <p className="text-xs">{format(message?.createdAt)}</p>
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
          <div className="flex flex-col items-center w-full h-full justify-center space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
            say hi, to your friend.
          </div>
        )
      ) : (
        <div className="flex flex-col items-center w-full h-full justify-center space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch">
          select a chat to start messaging.
        </div>
      )}
      {/* <div ref={refer} />
    {typing && (
      <p className="text-sm text-[#00aeff] flex gap-2 items-center justify-center ml-2 mt-1">
        typing...
      </p>
    )} */}
    </div>
  );
};

export default Messages;
