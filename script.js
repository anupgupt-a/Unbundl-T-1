const carousel = document.getElementById('carouselExample');
const indicators = Array.from(document.querySelectorAll('.indicator'));
const slides = Array.from(document.querySelectorAll('.carousel-item'));
const prevBtn = document.querySelector('.carousel-control.prev');
const nextBtn = document.querySelector('.carousel-control.next');
let currentIndex = 0;
let autoSlideInterval;

function showSlide(index) {
  carousel.querySelector('.carousel-inner').style.transform = `translateX(-${index * 100}%)`;
  indicators.forEach((indicator, i) => {
    indicator.classList.toggle('active', i === index);
  });
}

function prevSlide() {
  currentIndex = (currentIndex === 0) ? slides.length - 1 : currentIndex - 1;
  showSlide(currentIndex);
}

function nextSlide() {
  currentIndex = (currentIndex === slides.length - 1) ? 0 : currentIndex + 1;
  showSlide(currentIndex);
}

function startAutoSlide() {
  autoSlideInterval = setInterval(() => {
    nextSlide();
  }, 3000); // Change interval as needed (milliseconds)
}

function stopAutoSlide() {
  clearInterval(autoSlideInterval);
}

prevBtn.addEventListener('click', () => {
  prevSlide();
  stopAutoSlide();
});
//anup
nextBtn.addEventListener('click', () => {
  nextSlide();
  stopAutoSlide();
});

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showSlide(index);
    stopAutoSlide();
  });
});

carousel.addEventListener('mouseover', stopAutoSlide);
carousel.addEventListener('mouseout', startAutoSlide);

startAutoSlide(); // Start auto-slide on page load
