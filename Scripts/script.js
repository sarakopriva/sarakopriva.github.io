const btn1 = document.getElementsByClassName("tablinks")[0];
const btn2 = document.getElementsByClassName("tablinks")[1];
btn1.addEventListener("click", openCity);
btn2.addEventListener("click", openCity);

function openCity(evt, cityName) {
  // Declare all variables
  var i, tabcontent, tablinks;

  // Get all elements with class="tabcontent" and hide them
  //   tabcontent = document.getElementsByClassName("tabcontent");
  //   for (i = 0; i < tabcontent.length; i++) {
  //     tabcontent[i].style.display = "none";
  //   }

  // Get all elements with class="tablinks" and remove the class "active"
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }

  // Show the current tab, and add an "active" class to the button that opened the tab
  //   document.getElementById(cityName).style.display = "block";
  evt.currentTarget.className += " active";
}

active = document.getElementById("active-button");
active.classList.add("active");

// Add an event listener to the window object to detect zoom changes
window.addEventListener("resize", function () {
  // Check if the zoom level has changed
  if (window.innerWidth !== screen.width) {
    // Reload the page
    window.location.reload();
  }
});
