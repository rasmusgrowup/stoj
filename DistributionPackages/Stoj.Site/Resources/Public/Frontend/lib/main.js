'use strict';

//Js for services list span
window.myFunction = function (event) {
  // reset all menu items
  document.querySelectorAll('.list-btn').forEach(function (item) {
    item.classList.remove('active');
  });
  // mark as active selected menu item
  event.target.classList.add("active");
};

document.querySelectorAll('.frontpage').forEach(function (item) {
  document.getElementById("menu").classList.add("on-frontpage");
});

// We listen to the resize event
window.addEventListener('resize', function () {
  // We execute the same script as before
  var vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', vh + 'px');
});