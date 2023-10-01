import React from 'react'

export const Stats = () => {
    return (
      <div class="px-4 py-8 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-4 lg:px-36 lg:py-10">
        
        <div class="grid grid-cols-2 row-gap-4 md:grid-cols-4">

          <div class="text-center md:border-r">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">6</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              Events
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">4</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              Approved
            </p>
          </div>
          <div class="text-center md:border-r">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">2</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              Pending
            </p>
          </div>
          <div class="text-center">
            <h6 class="text-lg font-bold lg:text-xl xl:text-2xl">0</h6>
            <p class="text-md font-medium tracking-widest text-gray-800 uppercase lg:text-sm">
              Declined
            </p>
          </div>
        </div>
      </div>
    );
  };