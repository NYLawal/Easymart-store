// const baseUrl = "http://localhost:3000/api/v1"
const baseUrl = "https://easymart-gap9.onrender.com/api/v1"
// const product1Image = document.getElementById('product1-img');

function Redirect() {
    window.location.href = "https://easymart-store.netlify.app/home-page.html"
    // window.location.href = "http://127.0.0.1:5500/Tech4Dev/Easymart-store/selling-page.html"
     }

const viewProduct = (product) => {
    console.log(product)
    axios
    .get(`${baseUrl}/product/?category=${product}`)
    .then(function (response) {
        // console.log(response.data)
        const productsImageURL=response.data.products
        console.log(productsImageURL)
        for (i=0; i<productsImageURL.length; i++) {
            const productImageURL=response.data.products[i].image_url
            const image = "image"+i
            sessionStorage.setItem(`${image}`, productImageURL);
        }
         Redirect();
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



// const earringOption = document.getElementsByClassName("earring")
// earringOption.addEventListener("click", (e) => {
//     viewProduct(earring)
// })
// const braceletOption = document.getElementsByClassName("bracelet")
// for (count=0; count<braceletOption.length; count++){
// braceletOption[count].addEventListener("click", (e) => {
//     const product = "bracelet"
//     viewProduct(product)
// })
// }


const ringOption = document.getElementsByClassName("ring")
const braceletOption = document.getElementsByClassName("bracelet")
const earringOption = document.getElementsByClassName("earring")
const wristwatchOption = document.getElementsByClassName("wristwatch")
const gemstoneOption = document.getElementsByClassName("gemstone")
const necklaceOption = document.getElementsByClassName("necklace")
const hairpinOption = document.getElementsByClassName("hairpin")
let category;


window.addEventListener("click", (e) => {
    const targetElement = e.target
    if (targetElement.className.includes('ring')) {
        product= "ring"
        viewProduct(product)
    }
    if (targetElement.className.includes('bracelet')) {
        product= "bracelet"
        viewProduct(product)
    }
    if (targetElement.className.includes('earring')) {
        product= "earring"
        viewProduct(product)
    }
    if (targetElement.className.includes('wristwatch')) {
        product= "wristwatch"
        viewProduct(product)
    }
    if (targetElement.className.includes('necklace')) {
        product= "necklace"
        viewProduct(product)
    }
    if (targetElement.className.includes('hairpin')) {
        product= "hairpin"
        viewProduct(product)
    }
    if (targetElement.className.includes('gemstone')) {
        product= "gemstone"
        viewProduct(product)
    }
})

document.getElementById("categoryOptions").addEventListener('change',
  (event) => {
    switch (event.target.value) {
      case "ring":
        product= "ring"
        viewProduct(product)
        break;
      case "bracelet":
        product= "bracelet"
        viewProduct(product)
        break;
      case "earring":
        product= "earring"
        viewProduct(product)
        break;
      case "wristwatch":
        product= "wristwatch"
        viewProduct(product)
        break;
      case "necklace":
        product= "necklace"
        viewProduct(product)
        break;
      case "gemstone":
        product= "gemstone"
        viewProduct(product)
        break;
      case "hairpin":
        product= "hairpin"
        viewProduct(product)
        break;
    }
  }
);

// for (let i = 0; i < ringOption.length; i++) {
//  ringOption[i].addEventListener("click", (e) => {
    
//     const product = "ring"
//     viewProduct(product)
// })
// }


    


// const braceletOption = document.getElementById("bracelet")
// braceletOption.addEventListener("click", (e) => {
//     e.preventDefault()
//     const product = "bracelet"
//     viewProduct(product)
// })
