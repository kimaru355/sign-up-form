function validate() {
  firstName = document.querySelector("#first_name").value;
  lastName = document.querySelector("#last_name").value;
  email = document.querySelector("#email").value;
  password = document.querySelector("#password").value;
  confirmPassword = document.querySelector("#confirm_password").value;
  let emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  if (email.match(emailFormat)) {
    alert("All Details are good");
  } else {
    alert("Confirm email");
  }
}
