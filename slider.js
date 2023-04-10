window.addEventListener("load", function () {
    const delay = 3000; //ms

    const slides = document.querySelector(".section-dark__container");
    const slideWidth = document.querySelector(".section-dark__container__person").offsetWidth;
    const slidesCount = slides.childElementCount;
    const maxLeft = (slidesCount - 1) * slideWidth * -1;

    let current = 0;

    function changeSlide() {
        current += current > maxLeft ? -slideWidth : current * -1;
        slides.style.left = current + "px";
    }

    if (window.innerWidth < 1152) {
        setInterval(changeSlide, delay);
    }

})