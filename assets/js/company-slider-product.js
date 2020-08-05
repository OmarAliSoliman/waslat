$(document).ready(function () {
  
  $('#company-slider').slick({
    infinite: false,
    speed: 300,
    slidesToShow: 8,
    slidesToScroll: 1,
    centerMode: false,
    asNavFor: '#product-slider',
    // fade: true,
    autoplay: false,
    arrows: true,
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 3,
        }
      },
      {
        breakpoint: 800,
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

  $('#product-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#company-slider',
    dots: false,
    fade: true,
    centerMode: true,
    autoplay: false,
    infinite: true,
  });


  $('#product-slider-1').slick({
    slidesToShow: 2,
  });

});