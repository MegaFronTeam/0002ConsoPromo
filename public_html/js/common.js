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
				// console.log("next", nextParentSection);

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

  /* product slider */
  let prodItemSliders = document.querySelectorAll('.product-card__slider--js');

  for (let sliderCont of prodItemSliders) {
    let slider = new Swiper(sliderCont, {
      slidesPerView: 1,
      effect: 'fade',
      watchOverflow: true,
      fadeEffect: {
        crossFade: true
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true
      }
    });
    let pagination = sliderCont.querySelector('.swiper-pagination');
    sliderCont.addEventListener('mousemove', function () {
      let slidesAmount = 0;

      for (let slide of slider.slides) {
        if (!slide.classList.contains('swiper-slide-duplicate')) {
          slidesAmount++;
        }
      } //-


      let rect = this.getBoundingClientRect();
      let x = event.clientX - rect.left;
      slider.slideTo(Math.floor(x * slidesAmount / this.offsetWidth));
    }, {
      passive: true
    });
    sliderCont.addEventListener('mouseenter', function () {
      pagination.classList.add('active');
    });
    sliderCont.addEventListener('mouseleave', function () {
      pagination.classList.remove('active');
      slider.slideTo(0);
    });
  }

  
	const swiperNewsRecently = new Swiper(".sSlider--recently .sSlider__slider--js", {
		slidesPerView: 2,
		navigation: {
			nextEl: "#sSlider .swiper-button-next",
			prevEl: "#sSlider .swiper-button-prev",
		},
		spaceBetween: 8,
    breakpoints: {
      576: {
        spaceBetween: 16,
        slidesPerView: 3,
      },
      1440: {
        slidesPerView: 4,
      },
    },
	});


	// const swiper4 = new Swiper(".sBanners__slider--js", {
	// 	// slidesPerView: 5,
	// 	...defaultSl,
	// 	slidesPerView: "auto",
	// 	freeMode: true,
	// 	loopFillGroupWithBlank: true,
	// 	touchRatio: 0.2,
	// 	slideToClickedSlide: true,
	// 	freeModeMomentum: true,
	// });
	const topNav = document.querySelector(".top-nav");

	const mainSlider = new Swiper(".main-slider--js", {
		slidesPerView: 1,
		direction: "vertical",
		speed: 500,
		observer: true, // Enable observer
		observeParents: true, // Enable observing parent elements

		effect: "creative",
		creativeEffect: {
			prev: {opacity: 1, translate: [0, 0, -1]},
			next: {opacity: 1, translate: [0, "100%", 0]},
		},
		keyboard: {enabled: !0, onlyInViewport: !0},
		mousewheel: {
			sensitivity: 1,
			thresholdDelta: 10,
			enabled: true,
			forceToAxis: true,
		},
		on: {
			slideChange: function (swiper) {
				handleSlideChange(swiper);

				// if (swiper.visibleSlides.classList.contains("section-slide--dark")) {
				// 	topNav.classList.add("top-nav--white");
				// } else {
				// 	topNav.classList.remove("top-nav--white");
				// }
			},
		},
	});

	function handleSlideChange(swiper) {
		const activeSlide = swiper.visibleSlides[0];

		if (activeSlide.classList.contains("section-slide--dark")) {
			topNav.classList.add("top-nav--white");
		} else {
			topNav.classList.remove("top-nav--white");
		}
	}
	// mainSlider.slideTo(6);

	function animateMainPage() {
		gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

		let panels = gsap.utils.toArray(".section-slide"),
			observer = ScrollTrigger.normalizeScroll(true),
			scrollTween;

		panels.forEach((panel, i) => {
			let trigger = ScrollTrigger.create({
				trigger: panel,
				start: "top top",
				pin: true,
				pinSpacing: false,
				onEnter: () => {
					console.log(
						"onEnter",
						panel.classList.contains("section-slide--dark")
					);

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

				snap: {
					snapTo: 1,
					duration: {min: 0.1, max: 0.4},
					ease: "ease",
				},
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

			// nav.addEventListener("click", function (e) {
			// 	e.preventDefault();
			// 	gsap.to(window, {
			// 		duration: 1,
			// 		scrollTo: trigger.start,
			// 	});
			// });
		});
		// ScrollTrigger.create({
		// 	start: 0,
		// 	end: "max",
		// 	snap: 1 / (panels.length - 1),
		// });
	}

	// animateMainPage();
	// just in case the user forces the scroll to an inbetween spot (like a momentum scroll on a Mac that ends AFTER the scrollTo tween finishes):

	const menu = document.querySelector(".menu-mobile .menu");
	menu.addEventListener("click", function (e) {
		const targetLi = e.target.closest("li:has(ul)");
		// if (e.target.closest("li:has(ul) > a")) {
		// }
		if (
			(targetLi && !e.target.closest("a")) ||
			e.target.closest("li:has(ul) > a")
		) {
			e.preventDefault();
			targetLi.classList.toggle("menu__item--open");
		}
	});

	if (document.querySelector(".main-slider")) {
		slider();
	}

	$(".search-block ").on("input", "input", function () {
		if ($(this).val().length > 0) {
			$(this).next().addClass("active");
		} else {
			$(this).next().removeClass("active");
		}
	});

	$(".search-block button").on("click", function () {
		$(this).prev().val("");
		$(this).removeClass("active");
	});

	document.addEventListener("click", function (e) {
		const target = e.target.closest(".icon-btn--search");
		const searchBlock = document.querySelector(".search-block");
		if (target) {
			$(".icon-btn--search").addClass("opacity-0");
			$(".search-block").addClass("shown");
			// $(".search-block input").focus();
			$(".top-nav").addClass("top-nav--search-open");
		} else if (
			!e.target.closest(".search-block") &&
			!e.target.closest(".icon-btn--search") &&
			$(".search-block").hasClass("shown")
		) {
			$(".icon-btn--search").removeClass("opacity-0");
			$(".search-block").removeClass("shown");
			$(".top-nav").removeClass("top-nav--search-open");
		}
	});
	$(document).on("click", ".btn-close", function () {
		$(".cookie-block--js").fadeOut();
	});

	$(".video-play-toggle").on("click", function () {
		const video = this.getAttribute("data-video");
		console.log("video", video);

		if ($(this).hasClass("paused")) {
			$("#" + video)
				.get(0)
				.play();
			$(this).removeClass("paused");
		} else {
			$("#" + video)
				.get(0)
				.pause();
			$(this).addClass("paused");
		}
	});

	$(".line-top__close").on("click", function () {
		$(this)
			.closest(".line-top")
			.fadeOut(function () {
				$(this).remove();
			});
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
