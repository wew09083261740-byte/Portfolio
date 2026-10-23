// 1. Preloader Fade Out
window.addEventListener('load', () => {
    setTimeout(() => {
        const preloader = document.getElementById('preloader');
        preloader.style.opacity = '0';
        setTimeout(() => preloader.style.display = 'none', 500);
    }, 800); 
});

// 2. Custom Cursor (Subtle Dark Mode)
const cursorDot = document.getElementById('cursor-dot');
const cursorOutline = document.getElementById('cursor-outline');

window.addEventListener('mousemove', (e) => {
    const posX = e.clientX;
    const posY = e.clientY;
    
    cursorDot.style.left = `${posX}px`;
    cursorDot.style.top = `${posY}px`;
    
    cursorOutline.animate({
        left: `${posX}px`,
        top: `${posY}px`
    }, { duration: 400, fill: "forwards" });
});

// Add hover effects to cursor
const interactiveElements = document.querySelectorAll('a, button');
interactiveElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
        cursorOutline.style.width = '50px';
        cursorOutline.style.height = '50px';
        cursorOutline.style.backgroundColor = 'rgba(74, 36, 42, 0.05)'; 
    });
    el.addEventListener('mouseleave', () => {
        cursorOutline.style.width = '40px';
        cursorOutline.style.height = '40px';
        cursorOutline.style.backgroundColor = 'transparent';
    });
});

// 3. Header Sticky State
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// 4. Mobile Menu Toggle
const menuToggle = document.getElementById('menu-toggle');
const navLinks = document.getElementById('nav-links');
const navItems = document.querySelectorAll('.nav-links a');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    const icon = menuToggle.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

navItems.forEach(item => {
    item.addEventListener('click', () => {
        navLinks.classList.remove('active');
        const icon = menuToggle.querySelector('i');
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    });
});

// 5. Initialize Typed.js
new Typed('.typed-text', {
    strings: [
        'Organized.', 
        'Reliable.', 
        'One Step Ahead.'
    ],
    typeSpeed: 60,
    backSpeed: 30,
    backDelay: 2000,
    loop: true
});

// 6. Initialize Swiper.js (Clean carousel)
new Swiper('.mySwiper', {
    slidesPerView: 'auto',
    spaceBetween: 20,
    grabCursor: true,
    autoplay: {
        delay: 4000, 
        disableOnInteraction: false,
    }
});

// 7. Initialize AOS (Animate on Scroll)
AOS.init({
    offset: 50,
    duration: 800,
    easing: 'ease-out-cubic',
    once: true 
});