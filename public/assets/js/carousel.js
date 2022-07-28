'use strict';

(function initCarousel() {
  
  const carousel = document.querySelector('.carousel');
  const autoplay = carousel.dataset.autoplay == 'true';
  const interval = carousel.dataset.interval || 5000;
  const currentSlide = Number(carousel.dataset.currentSlide) || 0;
  const slides = carousel.querySelectorAll('input[type="radio"]');

  if (!autoplay) return;

  const nextSlide = slides[currentSlide + 1] || slides[0];
  nextSlide.checked = true;
  carousel.dataset.currentSlide = nextSlide.value;

  let carouselTimer;
  clearTimeout(carouselTimer);
  carouselTimer = setTimeout(initCarousel,interval);
})();
