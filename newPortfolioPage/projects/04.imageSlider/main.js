const container = document.querySelector(".container");
const carousel = document.querySelector(".carousel");
const arrowBtns = document.querySelectorAll(".container i");
const getFirstCardWidth = carousel.querySelector(".card").offsetWidth;
const carouselChildren = [...carousel.children];

let isDragging = false,
  startX,
  startScrollLeft,
  timeOutId;
let cardsPerView = Math.round(carousel.offsetWidth / getFirstCardWidth);

carouselChildren
  .slice(-cardsPerView)
  .reverse()
  .forEach((card) => {
    carousel.insertAdjacentHTML("afterbegin", card.outerHTML);
  });

carouselChildren.slice(0, cardsPerView).forEach((card) => {
  carousel.insertAdjacentHTML("beforeend", card.outerHTML);
});

carousel.addEventListener("mousedown", (e) => {
  isDragging = true;
  carousel.classList.add("dragging");
  startX = e.pageX;
  startScrollLeft = carousel.scrollLeft;
});

carousel.addEventListener("mousemove", (e) => {
  if (!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX - startX);
});

carousel.addEventListener("mouseup", (e) => {
  isDragging = false;
  carousel.classList.remove("dragging");
});

arrowBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    carousel.scrollLeft +=
      btn.id === "left" ? -getFirstCardWidth : getFirstCardWidth;
  });
});
carousel.addEventListener("scroll", () => {
  if (carousel.scrollLeft === 0) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.scrollWidth - 2 * carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  } else if (
    Math.ceil(carousel.scrollLeft) ===
    carousel.scrollWidth - carousel.offsetWidth
  ) {
    carousel.classList.add("no-transition");
    carousel.scrollLeft = carousel.offsetWidth;
    carousel.classList.remove("no-transition");
  }

  clearTimeout(timeOutId);
  if (!container.matches(":hover")) autoPlay();
});

const autoPlay = () => {
  if (window.innerWidth < 800) return;
  timeOutId = setTimeout(
    () => (carousel.scrollLeft += getFirstCardWidth),
    2500
  );
};

autoPlay();

container.addEventListener("mouseenter", () => clearTimeout(timeOutId));
container.addEventListener("mouseleave", autoPlay);
