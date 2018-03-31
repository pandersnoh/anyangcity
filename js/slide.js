		$(function() {   
		 $('.slide').slick({
		     slidesToShow: 6,
		     slidesToScroll: 1,
		     dots: false,
		     prevArrow: $('.prev'),
		     nextArrow: $('.next'),    
			 responsive: [
			    {
			      breakpoint: 1600,
			      settings: {
			        slidesToShow: 6,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 1480,
			      settings: {
			        slidesToShow: 5,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 1280,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1
			      }
			    },			    			    
			    {
			      breakpoint: 1024,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1
			      }
			    },
			    {
			      breakpoint: 800,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 580,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			  }			    
			]    
		  });
		});