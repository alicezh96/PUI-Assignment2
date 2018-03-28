// Initialize a "warehouse" that has all of the items
function initWarehouse(){
  var warehouse = localStorage.getItem('warehouse');
  if(warehouse == null){
    item1 = {};
    item1["id"] = "ABCDEFG";
    item1["name"] = "Velvet Decorative Couch Pillow";
    item1["price"] = 24.99;
    item1["img"] = "https://target.scene7.com/is/image/Target/50026393?wid=328&hei=328&qlt=80&fmt=pjpeg";

    item2 = {};
    item2["id"] = "1234567";
    item2["name"] = "Patterned Decorative Couch Pillow";
    item2["price"] = 12.99;
    item2["img"] = "https://target.scene7.com/is/image/Target/50430850?wid=328&hei=328&qlt=80&fmt=pjpeg";

    warehouse = {};
    warehouse[item1["id"]] = item1;
    warehouse[item2["id"]] = item2;
    localStorage.setItem("warehouse", JSON.stringify(warehouse));
  }
}

// Initialize the cart. Check if the cart is empty or not
function initCart(){
  var items = localStorage.getItem('items');
  console.log(items);
  if(items == null){
    localStorage.setItem('items', JSON.stringify({}));
    return 0;
  }else{

    count = 0;
    items = JSON.parse(items);

    for (var id in items){
      count += parseInt(items[id]["qty"]);
    }
    console.log(count);

    return count;
  }
}

// Functions to change attributes depending on the color selected. Ended up not using this code
// function changeGreyAtt(){
//   document.getElementById("price").innerHTML = "$12.99";
//   document.getElementById("product-large-image").src = "https://images-na.ssl-images-amazon.com/images/I/91ZjA%2BX3vCL._SY355_.jpg";
//   document.getElementById("color").innerHTML = "Color: Grey";
// }

// function changeNavyAtt(){
//   document.getElementById("price").innerHTML = "$24.99"
//   document.getElementById("product-large-image").src = "https://images.crateandbarrel.com/is/image/Crate/BrennerPillowIndigo20InSHS16"
//   document.getElementById("color").innerHTML = "Color: Navy";
// }



// Changing the attributes based on the color selected
function pillowType(id) {
  var price = document.getElementById("price");
  var product_large_image = document.getElementById("product-large-image");
  var color = document.getElementById("color")

  if (id == "dot-grey") {
    price.innerHTML = "$12.99";
    product_large_image.src = "https://images-na.ssl-images-amazon.com/images/I/91ZjA%2BX3vCL._SY355_.jpg";
    color.innerHTML = "Color: Grey";
  }
  else if (id == "dot-navy") {
    price.innerHTML = "$24.99";
    product_large_image.src = "https://images.crateandbarrel.com/is/image/Crate/BrennerPillowIndigo20InSHS16";
    color.innerHTML = "Color: Navy";
  }

}

// Stores item attributes in local storage
function addToCart(){

  var items = JSON.parse(localStorage.getItem('items'));

  var itemColor = document.getElementById("color").innerHTML.split(" ")[1];
  var itemId = "ABCDEFG" + itemColor;
  var itemPrice = document.getElementById("price").innerHTML;
  var itemImage = document.getElementById("product-large-image").src;
  var itemQty = document.getElementById("quantity");
  itemQty = itemQty.options[itemQty.selectedIndex].value;
  document.getElementById("number").innerHTML = itemQty

  if(items[itemId] == null){
    var newItem = {};
    newItem["id"] = itemId;
    newItem["name"] = "Velvet Decorative Couch Pillow";
    newItem["price"] = itemPrice;
    newItem["color"] = itemColor;
    newItem["img"] = itemImage;
    newItem["qty"] = itemQty;
    items[newItem["id"]] = newItem;
  }else{
    items[itemId]["qty"] = String(parseInt(items[itemId]["qty"]) + parseInt(itemQty));
  }
  localStorage.setItem('items', JSON.stringify(items));
}

// Empty cart. Clears the local storage. Mainly for debugging purposes to initialize everything again
function emptyCart(){
  localStorage.removeItem("items");
}

// Remove an item in the shopping cart
function removeItem(id){
  cart = JSON.parse(localStorage.getItem('items'));
  delete cart[id];
  localStorage.setItem('items', JSON.stringify(cart));
}


$(document).ready(function(){
  initWarehouse();
  cart_size = initCart();
  document.getElementById("number").innerHTML = cart_size
});

