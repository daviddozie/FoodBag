const submitLogin = document.getElementById("loginValidation");
const emailLogin = document.getElementById("emaillog");
const passwordLogin = document.getElementById("passwordlog");
const comfirmPasswordLogin = document.getElementById("comfirmpasswordlog");

function loginEmail(emailfield, event) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(?:\s*)$/;
    if (emailfield.value.trim() === "") {
        emailfield.nextElementSibling.innerHTML = "Please enter your email address !";
        emailLogin.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!emailfield.value.match(emailRegex)) {
        emailfield.nextElementSibling.innerHTML = "Please enter a valid email !";
        emailLogin.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        emailfield.nextElementSibling.innerHTML = "";
        emailLogin.style.border = "2px solid green";
        return true;
    }
}

function loginPassword(inputPassword, event) {
    let pwdRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
    if (inputPassword.value === "") {
        inputPassword.nextElementSibling.innerHTML = "Please enter your password !";
        passwordLogin.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!inputPassword.value.match(pwdRegex)) {
        inputPassword.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number.";
        passwordLogin.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        inputPassword.nextElementSibling.innerHTML = "";
        passwordLogin.style.border = "2px solid green";
        return true;
    }
}

function loginComfirmPassword(comfirmInput, event) {
    if (comfirmInput.value === "") {
        comfirmInput.nextElementSibling.innerHTML = "Please comfirm your password !";
        comfirmPasswordLogin.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (comfirmInput.value !==  passwordLogin.value) {
        comfirmInput.nextElementSibling.innerHTML = "Your password don't match !";
        comfirmPasswordLogin.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        comfirmInput.nextElementSibling.innerHTML = "";
        comfirmPasswordLogin.style.border = "2px solid green";
        return true;
    }
}

function captcha() {
    const captchaResponse = grecaptcha.getResponse();
    const errorMessage = document.querySelector('.error-message');

    if(!captchaResponse.length > 0) {
        errorMessage.innerHTML = "Please complete the reCAPTCHA!";
        throw new Error("Captcha not complete")
    } else {
        errorMessage.innerHTML = "";
    }
}

function loginValidation(e) {
    e.preventDefault();

    let emailLogine = loginEmail(emailLogin, e);
    let passwordLogine = loginPassword(passwordLogin, e);
    let comfirmPasswordLogine = loginComfirmPassword(comfirmPasswordLogin, e)
    
    try {
        captcha();
    } catch (error) {
        return false;
    }
     
    if (emailLogine && passwordLogine && comfirmPasswordLogine) {
        window.location.href = "./vendors_page/vendor.html";
    }

    return true;
}

submitLogin.addEventListener('submit', loginValidation);

for (let p = 1; p < 3; p++) {
    let passwordHide = document.getElementsByClassName(`hidepass${p}`)[0];
    let passwordShow = document.getElementsByClassName(`showpass${p}`)[0];
    let passwordText = document.getElementsByClassName(`loginpassword${p}`)[0];

    passwordHide.addEventListener("click", function () {
        passwordHide.style.display = "none";
        passwordShow.style.display = "unset";
        if (passwordText.type === "password") {
            passwordText.type = "text";

        } else {
            passwordText.type = "password";
        }
    })

    passwordShow.addEventListener("click", function () {
        passwordShow.style.display = "none";
        passwordHide.style.display = "unset";
        if (passwordText.type === "text") {
            passwordText.type = "password";

        } else {
            passwordText.type = "text";
        }
    })
}

//end of login validation.

const exampleModal = document.getElementById('exampleModal')
if (exampleModal) {
    exampleModal.addEventListener('show.bs.modal', event => {
        // Button that triggered the modal
        const button = event.relatedTarget
        // Extract info from data-bs-* attributes
        const recipient = button.getAttribute('data-bs-whatever')
        // If necessary, you could initiate an Ajax request here
        // and then do the updating in a callback.

        // Update the modal's content.
        const modalTitle = exampleModal.querySelector('.modal-title')
        const modalBodyInput = exampleModal.querySelector('.modal-body input')

        modalTitle.textContent = `New message to ${recipient}`
        modalBodyInput.value = recipient
    })
}

for (i = 1; i <= 4; i++) {
    let place = document.getElementById("location");
    let grayitem = document.getElementsByClassName(`gray${i}`)[0];
    let reditem = document.getElementsByClassName(`red${i}`)[0];

    place.addEventListener('change', () => {
        if (place.value === "") {
            grayitem.style.display = "block";
            reditem.style.display = "none";
        } else {
            reditem.style.display = "block";
            grayitem.style.display = "none";
        }
    })

}

const text = document.querySelector(".shaking-text");

function startShake() {
    text.style.animation = "shake 1s ease-in-out";
    setTimeout(() => {
        text.style.animation = "none"; // Stop the animation
        setTimeout(() => {
            text.style.animation = "shake 1s ease-in-out"; // Resume animation
            setTimeout(startShake, 4000); // Wait for 20 seconds and repeat
        }, 1000);
    }, 1000);
}

startShake(); // Start the animation

let submitForm = document.getElementById("formValidation"),
    fname = document.getElementById("firstname");
    lname = document.getElementById("lastname");
    email = document.getElementById("email");
    phoneNumber = document.getElementById("phonenumber");
    password = document.getElementById("password");
    comfirmPassword = document.getElementById("comfirmpassword");

//firstName validation.
function firstnameValidation(firstname, event) {
    if (firstname.value === "") {
        firstname.nextElementSibling.innerHTML = "Please enter your First Name !";
        fname.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        firstname.nextElementSibling.innerHTML = "";
        fname.style.border = "2px solid green";
        return true;
    }
}

//lastName validation.
function lastnameValidation(lastname, event) {
    if (lastname.value === "") {
        lastname.nextElementSibling.innerHTML = "Please enter your Last Name !";
        lname.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        lastname.nextElementSibling.innerHTML = "";
        lname.style.border = "2px solid green";
        return true;
    }
}

//email validation.
function emailValidation(email, event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === "") {
        email.nextElementSibling.innerHTML = "Please enter your email address !";
        email.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email !";
        email.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        email.style.border = "2px solid green";
        return true;
    }
}

