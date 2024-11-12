const products = [
    { id: 1, name: "Kopi", price: 10000 },
    { id: 2, name: "Teh", price: 5000 },
    { id: 3, name: "Roti", price: 15000 }
  ];
  
  const cart = [];
  
  function addItem() {
    const productId = parseInt(document.getElementById("productSelect").value);
    const quantity = parseInt(document.getElementById("quantityInput").value);
    
    const product = products.find(item => item.id === productId);
    if (product && quantity > 0) {
      const cartItem = { ...product, quantity };
      cart.push(cartItem);
      renderCart();
    } else {
      alert("Jumlah tidak valid.");
    }
  }
  

  function calculateTotal(cart) {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }


  function applyDiscount(total, discountPercent) {
    return total - (total * discountPercent / 100);
  }
  
  
  function renderCart() {
    const cartItemsContainer = document.getElementById("cartItems");
    cartItemsContainer.innerHTML = ""; 
  
    cart.forEach(item => {
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${item.name}</td>
        <td>Rp${item.price}</td>
        <td>${item.quantity}</td>
        <td>Rp${item.price * item.quantity}</td>
      `;
      cartItemsContainer.appendChild(row);
    });
  }
  
  
  function calculateTotalWithDiscount() {
    const discountPercent = parseInt(document.getElementById("discountInput").value) || 0;
    const subtotal = calculateTotal(cart);
    const totalWithDiscount = applyDiscount(subtotal, discountPercent);
  
    document.getElementById("totalDisplay").innerText = `Total Bayar: Rp${totalWithDiscount}`;
  }
  