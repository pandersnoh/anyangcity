		$(function() {   
		 $('.slide').slick({
		     slidesToShow: 6,
		     slidesToScroll: 1,
		     dots: false,
		     prevArrow: $('.prev'),
		     nextArrow: $('.next'),    
		     variableWidth: true, 
			 responsive: [
			    {
			      breakpoint: 1200,
			      settings: {
			        slidesToShow: 4,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 992,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 3
			      }
			    },
			    {
			      breakpoint: 768,
			      settings: {
			        slidesToShow: 2,
			        slidesToScroll: 2
			      }
			    },
			    {
			      breakpoint: 569,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1
			      }
			  }			    
			]    
		  });
		});