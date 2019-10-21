var openModal = document.querySelector(".button-feedback-open");
var overlay = document.querySelector(".feedback-overlay");
var form = document.querySelector(".modal-feedback");
var close = form.querySelector(".close-button");
var name = form.querySelector("[name=user-name]");
var email = form.querySelector("[name=user-email]");

openModal.addEventListener("click", function(evt) {
  evt.preventDefault();
  overlay.classList.toggle("visually-hidden");
  form.classList.toggle("visually-hidden");
  name.focus();
});

form.addEventListener("submit", function(evt) {
  if ( !name.value || !email.value) {
    evt.preventDefault();
    form.classList.remove("modal-error");
    form.offsetWidth = form.offsetWidth;
    form.classList.add("modal-error");
  }
});

close.addEventListener("click", function(evt) {
  evt.preventDefault();
  form.classList.toggle("visually-hidden");
  form.classList.remove("modal-error");
  overlay.classList.toggle("visually-hidden");
});

window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if ( !form.classList.contains("visually-hidden") ||
         !overlay.classList.contains("visually-hidden")) {
      evt.preventDefault();
      form.classList.add("visually-hidden");
      form.classList.remove("modal-error");
      overlay.classList.add("visually-hidden");
    }
  }
});
