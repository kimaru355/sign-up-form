function validate() {
  let firstName = document.querySelector("#first_name").value;
  let lastName = document.querySelector("#last_name").value;
  let email = document.querySelector("#email").value;
  let phoneNumber = document.querySelector("#number").value;
  let password = document.querySelector("#password").value;
  let confirmPassword = document.querySelector("#confirm_password").value;
  let error = document.querySelector("#error");
  const emailFormat = /^[a-zA-Z0-9]+@[a-zA-Z0-9]+\.[a-zA-Z0-9]+$/;
  const phoneFormat = /^[\+]?[0-9]{10,12}$/;
  const passwordFormat = /^\S{8,}$/;
  error.textContent = "";
  if (firstName === "") {
    error.textContent += "Enter First Name. ";
    return;
  }
  if (!email.match(emailFormat)) {
    error.textContent += "Wrong Email format. ";
    return;
  }
  if (!phoneNumber.match(phoneFormat)) {
    error.textContent += "Phone number not valid. ";
    return;
  }
  if (password === "" && confirmPassword === "") {
    error.textContent += "Enter password. ";
    return;
  }
  if (!password.match(passwordFormat)) {
    error.textContent += "Password should be at 8 characters. ";
    return;
  }
  if (password !== confirmPassword) {
    error.textContent += "Passwords do not match. ";
    return;
  }
  if (error.textContent === "") {
    error.textContent += "All details are good. ";
    return;
  }
}
