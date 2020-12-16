//Js for services list span
window.myFunction = function(event) {
  // reset all menu items
  document.querySelectorAll('.list-btn').forEach(function(item) {
  item.classList.remove('active');
})
  // mark as active selected menu item
  event.target.classList.add("active");
};

// Show & Hide menu on scroll down / up
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("menu");
var headerBottom = document.getElementById("header-bottom");

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 90) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("show");
    header.classList.add("hide");
	headerBottom.classList.remove("show");
    headerBottom.classList.add("hide");

  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("hide");
    header.classList.add("show");
	headerBottom.classList.remove("hide");
    headerBottom.classList.add("show");
  }

  new_scroll_position = last_scroll_position;
});
