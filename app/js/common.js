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

	// span.onclick = function() {
	//     modal.style.display = "none";
	// }

	modal.onclick = function(event) {
	    if (event.target == modal) {
	        modal.style.display = "none";
	    }
	}

});

function topFunction() {
	    document.body.scrollTop = 0;
	    document.documentElement.scrollTop = 0;
	    document.getElementById("myBtn").style.display = "none";
	};