const form = document.getElementById("form");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const nameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const phoneInput = document.getElementById("phone").value;

  const obj = {
    username: nameInput,
    email: emailInput,
    phone: phoneInput,
  };

  let myArray = JSON.parse(localStorage.getItem("User Details")) || [];
  myArray.push(obj);

  localStorage.setItem("User Details", JSON.stringify(myArray));
  displayDetails();
});

const ul = document.createElement("ul");
const body = document.querySelector("body");
body.appendChild(ul);
function displayDetails() {
  const li = document.createElement("li");
  li.textContent = 
  `;

}
