window.addEventListener("load", function () {
    const delay = 3000; //ms
    let current = 0;
    let slides;
    let allSlides;
    let slideWidth;
    let slidesCount;
    let maxLeft;

    function changeSlide() {
        current += current > maxLeft ? -slideWidth : current * -1;
        slides.style.left = current + "px";
    }

    if (window.innerWidth < 1152) {
        slides = document.querySelector(".section-dark__container");
        allSlides = document.getElementsByClassName("section-dark__container__person");

        for (let item of allSlides) {
            item.style.width = window.innerWidth;
        }

        slideWidth = window.innerWidth;
        slidesCount = slides.childElementCount;
        maxLeft = (slidesCount - 1) * slideWidth * -1;
        setInterval(changeSlide, delay);
    }
})