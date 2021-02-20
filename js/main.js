"use strict";

const form = document.querySelector(".form");
const firstName = document.querySelector(".js-firstName");
const lastName = document.querySelector(".js-lastName");
const email = document.querySelector(".js-email");
const password = document.querySelector(".js-password");

// Checking email validity
function isEmail(email) {
  return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
    email
  );
}

// Error message
function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const errorMessage = formControl.querySelector(".js-error");
  formControl.classList.remove("success");
  formControl.classList.add("error");
  errorMessage.innerText = message;
}

// Success message
function setSuccessFor(input) {
  const formControl = input.parentElement;
  formControl.classList.remove("error");
  formControl.classList.add("success");
  const errorMessage = formControl.querySelector(".js-error");
  errorMessage.innerText = "";
}

// checking Inputs
function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  // for firstName
  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be empty!");
  } else {
    setSuccessFor(firstName);
  }

  // for lastName
  if (lastNameValue === "") {
    setErrorFor(lastName, "Last Name cannot be empty!");
  } else {
    setSuccessFor(lastName);
  }

  // for Email
  if (emailValue === "") {
    setErrorFor(email, "Email cannot be empty!");
  } else if (!isEmail(emailValue)) {
    setErrorFor(email, "Email Is not valid!");
  } else {
    setSuccessFor(email);
  }

  // for Password
  if (passwordValue === "") {
    setErrorFor(password, "Password cannot be empty!");
  } else {
    setSuccessFor(password);
  }

  // Adding successful message at the end
  if (
    firstName.parentElement.classList.contains("success") &&
    lastName.parentElement.classList.contains("success") &&
    email.parentElement.classList.contains("success") &&
    password.parentElement.classList.contains("success")
  ) {
    firstName.value = lastName.value = email.value = password.value = "";
    const endMessage = password.parentElement.querySelector(".js-error");
    endMessage.innerText = "Your details are submitted successfully";
    endMessage.style.color = "hsl(154, 59%, 51%)";
  }
}

// Event handlers
form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
