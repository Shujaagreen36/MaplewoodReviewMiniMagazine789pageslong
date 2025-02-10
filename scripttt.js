document.addEventListener('DOMContentLoaded', () => {
    const cart = [];
    const cartItems = document.getElementById('cart-items');
    const cartTotal = document.getElementById('cart-total');
    const checkoutButton = document.getElementById('checkout');

    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.getAttribute('data-id');
            const productName = button.getAttribute('data-name');
            const productPrice = parseFloat(button.getAttribute('data-price'));

            // Add item to cart
            cart.push({ id: productId, name: productName, price: productPrice });
            updateCart();
        });
    });

    function updateCart() {
        cartItems.innerHTML = '';
        let total = 0;

        cart.forEach(item => {
            total += item.price;
            const li = document.createElement('li');
            li.textContent = `${item.name} - $${item.price}`;
            cartItems.appendChild(li);
        });

        if (cart.length === 0) {
            cartItems.innerHTML = '<li>Your cart is empty.</li>';
            checkoutButton.style.display = 'none';
        } else {
            checkoutButton.style.display = 'inline-block';
        }

        cartTotal.textContent = `Total: $${total}`;
    }
});
