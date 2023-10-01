import React from "react";
import MyInvitations from "../../../components/Table/Invitations/MyInvitations";
import { SlEnvolopeLetter } from "react-icons/sl";

const ViewMyEvents = () => {
  return (
    <div className="flex items-center h-full bg-[#fafbfd]">
      {/* Flex Container for Horizontal Alignment */}
      <div className="flex flex-col w-full">
        {/* Top Section */}
        <div className="w-full bg-[#fafbfd] px-5 z-10">
          <div className="w-full px-5 mx-auto lg:container">
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
                Take control of your events! Manage them right here.
              </p>
            </div>
            {/* <Stats /> */}
          </div>
        </div>

        {/* Table Section */}
        <div className="w-full h-[300px]  px-5 mx-auto lg:container mt-10">
          {" "}
          {/* Add margin-top to separate the sections */}
          <MyInvitations />
        </div>
      </div>
    </div>
  );
};

export default ViewMyEvents;
