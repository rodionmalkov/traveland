import alltrips from "../sample/alltrips.js";
import makeElement from "../functions/make-element.js";

const makeSwiperItem = (card) => {
  const swiperItem = makeElement("div", "swiper-slide");

  const swiperCard = makeElement("div", "location-card");
  swiperItem.appendChild(swiperCard);

  const cardPhotoWrapper = makeElement("div", "location-card__photo");
  swiperCard.appendChild(cardPhotoWrapper);

  const cardPhoto = makeElement("img", "location-card__img");
  cardPhoto.src = card.photo;
  cardPhoto.alt = card.location;
  cardPhotoWrapper.appendChild(cardPhoto);

  const cardDescWrapper = makeElement("div", "location-card__desc");
  swiperCard.appendChild(cardDescWrapper);

  const cardInfo = makeElement("div", "location-card__info");
  cardDescWrapper.appendChild(cardInfo);

  const cardName = makeElement("p", "location-card__name");
  cardInfo.appendChild(cardName);

  const cardContainer = makeElement("div", "location-card__container");
  cardInfo.appendChild(cardContainer);

  const cardContainerLeft = makeElement("div", "location-card__left");
  cardContainer.appendChild(cardContainerLeft);

  const cardIconLoc = makeElement("div", "location-card__icon-loc");
  cardContainerLeft.appendChild(cardIconLoc);

  const cardCountry = makeElement("p", "location-card__country");
  cardCountry.textContent = card.country;
  cardContainerLeft.appendChild(cardCountry);

  const cardContainerRight = makeElement("div", "location-card__right");
  cardContainer.appendChild(cardContainerRight);

  const cardIconStar = makeElement("div", "location-card__icon-star");
  cardContainerRight.appendChild(cardIconStar);

  const cardRating = makeElement("p", "location-card__rating");
  cardRating.textContent = card.rating;
  cardContainerRight.appendChild(cardRating);

  const cardPeriod = makeElement("p", "location-card__period");
  cardPeriod.textContent = card.period;
  cardDescWrapper.appendChild(cardPeriod);

  const cardPrice = makeElement("p", "location-card__price");
  cardPrice.textContent = `$${card.price}/`;
  cardDescWrapper.appendChild(cardPrice);

  const cardPerson = makeElement("span", "location-card__person");
  cardPerson.textContent = "person";
  cardPrice.appendChild(cardPerson);

  return swiperItem;
};

makeSwiperItem(alltrips);

const swiperList = document.querySelector(".swiper-wrapper");

for (let i = 0; i < alltrips.length; i++) {
  let cardItem = makeSwiperItem(alltrips[i]);
  swiperList.appendChild(cardItem);
}
