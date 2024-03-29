import React from "react";
import OneWay from "./flights/OneWay";
import Rountrip from "./flights/Rountrip";
import MultiCity from "./flights/MultiCity";

const Flights = ({ flightDetails }) => {
  const renderComponent = () => {
    switch (flightDetails) {
      case "one-way":
        return <OneWay />;
      case "round-trip":
        return <Rountrip />;
      case "multi-city":
        return <MultiCity />;
    }
  };

  return renderComponent(flightDetails);
};

export default Flights;
