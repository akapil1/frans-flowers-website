// Typing effect
const typingText = "Hand-crafted bouquets with heart ♥️";
const typingElement = document.getElementById("typing-text");
let typingIndex = 0;

function typeText() {
  if (typingIndex < typingText.length) {
    typingElement.textContent += typingText.charAt(typingIndex);
    typingIndex++;
    setTimeout(typeText, 55);
  }
}

window.addEventListener("load", typeText);

// TESTIMONIAL CAROUSEL
const track = document.querySelector(".carousel-track");
const testimonials = Array.from(track.children);
// const leftBtn = document.querySelector(".left-btn"); // remove if not using buttons
// const rightBtn = document.querySelector(".right-btn");

let carouselIndex = 0;
const testimonialWidth = testimonials[0].getBoundingClientRect().width + 40; // gap included

// MOVE CAROUSEL
function moveCarousel(idx) {
  track.style.transform = `translateX(-${testimonialWidth * idx}px)`;
}

// AUTOMATIC SCROLL
setInterval(() => {
  carouselIndex = (carouselIndex + 1) % testimonials.length;
  moveCarousel(carouselIndex);
}, 6000);

const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");

  hamburger.addEventListener("click", () => {
    navLinks.classList.toggle("show");
    hamburger.classList.toggle("active");
  });

