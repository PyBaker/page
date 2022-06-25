

// PRELOADER

$(window).load(function () {
	$('.preloader').delay(500).fadeOut("slow"); // set duration in brackets    
});


$(function () {
	jQuery(document).ready(function () {
		$('body').backstretch([

			"images/bg (2).jpg",
			"images/bg (3).jpg",
			"images/bg (1).jpg",
			"images/bg (4).jpg",
			"images/bg (6).jpg",
			"images/bg (7).jpg",

		], { duration: 3000, fade: 1500 });
	});
})
