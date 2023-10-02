import React from "react";
import { useState, useEffect } from "react";

import BarLoader from "react-spinners/BarLoader";

import MyInvitations from "../../../components/Table/Invitations/MyInvitations";
import { SlEnvolopeLetter } from "react-icons/sl";

const ViewMyEvents = () => {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 5000);
  }, []);
  return (
    <div className="flex items-center justify-center h-full bg-[#fafbfd]">
            {loading ? (
        <BarLoader color={"#01663E"} loading={loading} size={150} />
      ) : (
      <div className="flex flex-col w-full">
        <div className="w-full bg-[#fafbfd] px-5 z-10">
          {/* Page Content */}
          <div className="w-full px-5 mx-auto lg:container -mt-28"> {/* Adjust margin-top here */}
            <div className="flex justify-center items-center mb-4">
              <SlEnvolopeLetter size={60} />
            </div>
            <div className="flex justify-center items-center">
              <h1 className="text-5xl font-semibold text-gray-800">
                My Invitations
              </h1>
            </div>
            <div className="flex justify-center items-center">
              <p className="text-md font-medium tracking-widest text-gray-800 lg:text-sm mt-4">
                View all of your invitattions! Manage them right here.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full h-[300px] px-5 mx-auto lg:container mt-10">
          {" "}
          <MyInvitations />
        </div>
      </div>
            )}
    </div>
  );
};

export default ViewMyEvents;
