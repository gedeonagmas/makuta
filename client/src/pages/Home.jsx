import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
// customer main image
import customerMainImage from "../assets/images/customers/customer-i.jpg";

// icons
import {
  FaGlobeAfrica,
  FaCarCrash,
  FaShoppingCart,
  FaPlus,
  FaMinus,
  FaFacebookF,
  FaRegStar,
  FaYoutube,
} from "react-icons/fa";

import {
  MdPhoneInTalk,
  MdOutlineMediation,
  MdOutlineMarkEmailRead,
} from "react-icons/md";

import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";

import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

// rating
// full star
import { ImStarFull } from "react-icons/im";
// half star
import { BsStarHalf } from "react-icons/bs";
// empty star
import {} from "react-icons/fa";

import { FaScaleBalanced, FaBlog, FaXTwitter } from "react-icons/fa6";
import { IoLogoCodepen } from "react-icons/io";

// components
import Header from "../components/Header";
// data files
import { judges } from "../DataFile";
import axios from "axios";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 11,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 9,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 5,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 3,
  },
};

const Home = () => {
  // local states
  const [accordion, setAccordion] = useState(2);

  useEffect(async () => {
    const ip = await axios.get(
      "https://geolocation-db.com/json/f2e84010-e1e9-11ed-b2f8-6b70106be3c8"
    );
    console.log(ip, "ip");
  }, []);

  return (
    <div>
      {/* header */}
      <Header />
      <div className="flex-grow bg-white h-[calc(100vh-15.5vh)] overflow-y-auto">
        {/* banner */}
        <div className="h-[175px] flex items-center justify-center relative">
          <div className="absolute left-0 bottom-0 z-10 w-full h-full bg-black">
            <img
              src="https://media.istockphoto.com/id/1139699594/photo/law-concept-themis-statue-judge-hammer-and-books.jpg?s=170667a&w=0&k=20&c=PGPkWvwrenf6qzJCnHef5MpSKeSzoum2TP45HpS6aZs="
              alt=""
              className="w-full h-full opacity-[.5]"
            />
          </div>
          <div className="relative z-40 flex flex-col items-center justify-center text-gray-100 max-w-[820px] mx-auto px-[1%] ">
            {/* any slider text here */}
          </div>
        </div>

        {/* first order container */}
        <div className="px-[3%] sm:px-[10%] flex flex-col md:flex-row items-center md:items-end justify-between gap-5">
          {/* top left container */}
          <div className="flex-grow bg-cyan-500 w-[100%] flex flex-row-reverse items-center md:block md:max-w-[35%] relative z-50 mt-[-50px]">
            {/* image container */}
            <div className="flex items-center justify-end">
              <div className="w-full md:w-[50%] relative">
                <img
                  src={"/images/customer-i-removebg-preview.png"}
                  alt=""
                  className="relative z-10"
                />
                <div className="absolute top-1/2 right-0 -translate-y-1/2 z-0 w-[80%] aspect-square bg-orange-400 rounded-full"></div>
              </div>
            </div>
            {/* text container */}
            <div>
              <div className="p-[10%] text-white">
                <p className="text-[.875rem] sm:text-[.95rem] md:text-lg font-medium">
                  Access <span className="text-black">2500 +</span> Online
                  Courses From 140 Instructions
                </p>
                <button className="mt-5 px-[15%] py-1 border-2 border-gray-100 rounded-sm bg-transparent">
                  Join Us
                </button>
              </div>
            </div>
          </div>
          {/* bottom right container */}
          <div className="w-[100%] md:flex-grow ">
            {/* top cards */}
            <div className="flex items-center justify-evenly mb-5">
              {/* first card */}
              <div className="flex items-center justify-center gap-1 p-2 sm:gap-3 sm:p-3 rounded-sm shadow-md">
                {/* icon */}
                <div className="p-1 border-2 border-green-500 rounded-full md:text-3xl text-green-500 bg-green-100">
                  <FaGlobeAfrica />
                </div>
                {/* text */}
                <div>
                  <div>
                    <h3 className="sm:text-lg font-bold">89k+</h3>
                  </div>
                  <div>
                    <span>Customers </span>
                  </div>
                </div>
              </div>

              {/* second card */}
              <div className="flex items-center justify-center gap-1 p-2 sm:gap-3 sm:p-3 rounded-sm shadow-md">
                {/* icon */}
                <div className="p-1 border-2 border-orange-500 rounded-full md:text-3xl text-orange-500 bg-orange-100">
                  <FaCarCrash />
                </div>
                {/* text */}
                <div>
                  <div>
                    <h3 className="sm:text-lg font-bold">43k+</h3>
                  </div>
                  <div>
                    <span>Customers </span>
                  </div>
                </div>
              </div>

              {/* third card */}
              <div className="flex items-center justify-center gap-1 p-2 sm:gap-3 sm:p-3 rounded-sm shadow-md">
                {/* icon */}
                <div className="p-1 border-2 border-blue-500 rounded-full md:text-3xl text-blue-500 bg-blue-100">
                  <FaShoppingCart />
                </div>
                {/* text */}
                <div>
                  <div>
                    <h3 className="sm:text-lg font-bold">35k+</h3>
                  </div>
                  <div>
                    <span>Customers </span>
                  </div>
                </div>
              </div>
            </div>
            {/* bottom cards */}
            <div className="flex items-center justify-between gap-5">
              {/* left card */}
              <div className="flex-grow w-[50%] overflow-hidden rounded-md relative flex items-center justify-center">
                <div className="w-full h-full bg-black">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="w-full opacity-50"
                  />
                </div>
                {/* text */}
                <div className="absolute left-0 top-0 w-full h-full p-[5%] text-white flex items-center">
                  <div className="w-full">
                    <button className=" my-[7%] px-[10%] py-1 rounded-sm bg-orange-400">
                      Hello world
                    </button>
                    <div>
                      <span className="text-sm">some text</span>
                      <h3 className="font-medium md:font-semibold md:text-lg">
                        Web Programming
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
              {/* right card */}
              <div className="flex-grow w-[50%] overflow-hidden rounded-md relative flex items-center justify-center">
                <div className="w-full h-full bg-black">
                  <img
                    src="data:image/jpeg;base64,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"
                    alt=""
                    className="w-full opacity-50"
                  />
                </div>
                {/* text */}
                <div className="absolute left-0 top-0 w-full h-full p-[5%] text-white flex items-center">
                  <div className="w-full">
                    <button className=" my-[7%] px-[10%] py-1 rounded-sm bg-orange-400">
                      Hello world
                    </button>
                    <div>
                      <span className="text-sm">some text</span>
                      <h3 className="font-medium md:font-semibold md:text-lg">
                        Web Programming
                      </h3>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* second order container */}
        <div className="px-[1%] sm:px-[5%] py-5 md:py-[1%] flex flex-col items-center justify-between gap-5 md:gap-10 md:flex-row">
          {/* top left */}
          <div className="w-[100%] md:w-[65%]">
            {/* header */}
            <header className="mb-3">
              <div>
                <span>Some text over here</span>
              </div>
              <div>
                <h3 className="text-2xl font-bold">Find top talents</h3>
              </div>
            </header>
            {/* accordion container */}
            <div>
              {/* first accordion */}
              <div className="shadow-homeAccordionShadow mb-3 p-1">
                {/* title container */}
                <div
                  className="flex items-center gap-3 cursor-pointer py-[1%]"
                  onClick={() => {
                    setAccordion(1);
                  }}
                >
                  <div
                    className={`p-1 text-lg rounded-full transition-all ease-in-out duration-150 ${
                      accordion === 1
                        ? "bg-green-400 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {accordion === 1 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                  <span className="font-bold text-[1rem]">
                    Create a positive workpplace
                  </span>
                </div>
                {/* content */}
                <div
                  className={`overflow-hidden transition-all ease-in-out duration-150 ${
                    accordion === 1 ? "h-auto" : "h-0"
                  }`}
                >
                  <div className="ml-[5%] mr-[3%] py-3 mt-3 border-t border-gray-200">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet, ipsam? Eum fugit, doloremque error alias
                      voluptatibus veritatis placeat ducimus! Impedit iure
                      recusandae vero dignissimos voluptates, mollitia similique
                      reiciendis, ad ipsam dicta possimus facilis fugit non
                      maiores odio tempora unde molestias consectetur commodi?
                      Doloremque deleniti voluptatum dolorem. Tempora, harum.
                    </p>
                  </div>
                </div>
              </div>

              {/* second accordion */}
              <div className="shadow-homeAccordionShadow mb-3 p-1">
                {/* title container */}
                <div
                  className="flex items-center gap-3 cursor-pointer p-[1%]"
                  onClick={() => {
                    setAccordion(2);
                  }}
                >
                  <div
                    className={`p-1 text-lg rounded-full transition-all ease-in-out duration-150 ${
                      accordion === 2
                        ? "bg-green-400 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {accordion === 2 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                  <span className="font-bold text-[1rem]">
                    Create a positive workpplace
                  </span>
                </div>
                {/* content */}
                <div
                  className={`overflow-hidden transition-all ease-in-out duration-150 ${
                    accordion === 2 ? "h-auto" : "h-0"
                  }`}
                >
                  <div className="ml-[5%] mr-[3%] py-3 mt-3 border-t border-gray-200">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet, ipsam? Eum fugit, doloremque error alias
                      voluptatibus veritatis placeat ducimus! Impedit iure
                      recusandae vero dignissimos voluptates, mollitia similique
                      reiciendis, ad ipsam dicta possimus facilis fugit non
                      maiores odio tempora unde molestias consectetur commodi?
                      Doloremque deleniti voluptatum dolorem. Tempora, harum.
                    </p>
                  </div>
                </div>
              </div>

              {/* third accordion */}
              <div className="shadow-homeAccordionShadow mb-3 p-1">
                {/* title container */}
                <div
                  className="flex items-center gap-3 cursor-pointer p-[1%]"
                  onClick={() => {
                    setAccordion(3);
                  }}
                >
                  <div
                    className={`p-1 text-lg rounded-full transition-all ease-in-out duration-150 ${
                      accordion === 3
                        ? "bg-green-400 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {accordion === 3 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                  <span className="font-bold text-[1rem]">
                    Create a positive workpplace
                  </span>
                </div>
                {/* content */}
                <div
                  className={`overflow-hidden transition-all ease-in-out duration-150 ${
                    accordion === 3 ? "h-auto" : "h-[0px]"
                  }`}
                >
                  <div className="ml-[5%] mr-[3%] py-3 mt-3 border-t border-gray-200">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet, ipsam? Eum fugit, doloremque error alias
                      voluptatibus veritatis placeat ducimus! Impedit iure
                      recusandae vero dignissimos voluptates, mollitia similique
                      reiciendis, ad ipsam dicta possimus facilis fugit non
                      maiores odio tempora unde molestias consectetur commodi?
                      Doloremque deleniti voluptatum dolorem. Tempora, harum.
                    </p>
                  </div>
                </div>
              </div>

              {/* fourth accordion */}
              <div className="shadow-homeAccordionShadow mb-3 p-1">
                {/* title container */}
                <div
                  className="flex items-center gap-3 cursor-pointer p-[1%]"
                  onClick={() => {
                    setAccordion(4);
                  }}
                >
                  <div
                    className={`p-1 text-lg rounded-full transition-all ease-in-out duration-150 ${
                      accordion === 4
                        ? "bg-green-400 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {accordion === 4 ? <AiOutlineMinus /> : <AiOutlinePlus />}
                  </div>
                  <span className="font-bold text-[1rem]">
                    Create a positive workpplace
                  </span>
                </div>
                {/* content */}
                <div
                  className={`overflow-hidden transition-all ease-in-out duration-150 ${
                    accordion === 4 ? "h-auto" : "h-[0px]"
                  }`}
                >
                  <div className="ml-[5%] mr-[3%] py-3 mt-3 border-t border-gray-200">
                    <p>
                      Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                      Eveniet, ipsam? Eum fugit, doloremque error alias
                      voluptatibus veritatis placeat ducimus! Impedit iure
                      recusandae vero dignissimos voluptates, mollitia similique
                      reiciendis, ad ipsam dicta possimus facilis fugit non
                      maiores odio tempora unde molestias consectetur commodi?
                      Doloremque deleniti voluptatum dolorem. Tempora, harum.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* bottom right */}
          <div className="w-[100%] md:w-[50%] flex flex-col gap-5 md:gap-10">
            {/* first card */}
            <div className="flex-grow flex items-center justify-between p-[5%] bg-emerald-100 rounded-md">
              {/* text */}
              <div className="w-[65%]">
                <h3 className="text-lg font-bold">For Employers</h3>
                <p className="my-[3%]">
                  Lorem ipsum, dolor sit amet consectetur non harum assumenda.
                </p>
                <button className="px-[10%] py-1 rounded-md text-white bg-green-500">
                  register now
                </button>
              </div>
              {/* image */}
              <div className="w-[50%] relative">
                <img
                  src="/images/man-img.png"
                  alt=""
                  className="relative z-10 h-full w-full"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[65%] aspect-square bg-white rounded-full"></div>
              </div>
            </div>
            {/* second card */}
            <div className="flex-grow flex items-center justify-between p-[5%] bg-orange-100 rounded-md">
              {/* text */}
              <div className="w-[65%]">
                <h3 className="text-lg font-bold">For Employers</h3>
                <p className="my-[3%]">
                  Lorem ipsum, dolor sit amet consectetur non harum assumenda.
                </p>
                <button className="px-[10%] py-1 rounded-md text-white bg-green-500">
                  register now
                </button>
              </div>
              {/* image */}
              <div className="w-[50%] relative">
                <img
                  src="/images/man-img.png"
                  alt=""
                  className="relative z-10 h-full w-full"
                />
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[65%] aspect-square bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>

        {/* third order container */}
        <div className="bg-gray-200 px-[5%]">
          {/* max width */}
          <div className="flex flex-col-reverse lg:flex-row gap-5 py-9">
            {/* cards container */}
            <div className="w-[100%]">
              {/* cards */}
              <div className="grid grid-cols-2  md:grid-cols-3 gap-7">
                {/* items */}
                {[1, 2, 3, 4, 5, 6].map((item, index) => (
                  <div
                    key={index}
                    className="p-3 secondary-cards-bg rounded-md shadow-secondary-card-shadow"
                  >
                    {/* icon text */}
                    <div className="flex items-center justify-center py-3 border-b-2 border-gray-300">
                      <FaScaleBalanced className="text-3xl text-blue-600 mr-3" />
                      <div className="flex flex-col gap-[-.3rem]">
                        <span className="font-bold">some text</span>
                        <span className="font-bold">some text</span>
                      </div>
                    </div>
                    <div className="flex items-center justify-evenly px-3 my-3">
                      <span>text-1</span>
                      <span>text-2</span>
                    </div>
                    <div className="font-bold text-center mb-3">some text</div>
                  </div>
                ))}
              </div>
            </div>
            {/* texts - container */}
            <div className="p-5 text-left self-center w-[100%] lg:w-[65%] ">
              <span className="text-orange-700 text-xs font-serif">
                some little text
              </span>
              <h2 className="text-xl font-black">some large text</h2>
              <h2 className="text-xl font-black mb-2">some large text</h2>
              <p className="py-3 font-serif">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Perferendis nihil ullam molestias ducimus aspernatur itaque
                tempora ex unde tempore, repellat accusamus ipsa necessitatibus
                sequi ea suscipit iusto distinctio commodi ratione at delectus.
              </p>
              <button className="px-5 py-1 rounded-sm text-white bg-orange-400 mt-3 shadow-secondary-btn-shadow">
                hello,ethiopia
              </button>
            </div>
          </div>
        </div>

        {/* fourth order container */}
        <div className="bg-white pb-7">
          {/* top content with blue bg-element */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-x-3 gap-y-1 font-semibold">
            {/* items */}
            <div className="bg-blue-900 text-white flex items-center justify-center">
              <div className="text-lg my-1">
                <div>Text - 1</div>
                <div>Text - 2</div>
              </div>
            </div>

            {[1, 2, 3, 4, 5].map((item, index) => (
              <div key={index} className="flex items-center justify-center p-1">
                <div className="text-lg my-1 border-l border-gray-500 px-7 flex-grow">
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-blue-900">start</span>
                    <span>2024</span>
                  </div>
                  <div className="flex items-center justify-center gap-5">
                    <span className="text-blue-900">end</span>
                    <span>2024</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* nav-btn-container for users profiles */}
          <div className="py-5">
            {/* limit the width of the layout */}
            <div className="px-[3%] flex items-center justify-between">
              {/* left container */}
              <div className="flex items-center">
                <h3 className="mr-1 font-black text-lg">some text here</h3>{" "}
                <span className="text-sm">some text</span>
              </div>
              {/* right container */}
              <div className="flex items-center justify-end">
                <span className="text-sm font-bold mr-1">some text</span>
                {/* <button className="text-2xl mr-1">
                          <TfiArrowCircleLeft />
                        </button> */}
                {/* <button className="text-2xl opacity-[.45]">
                          <TfiArrowCircleRight />
                        </button> */}
              </div>
            </div>
          </div>
          {/* top rating judjes container */}
          <div className="px-[3%] bg-white">
            {judges?.length > 0 ? (
              <Carousel responsive={responsive}>
                {judges.map((judge, index) => (
                  <div
                    key={index}
                    className="mx-3 flex flex-col items-center justify-center"
                  >
                    <div className="flex-grow flex">
                      <img
                        src={judge.image}
                        alt=""
                        className="rounded-full w-[110px] h-[100px]"
                      />
                    </div>
                    <div className="flex flex-col justify-center items-center font-bold mt-[-.1rem]">
                      <span>{judge.first_name}</span>
                      <span className="mt-[-.35rem]">{judge.last_name}</span>
                    </div>
                    <div className="flex items-center gap-1 pl-5">
                      {judge.rating > 4 ? (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <ImStarFull />
                          <ImStarFull />
                          <ImStarFull />
                          <BsStarHalf />
                        </div>
                      ) : judge.rating > 3 ? (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <ImStarFull />
                          <ImStarFull />
                          <BsStarHalf />
                          <FaRegStar />
                        </div>
                      ) : judge.rating > 2 ? (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <ImStarFull />
                          <BsStarHalf />
                          <FaRegStar />
                          <FaRegStar />
                        </div>
                      ) : (
                        <div className="text-xs text-yellow-500 flex items-center">
                          <ImStarFull />
                          <BsStarHalf />
                          <FaRegStar />
                          <FaRegStar />
                          <FaRegStar />
                        </div>
                      )}
                      <span>{judge.rating}</span>
                    </div>
                  </div>
                ))}
              </Carousel>
            ) : (
              <div>No Top Ratting Judges</div>
            )}
          </div>
        </div>

        {/* footer container */}
        <div className="bg-black text-gray-300">
          {/* footer top */}
          <div className="px-[1%] sm:px-[5%] py-3 flex flex-col-reverse md:flex-row items-center justify-between gap-16">
            {/* top right */}
            <div className="w-[100%] md:w-[70%]">
              {/* menu list */}
              <div className="py-1 md:py-[7%] flex items-center justify-between text-[1rem]">
                {[1, 2, 3, 4].map((item, index) => (
                  <div key={index}>
                    <ul className="[&>li]:my-2">
                      <li>Desktop App</li>
                      <li>Mobile Apps</li>
                      <li>Plans</li>
                      <li>Security</li>
                      <li>Features</li>
                    </ul>
                  </div>
                ))}
              </div>
              <div className="mt-3 flex items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://cdn.britannica.com/79/4479-050-6EF87027/flag-Stars-and-Stripes-May-1-1795.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    USA
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/640px-Flag_of_Russia.svg.png"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Russia
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Flag_of_the_People%27s_Republic_of_China.svg/2560px-Flag_of_the_People%27s_Republic_of_China.svg.png"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    China
                  </h3>
                </div>

                <div className="flex flex-col items-center">
                  <div className="w-[35px] aspect-square rounded-full overflow-hidden">
                    <img
                      className="w-full h-full"
                      src="https://img.freepik.com/premium-vector/germany-flag-flag-germany-vector-illustration_685751-83.jpg"
                      alt=""
                    />
                  </div>
                  <h3 className="md:text-lg font-medium md:font-semibold mt-1">
                    Germany
                  </h3>
                </div>
              </div>
            </div>
            {/* bottom left */}
            <div className="w-[90%] sm:w-[65%] self-center md:w-[45%] md:self-start">
              {/* header */}
              <header className="flex items-center gap-[15%] px-[5%] py-2 text-white rounded-sm bg-pink-600">
                <div className="p-2 rounded-full bg-white text-xl text-pink-600">
                  <MdPhoneInTalk />
                </div>
                <h3 className="text-2xl font-bold">Let's Talk</h3>
              </header>
              {/* content */}
              <div className="flex flex-col p-[7%] gap-y-7">
                <div className="flex items-center gap-5">
                  <div>
                    <MdOutlineMarkEmailRead className="text-3xl text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">Business Inquiries</h3>
                    <span>sales@company.com</span>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  <div>
                    <MdOutlineMediation className="text-3xl text-blue-800" />
                  </div>
                  <div>
                    <h3 className="text-lg font-medium">PR Of Media</h3>
                    <span>marketing@company.com</span>
                  </div>
                </div>
              </div>
              {/* footer */}
              <footer className="mt-5 px-[5%] flex items-center">
                {/* input */}
                <div className="flex-grow bg-blue-900 flex items-center rounded-full border-2 border-gray-400 p-[.13rem]">
                  <input
                    type="text"
                    placeholder="Enter your email"
                    className="w-full focus:outline-none focus:ring-0 bg-transparent border-none"
                  />
                  <button className="px-5 rounded-full bg-pink-600 h-full text-white py-[.5rem]">
                    SIGNUP
                  </button>
                </div>
              </footer>
            </div>
          </div>
          {/* footer bottom */}
          <footer className="px-[1%] mt-5 sm:px-[5%] flex items-center justify-between md:font-medium py-3  md:text-[1rem]">
            <div>
              <span>2024 Copyright</span>
            </div>
            <div>
              <span>Terms and Conditions | Privacy Policy</span>
            </div>
            <div className="flex items-center justify-center gap-5 text-2xl">
              <FaFacebookF />
              <FaXTwitter />
              <FaYoutube />
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Home;
