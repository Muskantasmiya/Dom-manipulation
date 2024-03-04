/*Deliverable:

1. Implement the code as shown in the goal image
a)use id of 'main-heading' query and align to the right corner.
b) select the ul element by its class,set the backgroundcolor to gray, change the liststyletype,borderRadius,padding,margin n width
2. Use id as query to select the basket heading and set its color to brown., left margin should be 30px;

3. Change the background color of even fruit items to brown and change their text color to white.

Note: Use only querySelector and querySelectorAll to select DOM elements, and not use any other methods.

Final output should be as the goal image:*/

const heading = document.querySelector("#main-heading");
heading.style.textAlign = "right";
heading.style.margin = "20px";

const basketHeading = document.querySelector("#basket-heading");
basketHeading.style.color = "brown";
basketHeading.style.marginLeft = "30px";

const fruits = document.querySelector(".fruits");
fruits.style.backgroundColor = "gray";
fruits.style.listStyleType = "none";
fruits.style.borderRadius = "5px";
fruits.style.padding = "30px";
fruits.style.margin = "30px";
fruits.style.width = "50%";

const fruitItems = document.querySelectorAll(".fruit");
for (let i = 0; i < fruitItems.length; i++) {
  fruitItems[i].style.padding = "10px";
  fruitItems[i].style.margin = "10px";
  fruits.style.borderRadius = "5px";
  fruits.style.fontFamily = "Times New Roman";
}

const evenFruit = document.querySelectorAll(".fruit:nth-child(even)");
for (let i = 0; i < evenFruit.length; i++) {
  evenFruit[i].style.backgroundColor = "brown";
  evenFruit[i].style.color = "white";
}
const oddFruit = document.querySelectorAll(".fruit:nth-child(odd)");
for (let i = 0; i < oddFruit.length; i++) {
  oddFruit[i].style.backgroundColor = "lightgrey";
}
