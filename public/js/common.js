"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function whenResize() {
		JSCCommon.setFixedNav();
	}

	window.addEventListener(
		"scroll",
		() => {
			JSCCommon.setFixedNav();
		},
		{passive: true}
	);
	window.addEventListener("resize", whenResize, {passive: true});

	whenResize();

	let defaultSl = {
		spaceBetween: 0,
		lazy: {
			loadPrevNext: true,
		},
		watchOverflow: true,
		loop: true,
		navigation: {
			nextEl: ".swiper-button-next",
			prevEl: ".swiper-button-prev",
		},
		pagination: {
			el: " .swiper-pagination",
			type: "bullets",
			clickable: true,
			// renderBullet: function (index, className) {
			// 	return '<span class="' + className + '">' + (index + 1) + '</span>';
			// }
		},
	};

	new Swiper(".breadcrumb-slider--js", {
		slidesPerView: "auto",
		freeMode: true,
		watchOverflow: true,
	});

	const swiper4 = new Swiper(".sBanners__slider--js", {
		// slidesPerView: 5,
		...defaultSl,
		slidesPerView: "auto",
		freeMode: true,
		loopFillGroupWithBlank: true,
		touchRatio: 0.2,
		slideToClickedSlide: true,
		freeModeMomentum: true,
	});
	// const mainSlider = new Swiper(".main-slider--js", {
	// 	slidesPerView: 1,
	// 	direction: "vertical",
	// 	speed: 500,
	// 	observer: true, // Enable observer
	// 	observeParents: true, // Enable observing parent elements

	// 	effect: "creative",
	// 	creativeEffect: {
	// 		prev: {opacity: 1, translate: [0, 0, -1]},
	// 		next: {opacity: 1, translate: [0, "100%", 0]},
	// 	},
	// 	keyboard: {enabled: !0, onlyInViewport: !0},
	// 	mousewheel: {
	// 		sensitivity: 1,
	// 		thresholdDelta: 10,
	// 		enabled: true,
	// 		forceToAxis: true,
	// 	},
	// });
	// mainSlider.slideTo(6);
	const sectionCards = document.querySelectorAll(".sCards");
	if (sectionCards) {
		sectionCards.forEach(section => {
			const nextParentSection = section.parentElement.nextElementSibling;
			console.log("next", nextParentSection);

			// const cards = section.querySelectorAll(".card");
			nextParentSection.insertAdjacentHTML("afterbegin", section.outerHTML);
		});
	}

	gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

	let navs = gsap.utils.toArray("nav a");

	gsap.utils.toArray(".section-slide").forEach((panel, i) => {
		let trigger = ScrollTrigger.create({
			trigger: panel,
			start: "top top",
			// end: "80% bottom",
			pin: true,
			pinSpacing: false,
			stagger: 0.5,
			snap: {
				snapTo: 0.1,
				duration: {min: 0.1, max: 0.4},
				ease: "easeIn",
			},
			// snap: true,
			// ease: "none",

			// scrub: true,
			// end: "+=199%",
			// onToggle: self => self.isActive && !scrollTween && goToSection(i),
		});

		let nav = navs[i];

		// nav.addEventListener("click", function (e) {
		// 	e.preventDefault();
		// 	gsap.to(window, {
		// 		duration: 1,
		// 		scrollTo: trigger.start,
		// 	});
		// });
	});
}

if (document.readyState !== "loading") {
	eventHandler();
} else {
	document.addEventListener("DOMContentLoaded", eventHandler);
}

// window.onload = function () {
// 	document.body.classList.add('loaded_hiding');
// 	window.setTimeout(function () {
// 		document.body.classList.add('loaded');
// 		document.body.classList.remove('loaded_hiding');
// 	}, 500);
// }
