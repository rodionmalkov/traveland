const burgerBtn = document.querySelector(".burger");
const navList = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav--active");
});

const swiper = new Swiper(".swiper", {
  slidesPerView: 5,
  slidesPerGroup: 4,
  loopFillGroupWithBlank: true,
  mousewheel: true,

  navigation: {
    nextEl: ".slider-control__next",
    prevEl: ".slider-control__prev",
  },

  pagination: {
    el: ".slider-control__pagination",
    type: "bullets",
    clickable: true,
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
    },

    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      slidesPerGroup: 1,
    },

    1000: {
      slidesPerView: 3,
      spaceBetween: 30,
      slidesPerGroup: 4,
    },

    1200: {
      slidesPerView: 4,
      spaceBetween: 50,
      slidesPerGroup: 4,
    },

    1600: {
      slidesPerView: 5,
      spaceBetween: 74,
      slidesPerGroup: 4,
    },
  },
});
