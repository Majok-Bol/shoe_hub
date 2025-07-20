const storedOrders = JSON.parse(localStorage.getItem("orderedItems")) || [];
export function grandTotal(){
const totalPrice=storedOrders
.map((item)=>parseFloat(item.price.replace("$","")))
.reduce((sum,number)=>sum+number,0);

return totalPrice;
}


grandTotal();