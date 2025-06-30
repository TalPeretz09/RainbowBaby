//Image slide logic
//-----------------
document.addEventListener('DOMContentLoaded', function () {
  let slideIndex = 0;
  const slides = document.querySelectorAll('.slide');

  function showSlides() {
    slides.forEach(slide => slide.classList.remove('active'));
    slideIndex = (slideIndex + 1) % slides.length;
    slides[slideIndex].classList.add('active');
  }

  slides[slideIndex].classList.add('active'); // Show first slide
  setInterval(showSlides, 3500); // Change every 3 seconds
});