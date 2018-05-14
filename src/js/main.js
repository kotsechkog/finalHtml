const App = {

  

  init() {
    this.handlers();
  },

  handlers() {
    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
    var swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 2,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });
    var swiper2 = new Swiper('.swiper-container2', {
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });
    var swiper3 = new Swiper('.swiper-container3', {
      slidesPerView: 2,
      spaceBetween: 30,
      breakpoints: {
    // when window width is <= 320px
    320: {
      slidesPerView: 1,
      spaceBetween: 10
    }
  },
      freeMode: true,
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
    });
  },

  onClick(el) {
    
  }
};

$(document).ready(() => {
 
  App.init();
});

