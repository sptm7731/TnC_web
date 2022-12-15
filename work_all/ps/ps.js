
var swiper = new Swiper(".mySwiper", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


$(window).load(function(){
    $(".twentytwenty-container[data-orientation!='vertical']").twentytwenty({default_offset_pct: 0.45});
    $(".twentytwenty-container[data-orientation='vertical']").twentytwenty({default_offset_pct: 0.3, orientation: 'vertical'});
  });
  