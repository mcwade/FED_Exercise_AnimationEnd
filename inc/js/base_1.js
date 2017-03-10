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
			parent = $('.main-carousel');
			parent.attr('data-slide', this.current_slide);

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
			//ADD NEXT CODE HERE
			this.current_slide++;
			if ( this.current_slide > this.total_slides ) {
				this.current_slide = 1;
			}
			Carousel.update(this.current_slide);
		},
		previous:function(){
			//ADD PREVIOUS CODE HERE
			this.current_slide--;
			if ( this.current_slide < 1 ) {
				this.current_slide = this.total_slides;
			}
			Carousel.update(this.current_slide);
		},
		update:function(slide){
			//ADD UPDATE CODE HERE
			parent.attr('data-slide', slide);
		}
	}
	$(function(){
		Carousel.init();
	})


})(window);