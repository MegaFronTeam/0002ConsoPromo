	
$(document).ready(function() {
	
	"use strict";
	
	// PageLoad();
	// FirstLoad();
	// HoverLists();
	Sliders();	
	Showcase();
	// ShowcaseCarousel();
	Portfolio();
	AjaxLoad();	
	Shortcodes();
	JustifiedGrid();
	Lightbox();
	ContactForm();
	PlayVideo();
	ContactMap();	
});

 
 


	function LazyLoad() {	
		
		
		
		$('body').waitForImages({
			finished: function() {
				$('body').removeClass('loading')
				setTimeout( function(){	
					$('body').removeClass('hidden').removeClass('scale-up').removeClass('scale-none');
				} , 1500 );
			},
			waitForAll: true
		});	
		
		$('body').waitForImages({
			finished: function() {
				TweenMax.to($("#header-container, .header-middle"), 1, {force3D:true, opacity:1, ease:Power2.easeOut});				
			},
			waitForAll: true
		});
		
		TweenMax.to($("#main"), 0.2, {force3D:true, opacity:1, delay:0.1, ease:Power2.easeOut});
						
		
		if( $('#hero').hasClass("has-image")) {	
			if( $('body').hasClass("load-project-thumb")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				
				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:0.8, ease:Power2.easeOut, onComplete:function(){
					$('.hb-left').addClass('enable');
				}});
				TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:0.9, ease:Power2.easeOut});	
			} if( $('body').hasClass("load-project-hover")) {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				
				TweenMax.to($(".hero-title"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:0, opacity:1, delay:0.6, ease:Power2.easeOut});
				TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:0.8, ease:Power2.easeOut, onComplete:function(){
					$('.hb-left').addClass('enable');
				}});
				TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:0.9, ease:Power2.easeOut});	
			} else {
				TweenMax.to($("#hero-bg-image"), 0, {force3D:true, scale:1.05 , opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-title"), 0, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut});
				TweenMax.to($(".hb-left"), 0.4, {force3D:true, y:0, opacity:1, delay:0, ease:Power2.easeOut, onComplete:function(){
					$('.hb-left').addClass('enable');
				}});
				TweenMax.to($(".hb-right"), 0.4, {force3D:true, y:0, opacity:1, delay:0.1, ease:Power2.easeOut});	
			}
			TweenMax.to($(".scroll-down-wrap"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.85, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.95, ease:Power2.easeOut});
		} else {
			TweenMax.to($(".hero-title"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.1, ease:Power2.easeOut});
			TweenMax.to($(".hero-subtitle"), 0.4, {force3D:true, y: 0, opacity:1, delay:0.15, ease:Power2.easeOut});
			TweenMax.to($(".post-article-wrap"), 0.4, {force3D:true, y: 0, opacity:1, ease:Power2.easeOut});
			TweenMax.to($("#main-page-content"), 0.4, {force3D:true, opacity:1, y:0, delay:0.15, ease:Power2.easeOut});
			TweenMax.to($("#show-filters"), 0.4, {force3D:true, opacity:1, delay:0.3, ease:Power2.easeOut});		
		}		
		
		if ($('#hero-bg-image').hasClass("light-content")) {
			$('#hero-caption').addClass('light-content');					
			setTimeout(function(){
				$('#header-container').addClass('light-content');
			} , 600 );
		}
		
		TweenMax.to($(".showcase-holder"), 0.4, {force3D:true, opacity:1, scale:1, delay:0.2, ease:Power2.easeOut});//modified time
		
		// Fading In Small Carousel elements on Finised
		var tlCarousel = new TimelineLite();
		tlCarousel.set($(".showcase-carousel-slider .swiper-slide"), {x: 300, opacity:0});
		$(".showcase-carousel-slider .swiper-slide").each(function(index, element) {
			tlCarousel.to(element, 1.4, {x:0, opacity:1, delay:0.7, ease:Power3.easeOut}, index * 0.1)
		});
		
		
		
		
		TweenMax.to($("#footer-container"), 1, {force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});		
		
		if( $('.load-project-thumb').length > 0 ){
			setTimeout( function(){
				$('#hero-bg-wrapper').find('video').each(function() {
					$(this).get(0).play();
				});
				$('.thumb-container').remove();				
			} , 200 );
		} else {
			$('#hero-bg-wrapper').find('video').each(function() {
				$(this).get(0).play();
			});
		}
		
		setTimeout( function(){	
			$('header').removeClass('white-header');
			$('body').removeClass("load-project-thumb").removeClass("load-project-page").removeClass("load-project-page-carousel").removeClass("load-next-project").removeClass("show-loader").removeClass("load-next-page").removeClass("load-project-page");
		} , 800 );
		
		setTimeout( function(){				
			$('.showcase-holder').removeClass("disabled");
		} , 1900 );
		
	
	}// End Lazy Load		





