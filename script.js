// document.getElementById('contact-form').addEventListener('submit', function(e) {
//     e.preventDefault();

//     const name = document.getElementById('name').value;
//     const email = document.getElementById('email').value;
//     const message = document.getElementById('message').value;

//     if (name && email && message) {
//         alert('Thank you for your message! We will get back to you soon.');
//         document.getElementById('contact-form').reset(); // Reset the form after submission
//     } else {
//         alert('Please fill in all fields.');
//     }
// });

document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form from submitting the traditional way
    
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Validate form data
    if (!formData.name || !formData.email || !formData.message) {
        alert('All fields are required.');
        return;
    }

    // Send data as JSON using Fetch API (AJAX)
    fetch('https://formspree.io/f/mgvaebyy', { // Replace with your Formspree endpoint URL
        method: 'POST',
        headers: {
            'Content-Type': 'application/json' // Send data as JSON
        },
        body: JSON.stringify(formData) // Convert formData to JSON string
    })
    .then(response => {
        if (response.ok) {
            alert('Message sent successfully!');
            document.getElementById('contact-form').reset(); // Reset the form after successful submission
        } else {
            throw new Error('Failed to send message.');
        }
    })
    .catch(error => {
        alert(error.message);
    });
});

$(document).ready(function() {
    $('.project-slider').slick({
        dots: true,              // Show navigation dots
        infinite: true,          // Loop through items
        speed: 500,              // Speed of sliding animation
        slidesToShow: 1,         // Number of slides to show at once
        slidesToScroll: 1,       // Number of slides to scroll at once
        autoplay: true,          // Enable autoplay
        autoplaySpeed: 3000,     // Time between slide transitions
        arrows: true,            // Show arrows to navigate
        prevArrow: '<button type="button" class="slick-prev">Previous</button>',
        nextArrow: '<button type="button" class="slick-next">Next</button>',
        responsive: [
            {
                breakpoint: 768,  // For smaller screens
                settings: {
                    slidesToShow: 1
                }
            }
        ]
    });
});


// let slideIndex = 0;

// function showSlide(index) {
//     const slides = document.querySelector('.slides');
//     const totalSlides = document.querySelectorAll('.slide').length;
//     slideIndex = (index + totalSlides) % totalSlides;
//     slides.style.transform = `translateX(-${slideIndex * 100}%)`;
// }

// document.querySelector('.slick-prev').addEventListener('click', () => showSlide(slideIndex - 1));
// document.querySelector('.slick-next').addEventListener('click', () => showSlide(slideIndex + 1));

// setInterval(() => showSlide(slideIndex + 1), 3000); // Auto slide every 3 seconds

