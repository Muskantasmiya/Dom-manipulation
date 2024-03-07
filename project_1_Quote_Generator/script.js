//variables

let btn = document.querySelector("#new-quote");
let quote = document.querySelector(".quote");

const quotes = [
  {
    quote:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    quote: "Do one thing every day that scares you.",
  },
  {
    quote: "No one will reap except what they sow.",
  },
  {
    quote:
      "Before going to sleep every night, forgive everyone and sleep with a clean heart.",
  },
  {
    quote:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
  {
    quote:
      "In the end, it's not the years in your life that count. It's the life in your years.",
  },
  {
    quote: "Life is really simple, but we insist on making it complicated.",
  },
  {
    quote:
      "If you change the way you look at things, the things you look at change.",
  },
  {
    quote: "We become what we think about most of the time.",
  },
  {
    quote: "Silence is golden when you can't think of a good answer.",
  },
  {
    quote:
      "It isn't the mountains ahead that wear you down. It's the pebble in your shoe.",
  },
  {
    quote: "Don't count the days. Make the days count.",
  },
  {
    quote:
      "The strong is not the one who is physically powerful, but indeed, the one who controls himself when angry.",
  },
  {
    quote: "A kind word is a form of charity.",
  },
];

btn.addEventListener("click", function (e) {
  let random = Math.floor(Math.random() * quotes.length);

  quote.innerHTML = '"' + quotes[random].quote + '"';
});
