import '../scss/main.scss';

$(function() {
  //function to activate/deactivate slider
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
    ]
  });
  
  $('.aside-slider').slick({
    centerMode: true,
    arrows: true,
    //param to customize arrows
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });

});