//phoneNumber validation.
function phonenumberValidation(number, event) {
    let PNRegex = /^(?:\+?234|0)[1-9]\d{9}$/;
    if (number.value === "") {
        number.nextElementSibling.innerHTML = "Please enter your Phone Number !";
        phoneNumber.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!number.value.match(PNRegex)) {
        number.nextElementSibling.innerHTML = "Please enter a valid Phone Number !";
        phoneNumber.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        number.nextElementSibling.innerHTML = "";
        phoneNumber.style.border = "2px solid green";
        return true;
    }
}

//password validation.
function passwordValidation(password, event) {
    let pwdRegex = /^(?=.*[A-Z])(?=.*[@*+%$#&])(?=.*\d).{6,}$/;
    if (password.value === "") {
        password.nextElementSibling.innerHTML = "Please enter password !";
        password.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!password.value.match(pwdRegex)) {
        password.nextElementSibling.innerHTML = "Your password should have a minimum of 6 characters, 1 capital letter, 1 special character eg @*$#&+% and 1 number.";
        password.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        password.nextElementSibling.innerHTML = "";
        password.style.border = "2px solid green";
        return true;
    }
}

//comfirm password validation.
function comfirmpasswordValidation(comfirmpassword, event) {
    if (comfirmpassword.value === "") {
        comfirmpassword.nextElementSibling.innerHTML = "Please comfirm your password !";
        comfirmpassword.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (comfirmpassword.value !== password.value) {
        comfirmpassword.nextElementSibling.innerHTML = "Your passwords don't match !";
        comfirmpassword.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        comfirmpassword.nextElementSibling.innerHTML = "";
        comfirmpassword.style.border = "2px solid green";
        return true;
    }
}

//loop function
function validateForm(e) {
    firstnameValidation(fname, e);
    lastnameValidation(lname, e);
    emailValidation(email, e);
    phonenumberValidation(phoneNumber, e);
    passwordValidation(password, e);
    comfirmpasswordValidation(comfirmPassword, e);

    return true;
}

submitForm.addEventListener("submit", validateForm)
//password icon.
for (let p = 1; p < 3; p++) {
    let passwordHide = document.getElementsByClassName(`hidep${p}`)[0];
    let passwordShow = document.getElementsByClassName(`showp${p}`)[0];
    let passwordText = document.getElementsByClassName(`password${p}`)[0];

    passwordHide.addEventListener("click", function () {
        passwordHide.style.display = "none";
        passwordShow.style.display = "unset";
        if (passwordText.type === "password") {
            passwordText.type = "text";

        } else {
            passwordText.type = "password";
        }
    })

    passwordShow.addEventListener("click", function () {
        passwordShow.style.display = "none";
        passwordHide.style.display = "unset";
        if (passwordText.type === "text") {
            passwordText.type = "password";

        } else {
            passwordText.type = "text";
        }
    })
}



//////////////////////////////////////////////////
let submitNewsletter = document.getElementById("ValidateNewsletter"),
    emailNews = document.getElementById("emailnews");

function emailNewsletter(email, event) {
    let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (email.value === "") {
        email.nextElementSibling.innerHTML = "Please enter your email address !";
        email.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!email.value.match(emailRegex)) {
        email.nextElementSibling.innerHTML = "Please enter a valid email !";
        email.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        email.nextElementSibling.innerHTML = "";
        email.style.borderColor = "";
        return true;
    }
}


function validateNews(e) {
    emailNewsletter(emailNews, e);
}

submitNewsletter.addEventListener("submit", validateNews);

function showLoader() {
    document.querySelector(".loader").style.display = "block";
}

// Hide the loader
function hideLoader() {
    document.querySelector(".loader").style.display = "none";
}

// Simulate loading (you would replace this with actual loading code)
function simulateLoading() {
    showLoader();
    setTimeout(function () {
        hideLoader();
    }, 1000); // Hide the loader after 3 seconds (replace with your actual loading time)
}

// Call simulateLoading to start the loading process
simulateLoading();