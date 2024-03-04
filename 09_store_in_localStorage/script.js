function handleFormSubmit(event) {
  const nameInput = document.getElementById("username").value;
  const emailInput = document.getElementById("email").value;
  const phoneInput = document.getElementById("phone").value;
  const myobj = {
    username: nameInput,
    email: emailInput,
    phone: phoneInput,
  };
  localStorage.setItem("User Details", JSON.stringify(myobj));
}
