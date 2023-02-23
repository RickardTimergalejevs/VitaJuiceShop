const categoryContainer = document.querySelector(".category-container")

getCategories = async () => {
    categoryContainer.innerHTML = ""

    const response = await fetch("http://localhost:3000/api/categories")
    const categories = await response.json()
    
    categories.forEach(category => {
        const title = document.createElement("h2")
        title.setAttribute("class", "categories")
        categoryContainer.append(title)
        title.innerHTML = category.title
        title.addEventListener("click", () => getProductByCategory(category, category.id))
    })
}

getProductByCategory = async (element, id) => {
    const response = await fetch(`http://localhost:3000/api/products/${id}`, {method: "GET"})
    const products = await response.json()

    const product = document.createElement("div")
    product.setAttribute("class", "product")

    const image = document.createElement("p")
    image.innerHTML = products.image

    const title = document.createElement("h2")
    title.innerHTML = products.title

    const volume = document.createElement("p")
    volume.innerHTML = products.volume

    const price = document.createElement("p")
    price.innerHTML = products.price

    const basketBtn = document.createElement("button")
    basketBtn.innerHTML = "To basket"

    product.append(image, title, volume, price, basketBtn)
    categoryContainer.append(product)
}

getCategories()