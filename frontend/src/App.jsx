import React from "react";

// Importing Routing
import { Routes, Route } from "react-router-dom";

// Importing Pages
import Dashboard from "./pages/Dashboard/Dashboard";
import Schedule from "./pages/Schedule";
import SettingsPage from "./pages/SettingsPage";
import Profile from "./pages/Profile/Profile";
import NeedHelp from "./pages/NeedHelp/NeedHelp";
import UpcomingEvents from "./pages/Upcoming Events/UpcomingEvents";
import Noti from "./pages/Noti";

// Importing component 
import NavSideBar from "./components/Sidebar/NavSidebar";
import NavBar from "./components/Navbar/NavBar";

// Importing CSS Style
import "./App"; 




const App = () => {
  return (
    <div className="flex bg-[#fafbfd] w-screen">
      <NavSideBar  />
      <div className="flex flex-col flex-grow">
        <NavBar/>
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/schedule" element={<Schedule />} />
            <Route path="/settings" element={<SettingsPage />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/needhelp" element={<NeedHelp />} />
            <Route path="/upcomingevents" element={<UpcomingEvents />} />
            <Route path="/noti" element={<Noti />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
