import React from "react";

const Display = ({ days, hours, minutes, seconds }) => {
  return (
    <div>
      <h1> COUNTDOWN TIMER FOR BIRTHDAY CELEBRATIONS..💥</h1>
      <h2> NAVEEN CHANDRA 💙</h2>
      <h3>Advance Happy Birthday!! #NC GOUD 🎂 </h3>
      <table>
        <tbody>
          <tr>
            <th>{days}</th>&nbsp;&nbsp;
            <th>{hours}</th>&nbsp;&nbsp;
            <th>{minutes}</th>&nbsp;&nbsp;
            <th>{seconds}</th>&nbsp;&nbsp;🕑
          </tr>
          <tr>
            <td>DAYS</td>&nbsp;&nbsp;
            <td>HOURS</td>&nbsp;&nbsp;
            <td>MINUTES</td>&nbsp;&nbsp;
            <td>SECONDS</td>&nbsp;&nbsp;
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Display;
