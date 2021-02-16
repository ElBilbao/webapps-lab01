function emptyCart(event) {
  // Delete all cart items
  let shopItems = document.getElementById("shopList");
  var i = 3;
  while (shopItems.childNodes.length > 3) {
    shopItems.childNodes[i].remove();
  }

  // Reset total counter
  total = 0;
  const totalEle = document.getElementById("total");
  totalEle.textContent = total;
}

const clearbtn = document.getElementById("clearCart");

clearbtn.addEventListener("click", emptyCart);
