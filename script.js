// script.js
const toggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

toggle.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});




const sliderItems = document.querySelectorAll('.slider-item');
let currentIndex = 0;

function changeSlide() {
    sliderItems.forEach(item => item.classList.remove('active'));
    currentIndex = (currentIndex + 1) % sliderItems.length;
    sliderItems[currentIndex].classList.add('active');
}

setInterval(changeSlide, 3000); // Change slide every 3 seconds


document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message! We will get back to you soon.');
        document.querySelector('form').reset();
    } else {
        alert('Please fill out all fields before submitting.');
    }
});


// Array of images (you can replace these with the actual paths to your images)
const lake = [
    'event1.jpg',
    'event2.jpg',
    'event3.jpg',
    'event4.jpg',
    'event5.jpg',
    'event6.jpg'
];

// Get the carousel container and all image elements
const carouselContainer = document.querySelector('.carousel-images');
const carouselImages = document.querySelectorAll('.carousel-image');

// Function to randomly swap images
function randomizeCarouselImages() {
    // Shuffle images array
    let shuffledImages = [...lake];
    shuffledImages = shuffledImages.sort(() => Math.random() - 0.5);  // Random shuffle

    // Update each carousel image with a new random image
    carouselImages.forEach((image, index) => {
        lake.src = shuffledImages[index];
    });

    // Apply smooth transition to the carousel container (if needed)
    carouselContainer.style.transition = 'transform 1s ease-in-out';
    carouselContainer.style.transform = 'translateX(-100%)'; // Transition effect
    setTimeout(() => {
        carouselContainer.style.transition = 'none';
        carouselContainer.style.transform = 'translateX(0)';
    }, 1000);
}

// Change the images every 3 seconds
setInterval(randomizeCarouselImages, 3000);

// Initialize the carousel with random images
randomizeCarouselImages();


// Get the slider container and images
const slider = document.querySelector('.slider');
const images = document.querySelectorAll('.slider-image');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');

// Initialize the current slide index
let currentSlide = 0;

// Function to show the current slide
function showSlide(index) {
    // Ensure the index is within bounds
    if (index >= images.length) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = images.length - 1;
    } else {
        currentSlide = index;
    }

    // Move the slider container to show the current slide
    slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

// Function to go to the previous slide
function prevSlide() {
    showSlide(currentSlide - 1);
}

// Function to go to the next slide
function nextSlide() {
    showSlide(currentSlide + 1);
}

// Event listeners for the navigation buttons
prevButton.addEventListener('click', prevSlide);
nextButton.addEventListener('click', nextSlide);

// Automatically change slides every 5 seconds
setInterval(nextSlide, 5000);

// Initial call to display the first slide
showSlide(currentSlide);





document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.pattern-container');
    const shapes = 12; // Number of shapes to create

    for (let i = 0; i < shapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        container.appendChild(shape);
    }
});



document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('.pattern-container');
    const shapes = 12;

    for (let i = 0; i < shapes; i++) {
        const shape = document.createElement('div');
        shape.classList.add('shape');
        container.appendChild(shape);

        // Apply a subtle animation using Velocity.js
        Velocity(shape, { rotateZ: '360deg' }, { duration: 1000, loop: true });
    }
});


document.addEventListener('DOMContentLoaded', function() {
    const items = document.querySelectorAll('.slider-item');
    let currentIndex = 0;
    
    function showRandomSlide() {
        // Remove active class from current item
        items[currentIndex].classList.remove('active');
        
        // Generate random next index
        let nextIndex;
        do {
            nextIndex = Math.floor(Math.random() * items.length);
        } while(nextIndex === currentIndex);
        
        // Add active class to new random item
        items[nextIndex].classList.add('active');
        currentIndex = nextIndex;
    }

    // Initial random start
    items[currentIndex].classList.add('active');
    
    // Start auto-advance
    setInterval(showRandomSlide, 3000);
});


document.querySelector('.cta-btn').addEventListener('click', function() {
    window.location.href = 'SignUp.html'; // Replace 'SignUp.html' with the actual URL if necessary
  });




  document.querySelectorAll('.top-navbar a').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust offset for fixed navbar
                behavior: 'smooth'
            });
        }
    });
});
