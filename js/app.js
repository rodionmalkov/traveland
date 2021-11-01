let makeElement = function (tagName, className, text) {
  let element = document.createElement(tagName);
  element.classList.add(className);
  if (text) {
    element.textContent = text;
  }
  return element;
};

// Burger

const burgerBtn = document.querySelector(".burger");
const navList = document.querySelector(".nav");

burgerBtn.addEventListener("click", () => {
  navList.classList.toggle("nav--active");
});

// Subscribed form

const subForm = document.querySelector(".sub-form");
const emailInput = subForm.querySelector(".sub-form__email");
const buttonSubForm = subForm.querySelector(".sub-form__btn");
const subFormContainer = subForm.querySelector(".sub-form__container");
const placeholderError = subForm.querySelector(".sub-form__error");

buttonSubForm.addEventListener("click", (evt) => {
  evt.preventDefault();
  if (!emailInput.value) {
    let placeholder = makeElement(
      "div",
      "sub-form__error",
      "Invalid email entered"
    );
    subFormContainer.appendChild(placeholder);
    setTimeout(function () {
      placeholder.remove();
    }, 4000);
  } else {
    let placeholder = makeElement(
      "div",
      "sub-form__subscribed",
      "Thank you, you are subscribed"
    );
    subFormContainer.appendChild(placeholder);
    setTimeout(function () {
      placeholder.remove();
    }, 4000);
  }
});

// Swiper

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
