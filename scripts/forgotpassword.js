
// const baseUrl = "http://localhost:3000/Tech4Dev/Easymart-store/login.html"
const baseUrl = "https://easymart-gap9.onrender.com/api/v1"

const emailInput = document.getElementById("email");

const forgotPassword = (userData) => {
    axios
        .post(`${baseUrl}/user/forgotPassword`, userData)
        .then(function (response) {
            console.log(response);
            Swal.fire({
                icon: "success",
                title: "Check Your Mail",
                text: response.message,
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

const forgotpassword = document.getElementById("forgot-passwd");
forgotpassword.addEventListener("click", (e) => {
    e.preventDefault()
    const email = emailInput.value;

        const formData = {
            email
        }
        forgotPassword(formData);
 
});

