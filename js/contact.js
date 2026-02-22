const contactForm = document.getElementById('contactForm');
if(contactForm){
    contactForm.addEventListener('submit', function(e){
        e.preventDefault();
        const message = document.getElementById('contactMessage');
        message.textContent = "Thank you! Your message has been sent.";
        message.style.color = 'green';
        contactForm.reset();
    });
}