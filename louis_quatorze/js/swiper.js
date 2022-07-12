var swiper = new Swiper(".swiper-container",{
    slidesPerView: 1.82,
    loop: false,
    loopFillGroupWidthBlank: false,
    centeredSlides: false,
    pagination: {
        el: ".swiper-pagination",
        type: "bullets",
        clickable: true,
        type: "fraction"
    },

    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
    }
});