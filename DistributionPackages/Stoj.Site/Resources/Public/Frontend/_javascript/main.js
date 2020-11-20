// Custom curser
  var cursor = document.querySelector(".custom-cursor");
  var links = document.querySelectorAll("a");
  var initCursor = false;

  for (var i = 0; i < links.length; i++) {
    var selfLink = links[i];

    selfLink.addEventListener("mouseover", function() {
      cursor.classList.add("custom-cursor--link");
    });
    selfLink.addEventListener("mouseout", function() {
      cursor.classList.remove("custom-cursor--link");
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

// Show & Hide menu on scroll down / up
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("menu");

window.addEventListener('scroll', function(e) {
  last_scroll_position = window.scrollY;

  // Scrolling down
  if (new_scroll_position < last_scroll_position && last_scroll_position > 90) {
    // header.removeClass('slideDown').addClass('slideUp');
    header.classList.remove("show");
    header.classList.add("hide");

  // Scrolling up
  } else if (new_scroll_position > last_scroll_position) {
    // header.removeClass('slideUp').addClass('slideDown');
    header.classList.remove("hide");
    header.classList.add("show");
  }

  new_scroll_position = last_scroll_position;
});


// Animate on scroll
	let animateIn = document.querySelectorAll('.aos');

    animateIn.forEach( function( elem ) {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                toggleActions: "play none play reverse",
				//markers: true,
				start: '-400 bottom'
            },
			y: 400,
			scaleY: 1.5,
			opacity: 0,
			duration: 1.25,
			delay: .1,
			ease: "power2.out"
        })
    })

	let animateText = document.querySelectorAll('.aos-text');

    animateText.forEach( function( elem ) {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                toggleActions: "play none play reverse",
				//markers: true,
				start: '-300 bottom'
            },
			y: 300,
			scaleY: 2,
			opacity: 0,
			duration: 1.25,
			delay: .1,
			ease: "power2.out"
        })
    })

	let animateLine = document.querySelectorAll('.animate-line');

    animateLine.forEach( function( elem ) {
        gsap.from(elem, {
            scrollTrigger: {
                trigger: elem,
                toggleActions: "play none reverse reset",
				toggleClass: "magic-line",
				//markers: true,
				start: 'top bottom'
            },
        })
    });


	gsap.to(".fadeOut", {
		scrollTrigger: {
			trigger: ".reel-container",
			toggleActions: "play none play reverse",
			scrub: true,
			markers: true,
			start: "-10% top",
			end: "bottom top"
		},
		opacity: 0,
		y: 300,
		duration: 1.5,
		//ease: "power3.in"
	})

	gsap.to(".contact-btn", {
		scrollTrigger: {
			trigger: ".main-footer",
			start: "-200px bottom",
			end: "+=100",
			toggleActions: "play none play reverse",
			//markers: true,
		},
		opacity:0,
	})

	gsap.to(".header-gradient", {
		scrollTrigger: {
			trigger: ".main-footer",
			start: "-200px bottom",
			end: "+=100",
			toggleActions: "play none play reverse",
			//markers: true,
		},
		opacity:0,
	})

	// Entry animations
		gsap.from(".reel-text",{
				opacity: 0,
				duration: 1.5,
				delay: 1,
				ease: "power3.in"
			}
		);

		gsap.from(".reel-overlay",{
				y: 300,
				scaleY: 1.5,
				opacity: 0,
				duration: 1.5,
				delay: .5,
				ease: "power3.out"
			});

		gsap.from(".reel-container",{
				y: 300,
				scaleY: 1.5,
				opacity: 0,
				duration: 1.5,
				delay: 1,
				ease: "power3.out"
			});

		gsap.from(".scroll-videre", {
				opacity: 0,
				delay: 2,
				duration: 1,
			}
		);
