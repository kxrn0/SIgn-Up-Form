const password = document.getElementById("user-password");
const confirmPassword = document.getElementById("confirm-password");
const errorSpan = document.querySelector(".error-span");

password.addEventListener("input", show_password_error);

confirmPassword.addEventListener("input", show_password_error);

function show_password_error() {
    // if (!initial_subs(password.value, confirmPassword.value)) {
    //     password.classList.add("error");
    //     confirmPassword.classList.add("error");
    //     errorSpan.style.display = "inline";
    // }
    // else {
    //     password.classList.remove("error");
    //     confirmPassword.classList.remove("error");
    //     errorSpan.style.display = "none";
    // }
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

/**
 * Function that checks if the second parameter is an inital substring of the first one.
 * @param {string} str1 The string that the second parameter is expected to be an initial substring of.
 * @param {string} str2 The string that is expected to be an initial substring of the first parameter.
 * @returns boolean
 */
function initial_subs(str1, str2) {
    if (str1.length < str2.length)
        return false;

    for (let i = 0; i < str2.length; i++)
        if (str1[i] != str2[i])
            return false;
    return true;
}