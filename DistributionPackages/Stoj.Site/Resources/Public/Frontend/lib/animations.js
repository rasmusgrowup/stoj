gsap.set(".aos", {opacity:0});
gsap.set(".aos-text", {opacity:.5});
gsap.set(".reel-overlay", {opacity:0, transform:'translate(-50%,-50%)'});

window.addEventListener('DOMContentLoaded', (event) => {
	// Animate on scroll
		let animateIn = document.querySelectorAll('.aos');

	    animateIn.forEach( function( elem ) {
	        gsap.to(elem, {
	            scrollTrigger: {
	                trigger: elem,
	                toggleActions: "play none play reverse",
					//markers: true,
					//scrub: true,
					start: '-200 bottom'
	            },
				y: 0,
				//scale: .9,
				opacity: 1,
				duration: 1,
				delay: .5,
				ease: "power3.out"
	        })
	    })

		let animateText = document.querySelectorAll('.aos-text');

	    animateText.forEach( function( elem ) {
	        gsap.to(elem, {
	            scrollTrigger: {
	                trigger: elem,
	                toggleActions: "play none play reverse",
					//markers: true,
					start: '50 bottom',
	            },
				//y: 0,
				//scaleY: 1,
				//stagger: .1,
				opacity: 1,
				duration: 1,
				delay: .25,
				ease: "power3.out"
	        })
	    });

		let reveal = document.querySelectorAll('.aos-reveal');

	    reveal.forEach( function( elem ) {
	        gsap.from(elem, {
	            scrollTrigger: {
	                trigger: elem,
	                toggleActions: "play none play reverse",
					//scrub: true,
					//markers: true,
					start: 'top 98%',
					end: 'bottom center'
	            },
				opacity: .05,
				//scale: .9,
				duration: 1.25,
	        })
	    });

		gsap.to(".reel-overlay",{
				transform:'translate(-50%,-60%)',
				//scaleY: 1.25,
				opacity: 1,
				duration: 1.5,
				delay: 1.8,
				ease: "power3.out"
			});

		gsap.from(".video-body",{
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
			delay: 1,
			//ease: "power3.in"
		})

		gsap.to(".fadeOut", {
			scrollTrigger: {
				trigger: ".reel-container",
				toggleActions: "play none play reverse",
				scrub: true,
				//markers: true,
				start: "top top",
				end: "bottom top"
			},
			//opacity: .4,
			//y: -50,
			//scale: 1.1,
			duration: 3,
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
			duration: 3,
		});

		gsap.to(".overlay-image", {
			scrollTrigger: {
				trigger: ".overlay-image",
				toggleActions: "play none play reverse",
				scrub: true,
				//markers: true,
				start: "-50% top",
				end: "bottom top"
			},
			//opacity: .4,
			y: -75,
			//scale: 1.1,
			duration: 3,
		});

		gsap.to(".header-fade", {
			scrollTrigger: {
				trigger: ".header-fade",
				toggleActions: "play none play reverse",
				scrub: true,
				//markers: true,
				start: "top 25%",
				end: "bottom top"
			},
			opacity: .5,
			y: -50,
			//scale: 1.1,
			duration: 3,
		});

		let parallax = document.querySelectorAll('.parallax');

	    parallax.forEach( function( elem ) {
			gsap.set(".parallax-layer", {y:50, scale:1.15})
			gsap.to(".parallax-layer", {
				scrollTrigger: {
					trigger: ".parallax",
					toggleActions: "play none play reverse",
					scrub: true,
					//markers: true,
					start: "top bottom",
					end: "bottom top"
				},
				y: "-=100",
				duration: 3,
			});
	    });
});
