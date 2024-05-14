import { Route, Routes } from "react-router-dom";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home";
import HomeDashboard from "./pages/dashboard/HomeDashboard";
import PageNotFound from "./components/PageNotFound";
import Login from "./pages/Login";
import Chat from "./pages/Chat";
import { Flowbite } from "flowbite-react";
import FinalHome from "./pages/FinalHome";
// customer
import CustomerDashboard from "./pages/dashboard/customer/CustomerDashboard";
import ManagerDashboard from "./pages/dashboard/ManagerDashboard";
import LawyerDashboard from "./pages/dashboard/lawyer/LawyerDashboard";
import CustomerDashboardHome from "./pages/dashboard/customer/customer-sub-pages/CustomerDashboardHome";
import Message from "./pages/dashboard/customer/customer-sub-pages/Message";
import Appointment from "./pages/dashboard/customer/customer-sub-pages/Appointment";
// customer compliance
import NewCase from "./pages/dashboard/customer/customer-sub-pages/NewCase";
// customer charts pages
import CaseTeam from "./pages/dashboard/customer/customer-charts/CaseTeam";
import ActiveCase from "./pages/dashboard/customer/customer-charts/ActiveCase";
import ClosedCase from "./pages/dashboard/customer/customer-charts/ClosedCase";
// customer finance pages
import AddFunds from "./pages/dashboard/customer/customer-finance/AddFunds";
import RequestedPayment from "./pages/dashboard/customer/customer-finance/RequestedPayment";
import RefundFunds from "./pages/dashboard/customer/customer-finance/RefundFunds";
import RecentTransactions from "./pages/dashboard/customer/customer-finance/RecentTransaction";

// customers  services
import Training from "./pages/dashboard/customer/customer-services/Training";
import Consulting from "./pages/dashboard/customer/customer-services/Consulting";
import Researches from "./pages/dashboard/customer/customer-services/Researches";

// lawyer

import LawyerDashboardHome from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerDashboardHome";
import LawyerNewCase from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerNewCase";
import Video from "./pages/Video";
import { useReadQuery } from "./features/api/apiSlice";
import { createContext, useEffect } from "react";
import Applications from "./pages/dashboard/applications/Applications";
import OnRequest from "./pages/dashboard/customer/customer-sub-pages/new-case-sub-pages/OnRequest";
import Success from "./pages/Success";
import Forget from "./pages/Forget";
import Reset from "./pages/Reset";
import CustomerProfile from "./pages/dashboard/customer/customer-sub-pages/CustomerProfile";
import ChangePassword from "./pages/dashboard/customer/customer-sub-pages/ChangePassword";
import ComingSoon from "./components/ComingSoon";
import LawyerProfile from "./pages/dashboard/lawyer/lawyer-sub-pages/LawyerProfile";
import StaticPage from "./pages/StaticPage";

export const userContext = createContext();

// home pages
import HomeIndex from "./pages/home-pages/HomeIndex";
// civil
import Succession from "./pages/civil/Succession";
import Employment from "./pages/civil/Employment";
import Property from "./pages/civil/Property";
import Torts from "./pages/civil/Torts";
// civil -- contract
import ContractOfSpecialMovables from "./pages/civil/contract/ContractOfSpecialMovables";
// other services
import HomeTraining from "./pages/other-services/Training";
import HomeConsulting from "./pages/other-services/Consulting";
import HomeResearches from "./pages/other-services/Researches";
import ChatBots from "./pages/ChatBots";

