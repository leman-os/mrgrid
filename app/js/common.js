$(function() {


	window.onscroll = function() {
		scrollFunction();
		scrollFunctionMenu()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("myBtn").style.display = "block";
	    } else {
	        document.getElementById("myBtn").style.display = "none";
	    }
	};

	function scrollFunctionMenu() {
		var ht = document.getElementById("head").offsetHeight;
	    if (document.body.scrollTop > ht || document.documentElement.scrollTop > ht) {
	        document.getElementById("menu").style.position = "fixed";
	    }
	    else {
	    	document.getElementById("menu").style.position = "relative";
	    }
	};


	var modal = document.getElementById('myModal');
	var btn = document.getElementById("mybtn1");
	// var span = document.getElementsByClassName("close")[0];

	btn.onclick = function() {
	    modal.style.display = "block";
	}


	modal.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

	//плавный переход к якорю
	$(document).ready(function(){
	    $(".toplink").click(function(){
	       $("html, body").animate({
	         scrollTop: $($(this).attr("href")).offset().top -60+ "px"
	      }, {
	         duration: 1000,
	         easing: "swing"
	      });
	      return false;
	    });

	    $('#owl1').owlCarousel({
  			items:3,
  			autoplay:true,
  			loop: true,
			margin:50, //Отступ от картино если выводите больше 1
			autoplayHoverPause:true, //Пауза при навидении мыши
			smartSpeed:1050, //Время движения слайда
			autoplayTimeout:2000, //Время смены слайда
  			});
	    
	    var owl = $('#owl2');

	    owl.owlCarousel({
		    items:3,
  			autoplay:true,
  			loop: true,
			margin:50, //Отступ от картино если выводите больше 1
			autoplayHoverPause:true, //Пауза при навидении мыши
			smartSpeed:1050, //Время движения слайда
			autoplayTimeout:2000, //Время смены слайда
  			});
		});
		/*owl.on('mousewheel', '.owl-stage', function (e) {
		    if (e.deltaY>0) {
		        owl.trigger('next.owl');
		    } else {
		        owl.trigger('prev.owl');
		    }
		    e.preventDefault();
		});*/
	// });

});


function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	    document.getElementById("myBtn").style.display = "none";
	};