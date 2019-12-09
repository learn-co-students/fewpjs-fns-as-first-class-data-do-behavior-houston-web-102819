/* Given Code, don't edit */

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/


function greet(time){
  let a = parseInt(time,10)
  if(a < 12)
    return "Good Morning"
  if(a > 17)
    return "Good Evening"
  return "Good Afternoon"
}
/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function displayMessage(msg) {
  document.getElementById("greeting").innerText = msg;
}