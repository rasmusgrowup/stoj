filterSelection("alle") // Execute the function and show all columns
function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("gallery-item");
  if (c == "alle") c = "";
  // Add the "show" class (display:block) to the filtered elements, and remove the "show" class from the elements that are not selected
  for (i = 0; i < x.length; i++) {
    w3RemoveClass(x[i], "show");
    if (x[i].className.indexOf(c) > -1) w3AddClass(x[i], "show");
  }
}

// Show filtered elements
function w3AddClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    if (arr1.indexOf(arr2[i]) == -1) {
      element.className += " " + arr2[i];
    }
  }
}

// Hide elements that are not selected
function w3RemoveClass(element, name) {
  var i, arr1, arr2;
  arr1 = element.className.split(" ");
  arr2 = name.split(" ");
  for (i = 0; i < arr2.length; i++) {
    while (arr1.indexOf(arr2[i]) > -1) {
      arr1.splice(arr1.indexOf(arr2[i]), 1);
    }
  }
  element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
const li = document.querySelectorAll('.filter__btn');

function siblings(elem) {
  const nodes = [...elem.parentNode.children]
  return nodes.filter(node => node !== elem)
}

function toggleClass(elem, cls) {
  elem.classList.toggle(cls);
  siblings(elem).forEach(node => {
    node.classList.remove(cls)
  })
}

li.forEach(el => {
  el.addEventListener('click', function() {
    toggleClass(this, 'active')
  })
})

const x = window.matchMedia("(max-width: 415px)");

x.addListener(handleDeviceChange);

function handleDeviceChange(e) {
	if (e.matches) { // If media query matches
		var open = document.querySelector('#open-button');

		open.addEventListener('click', function() {
			var filter = document.getElementById('filter-list');
			filter.classList.toggle("show-filter");
			open.classList.toggle("filter-is-showing");
		});

		var close = document.querySelector('#filter-list');

		close.addEventListener('click', function() {
			var filter = document.getElementById('filter-list');
			filter.classList.remove("show-filter");
			open.classList.remove("filter-is-showing");
		});
	}
	else {}
}

handleDeviceChange(x)
