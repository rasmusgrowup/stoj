window.addEventListener('DOMContentLoaded', (event) => {
	const open = document.querySelector('#open-menu');
	const menu = document.querySelector('#menu');
	const exit = document.querySelector('#exit');

	var tl = gsap.timeline({
		defaults:{
			duration: 1,
			ease: "power3.out"
		}
	})

	tl.paused(true);
	tl.to("#menu", {
		clipPath: 'circle(140% at calc(100% - 2em) 3em)',
		pointerEvents: 'auto'
	})
	tl.from('.navigation-item', {
		stagger: .1,
		opacity: 0,
		y: 100,
	}, "-=1")

	open.addEventListener('click', ( ) => {
		tl.play().timeScale(1);
	})

	exit.addEventListener('click', ( ) => {
		tl.reverse().timeScale(-2);
	})
});
