import React from "react";

const FlightDetails = ({ flightDetails, setFlightDetails }) => {
  return (
    <div className="flex items-center gap-6  font-primary text-secondary font-bold">
      <p
        className={`${
          flightDetails === "one-way" ? "gradient-text" : "text-secondary"
        } cursor-pointer`}
        onClick={() => setFlightDetails("one-way")}
      >
        One-way
      </p>
      <p
        className={`${
          flightDetails === "round-trip" ? "gradient-text" : "text-secondary"
        } cursor-pointer`}
        onClick={() => setFlightDetails("round-trip")}
      >
        Round-trip
      </p>
      <p
        className={`${
          flightDetails === "multi-city" ? "gradient-text" : "text-secondary"
        } cursor-pointer`}
        onClick={() => setFlightDetails("multi-city")}
      >
        Multi-city
      </p>
    </div>
  );
};

export default FlightDetails;
