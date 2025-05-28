
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thanks for reaching out! We'll get back to you soon.");
    this.reset(); // Clears form after submission
});


