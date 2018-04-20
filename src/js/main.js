const App = {

  

  init() {
    this.handlers();
  },

  handlers() {
   
  },

  onClick(el) {
    
  }
};

$(document).ready(() => {
  var swiper = new Swiper('.swiper-container', {
      slidesPerView: 'auto',
      spaceBetween: 30,
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  App.init();
});

