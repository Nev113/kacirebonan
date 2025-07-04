const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-menu a");
navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
    navMenu.classList.remove("active");
    hamburger.classList.remove("active");
  }
});

const slideImagesTopeng = [
  {
    src: "./assets/topeng-panji.png",
    alt: "Topeng Panji",
    text: "Topeng Panji",
  },
  {
    src: "./assets/topeng-tumenggung.png",
    alt: "Topeng Tumenggung",
    text: "Topeng Tumenggung",
  },
  {
    src: "./assets/topeng-samba.png",
    alt: "Topeng Samba",
    text: "Topeng Samba",
  },
];

const slideImagesWayang = [
  {
    src: "./assets/wayang-kulit-1.jpg",
    alt: "Wayang Kulit Cirebon - Tokoh Utama",
  },
  {
    src: "./assets/wayang-kulit-2.webp",
    alt: "Wayang Kulit Cirebon - Punakawan",
  },
  {
    src: "./assets/wayang-kulit-3.jpg",
    alt: "Wayang Kulit Cirebon - Raksasa",
  },
];

let currentSlideIndexTopeng = 0;
let currentSlideIndexWayang = 0;

function initializeTopengSliders() {
  const sliders = document.querySelectorAll(".slide");

  sliders.forEach((slider, sliderIndex) => {
    const slideContent = slider.querySelector(".slide-content");
    const slideButtons = slider.querySelectorAll(".slide-btn div");
    const slideText = slider.querySelector(".slide-text");

    if (!slideContent || !slideButtons.length || !slideText) return;

    slideButtons[currentSlideIndexTopeng].classList.add("active");

    slideButtons.forEach((button, buttonIndex) => {
      button.addEventListener("click", () => {
        slideButtons.forEach((btn) => btn.classList.remove("active"));

        button.classList.add("active");

        const selectedImage = slideImagesTopeng[buttonIndex];
        if (selectedImage) {
          slideContent.src = selectedImage.src;
          slideContent.alt = selectedImage.alt;
          slideText.textContent = selectedImage.text;
        }

        currentSlideIndexTopeng = buttonIndex;
      });
    });
  });
}

function initializeWayangSliders() {
  const sliders = document.querySelectorAll(".slideWayang");

  sliders.forEach((slider, sliderIndex) => {
    const slideContent = slider.querySelector(".slide-content");
    const slideButtons = slider.querySelectorAll(".slide-btn div");
    const slideText = slider.querySelector(".slide-text");

    if (!slideContent || !slideButtons.length || !slideText) return;

    slideButtons[currentSlideIndexWayang].classList.add("active");

    slideButtons.forEach((button, buttonIndex) => {
      button.addEventListener("click", () => {
        slideButtons.forEach((btn) => btn.classList.remove("active"));

        button.classList.add("active");

        const selectedImage = slideImagesWayang[buttonIndex];
        if (selectedImage) {
          slideContent.src = selectedImage.src;
          slideContent.alt = selectedImage.alt;
          if (slideText) {
            slideText.textContent = selectedImage.text;
          }
        }

        currentSlideIndexWayang = buttonIndex;
      });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initializeTopengSliders();
  initializeWayangSliders();
});
