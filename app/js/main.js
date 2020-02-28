

// ===== Мобильное меню =====  

function toggleMenu() {
	$('.header-wrapper__btn').toggleClass('closewrap');
	$('.header-mobmenu').toggleClass('activewrap');
	$('.header-mob__burg').toggleClass('activeburg');
	$('body').toggleClass('fixed');
}

$('.header-mob__burg-btn, .header-wrapper__btn, .header-mobmenu').on('click', toggleMenu);
$('.header-wrapper').on('click', function(e) {
	e.stopPropagation();
	return 0;
});

// ==== BG Slider ====

var $slider = $('.slider');

if ($slider.length) {
  var currentSlide;
  var slidesCount;
  var sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  var updateSliderCounter = function(slick, currentIndex) {
    currentSlide = slick.slickCurrentSlide() + 1;
    slidesCount = slick.slideCount;
    sliderCounter.innerHTML = '<p class="slider-current">' + currentSlide + '</p>' + '<p class="slider-slash">' + '/' + '</p>' + '<p class="slider-count">' + slidesCount + '</p>'
  };

  $slider.on('init', function(event, slick) {
    $slider.append(sliderCounter);
    updateSliderCounter(slick);
  });

  $slider.on('afterChange', function(event, slick, currentSlide) {
    updateSliderCounter(slick, currentSlide);
  });

  $slider.slick({
    fade: true,
  });
}
