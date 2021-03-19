gsap.registerPlugin(ScrollTrigger);

window.addEventListener('DOMContentLoaded', (event) => {
	ScrollTrigger.batch(".line-link, .para p strong", {
		toggleClass:"line-animated",
		start: '50 bottom',
		onEnter: batch => gsap.to(batch, {
			stagger: 2
		}),
	})

	gsap.set(".gallery-image", {opacity:0,autoAlpha: 0})

	gsap.utils.toArray(".gallery-image").forEach(elem => {
		gsap.to(elem, {
			opacity: 1,
			autoAlpha: 1,
			scrollTrigger: {
				trigger: elem,
				start: 'top bottom',
				end: 'center center',
				//markers: true,
				scrub: true
			}
		});
	});

	gsap.utils.toArray(".shout, .fade-in").forEach(elem => {
		gsap.from(elem, {
			opacity: 0,
			//autoAlpha: 0,
			scrollTrigger: {
				trigger: elem,
				start: 'top bottom',
				end: 'center center',
				//markers: true,
				scrub: true
			}
		});
	});

	gsap.from('.main-footer', {
		opacity: 0,
		scrollTrigger: {
			trigger: '.main-footer',
			start: 'top bottom',
			end: 'top 60%',
			//markers: true,
			scrub: true
		}
	});

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

	gsap.from(".reel-overlay",{
		y: 50,
		autoAlpha: 0,
		duration: 2,
		delay: 1.5,
		ease: "power3.out"
	});

	gsap.from(".play--symbol",{
		autoAlpha: 0,
		duration: 1.5,
		delay: 2.5,
		ease: "power3.out"
	});
});

var player = new Vimeo.Player('subheader-video');

player.ready().then(function() {
	gsap.from(".video-body",{
			//y: 75,
			autoAlpha: 0,
			duration: 2,
			delay: 2,
			ease: "power3.out"
		});
});