/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function Showcase() {
		
	
		if( $('.showcase-slider').length > 0 ){	
		
			
			var titles = [];
			var subtitle = [];
			var counter = [];
			$('.showcase-slider .swiper-slide').each(function(i) {
			  	titles.push($(this).data('title'));
				subtitle.push($(this).data('subtitle'))
				counter.push($(this).data('number'))
			});
						
			var interleaveOffset = 0.4;
			
			var swiperOptions = {
				direction: "horizontal",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 1,
				allowTouchMove:true,  
				speed:900,
				autoplay: false,
				mousewheel: true,
				pagination: {
					el: '.showcase-captions',
					clickable: true,
					renderBullet: function (index, className) {
						return '<div class="outer ' + className + '">' + '<div class="inner">' + '<div class="subtitle">' + subtitle[index] + '</div>' + '<div class="title">'  + titles[index] + '</div>' + '<div class="counter-wrap">' + '<div class="counter">' + counter[index] + '</div>' + '</div>' + '</div>' + '</div>';
						 
					},
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				},
				on: {
					progress: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							var slideProgress = swiper.slides[i].progress;
							var innerOffset = swiper.height * interleaveOffset;
							var innerTranslate = slideProgress * innerOffset;
							swiper.slides[i].querySelector(".img-mask").style.transform = "translate3d(" + innerTranslate + "px,0, 0)";
						}
					  
					},
					touchStart: function() {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = "";
						}
					},
					setTransition: function(speed) {
						var swiper = this;
						for (var i = 0; i < swiper.slides.length; i++) {
							swiper.slides[i].style.transition = speed + "ms";
							swiper.slides[i].querySelector(".img-mask").style.transition = speed + "ms";
						}   
				 	},
					init: function () {						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						});
					},				
					slideNextTransitionStart: function () {	
						
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {y:-60, opacity:0, delay:0, ease:Power2.easeIn})
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title'), 0.4, {y:-60, opacity:0, delay:0.1, ease:Power2.easeInOut})
												
						
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {y:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut})
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title'), 0.5, {y:0, opacity:1, scale:1, delay:0.6, ease:Power2.easeOut})
																
						
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {y:60, opacity:0, delay:0, ease:Power2.easeIn})		
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title'), 0.5, {y:60, opacity:0, ease:Power2.easeInOut})
						
						var tl = new TimelineLite();
						
						$('.swiper-pagination-bullet-active').prev().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:-20, opacity:0, ease:Power2.easeIn}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').find('.counter').each(function(index, element) {
							tl.to(element, 0.4, {scale:1, y:0, opacity:1, scale:1, delay:0.3, ease:Power2.easeOut}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').next().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:20, opacity:0, ease:Power2.easeIn}, index * 0.01)
						});						
						
					},
					slidePrevTransitionStart: function () {							
						
						
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {y:-60, opacity:0, delay:0, ease:Power2.easeIn})
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title'), 0.4, {y:-60, opacity:0, delay:0, ease:Power2.easeInOut})
												
						
						var activeslidecaption = new TimelineLite();
						activeslidecaption.staggerTo($('.swiper-pagination-bullet-active').find('.subtitle'), 0.5, {y:0, opacity:1, scale:1, delay:0.5, ease:Power2.easeOut})
						var activeslidetitle = new TimelineLite();												
						activeslidetitle.staggerTo($('.swiper-pagination-bullet-active').find('.title'), 0.5, {y:0, opacity:1, scale:1, delay:0.4, ease:Power2.easeOut})
																
						
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {y:60, opacity:0, delay:0.1, ease:Power2.easeIn})		
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title'), 0.5, {y:60, opacity:0, delay:0, ease:Power2.easeInOut})
						
						var tl = new TimelineLite();
						
						$('.swiper-pagination-bullet-active').prev().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:-20, opacity:0, delay:0.1,  ease:Power2.easeIn}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').find('.counter').each(function(index, element) {
							tl.to(element, 0.4, {scale:1, y:0, opacity:1, scale:1, delay:0.45, ease:Power2.easeOut}, index * 0.01)
						});
						
						$('.swiper-pagination-bullet-active').next().find('.counter').each(function(index, element) {
							tl.to(element, 0.3, {scale:1, y:20, opacity:0, delay:0.1,  ease:Power2.easeIn}, index * 0.01)
						});					
						
					},
					slideChangeTransitionStart: function () {
						
						$('.swiper-button-white').addClass('disable-click');
						
						$('.swiper-slide-active').find('video').each(function() {
							$(this).get(0).play();
						}); 					
						
					},				
					slideChangeTransitionEnd: function () {	
						
						$('.swiper-button-white').removeClass('disable-click');
						
						$('.swiper-slide-prev').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						$('.swiper-slide-next').find('video').each(function() {
							$(this).get(0).pause();
						});
						
						
						var prevslidecaption = new TimelineLite();
						prevslidecaption.staggerTo($('.swiper-pagination-bullet-active').prev().find('.subtitle'), 0.3, {y:-60, opacity:0, delay:0, ease:Power2.easeIn})
						var prevslidetitle = new TimelineLite();						
						prevslidetitle.staggerTo($('.swiper-pagination-bullet-active').prev().find('.title'), 0.4, {y:-60, opacity:0, delay:0.1, ease:Power2.easeInOut})
						
						var nextslidecaption = new TimelineLite();	
						nextslidecaption.staggerTo($('.swiper-pagination-bullet-active').next().find('.subtitle'), 0.3, {y:60, opacity:0, delay:0.1, ease:Power2.easeIn})		
						var nextslidetitle = new TimelineLite();						
						nextslidetitle.staggerTo($('.swiper-pagination-bullet-active').next().find('.title'), 0.5, {y:60, opacity:0, delay:0, ease:Power2.easeInOut})
						
					}
  				},
			};
							
			var swiper = new Swiper(".swiper-container", swiperOptions);			
			
			
			$(".showcase-slider .swiper-slide").find(".title").each(function(i) {				
				$(this).wrap( "<div class='outer'><div class='inner'></div></div>" );
			});
			
			$("footer").addClass("showcase-footer")
			
			
			
			// Tilt Showcase Wrapper
			var maxTilt = 1.5;
			var mouseX, mouseY;
			$(document).on("mousemove", function(event) {
				mouseX = event.pageX;
				mouseY = event.pageY;
			});
			$('.showcase-tilt').each(function() {
				var thisWidth = $(this).width();
				var thisHeight = $(this).height();
				var thisOffset = $(this).offset();
				$(document).mousemove(function() {
					var horTilt = ((mouseX / thisWidth) * (maxTilt * 2)) - maxTilt;
					var verTilt = (((mouseY - thisOffset.top) / thisHeight) * (maxTilt * 2)) - maxTilt;					
					TweenMax.to('.showcase-tilt', 1,{rotationY: horTilt, rotationX: verTilt, scale: 1.05, ease:Power1.easeOut});
				});
			});
			
			if ($(window).width() >= 1024) {
			
				$('.swiper-slide a').on('mousedown', function(event) {
					return false;
				});
				
				
				$('.showcase-slider').on('mousedown touchstart', function() {				
					$('body').addClass('scale-up');
					TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
					
				});			
				$('.showcase-slider').on('mouseup touchend', function() {				
					$('body').removeClass('scale-up');
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
				});
				
				$('body').on('mouseup touchend', function() {				
					$('body').removeClass('scale-up');
					
				});
			
			}
			
			TweenMax.to($(".showcase-counter, .swiper-pagination-bullet-active .counter"), 1, {force3D:true, opacity:1, delay:0.4, ease:Power2.easeOut});
			
		}	
		
			
	}//End Showcase
	
	
	
