function logSubmit(event) {
  let name = pname.value;
  let price = pprice.value;

  // Validate text fields, else create item
  if (name === "" || price === "") {
    alert("Error: One or more fields are empty!");
  } else if (parseInt(price) < 1) {
    alert("Error: Price must be positive!");
    document.getElementById("pprice").focus();
  } else {
    // Create new product and add it to the list
    let product = new Product(name, price);
    productList.push(product);

    // Add node with product info
    let shopList = document.getElementById("shopList");

    let newitem = document.createElement("div");
    newitem.setAttribute("class", "row");

    let nameCol = document.createElement("div");
    nameCol.setAttribute("class", "column");
    let priceCol = document.createElement("div");
    priceCol.setAttribute("class", "column");
    let deleteCol = document.createElement("div");
    deleteCol.setAttribute("class", "column");

    let newbtn = document.createElement("button");

    // Event to delete product
    newbtn.addEventListener("click", (event) => {
      let eleClicked = event.target.parentNode.parentNode;

      // Substract to counter
      delPrice = event.target.parentNode.parentNode.childNodes[1].textContent;
      total -= parseInt(delPrice);

      const totalEle = document.getElementById("total");
      totalEle.textContent = total;

      shopList.removeChild(eleClicked);
    });
    newbtn.appendChild(document.createTextNode("X"));

    nameCol.appendChild(document.createTextNode(name));
    priceCol.appendChild(document.createTextNode(price));
    deleteCol.appendChild(newbtn);

    newitem.appendChild(nameCol);
    newitem.appendChild(priceCol);
    newitem.appendChild(deleteCol);
    shopList.appendChild(newitem);

    // Add to counter
    total += parseInt(price);
    const totalEle = document.getElementById("total");
    totalEle.textContent = total;

    // Display result and clean fields
    log.setAttribute("style", "color: black");
    log.textContent = "Added " + name;
    pname.value = "";
    pprice.value = "";

    document.getElementById("pname").focus();
  }
  event.preventDefault();
}

const form = document.getElementById("form");
const log = document.getElementById("log");
const pname = document.getElementById("pname");
const pprice = document.getElementById("pprice");
form.addEventListener("submit", logSubmit);
