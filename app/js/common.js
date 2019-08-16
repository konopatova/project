
$(document).ready(function(){
	$('.promo').slick({
		dots: true,
		infinite: true,
		speed: 500,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		fade: false,
		cssEase: 'linear',
		autoplay: false,
			autoplaySpeed: 2500,
			draggable: true
	});
});


$(window).scroll(function()  {
	var sc = $(this).scrollTop();

	$(".promo-video__block").css({
		"transform": "translate(0, " + sc/3 + "px"
	});

});


$(window).scroll(function() {
	var sc = $(this).scrollTop();
	$(".promo-city__block").css({
		"transform": "translate(0, -" + sc + "px"
	});
});



$('.promo-city').parallax({
	src: 'img/city-bg.png', 
	speed: .3,
	bleed: 0,
	posX: 'center',
	zIndex: 0,
});

$('.btn--blue').tilt({
	scale: 1.1,
	glare: true,
	maxGlare: .2
});

$(document).ready(function() {

var btn = $('#top-button');

$(window).scroll(function() {
	if ($(window).scrollTop() > 200) {
		btn.addClass('show');
	} else {
		btn.removeClass('show');
	}
});

btn.on('click', function(e) {
	e.preventDefault();
	$('html, body').animate({scrollTop:0}, '300');
});

});


/*
$(function () {
$('.burger-fixed').on('click', function () {

	$('.menu').slideToggle(300, function () {
		if ($(this).css('display') === 'none' ) {
			$(this).removeAttr('style');
		}
	
	});

});
});*/


