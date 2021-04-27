/* Nav Bar */

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Location Map */
var map = L.map('mymap').setView([25.766873, -100.268570],10);

// Open Street Map Tile Layer
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

var marker = L.marker([25.766873, -100.268570]).addTo(map);

// Adding pop-up to the marker
marker.bindPopup('TranspoInova').openPopup();
