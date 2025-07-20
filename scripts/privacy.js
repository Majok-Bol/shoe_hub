const clearData = document.getElementById("clearDataBtn");
const statusDisplay=document.getElementById("status");
clearData.addEventListener("click", () => {
    //clear cart items
    localStorage.removeItem("cartItems");
    //clear ordered items
    localStorage.removeItem("orderedItems");
    //clear payments
    localStorage.removeItem("balance");
    alert("✅ All data cleared successfully");
    statusDisplay.textContent="✅ All data cleared successfully";

})
const links = document.querySelectorAll("header a");
const currrentPage = window.location.pathname;

links.forEach((link => {
    if (currentPage.includes(link.getAttribute("href"))) {
        link.classList.add("active");
    }
}))
