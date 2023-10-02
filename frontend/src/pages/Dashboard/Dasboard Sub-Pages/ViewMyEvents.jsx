import React from "react";
import { useState, useEffect } from "react";
import BarLoader from "react-spinners/BarLoader";
import MyEvents from "../../../components/Table/Events/MyEvents";
import { Stats } from "../../../components/Card/Statistics/Stats";

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
        /* Flex Container for Horizontal Alignment */
        <div className="flex flex-col w-full">
          {/* Top Section */}
          <div className="w-full bg-[#fafbfd] px-5 z-10">
            <div className="w-full px-5 mx-auto lg:container -mt-28">
              <div className="flex justify-center items-center">
                <h1 className="text-5xl font-semibold text-gray-800">
                  My Events
                </h1>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-md font-medium tracking-widest text-gray-800 lg:text-sm mt-4">
                  Take control of your events! Manage them right here.
                </p>
              </div>
              <Stats
                stat1="Events"
                value1="6"
                stat2="Approved"
                value2="4"
                stat3="Pending"
                value3="2"
                stat4="Declined"
                value4="0"
              />
            </div>
          </div>

          {/* Table Section */}
          <div className="w-full h-[300px] px-5 mx-auto lg:container mt-10">
            <MyEvents
              row1="Title"
              row2="Date"
              row3="Time"
              rowx="Venue"
              row4="Status"
              row5=""
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default ViewMyEvents;
