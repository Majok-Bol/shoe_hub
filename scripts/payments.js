import { grandTotal } from "./total.js";
console.log("Payments is working");
const deposit = document.getElementById("deposit");
const buy = document.getElementById("buy");
const balance = document.getElementById("balance");
const input = document.getElementById("input");
const items = document.getElementById("items");
const totalContainer = document.getElementById("totalContainer");
//get ordered items
const getOrderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];

const item = document.getElementById("item");

getOrderedItems.filter((product) => product.title);
item.innerHTML = "";
getOrderedItems.forEach((product) => {
    const createList = document.createElement("li");
    item.appendChild(createList);
    createList.textContent = `${product.title}`

})

//get the amount due
const total = getOrderedItems
    .map((product) => parseFloat(product.price.replace("$", "")))
    .reduce((sum, item) => sum + item, 0);
//show balance
const totalAmount = document.getElementById("total");
totalAmount.textContent = `${total.toFixed(2)} USD`;
let initialAmount = parseFloat(JSON.parse(localStorage.getItem("balance")));


const initialBalance = document.getElementById("initial-balance");
if (isNaN(initialAmount)) {
    initialAmount = 0.0;
    initialBalance.textContent = `${initialAmount.toFixed(2)} USD`;
} else {
    initialBalance.textContent = `${initialAmount.toFixed(2)} USD`;
}



const max = 10000;
const min = 10;
deposit.addEventListener("click", () => {
    const amount = parseInt(input.value.trim());
    if (amount <= max && amount >= min) {
        initialAmount += amount;
        initialBalance.textContent = `${initialAmount.toFixed(2)} USD`;
        //add to local storage
        localStorage.setItem("balance", JSON.stringify(initialAmount));
        alert(`${amount} deposited successfully`);
    }
    if (amount > max) {
        alert(`Maximum deposit is: ${max}`);

    }
    if (isNaN(amount)) {
        alert("Please enter some amount");

    }
    if (amount < min) {
        alert(`Minimum deposit is: ${min}`);
    }
    //update the value of the balance
    input.value = "";

})

buy.addEventListener("click", () => {
    //get ordered items
    const getOrderedItems = JSON.parse(localStorage.getItem("orderedItems")) || [];
    if (getOrderedItems.length === 0) {
        alert("No item ordered");
        return;
    }
    //deduct this amount from the balance
    const totalPrice = grandTotal().toFixed(2);

    if (initialAmount > totalPrice) {
        let balance = (initialAmount - totalPrice).toFixed(2);
        //update local storage
        localStorage.setItem("balance", JSON.stringify(balance));
        alert("Order paid successfully");



        //update the balance
        initialBalance.textContent = `${balance} USD`;


        //clear ordered list items on ordered list
        items.innerHTML = "";
        totalContainer.innerHTML = "";

        //clear data stored on order list
        localStorage.removeItem('orderedItems');



    }



    if (initialAmount < totalPrice) {
        alert(`Please topup your account:\nCurrent amount: ${initialAmount.toFixed(2)}\nTotal amount due: ${totalPrice}\nDeficit: ${(totalPrice - initialAmount).toFixed(2)}`);
    }


})
const links = document.querySelectorAll("header a");
const currentPage = window.location.pathname;
links.forEach((link => {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
}))
