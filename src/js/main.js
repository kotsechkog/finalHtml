const App = {
  init() {
    let counterSatisfied = +($('#satisfied').text());
    
    $.fn.scrollView = function (i) {
      if (i) {
        return this.each(function () {
        $('html, body').animate({
        scrollTop: $(this).offset().top - i
        }, 500);
       });
      } else {
        return this.each(function () {
        $('html, body').animate({
        scrollTop: $(this).offset().top
        }, 500);
       });
      }
       
    };

    
    this.handlers();
  },

  handlers() {
    $('#tohome').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#home').scrollView();
    });
    $('#toPortfolio').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#portfolio').scrollView(102);
    });
    $('#toBlog').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#blog').scrollView(102);
    });
    $('#toPages').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#pages').scrollView(102);
    });
    $('#toFeatures').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#features').scrollView(102);
    });
    $('#toMega_menu').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#mega_menu').scrollView(102);
    });
    $('#toContact').click(function(e) {
      e.preventDefault();
      App.checkBurger();
      $('#contact').scrollView();
    });


    $('.scroll-to').click(function(e) {
      e.preventDefault();
      $('#sticky-header').scrollView();
    });

    $('#scroll-top').click(function(e) {
      e.preventDefault();
      $('.start').scrollView();
    });

    $('.features').parallax({imageSrc: '../images/parallax.jpg'});

    $('div.swiper-container').click( function (e) {
      App.getLike(e);
    });


    $('#burger').click( function (e) {
      e.preventDefault();
      if ( +($(window).scrollTop()) < +($('#sticky-header').offset().top) ) {
        $('#sticky-header').scrollView();
      } 
      $('#burger').toggleClass('active');
      $('#nav').toggleClass('active');
    });



    $('#icon-search').click( function () {
      $('#search').toggleClass('active');});

    var swiper = new Swiper('.swiper-container', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
    1100: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    730: {
      slidesPerView: 1
    }
  },

      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },

    });
    var swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 4,
      spaceBetween: 30,
      freeMode: false,
      pagination: {
        el: '.swiper-pagination1',
        clickable: true,
      },
      breakpoints: {
    1300: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1100: {
      slidesPerView: 2,
      spaceBetween: 30,
    },
    600: {
      slidesPerView: 1,
    }
  }
    });
    var swiper2 = new Swiper('.swiper-container2', {
      navigation: {
        nextEl: '.swiper-button-next2',
        prevEl: '.swiper-button-prev2',
      },
    });
    var swiper3 = new Swiper('.swiper-container3', {
      slidesPerView: 3,
      spaceBetween: 30,
      breakpoints: {
    850: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    660: {
      slidesPerView: 1
    }
  },
      navigation: {
        nextEl: '.swiper-button-next3',
        prevEl: '.swiper-button-prev3',
      },
    });
  },

  getLike(e) {
    if (e.target.className == 'icon-heart') {
      e.preventDefault();
      e.target.nextElementSibling.textContent = +(e.target.nextElementSibling.textContent) + 1;  
    }
  },
  checkBurger() {
    if ($('#burger').hasClass('active')) {
         $('#burger').toggleClass('active');
        $('#nav').toggleClass('active');
      };
  }
};

$(document).ready(() => {
 
  App.init();
});

