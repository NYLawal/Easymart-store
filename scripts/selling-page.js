
// const product1Image = document.getElementById('product1-img');
const productImages = document.getElementsByClassName('product-img');
const products = document.getElementsByClassName('product-display')

function renderProduct() {
    for (let i = 0; i < productImages.length; i++) {
        let image = "image" + i
        let data = sessionStorage.getItem(`${image}`);
        if (data)
            productImages[i].src = data;
    }
    sessionStorage.clear()
}

window.addEventListener("load", renderProduct)


const plus = document.getElementsByClassName("increase-button")
const minus = document.getElementsByClassName("decrease-button")
// const itemNumber = document.getElementsByClassName('item-number')
for (let i = 0; i < plus.length; i++) {
    plus[i].addEventListener("click", (e) => {
        e.preventDefault()
        plus[i].previousElementSibling.value++

    })
}

for (let j = 0; j < minus.length; j++) {
    minus[j].addEventListener("click", (e) => {
        e.preventDefault()
        if (minus[j].nextElementSibling.value != 0) {
            minus[j].nextElementSibling.value--
        }
    })
}


