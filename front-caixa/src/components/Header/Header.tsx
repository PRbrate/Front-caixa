import { Link } from "react-router-dom";
import { MdAssignmentReturn } from "react-icons/md";
import { IoIosAlarm } from "react-icons/io";
import ClockHour from "../ClockHour/ClockHour";
import { useState } from "react";

function Header() {

  const [showClock, setShowClock] = useState(false);

  function openCLock(){
    setShowClock(!showClock);
  }

  return (
    <div className="h-[50px] w-full fixed z-50">
      <div
      className="bg-color-base-clara text-color-dominante-azul
      flex flex-row items-center
      justify-between p-4 "
      style={{ boxShadow: "0px 2px 5px #1f1f1f" }}
      >
        <div
          className=" rounded-[5px] pl-1 pr-1
        transform transition-transform duration-300 
        hover:scale-105"
        >
          <Link
            to={"/"}
            className="flex items-center font-bold text-2x1 text-[#1A237E]"
          >
            {" "}
            <MdAssignmentReturn /> RETORNAR
          </Link>
        </div>
        <div className="flex flex-wrap justify-between">
          <p className="font-bold text-2xl">
            <span className="font-bold text-3xl">PR</span>brate
          </p>
        </div>
        <button
          className="cursor-pointer text-2xl  transform 
      transition-transform duration-300 hover:scale-110"
          onClick={openCLock}
        >
          <IoIosAlarm />
        </button>
      </div>
      {showClock && <ClockHour />}
    </div>
  );
}

export default Header;
