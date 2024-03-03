/*Deliverables:

1. Inside the first Div, after the main heading add a sub-heading (h3 tag) "Buy high quality organic fruits online".

2. Make the sub-heading text italic.

2. Inside the second Div, before the unordered list add a paragraph tag showing "Total fruits: 4".

3. On this paragraph tag set an id of "fruits-total".*/

const subhead = document.createElement("h3");
subhead.innerText = "Buy high quality organic fruits online";
subhead.style.fontStyle = "italic";

const divs = document.getElementsByTagName("div");
divs[0].appendChild(subhead);

const p = document.createElement("p");
p.innerText = "Total fruits: 4";
p.id = "fruits-total"; 

const secondDiv = document.getElementsByTagName("div")[1];
const fruitsList = document.querySelector(".fruits");
secondDiv.insertBefore(p, fruitsList);
//OR
// const ul = divs[1].querySelector("ul");
// divs[1].insertBefore(p, ul);
