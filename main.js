function setFormMessage(formElement, type, message) {
    const messageElement = formElement.querySelector(".form__message");

    messageElement.textContent = message;
    messageElement.classList.remove("form__message--success", "form__message--error");
    messageElement.classList.add(`form__message--${type}`);
}

function setInputError(inputElement, message) {
    inputElement.classList.add("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = message;
}

function clearInputError(inputElement) {
    inputElement.classList.remove("form__input--error");
    inputElement.parentElement.querySelector(".form__input-error-message").textContent = "";
}

document.addEventListener("DOMContentLoaded", () => {
    const loginForm = document.querySelector("#login");
    const createAccountForm = document.querySelector("#createAccount");

    document.querySelector("#linkCreateAccount").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.add("form--hidden");
        createAccountForm.classList.remove("form--hidden");
    });

    document.querySelector("#linkLogin").addEventListener("click", e => {
        e.preventDefault();
        loginForm.classList.remove("form--hidden");
        createAccountForm.classList.add("form--hidden");
    });

    loginForm.addEventListener("submit", e => {
        e.preventDefault();

        

        setFormMessage(loginForm, "error", "Invalid username/password combination");
    });

    document.querySelectorAll(".form__input").forEach(inputElement => {
        inputElement.addEventListener("blur", e => {
            if (e.target.id === "signupUsername" && e.target.value.length > 0 && e.target.value.length < 10) {
                setInputError(inputElement, "Username must be at least 10 characters in length");
            }
        });

        inputElement.addEventListener("input", e => {
            clearInputError(inputElement);
        });
    });
});

let users = ["admin"];
let passwords = ["admin"];

function login() {


    console.log(users)
    console.log(passwords)
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    let found = false;

    for (let i = 0; i < users.length; i++) {
        for(let j = 0; j < passwords.length; j++){
            if (username === users[i] && password === passwords[j]) {
                found = true;
                break;
            }
        }
    }

    if (found) {
        window.location.href = "parkinglot1.html";
    } else {
        document.getElementById("username").value = "";
        document.getElementById("password").value = "";
    }
}

function signup() {
    let newUsername = document.getElementById("signup-username").value;
    let newPassword = document.getElementById("signup-password").value;

    if(users.includes(newUsername)){
        alert("Username already exists. Please choose another one");
    }
    else if(passwords.includes(newPassword)){
        alert("Password already exists. Please choose another one");
    }
    else{
        users.push(newUsername);
        passwords.push(newPassword);
        document.getElementById("signup-username").value = "";
        document.getElementById("signup-password").value = "";
        alert("Registered");
        console.log(users);
        console.log(passwords);
        
    }
}