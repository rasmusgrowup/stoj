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