/*--------------------------------------------------
Function Showcase
---------------------------------------------------*/
	
	function ShowcaseCarousel() {
		
	
		if( $('.showcase-carousel-slider').length > 0 ){
			
			$("footer").addClass("showcase-footer");
			
			$(".showcase-carousel-slider .img-mask").wrap( "<div class='img-mask-wrap'></div>" );

			var swiperOptions = {
				direction: "horizontal",
				loop: false,
				grabCursor: true,
				resistance : true,
				resistanceRatio:0.5,
				slidesPerView: 4,
				breakpoints: {
					1466: {
					  slidesPerView: 2,
					  spaceBetween: 40
					},
					1024: {
					  slidesPerView: 2,
					  spaceBetween: 30
					},
					767: {
					  slidesPerView: 1,
					  spaceBetween: 30
					},
					479: {
					  slidesPerView: 1,
					  spaceBetween: 20
					}
				},
				allowTouchMove:true,  
				speed:500,
				autoplay: false,
				effect: "slide",
				mousewheel: true,
				scrollbar: {
					el: '.swiper-scrollbar',
					draggable: true,
				},
				navigation: {
					nextEl: '.swiper-button-next',
					prevEl: '.swiper-button-prev',
				}
			};
							
			var swiper = new Swiper(".swiper-container", swiperOptions);
			
			$(".swiper-slide").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', scale: 2, borderColor:'#fff',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
							
			$(".swiper-slide").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$('body').removeClass('scale-up');
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});
			
			$('.swiper-slide').on('mousedown', function(event) {
				return false;
			});
			
			
			$('.showcase-carousel-slider').on('mousedown touchstart', function() {				
				$('body').addClass('scale-up');
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
				
			});			
			$('.showcase-carousel-slider').on('mouseup touchend', function() {				
				$('body').removeClass('scale-up');
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
			});
			
			$('body').on('mouseup touchend', function() {				
				$('body').removeClass('scale-up');
				
			});
			
			FitSlideScreen();
			
		}	
		
			
	}//End Showcase		


