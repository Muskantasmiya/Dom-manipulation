const form = document.getElementById("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  //Grab input element
  const nameInput = document.getElementById("uname").value;
  const emailInput = document.getElementById("uemail").value;
  const phoneInput = document.getElementById("uphone").value;

  localStorage.setItem("Username", nameInput);
  localStorage.setItem("Email", emailInput);
  localStorage.setItem("Phone", phoneInput);
});
