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
    })
}

getCategories()