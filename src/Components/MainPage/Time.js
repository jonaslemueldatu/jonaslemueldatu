import React from "react";
import "./Time.css";

function Time() {
  const [date, setDate] = React.useState(new Date());

  React.useEffect(() => {
    setInterval(() => setDate(new Date()), 1000);
  }, []);

  return (
    <div className="ClockContainer">
      <span className="Seconds">
        {date.getSeconds() < 10 ? "0" : ""}
        {date.getSeconds()}
      </span>
      <span className="Hours">
        {date.getHours() < 10 ? "0" : ""}
        {date.getHours()}:{date.getMinutes() < 10 ? "0" : ""}
        {date.getMinutes()}
      </span>
    </div>
  );
}

export default Time;
