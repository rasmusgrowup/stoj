window.addEventListener('DOMContentLoaded', (event) => {

	const x = window.matchMedia("(min-width: 1025px)");

	x.addListener(handleDeviceChange);

	function handleDeviceChange(e) {
		if (e.matches) { // If media query matches
			// Custom curser
			  var cursor = document.querySelector(".cursor");
			  var links = document.querySelectorAll("a, .cursor-link, button");
			  var initCursor = false;

			  for (var i = 0; i < links.length; i++) {
				var selfLink = links[i];

				selfLink.addEventListener("mouseover", function() {
				  cursor.classList.add("--expand");
				});
				selfLink.addEventListener("mouseout", function() {
				  cursor.classList.remove("--expand");
				});
			  }

			  window.onmousemove = function(e) {
				var mouseX = e.clientX;
				var mouseY = e.clientY;

				if (!initCursor) {
				  // cursor.style.opacity = 1;
				  gsap.to(cursor, 0.3, {
					opacity: 1
				  });
				  initCursor = true;
				}

				gsap.to(cursor, 0, {
				  top: mouseY + "px",
				  left: mouseX + "px"
				});
			  };

			  window.onmouseout = function(e) {
				gsap.to(cursor, 0.3, {
				  opacity: 0
				});
				initCursor = false;
			  };

			//Custom cursor end
		}
		else {}
	}

	handleDeviceChange(x)
});
