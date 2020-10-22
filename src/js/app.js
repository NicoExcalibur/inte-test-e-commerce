import '../scss/main.scss';

$(function() {
  var viewportWidth = jQuery(window).width();

  if (viewportWidth > 1024) {
    $('.main-slider').slick('unslick');
  } else 
  $('.main-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    accessibility: true,
    variableWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: "unslick"
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  $('.aside-slider').slick({
    centerMode: true,
    arrows: true,
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });

});
	