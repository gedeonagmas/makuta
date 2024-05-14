import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import customerImage from "./../assets/images/customers/customer-i.jpg";
import logo from "./../assets/images/site-logo/logoFinal.png";

const text = msg => {
  return (
    <div className="flex items-center w-full justify-start gap-2">
      <img
        src={logo}
        alt=""
        className="w-10 bg-white h-10 self-end rounded-full border border-gray-300"
      />
      <p className="bg-main text-white px-4 py-1 rounded-full rounded-bl-none">
        {msg}
      </p>
    </div>
  );
};

const ChatBots = () => {
  const [chat, setChat] = useState(false);
  const steps = [
    {
      id: "0",
      message: "Hello, Well come to Makuta Law Firm.",
      // component: text("Welcome to makuta"),
      trigger: "1",
      avatar: logo
    },
    {
      id: "1",
      message: "What is your name?",
      // component: text("What is your name?"),
      trigger: "2",
      avatar: logo
    },
    {
      id: "2",
      user: true,
      trigger: "3"
    },
    {
      id: "3",
      message: "Hi {previousValue}, nice to meet you",
      // component: text("Hi {previousValue}, nice to meet you"),
      trigger: "4",
      avatar: logo
    },
    {
      id: "4",
      message: "Whats on Your Mind?",
      trigger: "5"
    },
    {
      id: "5",
      options: [
        {
          value: 1,
          label: "How can I schedule a consultation with one of your lawyers?",
          trigger: "6"
        },
        {
          value: 2,
          label: "What areas of law does your firm specialize in?",
          trigger: "7"
        },
        {
          value: 3,
          label: "What sets your law firm apart from others in the industry?",
          trigger: "8"
        },
        {
          value: 4,
          label:
            "Do you offer pro bono services or payment plans for clients in need?",
          trigger: "9"
        },
        {
          value: 5,
          label: "Do you handle cases outside of Ethiopia?",
          trigger: "10"
        },
        {
          value: 6,
          label: "Can I request a free case evaluation?",
          trigger: "11"
        },
        {
          value: 7,
          label: "Are your lawyers available for court appearances?",
          trigger: "12"
        },
        {
          value: 8,
          label: "What are the qualifications of your lawyers?",
          trigger: "13"
        }
      ]
    },
    {
      id: "6",
      message:
        "Thank you for reaching out to us! To schedule a consultation with one of our lawyers, please visit our 'Contact Us' page and fill out the form. Our team will get back to you shortly to arrange a meeting.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "7",
      message:
        "At our law firm, we specialize in various areas of law including family law, public law, commercial law, criminal and criminology, and more. You can learn more about our practice areas on our 'Services' page.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "8",
      message:
        "We take pride in our commitment to providing personalized legal solutions tailored to each client's unique needs. Our team of experienced lawyers is dedicated to achieving the best possible outcome for every case we handle. Learn more about our firm's values and approach on our 'About Us' page.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "9",
      message:
        "We understand that legal services can be costly, which is why we offer payment plans for clients in need. Additionally, we provide pro bono services on a case-by-case basis. Please reach out to us directly to discuss your specific situation and how we may be able to assist you.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "10",
      message:
        "While we primarily serve clients in Ethiopia, we also handle cases in other countries in Africa, America, China and other countries in Asia, Europe, and more. Contact us to discuss your specific needs and how we may assist you",
      trigger: "15",
      avatar: logo
    },
    {
      id: "11",
      message:
        "Yes, we offer free case evaluations to help assess your situation and determine the best course of action. Please visit our 'Contact Us' page to schedule an appointment.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "12",
      message:
        "Yes, our lawyers are experienced in court appearances and are prepared to represent you in legal proceedings. Rest assured that your case will be in capable hands.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "13",
      message:
        "Our lawyers are highly qualified professionals with extensive experience in various areas of law. They are dedicated to delivering exceptional legal representation for our clients.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "14",
      message:
        "Thank you for reaching out to us! To schedule a consultation with one of our lawyers, please visit our 'Contact Us' page and fill out the form. Our team will get back to you shortly to arrange a meeting.",
      trigger: "15",
      avatar: logo
    },
    {
      id: "15",
      options: [
        {
          value: 1,
          label: "Continue Asking?",
          trigger: "5"
        },
        {
          value: 2,
          label: "Done",
          trigger: "16"
        }
      ],
      avatar: logo
    },
    {
      id: "16",
      message: "Have a wonderful time! Thank you for your visit.",
      avatar: logo,
      end: true
      // trigger: "14"
    }
  ];
  return (
    <div className="self-end fixed bg-white bottom-6 h-[500px]  right-5 z-[9999]">
      {!chat && (
        <div className="fixed rounded-full border-2 border-blue-500 z-50 bottom-4 right-4 h-auto w-auto shadow-xl shadow-gray-500">
          <div className="flex w-[120px] py-1 px-2 bg-white border border-gray-400 shadow-xl shadow-gray-500 h-full rounded-md absolute right-14">
            <div className="w-full text-center text-xs">
              <p>
                Hi, How can we <br />
                help you today?
              </p>
            </div>
          </div>
          <div className="absolute h-3 w-3 rotate-45 bg-white border border-gray-400 border-l-0 border-b-0 z-30 right-[50px] top-5"></div>
          <div onClick={() => setChat(true)} class="relative cursor-pointer">
            <img class="w-11 h-11 rounded-full" src={customerImage} alt="" />
            <span class="top-2 -right-2 absolute  w-4 h-4 bg-green-400 border-2 border-white dark:border-gray-800 rounded-full"></span>
          </div>
        </div>
      )}
      {chat && (
        <div className="relative">
          <div className="">
            <ChatBot steps={steps} />
          </div>

          <div className="absolute w-full h-[56px] bg-main rounded-lg rounded-b-none z-[9999] top-0 right-0 ">
            <div className="flex h-full px-4 text-white items-center justify-between w-full">
              <p className="text-lg font-bold ">Makuta Law Firm</p>
              <svg
                onClick={() => setChat(false)}
                class="w-6 h-6 cursor-pointer"
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
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBots;
