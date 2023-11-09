const loginForm = document.querySelector(".login-form");

    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); 

      const email = loginForm.elements.email.value;
      const password = loginForm.elements.password.value;

      if (email === "" || password === "") {
        alert("Wszystkie pola powinny być wypełnione.");
      } else {
        const formData = {
          email: email,
          password: password,
        };

        console.log("Dane z formularza:", formData);

        loginForm.reset();
      }
    });
