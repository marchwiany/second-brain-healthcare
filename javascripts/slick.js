$(document).ready(function(){
	$('.responsive').slick({
	  dots: true,
	  infinite: true,
	  arrows: true,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 1200,
	      settings: {
	      	arrows: false,
	        slidesToShow: 3,
	        slidesToScroll: 3,
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 1000,
	      settings: {
	      	arrows: false,
	        slidesToShow: 2,
	        slidesToScroll: 2
	      }
	    },
	    {
	      breakpoint: 720,
	      settings: {
	      	arrows: false,
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});

$(document).ready(function(){
	$('.single-slide').slick({
	  dots: true,
	  infinite: true,
	  arrows: false,
	  speed: 300,
	  slidesToShow: 4,
	  slidesToScroll: 4,
	  responsive: [
	    {
	      breakpoint: 768,
	      settings: {
	      	adaptiveHeight: true,
	      	initialSlide: 1,
	        slidesToShow: 1,
	        slidesToScroll: 1,
	        infinite: true,
	        dots: true
	      }
	    },
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});
});


$(document).ready(function(){
	$('.feature').slick({
	  dots: true,
	  infinite: true,
	  speed: 300,
	  arrows: true,
	});
});
