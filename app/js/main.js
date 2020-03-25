

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

const openClass = 'open';

$('.header-button').on('click', function(){
  $('.sidebar-right').addClass(openClass);

  $('body').on('click', function(e) {
    $('.sidebar-right').removeClass(openClass);
  });
});

$('.header-button').on('click', function(e) {
	e.stopPropagation();
	return 0;
});
$('.sidebar-right').on('click', function(e) {
	e.stopPropagation();
	return 0;
});






// ==== Slider counter 1 ====

var $slider = $('.slider');

if ($slider.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  let updateSliderCounter = function(slick, currentIndex) {
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
    prevArrow: '.arrow-back',
    nextArrow: '.arrow-forward',
  });
}

$('.main-servise__slider').slick({
  slidesToShow: 3,
  prevArrow: '.arrow-back.serv',
  nextArrow: '.arrow-forward.serv',
})





// ==== Slider counter 2 ====

var $slider = $('.cart__slider');

if ($slider.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  let updateSliderCounter = function(slick, currentIndex) {
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
    prevArrow: '.arrow-back.cart',
    nextArrow: '.arrow-forward.cart',
  });
}





// ==== Slider counter 3 ====

var $slider = $('.cart__slider2');

if ($slider.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  let updateSliderCounter = function(slick, currentIndex) {
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
    prevArrow: '.arrow-back.cart2',
    nextArrow: '.arrow-forward.cart2',
  });
}





// ==== Slider counter 4 ====

var $slider = $('.portfolio__slider2');

if ($slider.length) {
  let currentSlide;
  let slidesCount;
  let sliderCounter = document.createElement('div');
  sliderCounter.classList.add('slider__counter');
  
  let updateSliderCounter = function(slick, currentIndex) {
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
}


// ======== Sliders =========


$('.portfolio__slider1').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.portfolio__slider2'
});
$('.portfolio__slider2').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.portfolio__slider1',
  // dots: true,
  // centerMode: true,
  focusOnSelect: true,
  prevArrow: '.arrow-back.portfolio',
  nextArrow: '.arrow-forward.portfolio',
  infinite: false,
});





// ==== Переключение экранов ====


const slider = $('.index_page-container');
const carret = $('.carret');
const heightSlider = slider.height();
const countPages = 4; // считать от нуля
const loop = false; //зациклить
const animateDuration = 300;
const fullAnimate = animateDuration * countPages / 3;
const heightStep = heightSlider / countPages;
var indexPage = parseInt( $('.page.active').attr('index') );

function onScrolling() {
  $(window).on('mousewheel DOMMouseScroll MozMousePixelScroll', scrolling);
}
function offScrolling() {
  $(window).off('mousewheel DOMMouseScroll MozMousePixelScroll', scrolling);
}

function scrolling (e) {
   let delta = parseInt(e.originalEvent.wheelDelta || -e.originalEvent.detail);
    if (delta >= 0) {
      if ( (indexPage > 0 && !loop) || loop ) {
        offScrolling();
        indexPage--;
        let trueAnimate = animateDuration;
        
        if (loop && indexPage < 0) {
          indexPage = countPages;
          trueAnimate = fullAnimate;
        }
        
        $('.page.active, button.index.active').removeClass('active');
        $('.page[index="'+indexPage+'"], button.index[index="'+indexPage+'"]').addClass('active');
        let carretTop = indexPage * heightStep;
        carret.animate({'top': carretTop + 'px'}, trueAnimate, function() {
          onScrolling();
        });
      }
    } else {
      if ( (indexPage < countPages && !loop) || loop  ) {
        offScrolling();
        indexPage++;
        let trueAnimate = animateDuration;
        
        if (loop && indexPage > countPages) {
          indexPage = 0;
          trueAnimate = fullAnimate;
        }
          
        $('.page.active, button.index.active').removeClass('active');
        $('.page[index="'+indexPage+'"], button.index[index="'+indexPage+'"]').addClass('active');
        let carretTop = indexPage * heightStep;
        carret.animate({'top': carretTop + 'px'}, trueAnimate,  function() {
          onScrolling();
        });
      }
    }
  }

$(document).ready(function() {
  $(window).on('mousewheel DOMMouseScroll MozMousePixelScroll', scrolling);
});

$('button.index').on('click', function() {
  if( !$(this).is('.active') ) {
    
    offScrolling();
    let trueAnimate = animateDuration;
    let thisIndex = parseInt( $(this).attr('index') );
    
    if ( (indexPage === 0 && thisIndex === countPages) || 
        (indexPage === countPages && thisIndex === 0) || 
        ( (indexPage - thisIndex) > 1 ) ||
        ( (indexPage - thisIndex) < -1 ) ) {
      trueAnimate = fullAnimate;
    }
      
    
    indexPage = thisIndex;
    
    $('.page.active, button.index.active').removeClass('active');
    $('.page[index="'+indexPage+'"], button.index[index="'+indexPage+'"]').addClass('active');
    let carretTop = indexPage * heightStep;
    carret.animate({'top': carretTop + 'px'}, trueAnimate,  function() {
      onScrolling();
    });
  }
});



