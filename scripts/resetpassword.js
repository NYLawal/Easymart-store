// const baseUrl = "http://localhost:3000/Tech4Dev/Easymart-store/login.html"
const baseUrl = "https://easymart-gap9.onrender.com/api/v1";

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passwd");
const passwordRepeatInput = document.getElementById("passwd-repeat");
const collection = document.getElementsByClassName("password");
// const togglePassword = document.getElementById("p-icon");
// const toggleRepeatPassword = document.getElementById("pr-icon");
// const emailLogin = document.getElementById("user");
// const passwdLogin = document.getElementById("pass");

const resetPassword = (userData, userId, token) => {
  axios
    .post(`${baseUrl}/user/password-reset/${userId}/${token}`, userData)
    .then(function (response) {
      console.log(response);
      Swal.fire({
        icon: "success",
        title: "Successfully Reset",
        text: response.data,
      });
    })
    .catch(function (error) {
      if (error.response) {
        // The request was made and the server responded with a status code
        // that falls out of the range of 2xx
        console.log(error.response.data);
        console.log(error.response.status);
        console.log(error.response.headers);
        errorMsg = !error.response.data.message  ? error.response.data : error.response.data.message ;
      } else if (error.request) {
        // The request was made but no response was received
        // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
        // http.ClientRequest in node.js
        console.log(error.request);
        errorMsg = "Network Error";
      } else {
        // Something happened in setting up the request that triggered an Error
        console.log("Error", error.message);
        errorMsg = error.message;
      }
      Swal.fire({
        icon: "error",
        title: "Error Processing Input",
        text: errorMsg,
      });
    });
};

const resetpassword = document.getElementById("reset-passwd");
resetpassword.addEventListener("click", (e) => {
  e.preventDefault();
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
    //   email,
      password,
    };
    var queryDict = {};
    location.search
      .substring(1)
      .split("&")
      .forEach(function (item) {
        queryDict[item.split("=")[0]] = item.split("=")[1];
      });
    const userId = queryDict.userId;
    const token = queryDict.token;
    resetPassword(formData, userId, token);
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
