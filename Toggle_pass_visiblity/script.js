const togglepasswrod = document.querySelector("#togglePassword");
const password = document.querySelector("#password");

togglepasswrod.addEventListener("click", function () {
  // change the type attribute
  const type =
    password.getAttribute("type") === "password" ? "text" : "password";
  password.setAttribute("type", type);
  console.log(type);
  this.classList.toggle("bi-eye");
});

// prevent form submit
const form = document.querySelector("form");
form.addEventListener("submit", function (event) {
  event.preventDefault();
});
