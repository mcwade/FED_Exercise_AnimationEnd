"use strict";

(function() {
	
	var Carousel = {
		props:{
			current_slide:null,
			total_slides:null
		},
		init:function(){
			//ADD INITIALIZER CODE HERE
			this.total_slides = $('article').length;
			this.current_slide = 1;
			this.parent = $('.carousel-cells');

			// EVENT LISTENERS
			document.addEventListener("click", Carousel.bindEvents());
			document.addEventListener("keydown", function(event) {
				switch (event.which) {
					case 37:
						Carousel.previous();
						event.preventDefault();
						break;
					case 39:
						Carousel.next();
						event.preventDefault();
						break;
				}
			});
		},
		bindEvents:function(){
			$(".carousel-next").on("click",function(){
				Carousel.next();
			});
			$(".carousel-prev").on("click",function(){
				Carousel.previous();
			});
		},
		next:function(){
			this.current_slide++;
			if ( this.current_slide > this.total_slides ) {
				this.current_slide = 1;
			}
			Carousel.update('next');
		},
		previous:function(){
			this.current_slide--;
			if ( this.current_slide < 1 ) {
				this.current_slide = this.total_slides;
			}
			Carousel.update('prev');
		},
		update:function(slide_direction){
			this.parent.attr('data-slide', slide_direction);
			Carousel.end();
		},
		end:function() {
			var slideNum = (this.current_slide-1);

			$('.carousel-cells').on('animationend', function() {				
				$('.carousel-cells').css('left', '-' + slideNum + '00%');
				$('.carousel-cells').attr('data-slide', '');
			});
		}
	}
	$(function(){
		Carousel.init();
	})

})(window);