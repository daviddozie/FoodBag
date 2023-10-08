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
        fname.style.borderColor = "";
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
        lname.style.borderColor = "";
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
        email.style.borderColor = "";
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
        phoneNumber.style.borderColor = "";
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
        password.style.borderColor = "";
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
        comfirmpassword.style.borderColor = "";
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

const items = [
    {
        numberCount: 1,
        totalPrice: 5000,
        originalPrice: 5000
    },

    {
        numberCount: 1,
        totalPrice: 1200,
        originalPrice: 1200
    },

    {
        numberCount: 1,
        totalPrice: 1200,
        originalPrice: 1200
    }
];

const totalcost = document.getElementById("sum");
totalcost.textContent = 1200;


for (let i = 0; i <= items.length; i++) {
    const addItem = document.getElementsByClassName(`addbtn${i + 1}`)[0];
    const minusItem = document.getElementsByClassName(`minusbtn${i + 1}`)[0];
    const costPrice = document.getElementById(`itemcost${i + 1}`);
    const itemCount1 = document.getElementsByClassName(`numbercount${i + 1}`)[0];

    totalcost.textContent = Number(totalcost.textContent) + Number(items[i].totalPrice);

    addItem.addEventListener("click", () => {
        items[i].numberCount++;
        itemCount1.textContent = items[i].numberCount;

        items[i].totalPrice = items[i].originalPrice * items[i].numberCount;
        costPrice.textContent = items[i].totalPrice.toLocaleString();

        totalcost.textContent = Number(totalcost.textContent) + items[i].originalPrice;
    });

    minusItem.addEventListener("click", () => {
        if (items[i].numberCount > 1) {
            items[i].numberCount--;
            itemCount1.textContent = items[i].numberCount;
            costPrice.textContent = (items[i].originalPrice * items[i].numberCount).toLocaleString();
            totalcost.textContent = Number(totalcost.textContent) - items[i].originalPrice;
        }
    });

}