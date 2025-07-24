import { useEffect, useState } from "react";

function ClockHour(){
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const internal = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => clearInterval(internal);
  }, []);

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString();
  };

  return (
    <div className="w-full flex justify-end">
      <div
        className="  text-[2rem] mt-2 text-color-dominante-azul bg-white justify-center font-bold border-2 rounded-2xl px-2 max-w-40"
        style={{ fontFamily: "monospace" }}
      >
        {formatTime(time)}
      </div>
    </div>
  );
}

export default ClockHour;