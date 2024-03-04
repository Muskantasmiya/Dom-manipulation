/*Deliverable:

1. Change the color of 5th "li" tag (one with "Mango" written inside it) to blue.

2. Make all the "li" tags italic.



Final output should be as goal image*/

//1
const li = document.getElementsByTagName("li");
li[4].style.color = "blue";

for (let i = 0; i < li.length; i++) {
  li[i].style.fontStyle = "italic";
}
