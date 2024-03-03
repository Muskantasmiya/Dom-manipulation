/*Deliverables:

1. Use DOM Manipulation to add another input element inside form, before the button. This input element will take the description of the fruit.

2. Use DOM Manipulation to show the fruit description (in italics) on screen alongwith the fruit name. This description should be shown in the next line (HINT: To show description on next line you can make use of the paragraph tag).

3. Now, create a filter that shows only those fruits whose either name or description or both matches the entered text.
Note: The input element that you will create using DOM manipulation to collect the description of fruit, must be given an id “description”.

If you are getting any errors try debugging the error, after all no one becomes a developer without making mistakes and then debugging. Watch this video to understand the different ways of debugging.

Push the code to GitHub.*/

//1
const form = document.querySelector("form");
const input = document.createElement("input");
input.type = "text";
input.name = "fruit-description";
input.id = "description";
input.placeholder = "description...";
form.insertBefore(input, form.lastElementChild);

//2
const li = document.getElementsByClassName("fruit");

const fruitDesc = [
  "promotes muscle function",
  "helps in lower cholesterol",
  "helps body make collagen",
  "prevents cancer",
];

for (let i = 0; i < li.length; i++) {
  const p = document.createElement("p");
  p.id = "fruit-desc";
  p.innerText = fruitDesc[i];
  p.style.fontStyle = "italic";
  li[i].insertBefore(p, li[i].lastElementChild);
}

//3
function search() {
  const filter = document.getElementById("filter").value.toUpperCase();
  for (let i = 0; i < li.length; i++) {
    const fruitItem = li[i].textContent.toUpperCase();
    if (fruitItem.indexOf(filter) == -1) {
      li[i].style.display = "none";
    } else {
      li[i].style.display = "";
    }
  }
}
//OR we can do the 3rd question by below method too----
/*
const filter = document.getElementById("filter");
filter.addEventListener("keyup", function (e) {
  const textEnteredByUser = e.target.value.toLowerCase();

  for (let i = 0; i < li.length; i++) {
    const fruitItem = li[i].textContent.toLowerCase();
    if (fruitItem.indexOf(textEnteredByUser) == -1) {
      li[i].style.display = "none";
    } else li[i].style.display = "";
  }
});
*/
