const slider = document.querySelector(".slider");
const slides = document.querySelector(".slides");
const cards = document.querySelectorAll(".card");

let currentIndex = 0;
const cardWidth = cards[0].offsetWidth + 8; // Card width + gap
let touchStartX = 0;
let touchEndX = 0;

// Function to update slide position
function updateSlide() {
    slides.style.transform = `translateX(-${currentIndex * cardWidth}px)`;
}

// Slide left
function slideLeft() {
    if (currentIndex < cards.length - 3) {
        currentIndex++;
        updateSlide();
    }
}

// Slide right
function slideRight() {
    if (currentIndex > 0) {
        currentIndex--;
        updateSlide();
    }
}

// Handle touch start
slider.addEventListener("touchstart", (e) => {
    touchStartX = e.touches[0].clientX;
});

// Handle touch move
slider.addEventListener("touchmove", (e) => {
    touchEndX = e.touches[0].clientX;
});

// Handle touch end (detect swipe direction)
slider.addEventListener("touchend", () => {
    if (touchStartX - touchEndX > 50) {
        slideLeft(); // Swipe left to move right
    } else if (touchEndX - touchStartX > 50) {
        slideRight(); // Swipe right to move left
    }
});

// Optional: Add click buttons for navigation
document.getElementById("left-btn").addEventListener("click", slideRight);
document.getElementById("right-btn").addEventListener("click", slideLeft);
