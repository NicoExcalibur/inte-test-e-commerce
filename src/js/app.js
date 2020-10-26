import '../scss/main.scss';

//Sliders params
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
          slidesToShow: 1,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 6
        }
      }
    ]
  });
  
  $('.aside-slider').slick({
    arrows: true,
  });

  $('.aside-slider-large').slick({
    dots: true,
    arrows: true,
    infinite: false,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 4,
    adaptativeHeight: true,
    adaptativeWidth: true
  });

});

//Change state by clicking on language select
$('.list-inline-item').click(function() {
  $('.list-inline').children(".list-inline-item").toggleClass(" active");
});


//Change state by clicking on size's country select
$('.infos-size-country-item').click(function() {
  $('.infos-size-country-item').removeClass('active');

  if($(this).hasClass('infos-size-country-item'))
  {
    $(this).addClass('active');
  }else{
    $(this).closest('infos-size-country-item').addClass('active');
  }
});

//Change state by clicking on size item
$('.infos-size-list-item').click(function() {
  $('.infos-size-list-item').removeClass('bordered');

  if($(this).hasClass('infos-size-list-item'))
  {
    $(this).addClass('bordered');
  }else{
    $(this).closest('infos-size-list-item').addClass('bordered');
  }
});

