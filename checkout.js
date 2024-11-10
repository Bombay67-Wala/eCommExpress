// Function to calculate the total price
function calculateTotal() {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];  // Get cart from localStorage or set to an empty array if empty
    let total = 0;

    // Loop through cart items and calculate the total
    cart.forEach(item => {
        total += item.price * item.quantity;  // Price * Quantity for each item
    });

    // Update the total cost in the order summary
    document.getElementById('order-summary').textContent = `Total Cost: $${total.toFixed(2)}`;
}

// Call the function when the page loads
window.onload = calculateTotal;

