import React, { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";

const DateDisplay = () => {
  // Initializing currentTime with the current date immediately
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    // Set up the timer to update currentTime every second
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    // Clean up the interval to prevent memory leaks
    return () => clearInterval(timer);
  }, []);

  // Format options for displaying the date and time
  const options = {
    weekday: "short",
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  };

  // Formatting the date string to desired locale and format
  const dateString = currentTime
    .toLocaleDateString("en-US", options)
    .replace(",", "")
    .replace(" a. m.", "")
    .replace(" p. m.", "");

  return (
    <div className="flex items-center justify-center w-full text-white mb-40">
      <div className="text-xl font-light flex items-center">
        {/* Arrow with bounce animation */}
        <span className="font-medium mr-2 flex items-center">
          <FaArrowDown className="animate-bounce" />
        </span>
        {dateString}
      </div>
    </div>
  );
};

export default DateDisplay;
