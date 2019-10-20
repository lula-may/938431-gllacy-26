var basket = document.querySelector(".user-navigation .basket-not-empty");
var popupBasket = document.querySelector(".modal-basket");

basket.addEventListener("mouseenter", function(evt) {
  evt.preventDefault();
  popupBasket.classList.toggle("visually-hidden");
});

popupBasket.addEventListener("mouseleave", function(evt) {
  evt.preventDefault();
  popupBasket.classList.toggle("visually-hidden");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if ( !popupBasket.classList.contains("visually-hidden")) {
      evt.preventDefault();
      popupBasket.classList.add("visually-hidden");
    }
  }
});
