import socialLinks from "../sample/social.js";
import makeElement from "../functions/make-element.js";

const makeSocialItem = (social) => {
  const listItem = makeElement("li", "social__item");

  const listLink = makeElement("a", "social__link");
  listLink.href = social.link;
  listItem.appendChild(listLink);

  const linkLogo = makeElement("img");
  linkLogo.src = social.icon;
  linkLogo.alt = social.site;
  listLink.appendChild(linkLogo);

  return listItem;
};

makeSocialItem(socialLinks);

const socialList = document.querySelector(".social__list");

for (let i = 0; i < socialLinks.length; i++) {
  let cardItem = makeSocialItem(socialLinks[i]);
  socialList.appendChild(cardItem);
  console.log(socialLinks[i]);
}
