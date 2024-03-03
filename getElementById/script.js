/*Deliverable:

1. Change the main heading 'Fruit Shop' to 'Fruit World'

2. Change the font color of 'Fruit World' from black to orange

3. Change background color of div with id = "header" to green color

4. Add a bottom border of orange color to div with id = "header"

5. Change the font color of 'Fruits In Basket' from black to green

6. Introduce a paragraph element with text "Please visit us again" inside the div with id = "thanks"

Final output is as the goal image:*/

//1
const title = document.getElementById("main-heading");
title.innerText = "Fruit World";

//2
title.style.color = "orange";

//3 //4
const div = document.getElementById("header");
div.style.backgroundColor = "green";
div.style.borderBottom = "3px solid orange";

//5
let basketHeading = document.getElementById("basket-heading");
basketHeading.style.color = "green";

//6
const p = document.createElement("p");
p.innerText = "Please visit us again";

const div2 = document.getElementById("thanks");

div2.appendChild(p);
