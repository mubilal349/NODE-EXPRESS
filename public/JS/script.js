
var icon = document.getElementById("icon");
icon.onclick = function () {
    document.body.classList.toggle("dark-theme");
    if (document.body.toggle.classList("dark-theme")) {
        icon.src = "../IMAGES/moon-solid.svg";
    } else {
        icon.src = "../IMAGES/bulb.gif";
    }
}
// $(".change").on("click", function () {
//     if ($("body").hasClass("dark")) {
//         $("body").removeClass("dark");
//         $(".change").text("OFF");
//     } else {
//         $("body").addClass("dark");
//         $(".change").text("ON");
//     }
// });
const body = document.querySelector('body');
const toggle = document.getElementById('toggle');
toggle.onclick = function () {
    toggle.classList.toggle('acttive');
    toggle.classList.toggle('acttive');
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}
// function myFunction() {
//     var element = document.body;
//     element.classList.toggle("dark");
//     }
