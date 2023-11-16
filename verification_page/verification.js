var inputfield = document.querySelector('.phoneTel');
window.intlTelInput(inputfield,{});


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

    try {
        captcha();
    } catch (error) {
        return false;
    }

    let emailLogine = loginEmail(emailLogin, e);
    let passwordLogine = loginPassword(passwordLogin, e);
    let comfirmPasswordLogine = loginComfirmPassword(comfirmPasswordLogin, e)
     
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

let verificationForm = document.getElementById("validateForm"),
    // PhoneNum = document.getElementById("phoneNumber"),
    paymentMethod = document.getElementById("paymentMethod"),
    cardNumber = document.getElementById("cardNumber"),
    cardName = document.getElementById("cardName"),
    expiryDate = document.getElementById("expiryDate"),
    Cvc = document.getElementById("cvc");

// phone number validation.
function validatenumber(number,event) {
    let PNRegex = /^[0-9]{7,15}$/;
    if (number.value === "") {
        number.nextElementSibling.innerHTML = "Please enter your phone number !";
        PhoneNum.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else if (!number.value.match(PNRegex)) {
        number.nextElementSibling.innerHTML = "Please enter a valid phone number !";
        PhoneNum.style.borderColor = "red";
        event.preventDefault();
        return false;
    } else {
        number.nextElementSibling.innerHTML = "";
        PhoneNum.style.borderColor = "";
        return true;
    }
}

//paymentmethod valiadtion.
function validatepayment(payment,event) {
    if (payment.value === "") {
        payment.nextElementSibling.innerHTML = "Please enter payment method !";
        paymentMethod.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        payment.nextElementSibling.innerHTML = "";
        paymentMethod.style.borderColor = '';
        return true;
    }
}

//card number validation.
function validatecardnumber(cardnumber,event) {
    let CN = /^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9]{2})[0-9]{12}|3[47][0-9]{13})$/;
    if (cardnumber.value === "") {
        cardnumber.nextElementSibling.innerHTML = "Please enter your card number !";
        cardNumber.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else if (!cardnumber.value.match(CN))  {
        cardnumber.nextElementSibling.innerHTML = "Please enter a valid card number !";
        cardNumber.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        cardnumber.nextElementSibling.innerHTML = "";
        cardNumber.style.borderColor = '';
        return true;
    }
}

//card name validation.
function validatecardname(cardname,event) {
    if (cardname.value === "") {
        cardname.nextElementSibling.innerHTML = "Please enter your card name !";
        cardName.style.borderColor = 'red';
        event.preventDefault();
        return false
    } else {
        cardname.nextElementSibling.innerHTML = "";
        cardName.style.borderColor = '';
        return true;
    }
}

//expiry date validation.
function validateexpirydate(expirydate,event) {
    if (expirydate.value === "") {
        expirydate.nextElementSibling.innerHTML = "Please enter expiry date !";
        expiryDate.style.borderColor = 'red';
        event.preventDefault();
        return false;
    } else {
        expirydate.nextElementSibling.innerHTML = "";
        expiryDate.style.borderColor = '';
        return true;
    }
}

//cvc validation.
function validatecvc(cvc,event) {
    let cvcRegex =  /^[0-9]{3}$|^[0-9]{3}$/;
    if (cvc.value === "") {
        cvc.nextElementSibling.innerHTML = "Please enter card verification code !";
        Cvc.style.borderColor = "red";
        event.preventDefault();
        return false;

    } else if (!cvc.value.match(cvcRegex)) {
        cvc.nextElementSibling.innerHTML = "Please enter a valid card verification code it must not be less or greater than 3 digit !";
        Cvc.style.borderColor = "red";
        return false;

    } else {
        cvc.nextElementSibling.innerHTML = "";
        Cvc.style.borderColor = "";
        return true;
    }
}

function validateverification(v) {
    v.preventDefault();
//    let phone = validatenumber(PhoneNum, v);
   let pay =  validatepayment(paymentMethod, v);
   let cardNum = validatecardnumber(cardNumber, v);
   let cardUser =  validatecardname(cardName, v);
   let expiry =  validateexpirydate(expiryDate,v);
   let userCvc =  validatecvc(Cvc, v);
   const loader = document.querySelector('.load');

    if(pay && cardNum && cardUser && expiry && userCvc ) {
        loader.style.display = "block";
       setTimeout(function () {
            window.location.href = "../successful_page/success.html"; 
       }, 2000)
    }
    
    return true;
}

verificationForm.addEventListener("submit", validateverification);


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

const toastTrigger = document.getElementById('liveToastBtn')
const toastLiveExample = document.getElementById('liveToast')

if (toastTrigger) {
  const toastBootstrap = bootstrap.Toast.getOrCreateInstance(toastLiveExample)
  toastTrigger.addEventListener('click', () => {
    toastBootstrap.show()
  })
}
//





function find_max(nums) {
    let max_num = Number.NEGATIVE_INFINITY;

    for (let num of nums) {
        if (num > max_num) {
            max_num = num;
        }
    }

    console.log(max_num);
}

let myName = "david";
console.log(myName);
