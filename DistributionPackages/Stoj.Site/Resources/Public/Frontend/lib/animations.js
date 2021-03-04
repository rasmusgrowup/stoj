gsap.registerPlugin(ScrollTrigger);
gsap.set(".images-with-text-inner, .video-with-text-inner", {y:50, scaleY: 1.25,});

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

	ScrollTrigger.batch(".images-with-text-inner, .video-with-text-inner", {
		start: '50 bottom',
		onEnter: batch => gsap.to(batch, {
			y: 0,
			autoAlpha: 1,
			scaleY: 1,
			duration: .9,
		}),
	})

	gsap.to('.filter-header', {
		scrollTrigger: {
			trigger: '.gallery-container',
			start: 'top top',
			end: 'bottom center',
			//markers: true,
			scrub: true,
			pin: '.filter-header',
		}
	})

	gsap.to('.filter-navigation', {
		scrollTrigger: {
			trigger: '.gallery-container',
			start: 'top top',
			end: 'bottom center',
			//markers: true,
			scrub: true,
			pin: '.filter-navigation',
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
			duration: 2,
			delay: 1.5,
			ease: "power3.out"
		});

	var player = new Vimeo.Player('subheader-video');

	player.ready().then(function() {
		gsap.from(".video-body",{
				y: 75,
				autoAlpha: 0,
				duration: 2,
				delay: 2,
				ease: "power3.out"
			});

		gsap.from(".play--symbol",{
				autoAlpha: 0,
				duration: 1.5,
				delay: 2.5,
				ease: "power3.out"
			});
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
