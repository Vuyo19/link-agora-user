import React from "react";
import useWindowSize from "../../components/useWindowSize";

// Importing Component(s)
import DashboardButton from "../../components/Button/DashboardButton";
import MyEvents from "../../components/Spotlight Features/FeaturedEvents";

// Importing React-Icons
import { TbCalendarStar } from "react-icons/tb";
import { FaPeopleGroup } from "react-icons/fa6";
import { LuCalendarCheck2 } from "react-icons/lu";
import { HiOutlineMailOpen } from "react-icons/hi";

// Importing CSS Style
import "./Dashboard.css";

import { Link } from "react-router-dom"; // Import the Link component from React Router

const Dashboard = () => {
  const windowSize = useWindowSize();

  return (
    <div className="dashboard-container">
      <div className="sidebar">
        <h1 className="page-heading">Welcome back Hendrik,</h1>
        <p className="page-subtitle">This is what we've got for you today.</p>

        {/* First Row of buttons */}
        <div className="button-group">
          {/* Dashboard Button 1 - Upcoming Events */}
          <DashboardButton
            title="Upcoming Events"
            icon={<TbCalendarStar color="#016138" />}
            subtitle="12 upcoming events"
            info={
              <Link to="/upcomingevents">
                Click to view all your upcoming events
              </Link>
            }
          />
          {/* #endregion */}

          {/* Dashboard Button 2 - Completed Events */}
          <DashboardButton
            title="Completed Events"
            icon={<LuCalendarCheck2 color="#016138" />}
            iconBackgroundColor="#edf6ff"
            subtitle="8 complted events"
            info="Click to view all your completed events"
            className="w-80"
          />
          {/* #endregion */}
        </div>

        {/* Second Row of buttons */}
        <div className="button-group-2">
          {/* Dashboard Button 3 - Event Invitations */}
          <DashboardButton
            title="Event Invitations"
            icon={<HiOutlineMailOpen color="#016138" />}
            iconBackgroundColor="#f6f2ff"
            subtitle="4 flagged events"
            info="Click to view all your upcoming events"
          />
          {/* #endregion */}

          {/* Dashboard Button 4 - My Event */}
          <DashboardButton
            title="My Events"
            icon={<FaPeopleGroup color="#016138" />}
            iconBackgroundColor="#fdf0f6"
            subtitle="currently empty"
            info="Click to view all your completed events"
          />
          {/* #endregion */}
        </div>

        <div class="flex items-center mt-12">
          <hr class="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />

          <p class="mr-4 ml-4 text-gray-400 font-light">September 2023</p>
          <hr class="my-12 h-0.5 border-t-0 bg-gray-300 opacity-100 dark:opacity-50 flex-grow" />
        </div>
      </div>
      <div className="newsfeed">
        {windowSize.width && windowSize.width > 780 ? <MyEvents /> : null}
      </div>
    </div>
  );
};

export default Dashboard;