/*--------------------------------------------------
Function Portfolio
---------------------------------------------------*/	
		
	function Portfolio() {	
	
			
		if( $('.portfolio-wrap').length > 0 ){			
			
			
			$('.portfolio .floating').eq(0).addClass('first');
			
			
			if ($("body").hasClass("smooth-scroll")) {
				var elem = document.querySelector("#content-scroll");
				var scrollbar = Scrollbar.init(elem,
				{
					renderByPixels: true,
					damping:0.05
				});
			}
			
			var $container = $('.portfolio');
		
			$container.isotope({
				layoutMode: 'packery',
			  itemSelector: '.item',
			  gutter:0,
			  transitionDuration: "0.5s"
			});
			
			$('#filters a').on('click', function() {
				$('#filters a').removeClass('active');
				$(this).addClass('active');
				$('.item').addClass('item-margins');
				var selector = $(this).attr('data-filter');
				$container.isotope({ filter: selector }, function( $changedItems, instance ) {
				  instance.$allAtoms.filter('.isotope-hidden').removeClass('is-filtered');
				  instance.$filteredAtoms.addClass('is-filtered');
				});		
				return false;
			});
			
			$("#all").trigger('click');
				
			$('.item').each(function() {
				var image = $(this).find('.item-image').data('src');	
				$(this).find('.item-image').css({'background-image': 'url(' + image + ')'});
			});
			
			
			$(".item-image").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', scale: 2, borderColor:'#fff',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
				$(this).find('video').each(function() {
					$(this).get(0).play();
				});
			});
							
			$(".item-image").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999',});
				TweenMax.to('#ball-loader', 0.2,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
				$(this).find('video').each(function() {
					$(this).get(0).pause();
				});
			});			
			
			
			//Show Filters On overlay
			$('#show-filters, #close-filters').on('click', function() {			
				$('#filters-overlay').toggleClass('active');
				var navtitleheight = $(".hero-title").height()
				var navsubtitleheight = $(".hero-subtitle").height()
				
				setTimeout( function(){			
					if ($('#filters-overlay').hasClass("active")) {
						
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:0.3, delay:0, ease:Power2.easeInOut});					
						TweenMax.to($(".active .item-caption"), 0.3, {opacity:0, ease:Power2.easeOut});
						
						//Fade In Navigation Lists
						TweenMax.set($(".filters-info"), {y:30, opacity:0});
						TweenMax.to($(".filters-info"), 0.4, {force3D:true, y:0, opacity:1, delay:0.7, ease:Power2.easeOut});
						var tlMenu = new TimelineLite();
						tlMenu.set($(".filters-timeline"), {y:60, opacity:0});
						$(".filters-timeline").each(function(index, element) {
							tlMenu.to(element, 0.5, {y:0, opacity:1, delay:1.2, ease:Power3.easeOut}, index * 0.1)
						});
						
						var heroheight = $("#hero").height();			
						if ($("body").hasClass("smooth-scroll")) {
							TweenLite.to(scrollbar, 1.5, {scrollTop:heroheight+80, ease:Power4.easeInOut});
						} else {
							TweenLite.to(window, 1.5, {scrollTop:heroheight+80, ease:Power4.easeInOut});
						}
							
					} else {					
						
						
						TweenMax.to($("#main"), 0.6, {force3D:true, scale: 1, opacity:1, delay:0.3, ease:Power2.easeInOut});					
						TweenMax.to($(".active .item-caption"), 0.5, {opacity:1, delay:0.5, ease:Power2.easeOut});
						
						//Fade Out Navigation Lists
						TweenMax.to($(".filters-info"), 0.2, {force3D:true, y:-30, opacity:0, delay:0, ease:Power1.easeIn});					
						var tlMenu = new TimelineLite();
						$(".filters-timeline, .jssocials-share").each(function(index, element) {
							tlMenu.to(element, 0.25, {opacity:0, y:-60, delay:0.1, ease:Power1.easeIn }, index * 0.1)
						});
						TweenMax.to('#hold-event', 0.3,{force3D:true, scale:1, width:26, height:26, backgroundColor : 'rgba(255, 255, 255, 0)'});	
						TweenMax.to('#ball', 0.1,{borderWidth: '2px', scale:1, x: -15, y: -15});
						$("#ball").removeClass("close-icon");
						$('#ball i').remove();
						
					}							
				} , 20 );
			});
			
			
			$("#close-filters").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("close-icon").append( '<i class="fa fa-times"></i>' );
			});
				
			$("#close-filters").mouseleave(function(e) {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("close-icon");
				$('#ball i').remove();
			});
			
			
			
			//Floating Items
			$(document).mousemove(function(e) {			
				$('.floating .item-image').offset({
					left: e.pageX + 20,
					top: e.pageY + 20
				});
			});
			
			$(".floating .item-caption").wrap( "<div class='item-caption-wrap'></div>" );
				
			$('.floating .item-appear').on('mouseenter', function() {
				$(this).parents('.item').addClass('show-image');
				$('.floating').addClass('disable');
				$(this).parents('.floating').removeClass('disable');	
				$(this).parents('.item').find('video').each(function() {
					$(this).get(0).play();
				});
			}).on('mouseleave', function() {
				$(this).parents('.item').removeClass('show-image');
				$('.floating').removeClass('disable');
				$(this).parents('.item').find('video').each(function() {
					$(this).get(0).pause();
				});
			});
		
			
			//Fit Thumb Screen
			FitThumbScreen();
			
		}	
	
	}//End Portfolio

	
		
	

