$(function(){
    $('.review-item').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        centerMode: true,
        centerPadding: '0px',
      });

      $('.counter').counterUp({
        delay: 10,
        time: 1500
    });
})