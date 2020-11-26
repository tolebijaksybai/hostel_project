
$(document).ready(function () {
	$('.header__sliders').slick({
		infinite: true,
		slidesToShow: 1,
		slidesToScroll: 3,
		speed: 300,
		arrows: false,
		centerMode: true,
		variableWidth: true,
		lazyLoad: 'ondemand',
		slidesToShow: 3,
		slidesToScroll: 1,
		autoplaySpeed: 2000,
	});
});

