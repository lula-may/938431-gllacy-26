var loginButton = document.querySelector(".user-navigation .login");
var popupLogin = document.querySelector(".modal-login");
var login = popupLogin.querySelector("[name=login]");
var password = popupLogin.querySelector("[name=password]");

loginButton.addEventListener("mouseenter", function(evt) {
  evt.preventDefault();
  popupLogin.classList.toggle("visually-hidden");
  login.focus();
});

popupLogin.addEventListener("submit", function(evt) {
  if (!login.value || !password.value) {
    evt.preventDefault();
    popupLogin.classList.remove("modal-error");
    popupLogin.offsetWidth = popupLogin.offsetWidth;
    popupLogin.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if ( !popupLogin.classList.contains("visually-hidden")) {
      evt.preventDefault();
      popupLogin.classList.add("visually-hidden");
      popupLogin.classList.remove("modal-error");
    }
  }
});