/*--------------------------------------------------
Function Shortcodes
---------------------------------------------------*/
	
	function Shortcodes() {
		
		// Accordion	  
		
		$('dd.accordion-content').slideUp(1).addClass('hide');		
		$('dl.accordion').on('click', 'dt', function() {
			$(this).addClass('accordion-active').next().slideDown(200).siblings('dd.accordion-content').slideUp(200).prev().removeClass('accordion-active');						
		});	
		$('dl.accordion').on('click', 'dt.accordion-active', function() {
			$(this).removeClass('accordion-active').siblings('dd.accordion-content').slideUp(200);
		});
		
		$(".flexnav").flexNav({ 'animationSpeed' : 250 });
	
	}//End Shortcodes
	

	
	
/*--------------------------------------------------
Function Sliders
---------------------------------------------------*/
	
	function Sliders() {
		
		if( $('.slider').length > 0 ){
		
			$('.slider').owlCarousel({
				loop:true,
				margin:500,
				center: true,
				autoHeight:false,
				nav:true,
				navSpeed: 500,
				items:1,			
			});
			
			$( ".slider .owl-prev" ).removeClass( "parallax-wrap" );
			$( ".slider .owl-next" ).removeClass( "parallax-wrap" );
			
			if ($('.slider').hasClass("dark-controls")) {
			
				$(".owl-prev").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#000', scale: 2});
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
					$( "#ball" ).addClass("with-icon").addClass("dark-icon").append( '<i class="fa fa-chevron-left"></i>' );
				});
					
				$(".owl-prev").mouseleave(function(e) {
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
					$("#ball").removeClass("with-icon").removeClass("dark-icon");
					$('#ball i').remove();
				});
				
				$(".owl-next").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#000', scale: 2});
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
					$( "#ball" ).addClass("with-icon").addClass("dark-icon").append( '<i class="fa fa-chevron-right"></i>' );
				});
					
				$(".owl-next").mouseleave(function(e) {
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
					$("#ball").removeClass("with-icon").removeClass("dark-icon");
					$('#ball i').remove();
				});
				
			} else {
				
				$(".owl-prev").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
				});
					
				$(".owl-prev").mouseleave(function(e) {
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
				$(".owl-next").mouseenter(function(e) {	
					TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
					$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
				});
					
				$(".owl-next").mouseleave(function(e) {
					TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
					TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
					$("#ball").removeClass("with-icon");
					$('#ball i').remove();
				});
				
			}
		
		}
		
		if( $('.carousel').length > 0 ){
		
			$('.carousel').owlCarousel({
				loop:true,
				margin:20,
				autoHeight:false,
				navSpeed: 600,
				nav:false,
				responsive:{
					0:{
						items:1
					},
					479:{
						items:2
					},
					1024:{
						items:3
					},
					1466:{
						items:3
					}
				}
			});
			
			$(".carousel").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
				$("body" ).addClass("scale-up");
			});
				
			$(".carousel").mouseleave(function(e) {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
				$("body").removeClass("scale-up");
			});
			
		}
		
		if( $('.carousel-auto').length > 0 ){
		
			$('.carousel-auto').owlCarousel({
				loop:true,
				margin:20,
				autoWidth:true,
				navSpeed: 600,
				nav:true,
				responsive:{
					0:{
						items:1
					},
					479:{
						items:2
					},
					1024:{
						items:3
					},
					1466:{
						items:3
					}
				}
			});
			
			setTimeout( function(){	
				$( ".carousel-auto .owl-prev" ).removeClass( "parallax-wrap" );
				$( ".carousel-auto .owl-next" ).removeClass( "parallax-wrap" );
			} , 100 );
			
			setTimeout( function(){	
				
			$(".owl-prev").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-left"></i>' );
			});
				
			$(".owl-prev").mouseleave(function(e) {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			$(".owl-next").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
				$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-chevron-right"></i>' );
			});
				
			$(".owl-next").mouseleave(function(e) {
				TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
				TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
				$("#ball").removeClass("with-icon");
				$('#ball i').remove();
			});
			
			} , 200 );		
			
		}
		
		
		
		if( $('.text-carousel').length > 0 ){		
			$(".text-carousel").owlCarousel({	
				loop:true,
				dots:false,
				items:1,
				autoplay:false,
				smartSpeed: 750,
				autoHeight:true,
				autoplayHoverPause:true,
				nav:true,
				navText: ["<div class='prev-testimonial parallax-element'><i class='fa fa-chevron-left' aria-hidden='true'></i></div>","<div class='next-testimonial parallax-element'><i class='fa fa-chevron-right' aria-hidden='true'></i></div>"],
			});
		}
		
		
	}//End Sliders	
	
	
