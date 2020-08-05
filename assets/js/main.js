$(document).ready(function () {

  AOS.init();

  if ($('.ads-slider').length) {
    $('.ads-slider').slick({
      dots: true,
      infinite: false,
      speed: 300,
      slidesToShow: 4,
      arrows: false,
      slidesToScroll: 1,
      autoplay: false,
      loop: true,
      infinite: true,
      responsive: [{
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 800,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 524,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    });
  }

  if($('.show-add-section').length){
    $('.slider-top').slick({
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: false,
      fade: true,
      dots: false,
      asNavFor: '.slider-bottom'
    });
    $('.slider-bottom').slick({
      slidesToShow: 6,
      slidesToScroll: 1,
      asNavFor: '.slider-top',
      dots: false,
      arrows: false,
      centerMode: false,
      focusOnSelect: true
    });
  }

});

var btnClose = document.querySelector('#btnclose');
var searchBox = document.querySelector('.search-box');
var open = true;
btnClose.addEventListener('click', ()=>{
  if(open){
    searchBox.style.display = "none";
    searchBox.style.transition = "all 1s ease";
    btnClose.innerHTML = "<span> <i class='fas fa-chevron-down'></i> بحث متقدم</span>"
  }else{
    searchBox.style.display = "block";
    searchBox.style.transition = "all 1s ease";
    btnClose.innerHTML = "<span> <i class='fas fa-chevron-up'></i> بحث متقدم</span>"
  }
  open= !open;
})