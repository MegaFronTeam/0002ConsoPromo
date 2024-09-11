"use strict";

function slider() {
	gsap.set($("#showcase-holder"), {opacity: 0, scale: 1.05});
	gsap.to($("#showcase-holder"), 0.4, {
		force3D: true,
		opacity: 1,
		scale: 1,
		delay: 0.8,
		ease: Power2.easeOut,
	});

	function Showcase() {
		if ($("#showcase-slider").length > 0) {
			let titles = [];
			let subtitle = [];
			let counter = [];
			$("#showcase-slider .swiper-slide").each(function (i) {
				titles.push($(this).data("title"));
				subtitle.push($(this).data("subtitle"));
				counter.push($(this).data("number"));
			});

			let interleaveOffset = 0.4;

			let swiperOptions = {
				direction: "horizontal",
				loop: true,
				grabCursor: true,
				resistance: true,
				resistanceRatio: 0.5,
				slidesPerView: 1,
				allowTouchMove: true,
				speed: 900,
				autoplay: false,
				pagination: {
					el: ".showcase-captions",
					clickable: true,
					renderBullet: function (index, className) {
						return (
							'<div class="outer ' +
							className +
							'">' +
							'<div class="inner">' +
							'<div class="subtitle">' +
							subtitle[index] +
							"</div>" +
							'<div class="title">' +
							titles[index] +
							"</div>" +
							'<div class="counter-wrap">' +
							'<div class="counter">' +
							counter[index] +
							"</div>" +
							"</div>" +
							"</div>" +
							"</div>"
						);
					},
				},
				navigation: {
					nextEl: ".swiper-button-next",
					prevEl: ".swiper-button-prev",
				},
				on: {
					progress: function () {
						let swiper = this;
						for (let i = 0; i < swiper.slides.length; i++) {
							let slideProgress = swiper.slides[i].progress;
							let innerOffset = swiper.height * interleaveOffset;
							let innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".img-mask").style.transform =
								"translate3d(" + innerTranslate + "px,0, 0)";
						}
					},
					touchStart: function () {
						let swiper = this;
						for (let i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function (speed) {
						let swiper = this;
						for (let i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".img-mask").style.transition =
								speed + "ms";
						}
					},
					init: function () {
						$(".swiper-slide-active")
							.find("video")
							.each(function () {
								$(this).get(0).play();
							});
					},
					slideNextTransitionStart: function () {
						let prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").prev().find(".subtitle"),
							0.3,
							{y: -60, opacity: 0, delay: 0, ease: Power2.easeIn}
						);
						let prevslidetitle = new TimelineLite();
						prevslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").prev().find(".title"),
							0.4,
							{y: -60, opacity: 0, delay: 0.1, ease: Power2.easeInOut}
						);

						let activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").find(".subtitle"),
							0.5,
							{y: 0, opacity: 1, scale: 1, delay: 0.5, ease: Power2.easeOut}
						);
						let activeslidetitle = new TimelineLite();
						activeslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").find(".title"),
							0.5,
							{y: 0, opacity: 1, scale: 1, delay: 0.6, ease: Power2.easeOut}
						);

						let nextslidecaption = new TimelineLite();
						nextslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").next().find(".subtitle"),
							0.3,
							{y: 60, opacity: 0, delay: 0, ease: Power2.easeIn}
						);
						let nextslidetitle = new TimelineLite();
						nextslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").next().find(".title"),
							0.5,
							{y: 60, opacity: 0, ease: Power2.easeInOut}
						);

						let tl = new TimelineLite();

						$(".swiper-pagination-bullet-active")
							.prev()
							.find(".counter")
							.each(function (index, element) {
								tl.to(
									element,
									0.3,
									{scale: 1, y: -20, opacity: 0, ease: Power2.easeIn},
									index * 0.01
								);
							});

						$(".swiper-pagination-bullet-active")
							.find(".counter")
							.each(function (index, element) {
								tl.to(
									element,
									0.4,
									{
										scale: 1,
										y: 0,
										opacity: 1,
										scale: 1,
										delay: 0.3,
										ease: Power2.easeOut,
									},
									index * 0.01
								);
							});

						$(".swiper-pagination-bullet-active")
							.next()
							.find(".counter")
							.each(function (index, element) {
								tl.to(
									element,
									0.3,
									{scale: 1, y: 20, opacity: 0, ease: Power2.easeIn},
									index * 0.01
								);
							});
					},
					slidePrevTransitionStart: function () {
						let prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").prev().find(".subtitle"),
							0.3,
							{y: -60, opacity: 0, delay: 0, ease: Power2.easeIn}
						);
						let prevslidetitle = new TimelineLite();
						prevslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").prev().find(".title"),
							0.4,
							{y: -60, opacity: 0, delay: 0, ease: Power2.easeInOut}
						);

						let activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").find(".subtitle"),
							0.5,
							{y: 0, opacity: 1, scale: 1, delay: 0.5, ease: Power2.easeOut}
						);
						let activeslidetitle = new TimelineLite();
						activeslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").find(".title"),
							0.5,
							{y: 0, opacity: 1, scale: 1, delay: 0.4, ease: Power2.easeOut}
						);

						let nextslidecaption = new TimelineLite();
						nextslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").next().find(".subtitle"),
							0.3,
							{y: 60, opacity: 0, delay: 0.1, ease: Power2.easeIn}
						);
						let nextslidetitle = new TimelineLite();
						nextslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").next().find(".title"),
							0.5,
							{y: 60, opacity: 0, delay: 0, ease: Power2.easeInOut}
						);

						let tl = new TimelineLite();

						$(".swiper-pagination-bullet-active")
							.prev()
							.find(".counter")
							.each(function (index, element) {
								tl.to(
									element,
									0.3,
									{
										scale: 1,
										y: -20,
										opacity: 0,
										delay: 0.1,
										ease: Power2.easeIn,
									},
									index * 0.01
								);
							});

						$(".swiper-pagination-bullet-active")
							.find(".counter")
							.each(function (index, element) {
								tl.to(
									element,
									0.4,
									{
										scale: 1,
										y: 0,
										opacity: 1,
										scale: 1,
										delay: 0.45,
										ease: Power2.easeOut,
									},
									index * 0.01
								);
							});

						$(".swiper-pagination-bullet-active")
							.next()
							.find(".counter")
							.each(function (index, element) {
								tl.to(
									element,
									0.3,
									{
										scale: 1,
										y: 20,
										opacity: 0,
										delay: 0.1,
										ease: Power2.easeIn,
									},
									index * 0.01
								);
							});
					},
					slideChangeTransitionStart: function () {
						$(".swiper-button-white").addClass("disable-click");

						$(".swiper-slide-active")
							.find("video")
							.each(function () {
								$(this).get(0).play();
							});
					},
					slideChangeTransitionEnd: function () {
						$(".swiper-button-white").removeClass("disable-click");

						$(".swiper-slide-prev")
							.find("video")
							.each(function () {
								$(this).get(0).pause();
							});

						$(".swiper-slide-next")
							.find("video")
							.each(function () {
								$(this).get(0).pause();
							});

						let prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").prev().find(".subtitle"),
							0.3,
							{y: -60, opacity: 0, delay: 0, ease: Power2.easeIn}
						);
						let prevslidetitle = new TimelineLite();
						prevslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").prev().find(".title"),
							0.4,
							{y: -60, opacity: 0, delay: 0.1, ease: Power2.easeInOut}
						);

						let nextslidecaption = new TimelineLite();
						nextslidecaption.staggerTo(
							$(".swiper-pagination-bullet-active").next().find(".subtitle"),
							0.3,
							{y: 60, opacity: 0, delay: 0.1, ease: Power2.easeIn}
						);
						let nextslidetitle = new TimelineLite();
						nextslidetitle.staggerTo(
							$(".swiper-pagination-bullet-active").next().find(".title"),
							0.5,
							{y: 60, opacity: 0, delay: 0, ease: Power2.easeInOut}
						);
					},
				},
			};

			let swiper = new Swiper(".swiper-container", swiperOptions);

			$("#showcase-slider .swiper-slide")
				.find(".title")
				.each(function (i) {
					$(this).wrap("<div class='outer'><div class='inner'></div></div>");
				});

			$("footer").addClass("showcase-footer");

			// Tilt Showcase Wrapper
			let maxTilt = 1.5;
			let mouseX, mouseY;
			$(document).on("mousemove", function (event) {
				mouseX = event.pageX;
				mouseY = event.pageY;
			});
			$("#showcase-tilt").each(function () {
				let thisWidth = $(this).width();
				let thisHeight = $(this).height();
				let thisOffset = $(this).offset();
				$(document).mousemove(function () {
					let horTilt = (mouseX / thisWidth) * (maxTilt * 2) - maxTilt;
					let verTilt =
						((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2) - maxTilt;
					TweenMax.to("#showcase-tilt", 1, {
						rotationY: horTilt,
						rotationX: verTilt,
						scale: 1.05,
						ease: Power1.easeOut,
					});
				});
			});

			if ($(window).width() >= 1024) {
				$(".swiper-slide a").on("mousedown", function (event) {
					return false;
				});

				$("#showcase-slider").on("mousedown touchstart", function () {
					$("body").addClass("scale-up");
					TweenMax.to("#ball", 0.2, {
						transformOrigin: "20px 20px",
						borderWidth: "1px",
						borderColor: "#fff",
						scale: 2,
					});
				});
				$("#showcase-slider").on("mouseup touchend", function () {
					$("body").removeClass("scale-up");
					TweenMax.to("#ball", 0.3, {
						borderWidth: "2px",
						scale: 1,
						x: -20,
						y: -20,
						borderColor: "#999999",
					});
				});

				$("body").on("mouseup touchend", function () {
					$("body").removeClass("scale-up");
				});
			}

			TweenMax.to(
				$(".showcase-counter, .swiper-pagination-bullet-active .counter"),
				1,
				{force3D: true, opacity: 1, delay: 0.4, ease: Power2.easeOut}
			);
		}
	}

	Showcase();
}
