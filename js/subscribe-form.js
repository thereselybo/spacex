const form = document.querySelector("#subscribeForm");

form.addEventListener("submit", validateForm);

function validateForm(event) {
  event.preventDefault();

  const email = document.querySelector("#email");
  const noEmailError = document.querySelector("#noEmailError");
  const invalidEmailError = document.querySelector("#invalidEmailError");
  const emailValue = email.value;

  if (checkLength(emailValue)) {
    noEmailError.style.display = "none";
    if (validateEmail(emailValue)) {
      invalidEmailError.style.display = "none";
    } else {
      invalidEmailError.style.display = "block";
    }
  } else {
    noEmailError.style.display = "block";
  }

  const newsletterValidated = document.querySelector("#newsletterValidated");

  if (
    noEmailError.style.display === "none" &&
    invalidEmailError.style.display === "none"
  ) {
    newsletterValidated.style.display = "block";
  } else {
    newsletterValidated.style.display = "none";
  }
}

function checkLength(value) {
  const trimmed = value.trim();

  return trimmed;
}

function validateEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  return regEx.test(email);
}
