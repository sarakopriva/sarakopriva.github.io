Chart.defaults.font.family = "Lato";
const btn1 = document.getElementsByClassName("tablinks")[0];
const btn2 = document.getElementsByClassName("tablinks")[1];
btn1.addEventListener("click", openCity);
btn2.addEventListener("click", openCity);

function openCity(evt, cityName) {
  // Declare variables
  let i, tablinks;

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  evt.currentTarget.className += " active";
}

active = document.getElementById("active-button");
active.classList.add("active");

function scrollToTop() {
  window.scrollTo(0, 0);
}

const myDiv = document.querySelector(".buttons");
let timerId;

function handleScroll() {
  // Make the div invisible
  myDiv.style.opacity = 0;

  // Clear the previous timer (if any) and set a new one
  clearTimeout(timerId);
  timerId = setTimeout(() => {
    // Make the div visible again
    myDiv.style.opacity = 1;
  }, 3000); // Delay the visibility of the div for 3 seconds
}

window.addEventListener("scroll", handleScroll);
