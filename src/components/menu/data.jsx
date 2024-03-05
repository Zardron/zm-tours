import { PiAirplaneTakeoffFill } from "react-icons/pi";
import { FaGlobe, FaHotel, FaPassport, FaBus, FaShip } from "react-icons/fa";
import { RiHotelFill } from "react-icons/ri";

const MenuData = [
  {
    title: "Flights",
    icon: <PiAirplaneTakeoffFill size={18} className="mr-1" />,
  },
  {
    title: "Tours",
    icon: <FaGlobe size={18} className="mr-1" />,
  },
  {
    title: "Hotels",
    icon: <FaHotel size={18} className="mr-1" />,
  },
  {
    title: "Visa",
    icon: <FaPassport size={18} className="mr-1" />,
  },
  {
    title: "Apartments",
    icon: <RiHotelFill size={18} className="mr-1" />,
  },
  {
    title: "Bus",
    icon: <FaBus size={18} className="mr-1" />,
  },
  {
    title: "Cruise",
    icon: <FaShip size={18} className="mr-1" />,
  },
];

export { MenuData };
