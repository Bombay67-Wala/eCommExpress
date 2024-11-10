document.addEventListener('DOMContentLoaded', () => {
    // Retrieve the saved address from localStorage
    const savedAddress = JSON.parse(localStorage.getItem('savedAddress'));
    const cart = JSON.parse(localStorage.getItem('cart'));

    // Display the delivery address
    if (savedAddress) {
        const addressDiv = document.getElementById('address-details');
        addressDiv.innerHTML = `
            <p><strong>Full Name:</strong> ${savedAddress.fullName}</p>
            <p><strong>Address:</strong> ${savedAddress.address}</p>
            <p><strong>City:</strong> ${savedAddress.city}</p>
            <p><strong>Postal Code:</strong> ${savedAddress.postalCode}</p>
            <p><strong>State:</strong> ${savedAddress.state}</p>
            <p><strong>Country:</strong> ${savedAddress.country}</p>
        `;
    }

    // Display the ordered items and calculate total amount
    const cartItemsDiv = document.getElementById('cart-items');
    let totalAmount = 0;

    if (cart && cart.length > 0) {
        cart.forEach(item => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `
                <p><strong>${item.name}</strong> - ${item.price}</p>
            `;
            cartItemsDiv.appendChild(itemDiv);
            totalAmount +=262 //parseFloat(item.price.replace('$', '').trim());
        });
    } else {
        cartItemsDiv.innerHTML = '<p>No items in your cart.</p>';
    }

    // Display the total amount
    document.getElementById('total-amount').textContent = '$' + totalAmount.toFixed(2);
});
