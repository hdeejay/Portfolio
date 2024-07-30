document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;

    darkModeToggle.addEventListener('click', function() {
        body.classList.toggle('dark-mode');
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing effect
    const texts = [
        "I'm interested in Software Engineering, AI, and Machine Learning.",
        "I have experience in Full-Stack Development, Databases, and UI."
    ];
    let textIndex = 0;
    let charIndex = 0;
    const typingText = document.getElementById('typing-text');

    function type() {
        if (textIndex < texts.length) {
            if (charIndex < texts[textIndex].length) {
                typingText.innerHTML += texts[textIndex].charAt(charIndex);
                charIndex++;
                setTimeout(type, 100); // Adjust typing speed for smoothness
            } else {
                charIndex = 0;
                textIndex++;
                typingText.innerHTML += '<br>'; // Add a line break between sentences
                setTimeout(type, 500); // Pause before starting the next sentence
            }
        }
    }

    type();
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault(); // Prevent default form submission
    alert('Message sent!'); // Replace with your desired functionality
    // Here you can add code to send the form data to your server or email
});