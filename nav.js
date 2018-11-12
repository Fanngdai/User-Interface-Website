//############################################################################
//################################TYPE WRITER#################################
//############################################################################
var i = 0;
var txt = 'Fanny Dai';
var speed = 250;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("greeting").innerHTML += txt.charAt(i++);
    setTimeout(typeWriter, speed);
  }
}

//############################################################################
//#################################NAVIGATION#################################
//############################################################################
// Change style of navbar on scroll
window.onscroll = function() {myFunction()};
function myFunction() {
    var navbar = document.getElementById("myNavbar");
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.className = "w3-bar" + " w3-card" + " w3-animate-top" + " w3-white";
    } else {
        navbar.className = navbar.className.replace(" w3-card w3-animate-top w3-white", "");
    }
}

// Used to toggle the menu on small screens when clicking on the menu button
function toggleFunction() {
    var x = document.getElementById("navDemo");
    if (x.className.indexOf("w3-show") == -1) {
        x.className += " w3-show";
    } else {
        x.className = x.className.replace(" w3-show", "");
    }
}

function availableUponRequest(str) {
    alert(str + " is only available upon request!\nE-mail: Fanng.dai@stonybrook.edu");
}
