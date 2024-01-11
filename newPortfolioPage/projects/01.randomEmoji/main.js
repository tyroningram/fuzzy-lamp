const arr = [
  "😊",
  "🤣",
  "😂",
  "❤️",
  "😍",
  "😒",
  "👌",
  "😘",
  "💕",
  "😁",
  "👍",
  "🙌",
];
let prevNum;

const emoji = document.querySelector(".change-me");

emoji.addEventListener("click", () => {
  let randNum = Math.floor(Math.random() * arr.length);
  if (randNum === prevNum) {
    console.log(true);
    randNum = Math.floor(Math.random() * arr.length);
    emoji.innerText = arr[randNum];
    prevNum = randNum;
  } else {
    emoji.innerText = arr[randNum];
    prevNum = randNum;
  }
});
