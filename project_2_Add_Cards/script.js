const h1 = document.querySelector("h1");
function sayHi() {
  console.log("Hiiiii");
}

function secondSayHi() {
  console.log("Second Hi");
}

// h1.onclick = sayHi
// h1.onclick = secondSayHi

// h1.addEventListener('click', sayHi)
// h1.addEventListener('click', secondSayHi)

const card = document.querySelector(".card");
const container = document.querySelector(".container");

let count = 1;
card.addEventListener("click", () => {
  const newCard = document.createElement("div");
  // const newCard = card.cloneNode();
  // newCard.classList.remove("add-card");
  newCard.classList.add("card");
  newCard.innerText = count++;
  container.append(newCard);
});
