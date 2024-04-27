
// const baseUrl = "http://localhost:3000/Tech4Dev/Easymart-store/login.html"
const baseUrl = "https://easymart-gap9.onrender.com/api/v1"

const emailInput = document.getElementById("email");

const forgotPassword = (userData) => {
    axios
        .post(`${baseUrl}/user/forgotPassword`, userData)
        .then(function (response) {
            Swal.fire({
                icon: "success",
                title: "Check Your Mail",
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
              errorMsg = error.response.data.message
            } else if (error.request) {
              // The request was made but no response was received
              // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
              // http.ClientRequest in node.js
              console.log(error.request);
              errorMsg = "Network Error"
            } else {
              // Something happened in setting up the request that triggered an Error
              console.log('Error', error.message);
              errorMsg = error.message
            }

            Swal.fire({
                icon: "error",
                title: "Error Processing Input",
                text:  errorMsg
            });
        });
};

const forgotpassword = document.getElementById("forgot-passwd");
forgotpassword.addEventListener("click", (e) => {
    e.preventDefault()
    const email = emailInput.value;

        const formData = {
            email
        }
        forgotPassword(formData);
 
});

