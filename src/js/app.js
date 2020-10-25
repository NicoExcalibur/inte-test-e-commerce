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
    prevArrow: '<div class="slick-prev"><img src="images/svg/nav-arrow-left.svg" /></div>',
    nextArrow: '<div class="slick-next"><img src="images/svg/nav-arrow-right.svg" /></div>',
  });

  $('.aside-slider-large').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
    adaptativeWidth: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 10,
          slidesToScroll: 10,
          infinite: true,
          dots: true,
          arrows: true,
          adaptativeHeight: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 5,
          arrows: true,
          adaptativeHeight: true,
        }
      }
    ]
  });

});

//change state by clicking on language select
$('.list-inline-item').click(function() {
  $('.list-inline').children(".list-inline-item").toggleClass(" active");
});


//change state by clicking on size's country select
$('.infos-size-country-item').click(function() {
  $('.infos-size-country-item').removeClass('active');

  if($(this).hasClass('infos-size-country-item'))
  {
    $(this).addClass('active');
  }else{
    $(this).closest('infos-size-country-item').addClass('active');
  }
});

//change state by clicking on size item
$('.infos-size-list-item').click(function() {
  $('.infos-size-list-item').removeClass('bordered');

  if($(this).hasClass('infos-size-list-item'))
  {
    $(this).addClass('bordered');
  }else{
    $(this).closest('infos-size-list-item').addClass('bordered');
  }
});

