// Cart functionality
let cart = [];
let cartCount = 0;


function addToCart(productName, price) {

    cart.push({ name: productName, price: price });
    cartCount++;
    
    
    document.getElementById('cart-count').innerText = cartCount;
    
    
    showNotification(productName + ' added to cart!');
    
    updateCartDisplay();
}


function removeFromCart(index) {
    cart.splice(index, 1);
    cartCount--;
    document.getElementById('cart-count').innerText = cartCount;
    updateCartDisplay();
}


function clearCart() {
    cart = [];
    cartCount = 0;
    document.getElementById('cart-count').innerText = 0;
    updateCartDisplay();
    showNotification('Cart cleared!');
}

function updateCartDisplay() {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartTotalElement = document.getElementById('cart-total');
    
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<p class="empty-cart">Your cart is empty 🛒</p>';
        cartTotalElement.innerText = '0';
        return;
    }
    
    let cartHTML = '';
    let total = 0;
    
    cart.forEach((item, index) => {
        total += item.price;
        cartHTML += `
            <div class="cart-item">
                <div class="cart-item-info">
                    <strong>${item.name}</strong>
                    <span class="cart-item-price">$${item.price}</span>
                </div>
                <button class="remove-item" onclick="removeFromCart(${index})">
                    <i class="fas fa-trash"></i> Remove
                </button>
            </div>
        `;
    });
    
    cartItemsContainer.innerHTML = cartHTML;
    cartTotalElement.innerText = total;
}


function checkout() {
    if (cart.length === 0) {
        showNotification('Your cart is empty!');
        return;
    }
    
    const total = cart.reduce((sum, item) => sum + item.price, 0);
    alert('Thank you for your order! 🛒\n\nTotal: $' + total + '\n\nWe will contact you soon!');
    clearCart();
}
function showNotification(message) {
    const notification = document.getElementById('cart-notification');
    const notificationText = document.getElementById('notification-text');
    
    notificationText.innerText = message;
    notification.classList.add('show');
    
    
    setTimeout(() => {
        notification.classList.remove('show');
    }, 3000);
}


document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const formMessage = document.getElementById('form-message');
    
    
    if (name && email && message) {
        
        formMessage.innerHTML = '<div class="success-message">✅ Thank you, ' + name + '! Your message has been sent successfully. We will contact you at ' + email + ' soon.</div>';
        
        
        document.getElementById('contactForm').reset();
        

        setTimeout(() => {
            formMessage.innerHTML = '';
        }, 5000);
    } else {
        formMessage.innerHTML = '<div class="error-message">⚠️ Please fill in all fields!</div>';
    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});


window.addEventListener('scroll', function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
    } else {
        nav.style.boxShadow = 'none';
    }
});

console.log('Arooj\'s Make Up Brand - Website Loaded Successfully! 💄');