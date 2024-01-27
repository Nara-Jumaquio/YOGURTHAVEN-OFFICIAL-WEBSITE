const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const btns = document.querySelectorAll(".nav-btn");
const slides = document.querySelectorAll(".img-slide");
const contents = document.querySelectorAll(".content");

let currentSlide = 0;
let interval;

function startSlider() {
  interval = setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    sliderNav(currentSlide);
  }, 4000);
}

function stopSlider() {
  clearInterval(interval);
}

menuBtn.addEventListener("click", () => {
  menuBtn.classList.toggle("active");
  navigation.classList.toggle("active");
});

function sliderNav(manual) {
  btns.forEach((btn) => {
    btn.classList.remove("active");
  });

  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  contents.forEach((content) => {
    content.classList.remove("active");
  });

  btns[manual].classList.add("active");
  slides[manual].classList.add("active");
  contents[manual].classList.add("active");
}

btns.forEach((btn, i) => {
  btn.addEventListener("click", () => {
    stopSlider();
    sliderNav(i);
  });
});

startSlider();


// Smooth scroll animation for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});


// Add these functions to your existing script.js

const testimonials = document.querySelector(".testimonial-container");
let currentIndex = 0;

function changeTestimonial(offset) {
    currentIndex = (currentIndex + offset + testimonials.children.length) % testimonials.children.length;
    updateTestimonial();
}

function updateTestimonial() {
    const container = document.querySelector(".testimonial-container");
    const testimonials = container.children;

    for (let i = 0; i < testimonials.length; i++) {
        testimonials[i].style.display = "none";
    }

    testimonials[currentIndex].style.display = "block";
}

// Initial testimonial
updateTestimonial();


// Add this inside your existing script.js

const faqBtn = document.querySelector(".faq-btn");
const faqContent = document.querySelector(".faq-content");
const closeBtn = document.querySelector(".close-btn");

faqBtn.addEventListener("click", () => {
    faqContent.style.display = "block";
});

closeBtn.addEventListener("click", () => {
    faqContent.style.display = "none";
});

