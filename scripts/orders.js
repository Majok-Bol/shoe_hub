
const myOrders = document.getElementById("orders");
const emptyOrder = document.getElementById("empty-order");
const storedOrders = JSON.parse(localStorage.getItem("orderedItems")) || [];
myOrders.innerHTML = "";

if(storedOrders.length===0){
    emptyOrder.style.display='block';
}else{
emptyOrder.style.display='none';
storedOrders.forEach((product) => {
    myOrders.innerHTML += `
            <div class="cart-items" data-id="${product.id}">
                <h2 class="title">${product.title}</h2>
                <img src="${product.image || 'https://via.placeholder.com/400x400?text=No+Image'}" class="product-image" alt="${product.title}" />
                <br>
                <p class="description">${product.description}</p>
                <p class="product-price"><strong>Price:</strong> ${product.price}</p>
                <p class="category"><strong>Category:</strong> ${product.category}</p>
                <p class="ratings"><strong>Rating:</strong> ${product.rating} ⭐ reviews</p>
            </div>
        `
})
}





