const categoryContainer = document.querySelector(".category-container")
const productContainer = document.querySelector(".product-container")
const firstNameInput = document.querySelector(".first-name-input")
const phoneNumberInput = document.querySelector(".phone-number-input")
const authCodeInput = document.querySelector(".auth-code-input")
const loginBtn = document.querySelector(".login-btn")

getCategories = async () => {
    categoryContainer.innerHTML = ""

    const response = await fetch("http://localhost:3000/api/categories")
    const categories = await response.json()
    
    categories.forEach(category => {
        const title = document.createElement("h2")
        title.setAttribute("class", "categories")
        categoryContainer.append(title)
        title.innerHTML = category.title
        title.addEventListener("click", () => getProductByCategory(category, category._id))
    })
}

getProductByCategory = async (element, id) => {
    const response = await fetch(`http://localhost:3000/api/products/category/${id}`)
    const products = await response.json()

    products.forEach(products => {
        const productDiv = document.createElement("div")
        productDiv.setAttribute("class", "product")

        const image = document.createElement("img")
        image.src = products.image

        const title = document.createElement("h2")
        title.innerHTML = products.title

        const volume = document.createElement("p")
        volume.innerHTML = `${products.volume} ml`

        const price = document.createElement("p")
        price.innerHTML = `${products.price} kr`

        const basketBtn = document.createElement("button")
        basketBtn.setAttribute("class", "basket-btn")
        basketBtn.innerHTML = "To basket"

        productDiv.append(image, title, volume, price, basketBtn)
        productContainer.append(productDiv)
    })
}

getCategories()

login = async () => {
    const response = await fetch("http://localhost:3000/api/users/login", {
        method: "POST",
        body: JSON.stringify(
            {
                "firstName": firstNameInput.value,
                "phoneNumber": phoneNumberInput.value
            }
        ),
        headers: {
            "Content-Type": "application/json"
        }
    })
    const user1 = await response.json()
    console.log(user1);
}

loginBtn.addEventListener("click", () => {
    if(login()) {
        authCodeInput.value = phoneAuthorizationCode = "code"
    } 
})