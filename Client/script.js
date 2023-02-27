const categoryContainer = document.querySelector(".category-container")
const productContainer = document.querySelector(".product-container")

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
        basketBtn.innerHTML = "To basket"

        productDiv.append(image, title, volume, price, basketBtn)
        productContainer.append(productDiv)
    })
}

getCategories()