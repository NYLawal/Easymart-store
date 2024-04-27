
// const baseUrl = "http://localhost:3000/Tech4Dev/Easymart-store/login.html"
const baseUrl = "https://easymart-gap9.onrender.com/api/v1"

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passwd");
const passwordRepeatInput = document.getElementById("passwd-repeat");
const collection = document.getElementsByClassName("password");
// const togglePassword = document.getElementById("p-icon");
// const toggleRepeatPassword = document.getElementById("pr-icon");
// const emailLogin = document.getElementById("user");
// const passwdLogin = document.getElementById("pass");


const resetPassword = (userData) => {
    axios
        .post(`${baseUrl}/user/password-reset/:userId/:token`, userData)
        .then(function (response) {
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Successfully Reset",
                text: response.data,
            });
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Error Processing Input",
                text: err.response.data.message,
            });
        });
};

const resetpassword = document.getElementById("reset-passwd");
resetpassword.addEventListener("click", (e) => {
    e.preventDefault()
    const email = emailInput.value;
    const password = passwordInput.value;
    const passwordRepeat = passwordRepeatInput.value;

    if (password !== passwordRepeat) {
        Swal.fire({
            title: "Password Error",
            text: "Passwords do not match!",
            icon: "error",
        });
    } else {
        const formData = {
            email,
            password
        }
        resetPassword(formData);
    }
 
});





// togglePassword.addEventListener("click", function () {
//     if (passwordInput.type === "password") {
//         passwordInput.type = "text";
//         togglePassword.classList.remove("fa-eye");
//         togglePassword.classList.add("fa-eye-slash");
//     } else {
//         passwordInput.type = "password";
//         togglePassword.classList.remove("fa-eye-slash");
//         togglePassword.classList.add("fa-eye");
//     }
// });
// toggleRepeatPassword.addEventListener("click", function () {
//     if (passwordRepeatInput.type === "password") {
//         passwordRepeatInput.type = "text";
//         toggleRepeatPassword.classList.remove("fa-eye");
//         toggleRepeatPassword.classList.add("fa-eye-slash");
//     } else {
//         passwordRepeatInput.type = "password";
//         toggleRepeatPassword.classList.remove("fa-eye-slash");
//         toggleRepeatPassword.classList.add("fa-eye");
//     }
// });
