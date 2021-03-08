//Js for services list span
window.myFunction = function(event) {
  // reset all menu items
  document.querySelectorAll('.list-btn').forEach(function(item) {
  item.classList.remove('active');
})
  // mark as active selected menu item
  event.target.classList.add("active");
};

document.querySelectorAll('.frontpage').forEach(function(item) {
	document.getElementById("menu").classList.add("on-frontpage");
})

// We listen to the resize event
window.addEventListener('resize', () => {
  // We execute the same script as before
  let vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

var openDrawer = document.querySelector('#open-drawer');
var closeDrawer = document.querySelector('#close-drawer');
var outsideDrawer = document.querySelector('.main');

openDrawer.addEventListener("click", function() {
	document.getElementById("drawer").classList.add("--show-drawer");
	document.getElementById("drawer-background").classList.add("--show-drawer-bg");
})

closeDrawer.addEventListener("click", function() {
	document.getElementById("drawer").classList.remove("--show-drawer");
	document.getElementById("drawer-background").classList.remove("--show-drawer-bg");
})

outsideDrawer.addEventListener("click", function() {
	document.getElementById("drawer").classList.remove("--show-drawer");
})
