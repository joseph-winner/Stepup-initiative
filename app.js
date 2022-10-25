// EVENT TIMER
const days = document.querySelector(".conf-days");
const hours = document.querySelector(".conf-hours");
const minutes = document.querySelector(".conf-mins");
const seconds = document.querySelector(".conf-secs");

const countDown = () => {
  const countDate = new Date("September 27, 2022 00:00:00").getTime();
const currentDate = new Date().getTime();
const gap = countDate - currentDate;

const secValue = Math.floor(gap / 1000) % 60;
const minValue = Math.floor(gap / 1000 / 60) % 60;
const hourValue = Math.floor(gap / 1000 / 60 / 60 / 60);
const dayValue = Math.floor(gap / 1000 / 60 / 60 / 24);
// console.log(secValue, minValue, hourValue, dayValue)


days.innerHTML = dayValue < 10 ? `0${dayValue}` : dayValue;
hours.innerHTML = hourValue < 10 ? `0${hourValue}` : hourValue;
minutes.innerHTML = minValue < 10 ? `0${minValue}` : minValue;
seconds.innerHTML = secValue < 10 ? `0${secValue}` : secValue;

}
countDown();
setInterval(countDown, 1000);


// include footer
const footer = document.getElementsByClassName("my-footer")[0];
fetch("/step-up.footer.html")
  .then((res) => res.text())
  .then((data) => {
    footer.innerHTML = data;
  });

// ..............................................

// include Header/Nav Bar in all Pages
const nav = document.querySelector("header");
fetch("/header.nav-bar.html")
  .then((res) => res.text())
  .then((data) => {
    nav.innerHTML = data;
    const parser = new DOMParser();
    const doc = parser.parseFromString(data, "text/html");
    eval(doc.querySelector("script").textContent);
  });

// ...............................................

var slider = document.querySelector(".banner").children,
  sliderLen = slider.length;

let slid = 0;

function slides() {
  for (let i = 0; i < sliderLen; i++) {
    slider[i].classList.remove("slide-play");
  }
  slider[slid].classList.add("slide-play");
  if (slid == sliderLen - 1) {
    slid = 0;
  } else {
    slid++;
  }
  setTimeout(slides, 5000);
}

window.onload = slides();

// .......................................

// Donate
var donateBtn = document.querySelector(".slider-donate");
donateBtn.addEventListener("click", function () {
  window.location.href = "./stepup/step-up.donate.html";
});

var donateBtn = document.querySelector(".slider-join");
donateBtn.addEventListener("click", function () {
  window.location.href = "./stepup/step-up.join.html";
});

var aboutBtn = document.querySelector(".slider-about");
aboutBtn.addEventListener("click", function () {
  window.location.href = "./about.stepup.html";
});

// INCLUDE SPINNER
// include footer
const spinner = document.getElementsByClassName("loader")[0];
fetch("/preloader.stepup.html")
  .then((res) => res.text())
  .then((data) => {
    spinner.innerHTML = data;
  });

// Pre Loader
var loader = document.querySelector(".loader");
window.addEventListener("load", vanish);
function vanish() {
  loader.classList.add("vanish");
}