function App() {
  const { data: user } = useReadQuery({
    url: "/user/readProfileInfo",
    tag: ["users"]
  });

  // useEffect(() => {
  //   console.log(user, "user data from app js");
  // }, [user]);
  // console.log(user, "user from app js");
  return (
    <Flowbite>
      <userContext.Provider value={{ user: user?.data }}>
        <div className={`font-workSans medium   tracking-wide`}>
          <ChatBots />
          <div className="flex flex-col">
            <Routes>
              {/* ###################################### ADMIN DASHBOARD #################################### */}
              {/* <Route path="/dashboard" element={<HomeDashboard />}>
                <Route
                  path="/dashboard/applications"
                  element={<Applications />}
                />
              </Route> */}

              {/* ###################################### HOME #################################### */}
              <Route path="/" element={<FinalHome />}>
                <Route path="/" element={<HomeIndex />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/signUp" element={<SignUp />}></Route>
                <Route path="/forget" element={<Forget />}></Route>
                <Route path="/reset" element={<Reset />}></Route>
                <Route path="/services" element={<StaticPage />}></Route>
                <Route path="/succession" element={<Succession />}></Route>
                <Route path="/employment" element={<Employment />}></Route>
                <Route path="/property" element={<Property />}></Route>
                <Route path="/torts" element={<Torts />}></Route>
                <Route
                  path="/contract-of-special-movables"
                  element={<ContractOfSpecialMovables />}
                ></Route>
                {/* other services */}
                <Route path="/training" element={<HomeTraining />}></Route>
                <Route path="/consulting" element={<HomeConsulting />}></Route>
                <Route path="/researches" element={<HomeResearches />}></Route>
              </Route>

              {/* ###################################### LAWYER DASHBOARD #################################### */}
              {/* <Route path="/dashboard/lawyer" element={<LawyerDashboard />}> */}
              {/* <Route
                  // path="/dashboard/customer/home"
                  index
                  element={<LawyerDashboardHome />}
                ></Route> */}
              {/* customer case request */}
              {/* <Route
                  path="/dashboard/lawyer/profile"
                  element={<LawyerProfile />}
                ></Route> */}
              {/* change password */}
              {/* <Route
                  path="/dashboard/lawyer/change-password"
                  element={<ChangePassword />}
                ></Route> */}
              {/* <Route
                  path="/dashboard/lawyer/lawyer-new-case"
                  element={<ComingSoon />}
                  // element={<LawyerNewCase />}
                ></Route> */}
              {/* </Route> */}

              {/* ###################################### CUSTOMER DASHBOARD #################################### */}
              {user?.data?.role === "private-customer" ||
              user?.data?.role === "private-customer" ? (
                <Route
                  path="/dashboard/customer"
                  element={<CustomerDashboard />}
                >
                  <Route
                    // path="/dashboard/customer/home"
                    index
                    element={<CustomerDashboardHome />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/message"
                    element={<ComingSoon />}
                    // element={<Message />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/message/video"
                    element={<ComingSoon />}
                    // element={<Video />}
                  />
                  <Route
                    path="/dashboard/customer/appointment"
                    element={<ComingSoon />}
                    // element={<Appointment />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/success"
                    element={<ComingSoon />}
                    // element={<Success />}
                  ></Route>
                  {/* customer compliance */}
                  <Route
                    path="/dashboard/customer/new-case"
                    // element={<ComingSoon />}
                    element={<NewCase />}
                  ></Route>
                  {/* customer case request */}
                  <Route
                    path="/dashboard/customer/on-request"
                    element={<OnRequest />}
                  ></Route>
                  {/* customer case request */}
                  <Route
                    path="/dashboard/customer/profile"
                    element={<CustomerProfile />}
                  ></Route>
                  {/* change password */}
                  <Route
                    path="/dashboard/customer/change-password"
                    element={<ChangePassword />}
                  ></Route>
                  {/* customer charts */}
                  <Route
                    path="/dashboard/customer/case-team"
                    element={<ComingSoon />}
                    // element={<CaseTeam />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/active-case"
                    element={<ComingSoon />}
                    // element={<ActiveCase />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/closed-case"
                    element={<ComingSoon />}
                    // element={<ClosedCase />}
                  ></Route>
                  {/* customer finance */}
                  <Route
                    path="/dashboard/customer/add-funds"
                    element={<ComingSoon />}
                    // element={<AddFunds />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/requested-payment"
                    element={<ComingSoon />}
                    // element={<RequestedPayment />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/refund-funds"
                    element={<ComingSoon />}
                    // element={<RefundFunds />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/recent-transactions"
                    element={<ComingSoon />}
                    // element={<RecentTransactions />}
                  ></Route>
                  {/* customer services */}
                  <Route
                    path="/dashboard/customer/training"
                    element={<ComingSoon />}
                    // element={<Training />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/consulting"
                    element={<ComingSoon />}
                    // element={<Consulting />}
                  ></Route>
                  <Route
                    path="/dashboard/customer/researches"
                    element={<ComingSoon />}
                    // element={<Researches />}
                  ></Route>{" "}
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              ) : null}

              {/* ###################################### LAWYER DASHBOARD #################################### */}
              {user?.data?.role === "lawyer" && (
                <Route path="/dashboard/lawyer" element={<CustomerDashboard />}>
                  <Route
                    // path="/dashboard/customer/home"
                    index
                    element={<CustomerDashboardHome />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/message"
                    element={<ComingSoon />}
                    // element={<Message />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/message/video"
                    element={<ComingSoon />}
                    // element={<Video />}
                  />
                  <Route
                    path="/dashboard/lawyer/appointment"
                    element={<ComingSoon />}
                    // element={<Appointment />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/success"
                    element={<ComingSoon />}
                    // element={<Success />}
                  ></Route>
                  {/* customer compliance */}
                  <Route
                    path="/dashboard/lawyer/new-case"
                    element={<ComingSoon />}
                    // element={<NewCase />}
                  ></Route>
                  {/* customer case request */}
                  <Route
                    path="/dashboard/lawyer/on-request"
                    // element={<OnRequest />}
                    element={<ComingSoon />}
                  ></Route>
                  {/* customer case request */}
                  <Route
                    path="/dashboard/lawyer/profile"
                    element={<CustomerProfile />}
                  ></Route>
                  {/* change password */}
                  <Route
                    path="/dashboard/lawyer/change-password"
                    element={<ChangePassword />}
                  ></Route>
                  {/* customer charts */}
                  <Route
                    path="/dashboard/lawyer/case-team"
                    element={<ComingSoon />}
                    // element={<CaseTeam />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/active-case"
                    element={<ComingSoon />}
                    // element={<ActiveCase />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/closed-case"
                    element={<ComingSoon />}
                    // element={<ClosedCase />}
                  ></Route>
                  {/* customer finance */}
                  <Route
                    path="/dashboard/lawyer/add-funds"
                    element={<ComingSoon />}
                    // element={<AddFunds />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/requested-payment"
                    element={<ComingSoon />}
                    // element={<RequestedPayment />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/refund-funds"
                    element={<ComingSoon />}
                    // element={<RefundFunds />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/recent-transactions"
                    element={<ComingSoon />}
                    // element={<RecentTransactions />}
                  ></Route>
                  {/* customer services */}
                  <Route
                    path="/dashboard/lawyer/training"
                    element={<ComingSoon />}
                    // element={<Training />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/consulting"
                    element={<ComingSoon />}
                    // element={<Consulting />}
                  ></Route>
                  <Route
                    path="/dashboard/lawyer/researches"
                    element={<ComingSoon />}
                    // element={<Researches />}
                  ></Route>{" "}
                  <Route path="*" element={<PageNotFound />} />
                </Route>
              )}
            </Routes>
          </div>
        </div>
      </userContext.Provider>
    </Flowbite>
  );
}

export default App;
