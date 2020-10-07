$(document).ready(function(){
	var menuOpen = false;

	var openMenu = function() {
		menuOpen = true;
		$(".navigation").addClass("shadow");
		$(".navigation").animate({marginLeft: "0"}, 200);
		$(".main-content").animate({opacity: "0.7"}, 200);
	};

	var closeMenu = function() {
		menuOpen = false
		$(".navigation").removeClass("shadow");
		$(".navigation").animate({marginLeft: "-300px"}, 200);
		$(".main-content").animate({opacity: "1"}, 200);
	};

	$(".menu-button-wrapper").click(function(){
		openMenu();
	});

	$(".close-button").click(function(){
		closeMenu();
	});

	$(".main-content").click(function(){
		if (menuOpen) {
			closeMenu();
		}
	});

	$(document).keypress(function(event) {
		if ((event.key === "Escape") && (menuOpen)) {
			closeMenu();
			console.log("ding");
		}
	});
});