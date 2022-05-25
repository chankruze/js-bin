/*
Author: chankruze (chankruze@gmail.com)
Created: Sun May 22 2022 16:09:28 GMT+0530 (India Standard Time)

Copyright (c) geekofia 2022 and beyond
*/

function timeConversion(s) {
  // Write your code here
  const daySuffix = s.substr(s.length - 2, 2);
  const time = s.split(":");
  const hour = time[0];
  const min = time[1];
  const sec = time[2].substr(0, 2);
  // if AM
  if (daySuffix === "AM") {
    if (hour === "12") {
      return `00:${min}:${sec}`;
    }

    return `${hour}:${min}:${sec}`;
  }
  // if PM
  if (daySuffix === "PM") {
    if (hour === "12") {
      return `${hour}:${min}:${sec}`;
    }

    return `${parseInt(hour) + 12}:${min}:${sec}`;
  }
}

console.log(timeConversion("12:45:54PM"));
console.log(timeConversion("01:45:54PM"));
console.log(timeConversion("12:45:54AM"));
console.log(timeConversion("01:45:54AM"));
