import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import Dashboard from "./pages/Dashboard/Main Page/Dashboard";
import Schedule from "./pages/Schedule";
import SettingsPage from "./pages/SettingsPage";
import Profile from "./pages/Profile/Profile";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import UpcomingEvents from "./pages/Dashboard/Dasboard Sub-Pages/UpcomingEvents";
import Login from "./pages/Login/Login";
import ForgotPassword from "./pages/Login/ForgotPassword";
import ForgotPasswordRequestSent from "./pages/Login/ForgotPasswordRequestSent";
import ResetPasswordConfirm from "./pages/Login/ResetPasswordConfirm";
import NavSideBar from "./components/Exterior/Sidebar/NavSidebar";
import NavBar from "./components/Exterior/Navbar/NavBar";
import "./App.css";
import LoginLayout from "./pages/LoginLayout";
import ViewMyEvents from "./pages/Dashboard/Dasboard Sub-Pages/ViewMyEvents";
import ViewMyInvitations from "./pages/Dashboard/Dasboard Sub-Pages/ViewMyInvitations";

const App = () => {
  const location = useLocation();

  // Define routes that should show the navbar and sidebar
  const showNavRoutes = [
    "/",
    "/schedule",
    "/settings",
    "/profile",
    "/needhelp",
    "/upcomingevents",
    "/noti",
    "/viewmyevents",
    "/viewmyinvitations",
  ];

  // Check if the current route should show the navbar and sidebar
  const shouldShowNav = showNavRoutes.includes(location.pathname);

  return (
    <div className="flex bg-[#fafbfd] w-screen">
      {shouldShowNav && <NavSideBar />}
      <div className="flex flex-col flex-grow">
        {shouldShowNav && <NavBar />} 

        <div className="flex-grow"> 

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/needhelp" element={<NeedHelp />} />
            <Route path="/upcomingevents" element={<UpcomingEvents />} />
            {/* Sub-Pages */}
            <Route path="/viewmyevents" element={<ViewMyEvents />} />
            <Route path="/viewmyinvitations" element={<ViewMyInvitations />} />

            {/* Use the layout for the login page */}
            <Route
              path="/login"
              element={
                <LoginLayout>
                  <Login />
                </LoginLayout>
              }
            />  

            {/* The Forgot password Page*/}
            <Route
              path="/password/reset"
              element={
                <LoginLayout>
                  <ForgotPassword />
                </LoginLayout>
              }
            />  

            <Route
              path="/password/reset/confirm/:uidb64/:token"
              element={
                <LoginLayout>
                  <ResetPasswordConfirm />
                </LoginLayout>
              }
            />   

            <Route
              path="/password/reset/sent"
              element={
                <LoginLayout>
                  <ForgotPasswordRequestSent />
                </LoginLayout>
              }
            />  

          </Routes> 

        </div>
      </div>
    </div>
  );
};

export default App;
