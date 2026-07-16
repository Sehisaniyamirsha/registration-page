// =============================
// Show / Hide Password
// =============================

const regPassword = document.getElementById("regPassword");
const confirmPassword = document.getElementById("confirmPassword");

const toggleRegPassword = document.getElementById("toggleRegPassword");
const toggleConfirmPassword = document.getElementById("toggleConfirmPassword");

toggleRegPassword.addEventListener("click", function () {

    if (regPassword.type === "password") {
        regPassword.type = "text";
        toggleRegPassword.textContent = "🙈";
    } else {
        regPassword.type = "password";
        toggleRegPassword.textContent = "👁";
    }

});

toggleConfirmPassword.addEventListener("click", function () {

    if (confirmPassword.type === "password") {
        confirmPassword.type = "text";
        toggleConfirmPassword.textContent = "🙈";
    } else {
        confirmPassword.type = "password";
        toggleConfirmPassword.textContent = "👁";
    }

});


// =============================
// Register Validation
// =============================

const registerForm = document.getElementById("registerForm");

registerForm.addEventListener("submit", function (e) {

    e.preventDefault();

    let valid = true;

    // Clear old errors

    document.getElementById("regNameError").textContent = "";
    document.getElementById("regEmailError").textContent = "";
    document.getElementById("regPasswordError").textContent = "";
    document.getElementById("confirmPasswordError").textContent = "";

    // Read values

    const name = document.getElementById("regName").value.trim();
    const email = document.getElementById("regEmail").value.trim();
    const password = regPassword.value.trim();
    const confirm = confirmPassword.value.trim();

    // Name

    if (name === "") {

        document.getElementById("regNameError").textContent =
            "Full name is required.";

        valid = false;
    }

    // Email

    if (email === "") {

        document.getElementById("regEmailError").textContent =
            "Email is required.";

        valid = false;

    } else {

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email)) {

            document.getElementById("regEmailError").textContent =
                "Enter a valid email address.";

            valid = false;
        }
    }

    // Password

    if (password === "") {

        document.getElementById("regPasswordError").textContent =
            "Password is required.";

        valid = false;

    } else if (password.length < 8) {

        document.getElementById("regPasswordError").textContent =
            "Password must contain at least 8 characters.";

        valid = false;
    }

    // Confirm Password

    if (confirm === "") {

        document.getElementById("confirmPasswordError").textContent =
            "Confirm password is required.";

        valid = false;

    } else if (password !== confirm) {

        document.getElementById("confirmPasswordError").textContent =
            "Passwords do not match.";

        valid = false;
    }

    // Success

    if (valid) {

        // Save user details

        const user = {

            name: name,
            email: email,
            password: password

        };

        localStorage.setItem("user", JSON.stringify(user));

        alert("🎉 Registration Successful!");

        window.location.href = "login.html";
    }

});