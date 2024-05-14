import React from "react";
// import bg from "./../assets/images/customers/customer-i.jpg";
import bg1 from "./../assets/images/site-logo/makutapeople.jpg";
import bg2 from "./../assets/images/site-logo/makutapeople2.jpg";
import bg3 from "./../assets/images/site-logo/makutapeople3.jpg";
import { Accordion } from "flowbite-react";

const StaticPage = () => {
  return (
    <div className="w-full flex flex-col mt-20">
      <div className="flex flex-col lg:flex-row items-center justify-center">
        <div className="flex w-full flex-col pl-2  lg:pl-32 items-start justify-center gap-12">
          <p className="text-lg">Makuta law firm</p>
          <p className="text-5xl font-semibold">About Makuta law firm</p>
          <p className="text-lg">
            From wills to powers of attorney, the right estate planning
            documents can safeguard you and your loved ones—both now, and later.
          </p>
          <button className="px-10 text-xl py-5 hover:text-gray-200 rounded-full bg-main text-white">
            Join us
          </button>
          <div className="flex items-end justify-end gap-4">
            <p className="text-lg font-bold">Excellent</p>
            <div className="flex gap-1">
              {[0, 1, 2, 3, 4].map(e => {
                return (
                  <div key={e} className="bg-emerald-500 text-white p-1">
                    {e !== 4 ? (
                      <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="m13.001 19.927 2.896 1.773c1.52.93 3.405-.442 2.992-2.179l-1.06-4.452 3.468-2.978c1.353-1.162.633-3.382-1.142-3.525L15.603 8.2l-1.754-4.226A1.973 1.973 0 0 0 13 3v16.927ZM10.999 3c-.36.205-.663.53-.848.974L8.397 8.2l-4.552.366c-1.775.143-2.495 2.363-1.142 3.525l3.468 2.978-1.06 4.452c-.413 1.737 1.472 3.11 2.992 2.178l2.896-1.773V3Z" />
                      </svg>
                    ) : (
                      <svg
                        class="w-6 h-6"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M13 4.024v-.005c0-.053.002-.353-.217-.632a1.013 1.013 0 0 0-1.176-.315c-.192.076-.315.193-.35.225-.052.05-.094.1-.122.134a4.358 4.358 0 0 0-.31.457c-.207.343-.484.84-.773 1.375a168.719 168.719 0 0 0-1.606 3.074h-.002l-4.599.367c-1.775.14-2.495 2.339-1.143 3.488L6.17 15.14l-1.06 4.406c-.412 1.72 1.472 3.078 2.992 2.157l3.94-2.388c.592-.359.958-.996.958-1.692v-13.6Zm-2.002 0v.025-.025Z"
                          clip-rule="evenodd"
                        />
                      </svg>
                    )}
                  </div>
                );
              })}
            </div>
            <div className="flex gap-1 items-end">
              <svg
                class="w-8 h-8 text-emerald-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fill-rule="evenodd"
                  d="M11.644 3.066a1 1 0 0 1 .712 0l7 2.666A1 1 0 0 1 20 6.68a17.694 17.694 0 0 1-2.023 7.98 17.406 17.406 0 0 1-5.402 6.158 1 1 0 0 1-1.15 0 17.405 17.405 0 0 1-5.403-6.157A17.695 17.695 0 0 1 4 6.68a1 1 0 0 1 .644-.949l7-2.666Zm4.014 7.187a1 1 0 0 0-1.316-1.506l-3.296 2.884-.839-.838a1 1 0 0 0-1.414 1.414l1.5 1.5a1 1 0 0 0 1.366.046l4-3.5Z"
                  clip-rule="evenodd"
                />
              </svg>
              <p className="text-lg font-semibold">Trust Pilot</p>
              {/* <img src={logo} alt="" className="w-36 ml-4 h-28 rounded-sm" /> */}
            </div>
          </div>
        </div>
        <div className="relative w-full">
          <div
            style={{ backgroundImage: `url(${bg3})` }}
            className="w-full bg-no-repeat object-cover object-bottom px-main flex items-start h-[85vh] justify-start"
          ></div>
          <div className="absolute z-20 w-[20%] h-[100%] top-0 left-0 bg-gradient-to-r from-white to-slate-100/1"></div>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row w-full px-2 lg:px-32 gap-10 mt-4 lg:mt-32 items-center justify-center">
        <div className="flex w-full flex-col gap-10">
          <p className="text-5xl font-semibold">Work with Professional</p>
          <p className="text-lg">
            Whether you need to establish a company, apply for licenses and
            permits, or obtain a tax ID, we will help set your business up for
            success.
          </p>
          <button className="w-56 text-xl py-5 hover:text-gray-200 rounded-full bg-main text-white">
            Register to Makuta
          </button>
        </div>
        <div className="w-full p-5">
          <img src={bg1} alt="" className="w-full border rounded-sm h-80" />
        </div>
      </div>

      <div className="flex flex-col lg:flex-row-reverse w-full px-2 lg:px-32 gap-5 mt-10 lg:mt-32 items-center justify-center">
        <div className="flex w-full flex-col gap-5">
          <p className="text-4xl font-semibold">Connect with our Business</p>
          <p className="text-lg">
            Whether you need to establish a company, apply for licenses and
            permits, or obtain a tax ID, we will help set your business up for
            success.
          </p>

          <p className="text-4xl font-semibold mt-5">Find best Lawyers</p>
          <p className="text-lg">
            Whether you need to establish a company, apply for licenses and
            permits, or obtain a tax ID, we will help set your business up for
            success.
          </p>
        </div>
        <div className="w-full p-5">
          <img
            src={bg2}
            alt=""
            className="w-full border rounded-sm h-[350px]"
          />
        </div>
      </div>

      <div className="w-full mb-20 text-lg px-2 lg:px-32 text-black mt-5 lg:mt-10">
        <p className="w-full py-4 my-10 border-b-4 border-black font-bold text-2xl">
          Makuta FAQ
        </p>
        <Accordion>
          <Accordion.Panel>
            <Accordion.Title className="text-black font-bold">
              What is Your scope?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 ">
                Our Network of experienced lawyers number in the hundreds
                throughout Africa and the world, ensuring your legal needs are
                met where you are.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black font-bold">
              Why Makuta is special?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 ">
                Our Network of experienced lawyers number in the hundreds
                throughout Africa and the world, ensuring your legal needs are
                met where you are.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black font-bold">
              How can i get Legal Service?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 ">
                Our Network of experienced lawyers number in the hundreds
                throughout Africa and the world, ensuring your legal needs are
                met where you are.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black font-bold">
              Have you face court or arbitration case in Ethiopian?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 ">
                Don’t worry Makuta Law Firm right behind you. Risk management
                and compliance are keys to avoid disruptive large scale
                litigation. Whenever possible, our team make sure our clients
                implement measures to ensure they do not become embroiled into
                dispute. Our Services include
              </p>
            </Accordion.Content>
          </Accordion.Panel>
          <Accordion.Panel>
            <Accordion.Title className="text-black font-bold">
              What is intellectual property?
            </Accordion.Title>
            <Accordion.Content>
              <p className="mb-2 ">
                Need to trademark your logo, copyright a creative work, or
                patent an invention? Protect yourself against copycats.
              </p>
            </Accordion.Content>
          </Accordion.Panel>
        </Accordion>
      </div>
    </div>
  );
};

export default StaticPage;
