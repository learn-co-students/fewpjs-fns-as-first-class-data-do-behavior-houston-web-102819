import { endianness } from "os"

/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
};

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
// time = "12:15"
function greet(time){
  // time.split(':');
  var betterTime = parseInt(time)

  if (betterTime < 12) {
    return "Good Morning"
  } else if (betterTime > 12 && betterTime < 17) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  };
};
/* Write your implementation of displayMessage() */
  function displayMessage(string) {
    document.getElementById('greeting').innerText = string 
  }
// console.log(greet("10:00"))

