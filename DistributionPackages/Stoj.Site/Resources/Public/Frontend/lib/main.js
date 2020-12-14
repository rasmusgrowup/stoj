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

// Show & Hide menu on scroll down / up
var new_scroll_position = 0;
var last_scroll_position;
var header = document.getElementById("menu");

window.addEventListener('scroll', function (e) {
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
var animateIn = document.querySelectorAll('.aos');

animateIn.forEach(function (elem) {
	gsap.from(elem, {
		scrollTrigger: {
			trigger: elem,
			toggleActions: "play none play reverse",
			//markers: true,
			scrub: true,
			start: '-200 bottom'
		},
		y: 100,
		//scale: .9,
		opacity: 0,
		duration: 2,
		delay: .5,
		ease: "power3.out"
	});
});

var animateText = document.querySelectorAll('.aos-text');

animateText.forEach(function (elem) {
	gsap.from(elem, {
		scrollTrigger: {
			trigger: elem,
			toggleActions: "play none play reverse",
			//markers: true,
			start: '-300 bottom'
		},
		y: 100,
		scaleY: 2,
		opacity: 0,
		duration: 1.25,
		delay: .5,
		ease: "power3.out"
	});
});

var reveal = document.querySelectorAll('.aos-reveal');

reveal.forEach(function (elem) {
	gsap.from(elem, {
		scrollTrigger: {
			trigger: elem,
			toggleActions: "play none play reverse",
			scrub: true,
			//markers: true,
			start: 'top 90%',
			end: 'bottom center'
		},
		opacity: .05,
		//scale: .9,
		duration: 1.25
	});
});

var animateLine = document.querySelectorAll('.animate-line');

animateLine.forEach(function (elem) {
	gsap.from(elem, {
		scrollTrigger: {
			trigger: elem,
			toggleActions: "play none reverse reset",
			toggleClass: "magic-line",
			//markers: true,
			start: 'top bottom'
		}
	});
});

gsap.from(".reel-overlay", {
	//y: "+=150",
	//scaleY: 1.25,
	opacity: 0,
	duration: 1.5,
	delay: 1.8,
	ease: "power3.out"
});

gsap.from(".video-body", {
	y: 150,
	scaleY: 1.25,
	opacity: 0,
	duration: 1.5,
	delay: 2,
	ease: "power3.out"
});

gsap.from(".gallery-image", {
	opacity: 0,
	duration: .75,
	stagger: .1
});

gsap.from(".some-icons", {
	scrollTrigger: {
		trigger: ".some-icons",
		toggleActions: "play none play reverse",
		scrub: 2,
		//markers: true,
		start: "-110px bottom",
		end: "top bottom"
	},
	y: 100,
	duration: 1.5,
	delay: 1
	//ease: "power3.in"
});

gsap.to(".fadeOut", {
	scrollTrigger: {
		trigger: ".reel-container",
		toggleActions: "play none play reverse",
		scrub: true,
		//markers: true,
		start: "top top",
		end: "bottom top"
	},
	opacity: .4,
	//y: -50,
	//scale: 1.1,
	duration: 3
});

gsap.to(".imageOut", {
	scrollTrigger: {
		trigger: ".reel-container",
		toggleActions: "play none play reverse",
		scrub: true,
		//markers: true,
		start: "top top",
		end: "bottom top"
	},
	opacity: 0,
	y: 300,
	//scale: .6,
	duration: 3
});

gsap.to(".overlay-image", {
	scrollTrigger: {
		trigger: ".reel-overlay",
		toggleActions: "play none play reverse",
		scrub: true,
		//markers: true,
		start: "center center",
		end: "bottom top"
	},
	opacity: .4,
	y: -200,
	//scale: 1.1,
	duration: 3
});

gsap.to(".contact-btn, .header-social", {
	scrollTrigger: {
		trigger: ".main-footer",
		start: "-200px bottom",
		end: "+=100",
		toggleActions: "play none play reverse"
		//markers: true,
	},
	opacity: 0
});