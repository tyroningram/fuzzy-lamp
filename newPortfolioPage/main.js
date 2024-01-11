// To Top Scroll Button
const toTop = document.querySelector(".to-top");

window.addEventListener("scroll", function () {
  toTop.classList.toggle("active", window.scrollY > 70);
});

//Popup Controll

const popup = document.querySelector(".popup");
const openPopup = document.querySelector(".open-popup");
const closePopup = document.querySelector(".close-popup");

openPopup.addEventListener("click", () => {
  popup.showModal();
});

closePopup.addEventListener("click", () => {
  popup.close();
});
