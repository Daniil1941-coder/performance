// ===== B: Login form =====
let loginForm = document.getElementById("loginForm");

if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let username = document.getElementById("username").value;
        let password = document.getElementById("password").value;
        let errorsList = document.getElementById("loginErrors");
        errorsList.innerHTML = "";

        let ok = true;

        if (username == "") {
            errorsList.innerHTML += "<li>Username is required</li>";
            ok = false;
        }

        if (password == "") {
            errorsList.innerHTML += "<li>Password is required</li>";
            ok = false;
        } else if (password.length < 6) {
            errorsList.innerHTML += "<li>Password must be at least 6 characters</li>";
            ok = false;
        }

        if (ok) {
            alert("Welcome, " + username + "!");
        }
    });
}

// ===== C: Registration form =====
let registerForm = document.getElementById("registerForm");

if (registerForm) {
    let nameInput = document.getElementById("regName");
    let emailInput = document.getElementById("regEmail");
    let phoneInput = document.getElementById("regPhone");
    let passwordInput = document.getElementById("regPassword");
    let confirmInput = document.getElementById("regConfirm");
    let cityInput = document.getElementById("regCity");

    // on blur: red border if the field is empty
    function checkEmpty(input) {
        if (input.value == "") {
            input.classList.add("invalid");
        } else {
            input.classList.remove("invalid");
        }
    }

    nameInput.addEventListener("blur", function () { checkEmpty(nameInput); });
    emailInput.addEventListener("blur", function () { checkEmpty(emailInput); });
    phoneInput.addEventListener("blur", function () { checkEmpty(phoneInput); });
    passwordInput.addEventListener("blur", function () { checkEmpty(passwordInput); });
    confirmInput.addEventListener("blur", function () { checkEmpty(confirmInput); });
    cityInput.addEventListener("blur", function () { checkEmpty(cityInput); });

    registerForm.addEventListener("submit", function (event) {
        let errors = [];

        if (nameInput.value == "") {
            errors.push("Name is required");
        }

        if (emailInput.value == "") {
            errors.push("Email is required");
        } else if (!/^\S+@\S+\.\S+$/.test(emailInput.value)) {
            errors.push("Email is not correct");
        }

        if (phoneInput.value == "") {
            errors.push("Phone is required");
        } else if (!/^\d{10}$/.test(phoneInput.value)) {
            errors.push("Phone must have 10 digits");
        }

        if (passwordInput.value == "") {
            errors.push("Password is required");
        } else if (passwordInput.value.length < 8) {
            errors.push("Password must be at least 8 characters");
        }

        if (confirmInput.value != passwordInput.value) {
            errors.push("Passwords do not match");
        }

        if (cityInput.value == "") {
            errors.push("City is required");
        }

        let errorsList = document.getElementById("registerErrors");
        errorsList.innerHTML = "";

        if (errors.length > 0) {
            event.preventDefault();
            for (let i = 0; i < errors.length; i++) {
                errorsList.innerHTML += "<li>" + errors[i] + "</li>";
            }
        } else {
            event.preventDefault();
            alert("Registration successful!");
        }
    });
}

// ===== D: Quiz =====
let quizForm = document.getElementById("quizForm");

if (quizForm) {
    let answers = ["Tashkent", "Samarkand", "Sum", "Silk Road", "Khiva"];

    quizForm.addEventListener("submit", function (event) {
        event.preventDefault();

        let score = 0;

        for (let i = 0; i < answers.length; i++) {
            let checked = document.querySelector('input[name="q' + (i + 1) + '"]:checked');
            if (checked && checked.value == answers[i]) {
                score++;
            }
        }

        let result = document.getElementById("quizResult");

        if (score >= 3) {
            result.textContent = "Score: " + score + " / 5. You passed!";
        } else {
            result.textContent = "Score: " + score + " / 5. You failed, try again.";
        }
    });
}
