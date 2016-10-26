$(document).ready(function () {
		var style = 'easeOutExpo';
		var default_left = Math.round($('.slider__item--active').offset().left - $('.slider__list').offset().left);
		var default_top = $('.slider__item--active').height()+30; /* 30 - отступ от пункта меню */
		var default_width = $('.slider__item--active').outerWidth();


		$('.slider__item').mouseenter(function () {
			default_left = Math.round($(this).offset().left - $('.slider__list').offset().left);
			width = $(this).outerWidth();

		})

		.click(function () {
			$('.slider__item').removeClass('active');
			$(this).addClass('active');
			$('.slider__triangle').stop(true,false).animate({left: default_left+200, width: default_width},{duration:500, easing: style});
		});

		$('.slider__list').mouseleave(function () {
			default_left = Math.round($('.slider__item--active').offset().left - $('.slider__list').offset().left);
			default_width = $('.slider__item--active').outerWidth();

		});
	});
