const baseUrl = "https://easymart-gap9.onrender.com/api/v1"

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("passwd");

function Redirect() {
    window.location.href = "https://easymart-store.netlify.app/home-page.html"
    // window.location.href = "http://127.0.0.1:5500/Tech4Dev/Easymart-store/home-page.html"
     }

const logIn = (userData) => {
    axios
        .post(`${baseUrl}/user/login`, userData)
        .then(function (response) {
            setTimeout(function() {
                Redirect();
                 }, 1000);

            // Swal.fire({
            //     toast: true,
            //     icon: "success",
            //     title: "Login successful. You will be redirected to the main page in 3 seconds.",
            //     animation: false,
            //     position: "center",
            //     showConfirmButton: false,
            //     timer: 3000,
            //     timerProgressBar: true,
            //     didOpen: (toast) => {
            //         toast.addEventListener("mouseenter", Swal.stopTimer);
            //         toast.addEventListener("mouseleave", Swal.resumeTimer);
            //     },
            // });
           
           
        })
        .catch((err) => {
            console.log(err);
            Swal.fire({
                icon: "error",
                title: "Error Processing Input",
                text:  err.message || err.response.data.message 
            });
        });
};

const login = document.getElementById("login-btn");
login.addEventListener("click", (e) => {
    e.preventDefault()

    const email = emailInput.value;
    const password = passwordInput.value;
        const formData = {
            email,
            password,
        }
        logIn(formData);    
});

