let form = document.querySelector("#form");
let submit = document.querySelector("#btn");
let body = document.querySelector("#body");

submit.addEventListener("click", function (e) {
  e.preventDefault();
  const usernameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const phoneInput = document.getElementById("phone").value;

  const obj = {
    username: usernameInput,
    email: emailInput,
    phone: phoneInput,
  };

  localStorage.setItem(obj.email, JSON.stringify(obj));

  displayData(obj);
  form.reset();
});

const ul = document.createElement("ul");
body.insertBefore(ul, body.childNodes[5]);

function displayData(obj) {
  const li = document.createElement("li");
  const delbtn = document.createElement("button");
  delbtn.textContent = "Delete";
  delbtn.classList.add("delete");
  delbtn.style.marginLeft = "10px";
  delbtn.addEventListener("click", function () {
    ul.removeChild(li);
    localStorage.removeItem(obj.email);
  });
  const editbtn = document.createElement("button");
  editbtn.textContent = "Edit";
  editbtn.classList.add("edit");
  editbtn.addEventListener("click", function (e) {
    document.getElementById("username").value = obj.username;
    document.getElementById("email").value = obj.email;
    document.getElementById("phone").value = obj.phone;
    ul.removeChild(li);
    localStorage.removeItem(obj.email);
  });

  li.textContent = ` ${obj.username} - ${obj.email} - ${obj.phone}`;
  li.appendChild(delbtn);
  li.appendChild(editbtn);
  ul.appendChild(li);
}
