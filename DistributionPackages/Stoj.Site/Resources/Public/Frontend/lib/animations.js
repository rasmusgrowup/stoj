gsap.registerPlugin(ScrollTrigger);

gsap.set(".aos", {opacity:0});
gsap.set(".aos-text", {opacity:.5});
//gsap.set(".reel-overlay", {opacity:0});
//gsap.set(".video-body", {opacity:0});

window.addEventListener('DOMContentLoaded', (event) => {
	ScrollTrigger.batch(".line-link, .para p strong", {
		toggleClass:"line-animated",
		start: '50 bottom',
		onEnter: batch => gsap.to(batch, {
			stagger: 2
		}),
	})

	ScrollTrigger.batch(".gallery-image", {
		start: '50 bottom',
		onEnter: batch => gsap.to(batch, {
			autoAlpha: 1,
			duration: .75,
			stagger: .1
		}),
	})

	gsap.to('.filter-header', {
		scrollTrigger: {
			trigger: '.gallery-container',
			start: 'top top',
			end: 'bottom 40%',
			//markers: true,
			scrub: true,
			pin: '.filter-header',
		}
	})

	gsap.to('.filter-group', {
		scrollTrigger: {
			trigger: '.gallery-container',
			start: 'top top',
			end: 'bottom 40%',
			//markers: true,
			scrub: true,
			pin: '.filter-group',
		}
	})

	gsap.from(".gallery-image", {
		opacity: 0,
		duration: .75,
		stagger: .1
	});

	gsap.from(".reel-overlay",{
			y: 75,
			autoAlpha: 0,
			duration: 1.5,
			delay: 1,
			ease: "power3.out"
		});

	gsap.from(".video-body",{
			y: 75,
			autoAlpha: 0,
			duration: 1.5,
			delay: .5,
			ease: "power3.out"
		});

	gsap.from(".play--symbol",{
			autoAlpha: 0,
			duration: 1.5,
			delay: 1.5,
			ease: "power3.out"
		});
});

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
