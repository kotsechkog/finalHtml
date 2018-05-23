const App = {
  init() {
    let counterSatisfied = +($('#satisfied').text());
    
    $.fn.scrollView = function () {
       return this.each(function () {
        $('html, body').animate({
        scrollTop: $(this).offset().top
        }, 500);
       });
    };
    
    this.handlers();
  },

  handlers() {

    $('.scroll-to').click(function(e) {
      e.preventDefault();
      $('#sticky-header').scrollView();
    });

    $('#scroll-top').click(function(e) {
      e.preventDefault();
      $('#sticky-header').scrollView();
    });



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

//     ( async function getSatisfied(){
//       let randomTime = Math.random()*2000 + 500;
//       if ( counterSatisfied <= 999) {
//         setTimeout( function(){
//        counterSatisfied += 1;
//        getSatisfied();
//       }, randomTime);
//       }
   
// })();

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

  getLike(e) {
    if (e.target.className == 'icon-heart') {
      e.preventDefault();
      e.target.nextElementSibling.textContent = +(e.target.nextElementSibling.textContent) + 1;  
    }
  }
};

$(document).ready(() => {
 
  App.init();
});

