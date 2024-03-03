/*Deliverables:

1. In each "li" after the delete button add an edit button with class 'edit-btn'. Once you do this the output on the screen will look like as the goal image.
2. Now, implement the add and delete functionality just the way it is done in the video. There is only one difference that now the new 'li' element that you will create will have two buttons (delete and edit) instead of one button.
Note:
You have to just add the edit button. You do not have to implement the edit functionality.
Do not touch the html file.
To listen for form submission event use addEventListener.

Push the code to GitHub.
*/

const form = document.querySelector("form");
const ul = document.querySelector(".fruits");
//add functionality
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //grabing the input element
  const fruitToAdd = document.getElementById("fruit-to-add");

  //creating li
  const newLi = document.createElement("li");
  newLi.innerText = fruitToAdd.value;
  newLi.classList.add("fruit");

  //create delete button
  const delBtn = document.createElement("button");
  delBtn.classList.add("delete-btn");
  delBtn.innerText = "x";
  newLi.appendChild(delBtn);

  //create edit button
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Edit";
  newLi.appendChild(editBtn);

  ul.appendChild(newLi);

  //or we can use the below method directly
  // newLi.innerHTML = fruitToAdd.value + '<button class="delete-btn">x</button>'+'<button class="edit-btn">Edit</button>';
});

//delete functionality
ul.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete-btn")) {
    ul.removeChild(e.target.parentElement);
  }
});

//create Edit button for existing li element
const liItems = document.getElementsByClassName("fruit");
for (let i = 0; i < liItems.length; i++) {
  const editBtn = document.createElement("button");
  editBtn.classList.add("edit-btn");
  editBtn.innerText = "Edit";
  liItems[i].appendChild(editBtn);
}
