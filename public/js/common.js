"use strict";

// import Swiper from '../libs/swiper/swiper-bundle.min.mjs';
// import JSCCommon from "./JSCCommon.js";

function eventHandler() {
	// const $ = jQuery;
	JSCCommon.init();

	function createCards() {
		const sectionCards = document.querySelectorAll(".sCards");
		if (sectionCards) {
			sectionCards.forEach(section => {
				const nextParentSection = section.parentElement.nextElementSibling;
				console.log("next", nextParentSection);

				// const cards = section.querySelectorAll(".card");
				nextParentSection.insertAdjacentHTML("afterbegin", section.outerHTML);
			});
		}
	}

	createCards();
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
	function animateMainPage() {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		let panels = gsap.utils.toArray(".section-slide"),
			observer = ScrollTrigger.normalizeScroll(true),
			scrollTween;

		// on touch devices, ignore touchstart events if there's an in-progress tween so that touch-scrolling doesn't interrupt and make it wonky
		// document.addEventListener(
		// 	"touchstart",
		// 	e => {
		// 		if (scrollTween) {
		// 			e.preventDefault();
		// 			e.stopImmediatePropagation();
		// 		}
		// 	},
		// 	{capture: true, passive: false}
		// );

		const topNav = document.querySelector(".top-nav");

		function goToSection(i) {
			scrollTween = gsap.to(window, {
				scrollTo: {y: i, autoKill: false},
				// onStart: () => {
				// 	observer.disable(); // for touch devices, as soon as we start forcing scroll it should stop any current touch-scrolling, so we just disable() and enable() the normalizeScroll observer
				// 	observer.enable();
				// },
				duration: 0.5,
				ease: "easeInOut",
				onComplete: () => (scrollTween = null),
				overwrite: true,
			});
		}

		panels.forEach((panel, i) => {
			ScrollTrigger.create({
				trigger: panel,
				start: "top top",
				pin: true,
				pinSpacing: false,
			});

			ScrollTrigger.create({
				trigger: panel,
				start: "top bottom",
				end: "+=100%",
				onEnter: self => {
					self.isActive && !scrollTween && goToSection(self.end);

					if (self.isActive)
						if (self.trigger.classList.contains("section-slide--dark")) {
							topNav.classList.add("top-nav--white");
						} else {
							topNav.classList.remove("top-nav--white");
						}
				},
				onEnterBack: self => {
					self.isActive && !scrollTween && goToSection(self.start);

					if (self.isActive)
						if (panels[i - 1].classList.contains("section-slide--dark")) {
							topNav.classList.add("top-nav--white");
						} else {
							topNav.classList.remove("top-nav--white");
						}
				},

				// onEnterBack: self => self.isActive && !scrollTween && goToSection(i),
			});
		});
		// ScrollTrigger.create({
		// 	start: 0,
		// 	end: "max",
		// 	snap: 1 / (panels.length - 1),
		// });
	}

	animateMainPage();
	// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):

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
