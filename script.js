const signUpForm = document.getElementById("sign-up")
const createBtn = document.getElementById("create-account-button")
const firstNameInput = document.getElementById("first-name")
const lastNameInput = document.getElementById("last-name")
const emailInput = document.getElementById("email")
const phoneNumberInput = document.getElementById("phone-number")
const passwordInput = document.getElementById("password")
const confirmPasswordInput = document.getElementById("confirm-password")

signUpForm.addEventListener("submit", (event) => {
    event.preventDefault();
    
    let noErrors = true;
    
    if (firstNameInput.value === "") {
        firstNameInput.style.outline = "1px solid red";
        noErrors = false;
    }
    if (lastNameInput.value === "") {
        lastNameInput.style.outline = "1px solid red";
        noErrors = false;
    }
    if (emailInput.value === "") {
        emailInput.style.outline = "1px solid red";
        noErrors = false;
    }
    if (phoneNumberInput.value === "") {
        phoneNumberInput.style.outline = "1px solid red";
        noErrors = false;
    }
    if (passwordInput.value === "") {
        passwordInput.style.outline = "1px solid red";
        noErrors = false;
    }
    if (confirmPasswordInput.value === "" || passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.outline = "1px solid red";
        confirmPasswordInput.setCustomValidity("Must be same as password.")
        noErrors = false;
    } else {
        confirmPasswordInput.setCustomValidity("")
    }

    if (noErrors) {
        signUpForm.submit();
    } else {
        return;
    }
})

confirmPasswordInput.addEventListener("keyup", () => {
    if (confirmPasswordInput.value === "" || passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordInput.style.outline = "1px solid red";
        confirmPasswordInput.setCustomValidity("Must be same as password.")
    } else {
        confirmPasswordInput.style.outline = "none";
        confirmPasswordInput.setCustomValidity("")
    }
})