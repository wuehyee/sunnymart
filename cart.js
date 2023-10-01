function addToCart(productName, productPrice, productImage) {
    var product = { name: productName, price: productPrice, image: productImage, quantity: 1 };
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    var existingItem = cart.find(item => item.name === productName);
  
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartDisplay();
  }
  
  // Function to update the cart display
  function updateCartDisplay() {
    var cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    var cartItemsList = document.getElementById("cart-items");
    var cartTotal = 0;
  
    // Clear the existing cart display
    cartItemsList.innerHTML = "";
  
    // Populate the cart display with items and calculate the total
    cartItems.forEach((item, index) => {
        var listItem = document.createElement("li");
        var productImage = document.createElement("img");
        productImage.src = item.image;
        productImage.style.width = "50px"; // Set the image width as desired
        listItem.appendChild(productImage);
  
        var productInfo = document.createElement("div");
        productInfo.textContent = `${item.name} - $${item.price}`;
  
        var quantityControl = document.createElement("div");
        var increaseButton = document.createElement("button");
        var decreaseButton = document.createElement("button");
  
        increaseButton.textContent = "+";
        increaseButton.onclick = function () {
            increaseCartItemQuantity(index);
        };
  
        decreaseButton.textContent = "-";
        decreaseButton.onclick = function () {
            decreaseCartItemQuantity(index);
        };
  
        var quantityDisplay = document.createElement("span");
        quantityDisplay.textContent = item.quantity;
  
        quantityControl.appendChild(decreaseButton);
        quantityControl.appendChild(quantityDisplay);
        quantityControl.appendChild(increaseButton);
  
        var removeButton = document.createElement("button");
        removeButton.textContent = "Remove";
        removeButton.onclick = function () {
            removeCartItem(index);
        };
  
        listItem.appendChild(productInfo);
        listItem.appendChild(quantityControl);
        listItem.appendChild(removeButton);
  
        cartItemsList.appendChild(listItem);
        cartTotal += item.price * item.quantity;
    });
  
    // Update the cart total
    var cartTotalElement = document.getElementById("cart-total");
    cartTotalElement.textContent = cartTotal.toFixed(2);
  }
  
  // Function to remove a cart item
  function removeCartItem(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < cart.length) {
        cart.splice(index, 1);
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }
  }
  
  // Function to increase the quantity of a cart item
  function increaseCartItemQuantity(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < cart.length) {
        cart[index].quantity += 1;
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }
  }
  
  // Function to decrease the quantity of a cart item
  function decreaseCartItemQuantity(index) {
    var cart = JSON.parse(localStorage.getItem("cart")) || [];
    if (index >= 0 && index < cart.length) {
        if (cart[index].quantity > 1) {
            cart[index].quantity -= 1;
        } else {
            cart.splice(index, 1);
        }
        localStorage.setItem("cart", JSON.stringify(cart));
        updateCartDisplay();
    }
  }
  
  // Function to clear the cart
  function clearCart() {
    localStorage.removeItem("cart");
    updateCartDisplay();
  }
  
  // Initial cart display update
  updateCartDisplay();
  