/*--------------------------------------------------
Function Justified Grid
---------------------------------------------------*/	
	
	function JustifiedGrid() {
		
		if( $('#justified-grid').length > 0 ){
		
			$('#justified-grid').justifiedGallery({
				rowHeight : 300,
				lastRow : 'nojustify',
				margins : 10
			});
		
		}
		
	}//End Justified Grid	
	
	
/*--------------------------------------------------
Function Lightbox
---------------------------------------------------*/
	
	function Lightbox() {
		
		$('.image-link').magnificPopup({
		  	type: 'image',
			mainClass: 'mfp-with-zoom',	
			gallery: {
			  enabled:true
			},		
			zoom: {
				enabled: true, 			
				duration: 300, 
				easing: 'ease-in-out', 
				opener: function(openerElement) {
					return openerElement.is('img') ? openerElement : openerElement.find('img');
				}
			}			
		});
		
		$(".image-link").mouseenter(function(e) {	
			TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', borderColor:'#fff', scale: 2});
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '1px', top: 1, left: 1});
			$( "#ball" ).addClass("with-icon").append( '<i class="fa fa-plus"></i>' );
		});
			
		$(".image-link").mouseleave(function(e) {
			TweenMax.to('#ball', 0.3,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999', });
			TweenMax.to('#ball-loader', 0.1,{borderWidth: '2px', top: 0, left: 0});
			$("#ball").removeClass("with-icon");
			$('#ball i').remove();
		});
			
	}//End Lightbox	
	
	
	
/*--------------------------------------------------
Function Contact Formular
---------------------------------------------------*/	
		
	function ContactForm() {	
	
		if( jQuery('#contact-formular').length > 0 ){
			
			$('#contactform').submit(function(){
				var action = $(this).attr('action');
				$("#message").slideUp(750,function() {
					$('#message').hide();
					$('#submit').attr('disabled','disabled');		
					$.post(action, {
						name: $('#name').val(),
						email: $('#email').val(),
						comments: $('#comments').val()
					},
					function(data){
						document.getElementById('message').innerHTML = data;
						$('#message').slideDown('slow');
						$('#contactform img.loader').fadeOut('slow',function(){$(this).remove()});
						$('#submit').removeAttr('disabled');
						if(data.match('success') != null) $('#contactform').slideUp('slow');		
					}
				);		
				});		
				return false;		
			});		
		}

	}//End ContactForm
	
	
	
