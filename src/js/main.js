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
      slidesPerView: 3,
      spaceBetween: 30,
      freeMode: true,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
    });
  },

  onClick(el) {
    
  }
};

$(document).ready(() => {
 
  App.init();
});

