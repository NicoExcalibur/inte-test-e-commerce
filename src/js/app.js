import '../scss/main.scss';

$(function() {

  $('.main-slider').slick({
    dots: true,
    arrows: false,
    mobileFirst: true,
    accessibility: true,
    variableWidth: true,
    responsive: [
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
    arrows: true,
    //param to customize arrows
    prevArrow: '<div class="slick-prev"></div>',
    nextArrow: '<div class="slick-next"></div>',
  });

});

//change state by clicking on language select
$('.list-inline-item').click(function() {
  $('.list-inline').children(".list-inline-item").toggleClass(" active");
});