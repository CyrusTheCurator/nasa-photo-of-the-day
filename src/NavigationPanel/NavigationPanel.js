import React, { useState, useEffect } from "react";
import "./NavigationPanel.css";
let currentYear = 0;
let currentMonth = 0;
let currentDay = 0;
function NavigationPanel(props) {
  useEffect(() => {
    let currentDateArray = navigate();
    currentYear = currentDateArray[0];
    currentMonth = parseInt(currentDateArray[1]);
    currentDay = parseInt(currentDateArray[2]);
    console.log(
      `useEffect initial render states day is ${currentYear}, ${currentMonth}, ${currentDay}`
    );
  }, []);

  const navigate = direction => {
    let year = "";
    let month = "";
    let date = "";
    let currentCharacter = "";
    //This function checks to see how many days are in the month we are entering
    const monthCycler = arg => {
      //handle cycling into previous month

      if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
      ) {
        if (arg === "end") {
          date = 31;
        }
        if (arg === "start") {
          date = 1;
          month = month + 1;
        }
      } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (arg === "end") {
          date = 30;
        }
        if (arg === "start") {
          date = 1;
          month = month + 1;
        }
      }

      //handle cycling into next month
    };

    //grab the year, loop through it, and push it into the year string
    for (let i = 0; i < props.date.length - 6; i++) {
      currentCharacter = props.date.charAt(i);
      year = year + currentCharacter;
    }

    //grab the month, loop through it, and push it into the month string
    for (let i = 5; i < props.date.length - 3; i++) {
      currentCharacter = props.date.charAt(i);
      month = month + currentCharacter;
    }

    //grab the date, loop through it, and push it into the date string
    for (let i = 8; i < props.date.length; i++) {
      currentCharacter = props.date.charAt(i);
      date = date + currentCharacter;
    }
    year = parseInt(year);
    month = parseInt(month);
    date = parseInt(date);

    if (direction === "left") {
      if (date > 1) {
        date = date - 1;
      } else {
        month = month - 1;
        monthCycler("end");
      }
    }
    if (direction === "right") {
      if (
        month === 1 ||
        month === 3 ||
        month === 5 ||
        month === 7 ||
        month === 8 ||
        month === 10 ||
        month === 12
      ) {
        if (date === 31) {
          monthCycler("start");
        } else {
          date = date + 1;
        }
      } else if (month === 4 || month === 6 || month === 9 || month === 11) {
        if (date === 30) {
          monthCycler("start");
        } else {
          date = date + 1;
        }
      }
    }

    //Handle Leap Years--------------------------------------------------------------

    if (year % 4 === 0 && month === 2 && date === 29 && direction === "right") {
      date = 1;
      month = 3;
    } else if (
      year % 4 === 0 &&
      month === 2 &&
      date != 29 &&
      direction === "right"
    ) {
      date = date + 1;
    } else if (
      year % 4 === 0 &&
      month === 3 &&
      date === 1 &&
      direction === "left"
    ) {
      date = 29;
      month = 2;
    }
    //end of leap year handler--------------------------------------------------------

    //check if we are trying to navigate I N T O - T H E- F U T U R E
    if (month === currentMonth && date > currentDay) {
      return console.log("you have reached the current date");
    }

    //add zeroes to properly format output
    if (date < 10) {
      date = "0" + date;
    }
    if (month < 10) {
      month = "0" + month;
    }
    console.log(`before we assign,  new vals are ${year}, ${month}, ${date}`);
    let dateTotal = year + "-" + month + "-" + date;
    console.log(
      `current date information is: ${currentYear}, ${currentMonth}, ${currentDay}`
    );
    //at long last, we have our new argument!

    props.setDate(dateTotal);
    return [year, month, date];
  };

  const navigateLeft = () => {
    navigate("left");
  };

  const navigateRight = () => {
    navigate("right");
  };

  return (
    <div className="navPanelContainer">
      <button id="left" onClick={navigateLeft}>
        {"<"}
      </button>
      <button id="right" onClick={navigateRight}>
        {">"}
      </button>
    </div>
  );
}

export default NavigationPanel;
