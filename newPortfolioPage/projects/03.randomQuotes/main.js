const quotes = [
  "I'm on a whiskey diet. I've lost three days already.",
  "I used to play piano by ear, but now I use my hands.",
  "The early bird might get the worm, but the second mouse gets the cheese.",
  "I'm writing a book. I've got the page numbers done.",
  "Behind every great man, there is a woman rolling her eyes.",
  "Why do they call it rush hour when nothing moves?",
  "I'm not lazy, I'm on energy-saving mode.",
  "I told my wife she should embrace her mistakes. She gave me a hug.",
  "I'm not clumsy, I'm just on a first-name basis with the floor.",
  "I'm not arguing, I'm just explaining why I'm right.",
];

const authors = [
  "Tommy Cooper",
  "Steven Wright",
  "Mark Twain",
  "Steven Wright",
  "Jim Carrey",
  "Robin Williams",
  "Dorothy Parker",
  "Tina Fey",
  "Dave Barry",
  "Terry Pratchett",
];

const years = [1987, 1995, 2003, 2010, 1969, 1982, 1998, 2006, 1974, 2019];

const quoteElement = document.querySelector(".quote");
const authorElement = document.querySelector(".author");
const yearElement = document.querySelector(".year");
const changeQuote = document.getElementById("change-quote");

changeQuote.addEventListener("click", getQuote);

function getQuote() {
  let getIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.innerText = quotes[getIndex];
  authorElement.innerText = authors[getIndex];
  yearElement.innerText = years[getIndex];
}

getQuote();
