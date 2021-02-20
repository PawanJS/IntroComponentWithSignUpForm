"use strict";

const form = document.querySelector(".form");
const errorMessage = document.querySelectorAll(".js-error");
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
  console.log(formControl);
}

// Success message
function setSuccessFor() {}

// checking Inputs
function checkInputs() {
  const firstNameValue = firstName.value.trim();
  const lastNameValue = lastName.value.trim();
  const emailValue = email.value.trim();
  const passwordValue = password.value.trim();

  if (firstNameValue === "") {
    setErrorFor(firstName, "First Name cannot be empty!");
  }
}

// Event handlers

form.addEventListener("submit", (e) => {
  e.preventDefault();
  checkInputs();
});
