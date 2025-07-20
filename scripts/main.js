import { shoeProducts } from "./data.js";

const productContainer = document.getElementById("products-container");
const selectedCategory = document.getElementById("selected-category");
//store all categories
const categories = [];
//store all categories
shoeProducts.map((product) => {
    categories.push(product.category)
})
//loop through categories
for (let i = 0; i < categories.length; i++) {
    const option = document.createElement("option");
    option.value = categories[i];
    option.textContent = categories[i];
    selectedCategory.appendChild(option);
}

//display products
//based on the selected value
selectedCategory.addEventListener("change", filterProducts);
document.addEventListener("DOMContentLoaded", filterProducts);
function filterProducts() {
    productContainer.innerHTML = "";
    //filter products to those matching the category selected
    //ie if category is equal to value selected
    const choice = selectedCategory.value;
    //get all products
    shoeProducts.map((product) => {
        if (choice === 'All') {
            productContainer.innerHTML += `
            <div class="card">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="add-to-cart" id="${product.id}">Add to Cart</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `;
        }
        if (product.category === choice && choice != 'All') {
            productContainer.innerHTML += `
            <div class="card">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <button class="add-to-cart" id="${product.id}">Add to Cart</button>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `;
        }




    })


}
//load stored items from localStorage

let cartItems =JSON.parse(localStorage.getItem("cartItems"))||[];


//add to cart btn
productContainer.addEventListener("click", (e) => {
    if (e.target.classList.contains("add-to-cart")) {
        const productId = parseInt(e.target.id);
     
        const productMatched = shoeProducts.find((product) => product.id === productId);
        if (productMatched) {

            //check for duplicates
            const duplicate = cartItems.some((item) => item.id === productMatched.id);
   
            if (!duplicate) {
                cartItems.push(productMatched)
                //add item to localStorage
                localStorage.setItem("cartItems",JSON.stringify(cartItems));
                alert('Item added to Cart');
                // remove that item from cart
                
            } else {
                alert('Item already added to cart');
            }


        } else {
            alert('Product not found')
        }


    }
})

const links = document.querySelectorAll("header a");
const currrentPage = window.location.pathname;

links.forEach((link => {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
}))
