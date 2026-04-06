// WhatsApp Sticky Bubble
function createWhatsAppBubble() {
    const bubble = document.createElement('div');
    bubble.innerHTML = '<a href="https://wa.me/your-number" target="_blank">Chat with us!</a>';
    bubble.style.position = 'fixed';
    bubble.style.right = '20px';
    bubble.style.bottom = '20px';
    bubble.style.backgroundColor = '#25D366';
    bubble.style.color = '#fff';
    bubble.style.padding = '10px';
    bubble.style.borderRadius = '50px';
    bubble.style.zIndex = '1000';
    document.body.appendChild(bubble);
}
createWhatsAppBubble();

// Exit-Intent Popup
document.addEventListener('mouseout', function (e) {
    if (!e.toElement && !e.relatedTarget) {
        alert('Wait! Before you go, sign up for our newsletter!');
    }
});

// Lazy Loading Images
const lazyImages = document.querySelectorAll('img.lazy');
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            observer.unobserve(img);
        }
    });
});
lazyImages.forEach(image => observer.observe(image));

// Gallery Filters
const filterButtons = document.querySelectorAll('.filter-button');
filterButtons.forEach(button => {
    button.addEventListener('click', () => {
        const filter = button.dataset.filter;
        const galleryItems = document.querySelectorAll('.gallery-item');
        galleryItems.forEach(item => {
            if (filter === 'all' || item.classList.contains(filter)) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// Mobile Menu Toggle
const mobileMenuButton = document.querySelector('.mobile-menu-button');
const mobileMenu = document.querySelector('.mobile-menu');
mobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('open');
});

// Form Validation
const form = document.querySelector('form');
form.addEventListener('submit', (e) => {
    const email = form.elements['email'].value;
    if (!validateEmail(email)) {
        e.preventDefault();
        alert('Please enter a valid email address.');
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Smooth Scrolling
const links = document.querySelectorAll('a[href^="#"]');
links.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
