//  Dom elements selections
let clockHour = document.querySelector("#hour .number");
let clockMinute = document.querySelector("#minute .number");
let clockSeconds = document.querySelector("#second .number");

// Setting clock
let set_clock = setInterval(() => {
  let date_now = new Date();
  let hours = date_now.getHours();
  let minutes = date_now.getMinutes();
  let seconds = date_now.getSeconds();

  // assigning dynamic values
  clockHour.textContent = hours < 10 ? `0${hours}` : hours;
  clockMinute.textContent = minutes < 10 ? `0${minutes}` : minutes;
  clockSeconds.textContent = seconds < 10 ? `0${seconds}` : seconds;
}, 1000);
