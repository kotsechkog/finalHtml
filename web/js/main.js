"use strict";var App={init:function(){this.handlers()},handlers:function(){$("div.swiper-container").click(function(e){App.getLike(e)}),$("#burger").click(function(e){e.preventDefault(),$("#burger").toggleClass("active"),$("#nav").toggleClass("active")}),$("#icon-search").click(function(){$("#search").toggleClass("active")});new Swiper(".swiper-container",{slidesPerView:"auto",spaceBetween:30,pagination:{el:".swiper-pagination",clickable:!0}}),new Swiper(".swiper-container1",{slidesPerView:2,spaceBetween:30,freeMode:!0,pagination:{el:".swiper-pagination1",clickable:!0}}),new Swiper(".swiper-container2",{navigation:{nextEl:".swiper-button-next2",prevEl:".swiper-button-prev2"}}),new Swiper(".swiper-container3",{slidesPerView:2,spaceBetween:30,breakpoints:{320:{slidesPerView:1,spaceBetween:10}},freeMode:!0,navigation:{nextEl:".swiper-button-next3",prevEl:".swiper-button-prev3"}})},getLike:function(e){"icon-heart"==e.target.className&&(e.preventDefault(),e.target.nextElementSibling.textContent=+e.target.nextElementSibling.textContent+1)}};$(document).ready(function(){App.init()});
//# sourceMappingURL=main.js.map
