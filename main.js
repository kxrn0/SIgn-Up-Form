const password = document.getElementById("user-password");
const confirmPassword = document.getElementById("confirm-password");
const errorSpan = document.querySelector(".error-span");

password.addEventListener("input", show_password_error);
confirmPassword.addEventListener("input", show_password_error);

function show_password_error() {
    if (password.value != confirmPassword.value) {
        password.classList.add("error");
        confirmPassword.classList.add("error");
        errorSpan.style.display = "inline";
    }
    else {
        password.classList.remove("error");
        confirmPassword.classList.remove("error");
        errorSpan.style.display = "none";
    }
}