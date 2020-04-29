$(document).ready(function() {
	// body...

	$('.owl-carousel').owlCarousel({
		items: 4,
		margin: 0,
		loop: true,
		nav: true,
		navText: ['<span>&#60;</span>', '<span>&#62;</span>'],
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsiveClass:true,
		responsive:{
		    0:{
		        items:1,
		        nav:true
		    },
		    768:{
		        items:3,
		        

		        nav:true
		    },
		    1024:{
		        items:4,
		        nav:true,
		        loop:true
        }
    }

	});


})