import React from "react";
import MyEventItem from "./MyEventItem";

function MyEvents({ row1, row2, row3, row4, row5 }) {
  return (
    <div class="w-full px-5 mx-auto lg:container">
      <div class="w-full-lg mx-auto">
        <div class="w-full my-10 overflow-x-auto border border-gray-200  rounded-md shadow-sm">
          <table class="min-w-full bg-white rounded whitespace-nowrap">
            <thead class="border-b bg-gray-50">
              <tr class="">
                <th class="px-3 py-3 text-center ">
                  <div class="flex place-content-center">
                    <input
                      type="checkbox"
                      name="select_all"
                      id="select_all"
                      class="w-4 h-4 text-indigo-500 border border-gray-200 rounded focus:border-indigo-500 focus:ring focus:ring-indigo-500 focus:ring-opacity-50 dark:border-gray-700"
                    />
                  </div>
                </th>
                <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                  {row1}
                </th>
                <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                  {row2}
                </th>
                <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                  {row3}
                </th>
                <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle">
                  {row4}
                </th>
                <th class="px-3 py-3 text-xs font-normal text-right text-gray-500 uppercase align-middle">
                  {row5}
                </th>
                <th class="px-3 py-3 text-xs font-normal text-left text-gray-500 uppercase align-middle"></th>
              </tr>
            </thead>
            {/* InserT Row Item */}
            <MyEventItem
              title="My Birthday"
              date="01 Oct, 2023"
              time="12:45 pm"
              status="completed"
              amount="500"
              textColor="rgb(34 197 94)" // Custom text color
              bgColor="rgb(240 253 244)" // Custom background color
            />

            <MyEventItem
              title="My Birthday"
              date="01 Oct, 2023"
              time="12:45 pm"
              status="pending"
              amount="500"
              textColor="rgb(234 179 8)" // Custom text color
              bgColor="rgb(254 252 232)" // Custom background color
            />

            <MyEventItem
              title="My Birthday"
              date="01 Oct, 2023"
              time="12:45 pm"
              status="declined"
              amount="500"
              textColor="rgb(244 63 94)" // Custom text color
              bgColor="rgb(255 241 242)" // Custom background color
            />           
          </table>
        </div>
      </div>
    </div>
  );
}

export default MyEvents;