/*--------------------------------------------------
Function Page PlayVideo
---------------------------------------------------*/	


	function PlayVideo() {
	
		if( $('.video-wrapper').length > 0 ){
			
			
			$(".video-wrapper").mouseenter(function(e) {
				if ($(this).hasClass("play")) {
					$( "#ball" ).addClass("pause-movie")		
				}
				TweenMax.to('#ball', 0.2,{transformOrigin: '20px 20px', borderWidth: '1px', scale: 2, borderColor:'#fff',});
				$( "#ball" ).addClass("over-movie").append( '<i class="fa fa-play"></i><i class="fa fa-pause"></i>' );
			});
			
			$(".video-wrapper").mouseleave(function(e) {
				TweenMax.to('#ball', 0.2,{borderWidth: '2px', scale:1, x: -20, y: -20, borderColor:'#999999',});
				$("#ball").removeClass("over-movie").removeClass("pause-movie");
				$('#ball i').remove();
			});
			
			$(".video-wrapper .control").mouseenter(function(e) {	
				TweenMax.to('#ball', 0.2,{borderWidth: '20px', scale: 0});
			});
			
			$(".video-wrapper .control").mouseleave(function(e) {
				TweenMax.to('#ball', 0.1,{transformOrigin: '20px 20px', borderWidth: '1px', scale: 2});
			});
			
			var videocenter = ($(window).height() - $('.video-cover').height()) / 2
					
			////////////////////////////////////////////////////// REFACTOR //////////////////////////////////////////////////////
			// plays or pause the video function of its current state
			var playpause = function( videoObj ) {
				
				if( videoObj[0] != null ){
					if(videoObj[0].paused || videoObj[0].ended) {
						
						videoObj.parent().addClass('play');
						videoObj[0].play();
					}
					else {
						
						videoObj.parent().removeClass('play');
						videoObj[0].pause();
					}
				}
			};
			
			//Time format converter - 00:00
			var timeFormat = function(seconds){
				var m = Math.floor(seconds/60)<10 ? "0"+Math.floor(seconds/60) : Math.floor(seconds/60);
				var s = Math.floor(seconds-(m*60))<10 ? "0"+Math.floor(seconds-(m*60)) : Math.floor(seconds-(m*60));
				return m+":"+s;
			};
			
			// Events
			// click to video cover - will start the video
			$('.video-wrapper').on('click', function() {
				
				$('html,body').animate({scrollTop: $(this).offset().top - videocenter},390);		
				// hide the video cover in order to start playing
				$(this).find('.video-cover').addClass('hidden');
				
				$( "#ball" ).toggleClass("pause-movie");
				
				// pause first the other videos
				var current_wrapper = $(this);
				$('#main-page-content').find('.video-wrapper').each(function() {
					
					if( !current_wrapper.is( $(this) ) ){
						
						$(this).removeClass('play');
						$(this).find('video').each(function() {
							
							if( !$(this).get(0).paused && !$(this).get(0).ended ) {
								
								$(this).get(0).pause();
							}
						});
					}
					
				});
				
				// trigger the click for the inner video
				$(this).find('video').each(function() {

					playpause( $(this) );
				});

			});
			
			//fullscreen button clicked
			$('.btnFS').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				if($.isFunction(video_object[0].webkitEnterFullscreen)) {
					video_object[0].webkitEnterFullscreen();
				}	
				else if ($.isFunction(video_object[0].mozRequestFullScreen)) {
					video_object[0].mozRequestFullScreen();
				}
				else {
					alert('Your browsers doesn\'t support fullscreen');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
				
			});
				
			//sound button clicked
			$('.sound').on('click', function( e ) {
					
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
					
				video_object[0].muted = !video_object[0].muted;
				$(this).toggleClass('muted');
				if(video_object[0].muted) {
					parent_wrapper.find('.volumeBar').css('width',0);
				}
				else{
					parent_wrapper.find('.volumeBar').css('width', video_object[0].volume*100+'%');
				}
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			//progress bar (video timebar) clicked
			$('.progress').on('click', function( e ) {
				
				var parent_wrapper	= $(this).closest('.video-wrapper');
				var video_object 		= parent_wrapper.find('video');
									
				// calculate click position
				// and update video current time
				// as well as progress bar
				var maxduration 	= video_object[0].duration;
				var position 			= e.pageX - $(this).offset().left;
				var percentage 	= 100 * position / $(this).width();
				if(percentage > 100) {
					
					percentage = 100;
				}
				if(percentage < 0) {
					
					percentage = 0;
				}
				$('.timeBar').css('width', percentage+'%');	
				video_object[0].currentTime = maxduration * percentage / 100;
				
				// prevent video wrapper div responding the event
				e.stopPropagation();
			});
			
			$('#main-page-content').find('video').each(function() {
			
				var video = $(this);
				var video_wrapper = $(this).parent();
				
				//remove default control when JS loaded
				video[0].removeAttribute("controls");
				video_wrapper.find('.control').fadeIn(500);
				video_wrapper.find('.caption').fadeIn(500);
			 
				//before everything get started and we have the info about the video such as duration
				video.on('loadedmetadata', function() {
					
					var video_object = $(this);
					var parent_wrapper = $(this).parent();
					//set video properties
					parent_wrapper.find('.current').text(timeFormat(0));
					parent_wrapper.find('.duration').text(timeFormat(video[0].duration));
					
				});
				
				//display current video buffered progress
				video.on('progress', function() {
					
					var video_object 		= $(this);
					var parent_wrapper 	= $(this).parent();
					var maxduration 		= video_object [0].duration;
					
					if (maxduration > 0) {
					  for (var i = 0; i < video_object [0].buffered.length; i++) {
							if (video_object [0].buffered.start(video_object [0].buffered.length - 1 - i) <video_object [0].currentTime) {
								var perc = (video_object [0].buffered.end(video_object [0].buffered.length - 1 - i) / maxduration) * 100 + "%";
								parent_wrapper.find('.bufferBar').css('width',perc+'%');
								break;
							}
						}
					}
					
				});
				
				//display current video play time
				video.on('timeupdate', function() {
					
					var parent_wrapper 	= $(this).parent();
					var currentPos 			= $(this).get(0).currentTime;
					var maxduration 		= $(this).get(0).duration;
					var perc 					= 100 * currentPos / maxduration;
					parent_wrapper.find('.timeBar').css('width',perc+'%');	
					parent_wrapper.find('.current').text(timeFormat(currentPos));	
				});
				
				//video screen and play button clicked
				video.on('click', function() { 
					
					playpause( $(this) ); 
				});
				
				//video canplay event
				video.on('canplay', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeOut(100); //?
				});
				
				//video canplaythrough event
				//solve Chrome cache issue
				var completeloaded = false;
				video.on('canplaythrough', function() {
					
					completeloaded = true;
				});
				
				//video ended event
				video.on('ended', function() {		
					
					$(this).get(0).pause();
					$(this).parent().removeClass("play");
					$( "#ball" ).toggleClass("pause-movie");
				});
			
				//video seeking event
				video.on('seeking', function() {
					
					//if video fully loaded, ignore loading screen
					if(!completeloaded) { 
						var parent_wrapper = $(this).parent();
						parent_wrapper.find('.loading').fadeIn(200); //?
					}	
				});
				
				//video seeked event
				video.on('seeked', function() { });
				
				//video waiting for more data event
				video.on('waiting', function() {
					
					var parent_wrapper = $(this).parent();
					parent_wrapper.find('.loading').fadeIn(200); //?
				});
				
			});
			
		}
		
	}// End PlayVideo					
	
	
	/*--------------------------------------------------
Function Contact Map
---------------------------------------------------*/	
		
	function ContactMap() {	
	
		if( jQuery('#map_canvas').length > 0 ){					
			var latlng = new google.maps.LatLng(43.270441,6.640888);
			var settings = {
				zoom: 14,
				center: new google.maps.LatLng(43.270441,6.640888),
				mapTypeControl: false,
				scrollwheel: false,
				draggable: true,
				panControl:false,
				scaleControl: false,
				zoomControl: false,
				streetViewControl:false,
				navigationControl: false};			
				var newstyle = [
				{
					"featureType": "all",
					"elementType": "labels.text.fill",
					"stylers": [
						{
							"saturation": 36
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 40
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.text.stroke",
					"stylers": [
						{
							"visibility": "on"
						},
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "all",
					"elementType": "labels.icon",
					"stylers": [
						{
							"visibility": "off"
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "administrative",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						},
						{
							"weight": 1.2
						}
					]
				},
				{
					"featureType": "landscape",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 20
						}
					]
				},
				{
					"featureType": "poi",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 21
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.fill",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				},
				{
					"featureType": "road.highway",
					"elementType": "geometry.stroke",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 29
						},
						{
							"weight": 0.2
						}
					]
				},
				{
					"featureType": "road.arterial",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 18
						}
					]
				},
				{
					"featureType": "road.local",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 16
						}
					]
				},
				{
					"featureType": "transit",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 19
						}
					]
				},
				{
					"featureType": "water",
					"elementType": "geometry",
					"stylers": [
						{
							"color": "#000000"
						},
						{
							"lightness": 17
						}
					]
				}
			];
			var mapOptions = {
				styles: newstyle,
				mapTypeControlOptions: {
					 mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'holver']
				}
			};
			var map = new google.maps.Map(document.getElementById("map_canvas"), settings);	
			var mapType = new google.maps.StyledMapType(newstyle, { name:"Grayscale" });    
				map.mapTypes.set('holver', mapType);
				map.setMapTypeId('holver');
						
			
			google.maps.event.addDomListener(window, "resize", function() {
				var center = map.getCenter();
				google.maps.event.trigger(map, "resize");
				map.setCenter(center);
			});	
			var contentString = '<div id="content-map-marker" style="text-align:center; padding-top:10px; padding-left:10px">'+
				'<div id="siteNotice">'+
				'</div>'+
				'<h4 id="firstHeading" class="firstHeading" style="color:#000!important; font-weight:600; margin-bottom:0px;">Hello Friend!</h4>'+
				'<div id="bodyContent">'+
				'<p color:#999; font-size:14px; margin-bottom:10px">Here we are. Come to drink a coffee!</p>'+
				'</div>'+
				'</div>';
			var infowindow = new google.maps.InfoWindow({
				content: contentString
			});	
			var companyImage = new google.maps.MarkerImage('images/marker.png',
				new google.maps.Size(58,63),<!-- Width and height of the marker -->
				new google.maps.Point(0,0),
				new google.maps.Point(35,20)<!-- Position of the marker -->
			);
			var companyPos = new google.maps.LatLng(43.270441,6.640888);	
			var companyMarker = new google.maps.Marker({
				position: companyPos,
				map: map,
				icon: companyImage,               
				title:"Our Office",
				zIndex: 3});	
			google.maps.event.addListener(companyMarker, 'click', function() {
				infowindow.open(map,companyMarker);
			});	
		}
		
		return false
	
	}//End ContactMap
	
	
 