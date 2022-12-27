const clockEle = document.getElementById("clock");
const hoursEle = document.getElementById("hours");
const minutesEle = document.getElementById("minutes");
const secondsEle = document.getElementById("second");

function currentTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  hoursEle.innerText = hours < 10 ? "0" + hours : hours;
  minutesEle.innerText = minutes < 10 ? "0" + minutes : minutes;
  secondsEle.innerText = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(() => {
  currentTime();
}, 1000); // var countDownDate = new Date().getTime();
// var myfunc = setInterval(function () {
//   if (hoursEle === 0) {
//     return "12";
//   }
// if(minutesEle === 0)
// });

// function getTime(time) {
//   hoursEle == 0 ? "12" : (minutesEle = minutesEle.value < 10 ? "0" : minutes);
//   secondsEle = secondsEle.value < 10 ? "0" : seconds;

//   let hours = new Date(hoursEle.value).getHours();
//   let minutes = new Date(minutesEle.value).getMinutes();
//   let seconds = new Date(secondsEle.value).getSeconds();
// }

// hoursEle.innerHTML = new Date(hoursEle.value).getHours;

// setInterval();
