// Array of product objects
const products = [
    {
        name: "Apple Smartphone",
        brand: "Apple",
        category: "Smartphone",
        price: "$999",
        description: "Latest model with cutting-edge features, great performance, and high-quality camera.",
        imgSrc: "assets/images/apple.jpg"
    },
    {
        name: "Apple Smartwatch",
        brand: "Apple",
        category: "Smartwatch",
        price: "$399",
        description: "Stay connected and monitor your health with the latest Apple Smartwatch.",
        imgSrc: "https://th.bing.com/th/id/OIP.BsF3T3B_HC3J5R_lZm1NJAHaHa?rs=1&pid=ImgDetMain"
    }
    // Add more products here
];

// Function to render products in HTML
function renderProducts() {
    const productGrid = document.getElementById('product-grid');
    if (!productGrid) return; // Ensure the element exists

    products.forEach((product, index) => {
        const productHTML = `
            <div class="product-item">
                <img src="${product.imgSrc}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p><strong>Brand:</strong> ${product.brand}</p>
                <p><strong>Category:</strong> ${product.category}</p>
                <p><strong>Price:</strong> ${product.price}</p>
                <p>${product.description}</p>
                <button class="product-button" data-index="${index}">Add to Cart</button>
            </div>
        `;
        productGrid.insertAdjacentHTML('beforeend', productHTML);
    });

    // Add event listeners to all "Add to Cart" buttons
    const buttons = document.querySelectorAll('.product-button');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const productIndex = button.getAttribute('data-index');
            addToCart(products[productIndex]);
        });
    });
}

// Function to handle "Add to Cart" action
function addToCart(product) {
    alert(`Added ${product.name} to cart!`);
    // Here you can add code to actually handle adding the product to the cart
}

// Wait for the DOM to be fully loaded before running the render function
document.addEventListener("DOMContentLoaded", renderProducts);
