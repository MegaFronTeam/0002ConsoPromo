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

	const topNav = document.querySelector(".top-nav");

	gsap.utils.toArray(".section-slide").forEach((panel, i) => {
		let trigger = ScrollTrigger.create({
			trigger: panel,
			start: "top top",
			pin: true,
			pinSpacing: false,
			stagger: 0.5,
			onEnter: () => {
				console.log("onEnter", panel.classList.contains("section-slide--dark"));

				if (panel.classList.contains("section-slide--dark")) {
					topNav.classList.add("top-nav--white");
				}
			},
			onLeave: () => {
				if (panel.classList.contains("section-slide--dark")) {
					topNav.classList.remove("top-nav--white");
				}
			},
			onEnterBack: () => {
				if (panel.classList.contains("section-slide--dark")) {
					topNav.classList.add("top-nav--white");
				}
			},
			onLeaveBack: () => {
				if (panel.classList.contains("section-slide--dark")) {
					topNav.classList.remove("top-nav--white");
				}
			},

			// snap: {
			// 	snapTo: 0.15,
			// 	duration: {min: 0.1, max: 0.4},
			// 	ease: "ease",
			// },
			// snap: true,
			// ease: "none",

			// scrub: true,
			// end: "+=199%",
			// onToggle: self => self.isActive && !scrollTween && goToSection(i),
		});

		// gsap.from(panel, {
		// 	// opacity: 0,
		// 	y: 50,
		// 	duration: 1,
		// 	stagger: 0.2, // Delay of 0.2 seconds between each element's animation
		// 	ease: "power2.out",
		// 	scrollTrigger: {
		// 		trigger: panel,
		// 		start: "top 80%",
		// 		end: "bottom 20%",
		// 		toggleActions: "play none none reverse",
		// 	},
		// });

		let nav = navs[i];

		// nav.addEventListener("click", function (e) {
		// 	e.preventDefault();
		// 	gsap.to(window, {
		// 		duration: 1,
		// 		scrollTo: trigger.start,
		// 	});
		// });
	});
	const menu = document.querySelector(".menu-mobile .menu");
	menu.addEventListener("click", function (e) {
		const targetLi = e.target.closest("li:has(ul)");
		if (e.target.closest("a")) return;
		if (targetLi) {
			console.log("target", e.target);

			targetLi.classList.toggle("menu__item--open");
		}
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
