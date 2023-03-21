Chart.defaults.font.family = "Lato";
Chart.defaults.datasets.bar.borderColor = "#40b5b2";
Chart.defaults.datasets.bar.backgroundColor = "#40b5b280";

const btn1 = document.getElementsByClassName("tablinks")[0];
const btn2 = document.getElementsByClassName("tablinks")[1];
btn1.addEventListener("click", openCity);
btn2.addEventListener("click", openCity);

function openCity(evt, cityName) {
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

const buttonsDiv = document.querySelector(".buttons");

function toggleButtonsVisibility() {
  // Get the height of the document
  const docHeight = Math.max(
    document.body.scrollHeight,
    document.documentElement.scrollHeight,
    document.body.offsetHeight,
    document.documentElement.offsetHeight,
    document.body.clientHeight,
    document.documentElement.clientHeight
  );

  // Get the height of the viewport
  const viewportHeight = window.innerHeight;

  // Check if there is any vertical scrolling needed
  if (docHeight <= viewportHeight) {
    // If not, hide the div element with the class 'buttons'
    buttonsDiv.style.display = "none";
  } else {
    // If there is vertical scrolling needed, show the div element
    buttonsDiv.style.display = "flex";
  }
}

// Call the function on page load to set the initial visibility of the buttons
toggleButtonsVisibility();

// Add an event listener to the window object that listens for the 'resize' event
window.addEventListener("resize", toggleButtonsVisibility);
