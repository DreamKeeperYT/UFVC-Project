// Highlight active link dynamically
const currentLocation = location.href;
const menuItems = document.querySelectorAll('nav ul li a');
menuItems.forEach(link => {
    if (link.href === currentLocation) {
        link.classList.add('active');
    }
});
// Highlight the active nav link
document.querySelectorAll('nav ul li a').forEach(link => {
    if (link.href === window.location.href) {
        link.classList.add('active');
    }
});
// Optional: Smooth scroll for anchors
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e){
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});