// scroll to top button
document.addEventListener("DOMContentLoaded", function () {
  let scrollTopBtn = document.getElementById("scrollTopBtn");

  // Show or hide the button based on scroll position
  window.addEventListener("scroll", function () {
    if (window.scrollY > 300) {
      scrollTopBtn.classList.add("show");
    } else {
      scrollTopBtn.classList.remove("show");
    }
  });

  // Smooth scroll to top on button click
  scrollTopBtn.addEventListener("click", function () {
    let scrollStep = -window.scrollY / 50; // Controls the speed
    let scrollInterval = setInterval(function () {
      if (window.scrollY !== 0) {
        window.scrollBy(0, scrollStep);
      } else {
        clearInterval(scrollInterval);
      }
    }, 20); // Adjust this for a smoother or faster effect
  });
});

// navbar
document.addEventListener("DOMContentLoaded", function () {
  let navbar = document.querySelector(".navbar");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });
});

// counter
document.addEventListener("DOMContentLoaded", function () {
  const counters = document.querySelectorAll(".counter");
  let started = false; // Ensure it only starts once

  function startCounter() {
    counters.forEach((counter) => {
      const target = +counter.getAttribute("data-target");
      let count = 0;
      const speed = target / 100; // Adjust speed for smoother counting

      function updateCounter() {
        count += speed;
        counter.innerText = Math.floor(count);

        if (count < target) {
          requestAnimationFrame(updateCounter);
        } else {
          counter.innerText = target; // Set final number
        }
      }

      updateCounter();
    });
  }

  // Trigger counter only when visible
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !started) {
          startCounter();
          started = true;
        }
      });
    },
    { threshold: 0.5 }
  );

  const statsSection = document.querySelector(".stats");
  if (statsSection) observer.observe(statsSection);
});

// animations
// slide in bottom animation
document.addEventListener("DOMContentLoaded", function () {
  const features = document.querySelectorAll(".slide-in-bottom");

  function revealOnScroll() {
    features.forEach((feature, index) => {
      const featurePosition = feature.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (featurePosition < windowHeight - 100) {
        setTimeout(() => {
          feature.classList.add("show");
        }, index * 300); // Delay each card's animation by 300ms
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// fade-in animation
document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.querySelector(".about-content");

  function revealOnScroll() {
    if (aboutText) {
      const textPosition = aboutText.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textPosition < windowHeight - 150) {
        aboutText.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// pop-in animation
document.addEventListener("DOMContentLoaded", function () {
  const aboutText = document.querySelector(".about-content");
  const aboutImages = document.querySelectorAll(".pop-in");

  function revealOnScroll() {
    // Fade-in for the text
    if (aboutText) {
      const textPosition = aboutText.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (textPosition < windowHeight - 100) {
        aboutText.classList.add("show");
      }
    }

    aboutImages.forEach((image, index) => {
      const imagePosition = image.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (imagePosition < windowHeight - 100) {
        setTimeout(() => {
          image.classList.add("show");
        }, index * 200); // Delay each image's pop-in by 200ms
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// slide-in up animation
document.addEventListener("DOMContentLoaded", function () {
  const menuSection = document.querySelector(".menu-section");

  function revealOnScroll() {
    if (menuSection) {
      const sectionPosition = menuSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight - 100) {
        menuSection.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// slide-in up animation reservation section
document.addEventListener("DOMContentLoaded", function () {
  const reservationSection = document.querySelectorAll(".slide-up");
  const reservationForm = document.querySelector(".reservation-form");

  function revealOnScroll() {
    reservationSection.forEach((element, index) => {
      const position = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        setTimeout(() => {
          element.classList.add("show");
        }, index * 200); // Delay each element by 200ms
      }
    });

    // Form appears last after other elements
    if (reservationForm) {
      const formPosition = reservationForm.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (formPosition < windowHeight - 100) {
        setTimeout(() => {
          reservationForm.classList.add("show");
        }, 600); // Show form after 600ms
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// slide-in up animation for chef section
document.addEventListener("DOMContentLoaded", function () {
  const sectionTitles = document.querySelectorAll(".fade-in");
  const chefCards = document.querySelectorAll(".slide-up");

  function revealOnScroll() {
    // Fade-in for Titles
    sectionTitles.forEach((title) => {
      const position = title.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        title.classList.add("show");
      }
    });

    // Slide-up for Chef Cards (One by One)
    chefCards.forEach((card, index) => {
      const position = card.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (position < windowHeight - 100) {
        setTimeout(() => {
          card.classList.add("show");
        }, index * 200); // Each card appears 200ms after the previous one
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// slide-up animation for testimonials section
document.addEventListener("DOMContentLoaded", function () {
  const testimonialSection = document.querySelector("#testimonial");

  function revealOnScroll() {
    if (testimonialSection) {
      const sectionPosition = testimonialSection.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (sectionPosition < windowHeight - 100) {
        testimonialSection.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the section is already visible
});

// fade-in animation for footer section
document.addEventListener("DOMContentLoaded", function () {
  const footer = document.querySelector(".footer-section");

  function revealOnScroll() {
    if (footer) {
      const footerPosition = footer.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;

      if (footerPosition < windowHeight - 100) {
        footer.classList.add("show");
      }
    }
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Run once in case the footer is already visible
});