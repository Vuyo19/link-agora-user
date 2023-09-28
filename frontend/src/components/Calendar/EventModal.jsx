import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
import { X } from "lucide-react";
import { AiFillStar } from "react-icons/ai";
import TimePicker from "./Timepicker";

const labelsClasses = ["indigo", "gray", "green", "blue", "red", "purple"];

export default function EventModal() {
  const { setShowEventModal, daySelected, dispatchCalEvent, selectedEvent } =
    useContext(GlobalContext);

  const [title, setTitle] = useState(selectedEvent ? selectedEvent.title : "");
  const [description, setDescription] = useState(
    selectedEvent ? selectedEvent.description : ""
  );
  const [selectedLabel, setSelectedLabel] = useState(
    selectedEvent
      ? labelsClasses.find((lbl) => lbl === selectedEvent.label)
      : labelsClasses[0]
  );

  const [showPrimaryModal, setShowPrimaryModal] = useState(true); // State for primary modal
  const [showSecondaryModal, setShowSecondaryModal] = useState(false); // State for secondary modal
  const [showThirdModal, setShowThirdModal] = useState(false); // State for third modal

  function handleNext1Click() {
    setShowPrimaryModal(false); // Close the primary modal
    setShowSecondaryModal(true); // Open the second modal
  }

  function handleNext2Click() {
    setShowSecondaryModal(false); // Close the secondary modal
    setShowThirdModal(true); // Open the third modal
  }

  function handlePrevious1Click() {
    setShowPrimaryModal(true); // Reopen the primary modal
    setShowSecondaryModal(false); // Close the current modal
  }

  function handlePrevious2Click() {
    setShowSecondaryModal(true); // Reopen the secondary modal
    setShowThirdModal(false); // Close the current modal
  }

  function handleSubmit(e) {
    e.preventDefault();
    const calendarEvent = {
      title,
      time,
      description,
      eventType,
      venue,
      address1,
      address2,
      capacity,
      label: selectedLabel,
      day: daySelected.valueOf(),
      id: selectedEvent ? selectedEvent.id : Date.now(),
    };
    if (selectedEvent) {
      dispatchCalEvent({ type: "update", payload: calendarEvent });
    } else {
      dispatchCalEvent({ type: "push", payload: calendarEvent });
    }

    setShowEventModal(false); // Close the current modal
  }


  return (
    <div className="fixed left-0 top-0 w-full h-[100vh] flex justify-center items-center">
      {/* Overlay */}
      <div
        className="fixed left-0 top-0 w-full h-full bg-black opacity-40 z-10"
        onClick={() => setShowEventModal(false)} // Close modal on overlay click
      ></div>


      {/* First Modal */}
      {showPrimaryModal && (
        <form className="bg-white rounded-lg shadow-2xl w-2/5 z-20">
          <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              )}
            </div>
            <button onClick={() => setShowEventModal(false)}>
              <X
                size={28}
                className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
              />
            </button>
          </header>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#8A2623] text-center text-xl w-72 h-8">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          <div className="p-5">
            <div className="flex items-center">
              <label
                htmlFor="title"
                className="text-base font-medium text-gray-900 mr-4"
              >
                Title
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  required
                  placeholder="Enter the event title"
                  className="block w-full  text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

{/* Time picker */}

<div className="mt-5">
  <TimePicker />
</div>

            {/* End of Timepicker component */}

            <div className="sm:col-span-2 mt-5">
              <label
                htmlFor="description"
                className="text-base font-medium text-gray-900"
              >
                Description
              </label>
              <div className="mt-2.5 relative">
                <textarea
                  id="description"
                  name="description"
                  value={description}
                  placeholder=""
                  required
                  className="block w-full px-4 py-4 text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 rounded-md resize-y focus:outline-none focus:border-blue-600 caret-blue-600"
                  rows="4"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Type of event */}
            <div className="flex items-center mt-5">
              <ul className="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-400 rounded-lg sm:flex">
                <li className="w-full border-b border-gray-400 sm:border-b-0 sm:border-r">
                  <div className="flex items-center pl-3 mr-4">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      className="w-4 h-4 text-[#01663E] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-500"
                    >
                      Provincial
                    </label>
                  </div>
                </li>

                <li className="w-full border-b border-gray-400 sm:border-b-0 sm:border-r">
                  <div className="flex items-center pl-3 mr-4">
                    <input
                      id="horizontal-list-radio-license"
                      type="radio"
                      value=""
                      name="list-radio"
                      className="w-4 h-4 text-[#01663E] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="horizontal-list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-500"
                    >
                      International
                    </label>
                  </div>
                </li>

                <li className="w-full">
                  <div className="flex items-center pl-3 mr-4">
                    <input
                      id="horizontal-list-radio-international"
                      type="radio"
                      value=""
                      name="list-radio"
                      className="w-4 h-4 text-[#01663E] bg-gray-100 border-gray-300 focus:ring-blue-500 focus:ring-2"
                    />
                    <label
                      htmlFor="horizontal-list-radio-international"
                      className="w-full py-3 ml-2 text-sm font-medium text-gray-500"
                    >
                      Other
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {/* End of Type of event */}
          </div>
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="submit"
              onClick={handleNext1Click}
              className="bg-[#8A2623] hover:bg-black px-6 py-2 rounded text-white w-full ml-12 mr-12 mt-4 mb-4"
            >
              Next
            </button>
          </footer>
        </form>

      )}

            {/* Second Modal */}
            {showSecondaryModal && (
        <form className="bg-white rounded-lg shadow-2xl w-2/5 z-20">
          <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              )}
            </div>
            <button onClick={() => setShowEventModal(false)}>
              <X
                size={28}
                className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
              />
            </button>
          </header>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#007f66] text-center text-xl w-72 h-8">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          <div className="p-5">
            <div className="flex items-center">
              <label
                htmlFor="title"
                className="text-base font-medium text-gray-900 mr-4"
              >
                Venue
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  required
                  placeholder="Enter the event title"
                  className="block w-full  text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

            <div className="flex items-center">
              <label
                htmlFor="title"
                className="text-base font-medium text-gray-900 mr-4"
              >
                Potential Capacity
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  required
                  placeholder="Enter the event title"
                  className="block w-full  text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>
            <div className="flex items-center">
              <label
                htmlFor="title"
                className="text-base font-medium text-gray-900 mr-4"
              >
                Address 1
              </label>
              <div className="mt-2.5 relative">
                <input
                  type="text"
                  id="title"
                  name="title"
                  value={title}
                  required
                  placeholder="Enter the event title"
                  className="block w-full  text-black placeholder-gray-500 transition-all duration-200 bg-white border border-gray-400 rounded-md focus:outline-none focus:border-blue-600 caret-blue-600"
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
            </div>

          </div>
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="button"
              onClick={handlePrevious1Click} // Previous 
              className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded text-gray-600 w-full ml-12 mt-4 mb-4"
            >
              Previous
            </button>
            <button
              type="submit"
              onClick={handleNext2Click} // Next 
              className="bg-[#01663E] hover:bg-black px-6 py-2 rounded text-white w-full ml-12 mr-12 mt-4 mb-4"
            >
              Next
            </button>
          </footer>
        </form>
      )}

      {/* Third Modal */}
      {showThirdModal && (
        <form className="bg-white rounded-lg shadow-2xl w-2/5 z-20">
          <header className="bg-[gray-100] rounded-md px-4 py-2 flex justify-between items-center">
            <div>
              {selectedEvent && (
                <span
                  onClick={() => {
                    dispatchCalEvent({
                      type: "delete",
                      payload: selectedEvent,
                    });
                    setShowEventModal(false);
                  }}
                  className="material-icons-outlined text-gray-400 cursor-pointer"
                >
                  delete
                </span>
              )}
            </div>
            <button onClick={() => setShowEventModal(false)}>
              <X
                size={28}
                className="text-gray-600 mx-2 cursor-pointer rounded-md hover:border-[#007f66]"
              />
            </button>
          </header>
          <div className="flex items-center justify-center">
            <p className="font-medium text-[#007f66] text-center text-xl w-72 h-8">
              {daySelected.format("dddd, MMMM DD")}
            </p>
          </div>
          <div className="p-5">
            {/* End of Timepicker component */}

            {/* choose file */}

            <div class="flex items-center justify-center w-full mt-5">
              <label
                for="dropzone-file"
                class="flex flex-col items-center justify-center w-full h-72 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100"
              >
                <div class="flex flex-col items-center justify-center pt-5 pb-6">
                  <svg
                    class="w-8 h-8 mb-4 text-gray-500 dark:text-gray-400"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 16"
                  >
                    <path
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 13h3a3 3 0 0 0 0-6h-.025A5.56 5.56 0 0 0 16 6.5 5.5 5.5 0 0 0 5.207 5.021C5.137 5.017 5.071 5 5 5a4 4 0 0 0 0 8h2.167M10 15V6m0 0L8 8m2-2 2 2"
                    />
                  </svg>
                  <p class="mb-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="font-semibold">Click to upload</span> or drag
                    and drop
                  </p>
                  <p class="text-xs text-gray-500 dark:text-gray-400">
                    SVG, PNG, JPG or GIF (MAX. 800x400px)
                  </p>
                </div>
                <input id="dropzone-file" type="file" class="hidden" />
              </label>
            </div>

            {/* end of */}

            {/* Event label */}
            <div className="flex items-center mt-5 border border-gray-200 rounded-lg p-3">
              <p className="text-sm font-medium text-gray-500 mr-20">
                Select event label colour
              </p>
              <div className="flex gap-x-4">
                {labelsClasses.map((lblClass, i) => (
                  <span
                    key={i}
                    onClick={() => setSelectedLabel(lblClass)}
                    className={`bg-${lblClass}-500 w-8 h-8 rounded-md flex items-center justify-center cursor-pointer`}
                  >
                    {selectedLabel === lblClass && (
                      <AiFillStar
                        size={48}
                        className="text-white mx-2 cursor-pointer rounded-md"
                      />
                    )}
                  </span>
                ))}
              </div>
            </div>
            {/* End of Event label */}
          </div>
          <footer className="flex justify-end border-t p-3 mt-5">
            <button
              type="button"
              onClick={handlePrevious2Click} // Previous 
              className="bg-gray-300 hover:bg-gray-400 px-6 py-2 rounded text-gray-600 w-full ml-12 mt-4 mb-4"
            >
              Previous
            </button>
            <button
              type="submit"
              onClick={handleSubmit} // Submit 
              className="bg-[#01663E] hover:bg-black px-6 py-2 rounded text-white w-full ml-12 mr-12 mt-4 mb-4"
            >
              Request
            </button>
          </footer>
        </form>
      )}
    </div>
  );
}
