// =============================
// CAPTCHA
// =============================

let captcha = "";

function generateCaptcha() {

    const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    captcha = "";

    for (let i = 0; i < 6; i++) {

        captcha += characters.charAt(
            Math.floor(Math.random() * characters.length)
        );

    }

    document.getElementById("captcha").textContent = captcha;

    document.getElementById("userCaptcha").value = "";

}

generateCaptcha();


// =============================
// Reload Captcha
// =============================

document
.getElementById("reloadCaptcha")
.addEventListener("click", generateCaptcha);


// =============================
// Show / Hide Password
// =============================

const password = document.getElementById("password");

const eye = document.getElementById("togglePassword");

eye.addEventListener("click", () => {

    if(password.type === "password"){

        password.type = "text";

        eye.textContent = "🙈";

    }

    else{

        password.type = "password";

        eye.textContent = "👁";

    }

});


// =============================
// Login Validation
// =============================

const form = document.getElementById("loginForm");

form.addEventListener("submit", function(e){

    e.preventDefault();

    let valid = true;

    // Clear old errors
    document.getElementById("nameError").textContent = "";
    document.getElementById("emailError").textContent = "";
    document.getElementById("passwordError").textContent = "";
    document.getElementById("captchaError").textContent = "";

    // Read values
    const name =
    document.getElementById("name").value.trim();

    const email =
    document.getElementById("email").value.trim();

    const pass =
    document.getElementById("password").value.trim();

    const userCaptcha =
    document.getElementById("userCaptcha").value.trim();

    // =============================
    // Name
    // =============================

    if(name === ""){

        document.getElementById("nameError").textContent =
        "Name is required.";

        valid = false;

    }

    // =============================
    // Email
    // =============================

    if(email === ""){

        document.getElementById("emailError").textContent =
        "Email is required.";

        valid = false;

    }

    else{

        const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if(!emailPattern.test(email)){

            document.getElementById("emailError").textContent =
            "Enter a valid email address.";

            valid = false;

        }

    }

    // =============================
    // Password
    // =============================

    if(pass === ""){

        document.getElementById("passwordError").textContent =
        "Password is required.";

        valid = false;

    }

    else if(pass.length < 8){

        document.getElementById("passwordError").textContent =
        "Password must contain at least 8 characters.";

        valid = false;

    }

    // =============================
    // Captcha
    // =============================

    if(userCaptcha === ""){

        document.getElementById("captchaError").textContent =
        "Captcha is required.";

        valid = false;

    }

    else if(userCaptcha !== captcha){

        document.getElementById("captchaError").textContent =
        "Incorrect captcha.";

        generateCaptcha();

        valid = false;

    }

    // =============================
    // Success
    // =============================

    if(valid){

        alert("🎉 Login Successful!");

        window.location.href = "home.html";

    }

});