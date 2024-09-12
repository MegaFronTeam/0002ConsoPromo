"use strict";

function slider() {
	TweenLite.set($("#showcase-holder"), {opacity: 0, scale: 1.05});
	TweenLite.to($("#showcase-holder"), 0.4, {
		force3D: true,
		opacity: 1,
		scale: 1,
		delay: 0.8,
		ease: Power2.easeOut,
	});

	Showcase();
	ShowcaseCarousel();
	FirstLoad();
	AjaxLoad();
}

function Showcase() {
	if ($("#showcase-slider").length > 0) {
		var titles = [];
		var subtitle = [];
		var counter = [];
		$("#showcase-slider .swiper-slide").each(function (i) {
			titles.push($(this).data("title"));
			subtitle.push($(this).data("subtitle"));
			counter.push($(this).data("number"));
		});

		var interleaveOffset = 0.4;

		var swiperOptions = {
			direction: "horizontal",
			loop: false,
			grabCursor: true,
			resistance: true,
			resistanceRatio: 0.5,
			slidesPerView: 1,
			allowTouchMove: true,
			speed: 900,
			autoplay: false,
			mousewheel: true,
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
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						var slideProgress = swiper.slides[i].progress;
						var innerOffset = swiper.height * interleaveOffset;
						var innerTranslate = slideProgress * innerOffset;
						swiper.slides[i].querySelector(".img-mask").style.transform =
							"translate3d(" + innerTranslate + "px,0, 0)";
					}
				},
				touchStart: function () {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
						swiper.slides[i].style.transition = "";
					}
				},
				setTransition: function (speed) {
					var swiper = this;
					for (var i = 0; i < swiper.slides.length; i++) {
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
					var prevslidecaption = new TimelineLite();
					prevslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").prev().find(".subtitle"),
						0.3,
						{y: -60, opacity: 0, delay: 0, ease: Power2.easeIn}
					);
					var prevslidetitle = new TimelineLite();
					prevslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").prev().find(".title"),
						0.4,
						{y: -60, opacity: 0, delay: 0.1, ease: Power2.easeInOut}
					);

					var activeslidecaption = new TimelineLite();
					activeslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").find(".subtitle"),
						0.5,
						{y: 0, opacity: 1, scale: 1, delay: 0.5, ease: Power2.easeOut}
					);
					var activeslidetitle = new TimelineLite();
					activeslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").find(".title"),
						0.5,
						{y: 0, opacity: 1, scale: 1, delay: 0.6, ease: Power2.easeOut}
					);

					var nextslidecaption = new TimelineLite();
					nextslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").next().find(".subtitle"),
						0.3,
						{y: 60, opacity: 0, delay: 0, ease: Power2.easeIn}
					);
					var nextslidetitle = new TimelineLite();
					nextslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").next().find(".title"),
						0.5,
						{y: 60, opacity: 0, ease: Power2.easeInOut}
					);

					var tl = new TimelineLite();

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
					var prevslidecaption = new TimelineLite();
					prevslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").prev().find(".subtitle"),
						0.3,
						{y: -60, opacity: 0, delay: 0, ease: Power2.easeIn}
					);
					var prevslidetitle = new TimelineLite();
					prevslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").prev().find(".title"),
						0.4,
						{y: -60, opacity: 0, delay: 0, ease: Power2.easeInOut}
					);

					var activeslidecaption = new TimelineLite();
					activeslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").find(".subtitle"),
						0.5,
						{y: 0, opacity: 1, scale: 1, delay: 0.5, ease: Power2.easeOut}
					);
					var activeslidetitle = new TimelineLite();
					activeslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").find(".title"),
						0.5,
						{y: 0, opacity: 1, scale: 1, delay: 0.4, ease: Power2.easeOut}
					);

					var nextslidecaption = new TimelineLite();
					nextslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").next().find(".subtitle"),
						0.3,
						{y: 60, opacity: 0, delay: 0.1, ease: Power2.easeIn}
					);
					var nextslidetitle = new TimelineLite();
					nextslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").next().find(".title"),
						0.5,
						{y: 60, opacity: 0, delay: 0, ease: Power2.easeInOut}
					);

					var tl = new TimelineLite();

					$(".swiper-pagination-bullet-active")
						.prev()
						.find(".counter")
						.each(function (index, element) {
							tl.to(
								element,
								0.3,
								{scale: 1, y: -20, opacity: 0, delay: 0.1, ease: Power2.easeIn},
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
								{scale: 1, y: 20, opacity: 0, delay: 0.1, ease: Power2.easeIn},
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

					var prevslidecaption = new TimelineLite();
					prevslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").prev().find(".subtitle"),
						0.3,
						{y: -60, opacity: 0, delay: 0, ease: Power2.easeIn}
					);
					var prevslidetitle = new TimelineLite();
					prevslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").prev().find(".title"),
						0.4,
						{y: -60, opacity: 0, delay: 0.1, ease: Power2.easeInOut}
					);

					var nextslidecaption = new TimelineLite();
					nextslidecaption.staggerTo(
						$(".swiper-pagination-bullet-active").next().find(".subtitle"),
						0.3,
						{y: 60, opacity: 0, delay: 0.1, ease: Power2.easeIn}
					);
					var nextslidetitle = new TimelineLite();
					nextslidetitle.staggerTo(
						$(".swiper-pagination-bullet-active").next().find(".title"),
						0.5,
						{y: 60, opacity: 0, delay: 0, ease: Power2.easeInOut}
					);
				},
			},
		};

		var swiper = new Swiper(".swiper-container", swiperOptions);

		$("#showcase-slider .swiper-slide")
			.find(".title")
			.each(function (i) {
				$(this).wrap("<div class='outer'><div class='inner'></div></div>");
			});

		$("footer").addClass("showcase-footer");

		// Tilt Showcase Wrapper
		var maxTilt = 1.5;
		var mouseX, mouseY;
		$(document).on("mousemove", function (event) {
			mouseX = event.pageX;
			mouseY = event.pageY;
		});
		$("#showcase-tilt").each(function () {
			var thisWidth = $(this).width();
			var thisHeight = $(this).height();
			var thisOffset = $(this).offset();
			$(document).mousemove(function () {
				var horTilt = (mouseX / thisWidth) * (maxTilt * 2) - maxTilt;
				var verTilt =
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
} //End Showcase

function ShowcaseCarousel() {
	if ($("#showcase-carousel-slider").length > 0) {
		$("footer").addClass("showcase-footer");

		$("#showcase-carousel-slider .img-mask").wrap(
			"<div class='img-mask-wrap'></div>"
		);

		var swiperOptions = {
			direction: "horizontal",
			loop: false,
			grabCursor: true,
			resistance: true,
			resistanceRatio: 0.5,
			slidesPerView: 4,
			breakpoints: {
				1466: {
					slidesPerView: 2,
					spaceBetween: 40,
				},
				1024: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				767: {
					slidesPerView: 1,
					spaceBetween: 30,
				},
				479: {
					slidesPerView: 1,
					spaceBetween: 20,
				},
			},
			allowTouchMove: true,
			speed: 500,
			autoplay: false,
			effect: "slide",
			mousewheel: true,
			scrollbar: {
				el: ".swiper-scrollbar",
				draggable: true,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
		};

		var swiper = new Swiper(".swiper-container", swiperOptions);

		$(".swiper-slide").mouseenter(function (e) {
			TweenMax.to("#ball", 0.2, {
				transformOrigin: "20px 20px",
				borderWidth: "1px",
				scale: 2,
				borderColor: "#fff",
			});
			TweenMax.to("#ball-loader", 0.2, {borderWidth: "1px", top: 1, left: 1});
			$("#ball").addClass("with-icon").append('<i class="fa fa-plus"></i>');
			$(this)
				.find("video")
				.each(function () {
					$(this).get(0).play();
				});
		});

		$(".swiper-slide").mouseleave(function (e) {
			TweenMax.to("#ball", 0.2, {
				borderWidth: "2px",
				scale: 1,
				x: -20,
				y: -20,
				borderColor: "#999999",
			});
			TweenMax.to("#ball-loader", 0.2, {borderWidth: "2px", top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$("#ball i").remove();
			$("body").removeClass("scale-up");
			$(this)
				.find("video")
				.each(function () {
					$(this).get(0).pause();
				});
		});

		$(".swiper-slide").on("mousedown", function (event) {
			return false;
		});

		$("#showcase-carousel-slider").on("mousedown touchstart", function () {
			$("body").addClass("scale-up");
			TweenMax.to("#ball", 0.2, {
				transformOrigin: "20px 20px",
				borderWidth: "1px",
				borderColor: "#fff",
				scale: 2,
			});
		});
		$("#showcase-carousel-slider").on("mouseup touchend", function () {
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

		FitSlideScreen();
	}
} //End Showcase

/*--------------------------------------------------
Function First Load
---------------------------------------------------*/

function FirstLoad() {
	if ($("body").hasClass("smooth-scroll")) {
		const ScrollArea = document.querySelector("#content-scroll");
		var scrollbar = window.Scrollbar;
		// Use plugins
		scrollbar.use(OverscrollPlugin);
		// Config
		var ScrollbarOptions = {
			damping: 0.05,
			renderByPixel: true,
			continuousScrolling: true,
			plugins: {
				overscroll: {
					effect: "bounce",
					damping: 0,
					maxOverscroll: 0,
				},
			},
		};
		// Initialise
		var scrollbar = Scrollbar.init(ScrollArea, ScrollbarOptions);
	}

	if ($("#project-nav").length > 0) {
		if ($("body").hasClass("smooth-scroll")) {
			TweenMax.to(scrollbar, 1.5, {
				scrollTo: 120,
				delay: 0.3,
				ease: Power4.easeInOut,
			});
		} else {
			TweenMax.to(window, 1.5, {
				scrollTo: 120,
				delay: 0.3,
				ease: Power4.easeInOut,
			});
		}
	}

	$("html,body").animate({scrollTop: 0}, 1);

	// if ($("#page-content").hasClass("light-content")) {
	// 	$("main, nav, #main-content").css("background-color", "#141414");
	// 	$("#magic-cursor").addClass("light-content");
	// 	if ($("#hero").length > 0) {
	// 		if ($("#hero").hasClass("has-image")) {
	// 			$("header").css("background-color", "transparent");
	// 		} else {
	// 			$("header").css("background-color", "transparent");
	// 		}
	// 	} else {
	// 		$("header").css("background-color", "transparent");
	// 	}
	// } else {
	// 	$("main").css("background-color", "#fff");
	// 	$("nav").css("background-color", "#141414");
	// 	$("#main-content").css("background-color", "#fff");
	// 	$("#magic-cursor").removeClass("light-content");
	// 	if ($("#hero").length > 0) {
	// 		if ($("#hero").hasClass("has-image")) {
	// 			$("header").css("background-color", "transparent");
	// 		} else {
	// 			$("header").css("background-color", "transparent");
	// 		}
	// 	} else {
	// 		$("header").css("background-color", "transparent");
	// 	}
	// }

	$(".section-image").each(function () {
		var image = $(this).data("src");
		$(this).css({"background-image": "url(" + image + ")"});
	});

	$(".item").each(function () {
		var image = $(this).find(".item-image").data("src");
		$(this)
			.find(".item-image")
			.css({"background-image": "url(" + image + ")"});
	});

	$(".move-section").each(function () {
		var image = $(this).find(".move-bg-img").data("src");
		$(this)
			.find(".move-bg-img")
			.css({"background-image": "url(" + image + ")"});
	});

	$(".thumb-page").each(function () {
		var image = $(this).data("src");
		$(this).css({"background-image": "url(" + image + ")"});
	});

	$(".video-cover").each(function () {
		var image = $(this).data("src");
		$(this).css({"background-image": "url(" + image + ")"});
	});

	//Load Default Page
	$("a.ajax-link").on("click", function () {
		$("body").addClass("show-loader");
		$(".flexnav").removeClass("flexnav-show");
		$("#menu-burger").removeClass("open");
		$("header").removeClass("white-header");
		var tlMenu = new TimelineLite();
		$(".fullscreen-menu .menu-timeline").each(function (index, element) {
			tlMenu.to(
				element,
				0.25,
				{y: -30, opacity: 0, ease: Power2.easeIn},
				index * 0.03
			);
		});
		TweenMax.to("#ball", 0.3, {
			borderWidth: "2px",
			scale: 1,
			backgroundColor: "rgba(0, 0, 0, 0)",
			opacity: 1,
		});
		if ($("#showcase-holder").length > 0) {
			TweenMax.to($(".showcase-captions-wrap"), 0.4, {
				force3D: true,
				opacity: 0,
				ease: Power2.easeOut,
			});
			TweenMax.to(
				$("#main, #hero-bg-wrapper, #project-nav, .next-project-image"),
				0.3,
				{opacity: 0, delay: 0.2, ease: Power0.ease}
			);
		} else {
			TweenMax.to(
				$(
					"#main, #hero-bg-wrapper, #project-nav, .next-project-image, #image-slider"
				),
				0.3,
				{opacity: 0, delay: 0.1, ease: Power0.ease}
			);
		}
		TweenMax.to($("#footer-container, .header-middle"), 0.3, {
			opacity: 0,
			ease: Power0.ease,
		});

		TweenMax.to($("#showcase-carousel-slider .swiper-slide-active"), 0.4, {
			force3D: true,
			x: -250,
			opacity: 0,
			delay: 0.05,
			ease: Power3.easeIn,
		});
		TweenMax.to(
			$("#showcase-carousel-slider .swiper-slide-active").next(),
			0.4,
			{force3D: true, x: -250, opacity: 0, delay: 0.1, ease: Power3.easeIn}
		);
		TweenMax.to(
			$("#showcase-carousel-slider .swiper-slide-active").next().next(),
			0.4,
			{force3D: true, x: -250, opacity: 0, delay: 0.15, ease: Power3.easeIn}
		);
		TweenMax.to($("#showcase-carousel-slider"), 0.5, {
			force3D: true,
			opacity: 0,
			delay: 0.1,
			ease: Power1.easeInOut,
		});
	});

	//Load Project from Showcase
	$("#showcase-slider a.title").on("click", function () {
		$("#showcase-tilt").addClass("disabled");
		$("header").removeClass("white-header");
		TweenMax.to($(".showcase-captions-wrap.stroked, .header-middle"), 0.3, {
			force3D: true,
			opacity: 0,
			delay: 0,
			ease: Power2.easeOut,
		});
		TweenMax.to($(".arrows-wrap"), 0.2, {
			force3D: true,
			opacity: 0,
			delay: 0,
			ease: Power2.easeOut,
		});
		TweenMax.to($(".showcase-counter, .counter"), 0.2, {
			force3D: true,
			opacity: 0,
			delay: 0.1,
			ease: Power2.easeOut,
		});
		TweenMax.to($(".socials-wrap"), 0.2, {
			force3D: true,
			opacity: 0,
			delay: 0.15,
			ease: Power2.easeOut,
		});
		TweenMax.to("#ball", 0.3, {
			borderWidth: "2px",
			delay: 0.3,
			scale: 1,
			opacity: 1,
		});
		$("body").addClass("load-project-page").addClass("show-loader");
	});

	//Load Project from Showcase Carousel
	$("#showcase-carousel-slider a.title").on("click", function () {
		$("#showcase-tilt").addClass("disabled");
		TweenMax.to($("#showcase-carousel-slider .section-image"), 0.7, {
			force3D: true,
			scale: 1,
			maxWidth: "100%",
			height: "100%",
			top: 0,
			delay: 0,
			ease: Power2.easeInOut,
		});
		TweenMax.to($("#showcase-carousel-slider .img-mask"), 0.7, {
			force3D: true,
			padding: 0,
			delay: 0,
			ease: Power2.easeInOut,
		});
		TweenMax.to($("#showcase-carousel-slider .title span"), 0.4, {
			force3D: true,
			opacity: 0,
			delay: 0,
			ease: Power2.easeOut,
		});
		TweenMax.to($(".arrows-wrap"), 0.2, {
			force3D: true,
			opacity: 0,
			delay: 0,
			ease: Power2.easeOut,
		});
		TweenMax.to($(".socials-wrap"), 0.2, {
			force3D: true,
			opacity: 0,
			delay: 0.15,
			ease: Power2.easeOut,
		});
		TweenMax.to("#ball", 0.3, {
			borderWidth: "2px",
			delay: 0.3,
			scale: 1,
			opacity: 1,
		});
		$("body").addClass("load-project-page-carousel").addClass("show-loader");
	});

	//Load Page From Menu
	$("nav .ajax-link").on("click", function () {
		var tl = new TimelineLite();
		$(".menu-timeline").each(function (index, element) {
			tl.to(
				element,
				0.25,
				{y: -80, opacity: 0, ease: Power1.easeIn},
				index * 0.05
			);
		});
		$("header").removeClass("white-header");
	});

	$("#burger-wrapper").on("click", function () {
		$("#menu-burger, nav").toggleClass("open");
		setTimeout(function () {
			if ($("#menu-burger").hasClass("open")) {
				$("header").addClass("over-sidebar").addClass("over-white-section");
				if (!$("#page-content").hasClass("light-content")) {
					$("#magic-cursor").addClass("light-content");
					$("#header-container").addClass("light-content");
				}
				//Fade In Navigation Lists
				var tlMenu = new TimelineLite();
				tlMenu.set($(".menu-timeline"), {y: 80, opacity: 0});
				$(".menu-timeline").each(function (index, element) {
					tlMenu.to(
						element,
						0.5,
						{y: 0, opacity: 1, delay: 0.4, ease: Power2.easeOut},
						index * 0.1
					);
				});
			} else {
				//Fade Out Navigation Lists
				var tlMenu = new TimelineLite();
				$(".menu-timeline").each(function (index, element) {
					tlMenu.to(
						element,
						0.25,
						{y: -80, opacity: 0, ease: Power2.easeIn},
						index * 0.05
					);
				});
				if (!$("#page-content").hasClass("light-content")) {
					setTimeout(function () {
						$("#magic-cursor").removeClass("light-content");
						$("#header-container").removeClass("light-content");
					}, 500);
				}
				setTimeout(function () {
					$(".touch-button.active").trigger("click");
					$("header")
						.removeClass("over-sidebar")
						.removeClass("over-white-section");
				}, 500);
			}
		}, 20);
	});

	// Slider Center on click
	$(".slider").on("click", function () {
		var $window = $(window),
			$element = $(this),
			elementTop = $element.offset().top,
			elementHeight = $element.height(),
			viewportHeight = $window.height(),
			scrollIt = elementTop - (viewportHeight - elementHeight) / 2;
		if ($("body").hasClass("smooth-scroll")) {
			var scrollOffset =
				scrollbar.offset.y +
				(elementTop - scrollbar.getSize().container.height / 2);
			TweenLite.to(scrollbar, 0.8, {
				scrollTo: scrollOffset + elementHeight / 2,
				ease: Power4.easeInOut,
			});
		} else {
			$("html, body").animate({scrollTop: scrollIt}, 350);
		}
	});

	// Carousel Center on click
	$(".carousel").on("click", function () {
		var $window = $(window),
			$element = $(this),
			elementTop = $element.offset().top,
			elementHeight = $element.height(),
			viewportHeight = $window.height(),
			scrollIt = elementTop - (viewportHeight - elementHeight) / 2;
		if ($("body").hasClass("smooth-scroll")) {
			var scrollOffset =
				scrollbar.offset.y +
				(elementTop - scrollbar.getSize().container.height / 2);
			TweenLite.to(scrollbar, 0.8, {
				scrollTo: scrollOffset + elementHeight / 2,
				ease: Power4.easeInOut,
			});
		} else {
			$("html, body").animate({scrollTop: scrollIt}, 350);
		}
	});

	$(".item").on("click", function () {
		var $window = $(window),
			$element = $(this),
			elementTop = $element.offset().top,
			elementHeight = $element.height(),
			viewportHeight = $window.height(),
			scrollIt = elementTop - (viewportHeight - elementHeight) / 2;
		if ($("body").hasClass("smooth-scroll")) {
			var scrollOffset =
				scrollbar.offset.y +
				(elementTop - scrollbar.getSize().container.height / 2);
			TweenLite.to(scrollbar, 0.8, {
				scrollTo: scrollOffset + elementHeight / 2,
				ease: Power4.easeInOut,
			});
		} else {
			$("html, body").animate({scrollTop: scrollIt}, 350);
		}
	});

	// Video Center on click
	$(".video-wrapper").on("click", function () {
		var $window = $(window),
			$element = $(this),
			elementTop = $element.offset().top,
			elementHeight = $element.height(),
			viewportHeight = $window.height(),
			scrollIt = elementTop - (viewportHeight - elementHeight) / 2;
		if ($("body").hasClass("smooth-scroll")) {
			var scrollOffset =
				scrollbar.offset.y +
				(elementTop - scrollbar.getSize().container.height / 2);
			TweenLite.to(scrollbar, 0.8, {
				scrollTo: scrollOffset + elementHeight / 2,
				ease: Power4.easeInOut,
			});
		} else {
			$("html, body").animate({scrollTop: scrollIt}, 350);
		}
	});

	var viewportWidth = $(window).width();
	if (viewportWidth < 1024) {
		$(".hero-video-wrapper").remove();
	}

	$("#backtotop").on("click", function () {
		if ($("body").hasClass("smooth-scroll")) {
			TweenLite.to(scrollbar, 1.5, {scrollTop: 0, ease: Power4.easeInOut});
		} else {
			$("html,body").animate({scrollTop: 0}, 800);
		}
	});

	$("#scrolldown").on("click", function () {
		var heroheight = $("#hero").height();
		if ($("body").hasClass("smooth-scroll")) {
			TweenLite.to(scrollbar, 1.5, {
				scrollTop: heroheight,
				ease: Power4.easeInOut,
			});
		} else {
			TweenLite.to(window, 1.5, {
				scrollTop: heroheight,
				ease: Power4.easeInOut,
			});
		}
	});

	// Tilt Showcase Wrapper
	if ($("#hero").hasClass("has-image")) {
		var timeout;
		$(window).resize(changePersective);
		changePersective();
		function changePersective() {
			TweenMax.set("#hero-bg-wrapper", {perspective: $("body").width()});
		}
		$("#hero").mousemove(function (e) {
			if (timeout) clearTimeout(timeout);
			setTimeout(callParallaxHero.bind(null, e));
		});
		function callParallaxHero(e) {
			parallaxItHero(e, "#hero-bg-image", 0); //5
			moveItHero(e, "#hero-bg-image", -30); //80
		}
		function parallaxItHero(e, target, movement) {
			var $this = $("#hero-bg-wrapper");
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;
			TweenMax.to(target, 1, {
				rotationY: ((relX - $this.width() / 1.5) / $this.width()) * movement,
				rotationX: ((relY - $this.height() / 2) / $this.height()) * movement,
			});
		}
		function moveItHero(e, target, movement) {
			var $this = $("#hero-bg-wrapper");
			var relX = e.pageX - $this.offset().left;
			var relY = e.pageY - $this.offset().top;
			TweenMax.to(target, 1, {
				x: ((relX - $this.width() / 2) / $this.width()) * movement,
				y: ((relY - $this.height() / 2) / $this.height()) * movement,
			});
		}
	}

	$("body")
		.find(".has-scale")
		.each(function (i) {
			$(this).wrap("<div class='figure-wrapper'></div>");
		});

	$(".has-mask").each(function () {
		var words = $(this).text().split(" ");
		var total = words.length;
		$(this).empty();
		for (index = 0; index < total; index++) {
			$(this).append($("<span /> ").text(words[index]));
		}
	});

	$(".has-mask span").each(function () {
		var words = $(this).text().split(" ");
		var total = words.length;
		$(this).empty();
		for (index = 0; index < total; index++) {
			$(this).append($("<span /> ").text(words[index]));
		}
	});

	$(".has-mask").each(function () {
		var $this = $(this);
		var $thisHeight = $(this).height();

		var scene = new ScrollMagic.Scene({
			triggerElement: $this[0],
			duration: $thisHeight,
		}).addTo(controller);

		scene.triggerHook(1);

		scene.on("enter", function () {
			var tl = new TimelineLite();

			$this.find("span > span").each(function (index, element) {
				tl.to(
					element,
					0.6,
					{y: 0, opacity: 1, delay: 0.3, ease: Power2.easeOut},
					index * 0.03
				);
			});
		});

		scene.on("leave", function (event) {
			$this.removeClass("active");
		});

		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				scene.refresh();
			});
		}
	});

	$(".portfolio .item").each(function () {
		var $this = $(this);
		var $thisHeight = $(this).height();

		var scene = new ScrollMagic.Scene({
			triggerElement: $this[0],
			duration: $thisHeight,
		}).addTo(controller);

		scene.triggerHook(0.9);

		scene.on("enter", function () {
			$this.addClass("active");
		});

		if ($("body").hasClass("smooth-scroll")) {
			scrollbar.addListener(() => {
				scene.refresh();
			});
		}
	});

	$("body")
		.find(".white-section")
		.each(function (i) {
			$(this).wrap(
				"<div class='white-section-wrapper'><div class='white-section-container'></div></div>"
			);
			$("body")
				.find(".white-section-wrapper")
				.each(function (i) {
					$(this).css("background-color", function () {
						return $(this).children().children().data("bgcolor");
					});
				});
		});

	$("body")
		.find(".dark-section")
		.each(function (i) {
			$(this).wrap(
				"<div class='dark-section-wrapper'><div class='dark-section-container'></div></div>"
			);
			$("body")
				.find(".dark-section-wrapper")
				.each(function (i) {
					$(this).css("background-color", function () {
						return $(this).children().children().data("bgcolor");
					});
				});
		});

	setTimeout(function () {
		$(".white-section").each(function () {
			var $this = $(this);
			var $thisHeight = $(this).outerHeight();

			var whiteScene = new ScrollMagic.Scene({
				triggerElement: this,
				duration: $thisHeight,
			}).addTo(controller);

			whiteScene.triggerHook(0.08);

			whiteScene.on("enter", function () {
				$("header").addClass("white-header");
			});

			whiteScene.on("leave", function () {
				$("header").removeClass("white-header");
			});

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					whiteScene.refresh();
				});
			}
		});
	}, 1000);
	$("header").removeClass("white-header");

	setTimeout(function () {
		$("#hover-projects").each(function () {
			var $this = $(this);
			var $thisHeight = $(this).outerHeight();

			var scene = new ScrollMagic.Scene({
				triggerElement: $this[0],
				duration: $thisHeight,
			}).addTo(controller);

			scene.triggerHook(0.36);

			scene.on("enter", function () {
				TweenMax.to($("#image-slider"), 0.3, {
					opacity: 1,
					delay: 0,
					ease: Power2.easeOut,
				});
			});

			scene.on("leave", function () {
				TweenMax.to($("#image-slider"), 0.15, {
					opacity: 0,
					delay: 0,
					ease: Power2.easeOut,
				});
			});

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh();
				});
			}
		});

		$("#hover-projects li a").each(function () {
			var $this = $(this);
			var $thisHeight = $(this).height();

			var scene = new ScrollMagic.Scene({
				triggerElement: $this[0],
				duration: $thisHeight,
			}).addTo(controller);

			scene.triggerHook(0.9);

			scene.on("enter", function () {
				$this.addClass("active");
			});

			if ($("body").hasClass("smooth-scroll")) {
				scrollbar.addListener(() => {
					scene.refresh();
				});
			}
		});
	}, 300);
} // End First Load

/* Ajax Load  */
