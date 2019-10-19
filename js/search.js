var search = document.querySelector(".user-navigation .search");
var popupSearch = document.querySelector(".modal-search");
var searchForm = popupSearch.querySelector(".form");

search.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupSearch.classList.toggle("visually-hidden");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if ( !popupSearch.classList.contains("visually-hidden")) {
      evt.preventDefault();
      popupSearch.classList.add("visually-hidden");
    }
  }
});
