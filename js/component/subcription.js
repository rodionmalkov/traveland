import makeElement from "../functions/make-element.js";

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
