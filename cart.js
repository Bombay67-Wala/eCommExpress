// Initialize an empty cart in local storage
if (!localStorage.getItem('cart')) {
    localStorage.setItem('cart', JSON.stringify([]));
}

// Add to Cart Functionality
function addToCart(product) {
    const cart = JSON.parse(localStorage.getItem('cart'));
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(product.name + ' has been added to your cart!');
}

// Buy Now Functionality
function buyNow(product) {
    // Redirect to the checkout page, passing the product details
    window.location.href = `checkout.html?productId=${product.id}&action=buyNow`;
}

// View Product Details
function viewDetails(productId) {
    // Redirect to the product detail page
    window.location.href = `products/${productId}.html`;
}

// Attach event listeners
document.querySelectorAll('.add-to-cart').forEach((button, index) => {
    button.addEventListener('click', function() {
        const product = {
            id: index, // In a real application, use a unique product ID
            name: button.closest('.product-item').querySelector('h3').textContent,
            price: button.closest('.product-item').querySelector('.price').textContent,
            image: button.closest('.product-item').querySelector('img').src, // Capture the product image source
            // Add other product details if needed
        };
        addToCart(product);
    });
});

document.querySelectorAll('.buy-now').forEach((button, index) => {
    button.addEventListener('click', function() {
        const product = {
            id: index, // In a real application, use a unique product ID
            name: button.closest('.product-item').querySelector('h3').textContent,
            price: button.closest('.product-item').querySelector('.price').textContent,
            image: button.closest('.product-item').querySelector('img').src, // Capture the product image source
            // Add other product details if needed
        };
        buyNow(product);
    });
});

document.querySelectorAll('.view-details').forEach((button) => {
    button.addEventListener('click', function() {
        const productId = button.getAttribute('onclick').match(/'([^']+)'/)[1];
        viewDetails(productId);
    });
});
