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
