"use strict";
document
  .querySelector(".login-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let email = document.querySelector('input[name="email"]').value.trim();
    let password = document
      .querySelector('input[name="password"]')
      .value.trim();

    if (email === "" || password === "") {
      alert("All form fields must be filled in");
    } else {
      let formData = {
        email: email,
        password: password,
      };

      console.log(formData);
      this.reset();
    }
  });
