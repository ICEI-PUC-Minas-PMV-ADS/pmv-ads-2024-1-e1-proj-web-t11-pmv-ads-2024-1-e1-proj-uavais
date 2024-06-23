document.addEventListener('DOMContentLoaded', function () {
    const carouselInner = document.querySelector('.carousel-inner');
    const carouselItems = document.querySelectorAll('.carousel-item');
    let currentIndex = 0;

    function moveToNextSlide() {
        currentIndex = (currentIndex + 1) % carouselItems.length;
        const offset = -currentIndex * 100;
        carouselInner.style.transform = `translateX(${offset}%)`;
    }

    setInterval(moveToNextSlide, 3000); // Muda a cada 3 segundos
});