import React, { useState } from "react";
import { useNavigate } from "react-router";
import { ToastContainer, toast } from "react-toastify";

const SlostsModal = ({ isOpen, onClose, availableDates }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedSlot, setSelectedSlot] = useState(null);

  const navigate = useNavigate();

  const handleDateChange = (date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleSlotSelection = (slot) => {
    setSelectedSlot(slot);
  };

  const handleBookAppointment = () => {
    // Implement your logic for booking the appointment
    console.log(`Booked appointment on ${selectedDate} at ${selectedSlot}`);
    onClose();
    toast(`Booked appointment on ${selectedDate} at ${selectedSlot}`);
    navigate("/");
  };

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black/85 ${
        isOpen ? "" : "hidden"
      }`}
    >
      <div className="bg-slate-700 p-8 text-white rounded shadow-md w-96">
        <div className="mb-4">
          <h2 className="text-2xl font-bold mb-2">Select Date and Time</h2>
          <p>Choose a date and time for your appointment:</p>
        </div>

        {/* Date selection */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Select Date:
          </label>
          <select
            onChange={(e) => handleDateChange(e.target.value)}
            value={selectedDate}
            className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
          >
            <option value="" disabled>
              Select a date
            </option>
            {availableDates.map((date) => (
              <option key={date} value={date}>
                {date}
              </option>
            ))}
          </select>
        </div>

        {/* Slot selection */}
        {selectedDate && (
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Select Time Slot:
            </label>
            <select
              onChange={(e) => handleSlotSelection(e.target.value)}
              value={selectedSlot}
              className="w-full p-2 border rounded focus:outline-none focus:ring focus:border-blue-300 text-slate-600"
            >
              <option value="" disabled>
                Select a time slot
              </option>
              {/* Generate time slots with a 15-minute difference between 9 am and 8 pm */}
              {Array.from({ length: (20 - 9) * 4 }).map((_, index) => {
                const hour = Math.floor(index / 4) + 9;
                const minute = (index % 4) * 15;
                const time = new Date(selectedDate);
                time.setHours(hour, minute, 0, 0);
                return (
                  <option
                    key={index}
                    value={time.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  >
                    {time.toLocaleTimeString([], {
                      hour: "numeric",
                      minute: "2-digit",
                    })}
                  </option>
                );
              })}
            </select>
          </div>
        )}

        {/* Book button */}
        <button
          onClick={handleBookAppointment}
          disabled={!selectedDate || !selectedSlot}
          className={`bg-blue-500 text-white py-2 px-4 rounded ${
            !selectedDate || !selectedSlot
              ? "cursor-not-allowed opacity-50"
              : ""
          }`}
        >
          Book Appointment
        </button>

        {/* Close button */}
        <button
          onClick={onClose}
          className="text-gray-100 hover:text-teal-500 mt-2 cursor-pointer focus:outline-none ml-2"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default SlostsModal;
