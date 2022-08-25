var swiper = new Swiper(".swiper1",{
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 10,
    loop: true,
    loopFillGroupWidthBlank: true,
    // centeredSlides: true,

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 5,
        }
    },
    navigation: {
        nextEl: ".btn-next1",
        prevEl: ".btn-prev1"
    }
});

var swiper = new Swiper(".swiper2",{
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 26,
    loop: true,
    loopFillGroupWidthBlank: true,
    // centeredSlides: true,

    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 2,
        }
    },
    navigation: {
        nextEl: ".btn-next2",
        prevEl: ".btn-prev2"
    }
});

var swiper = new Swiper(".swiper3",{
    observer: true,
    observeParents: true,
    slidesPerView: 1,
    spaceBetween: 20,
    loop: true,
    loopFillGroupWidthBlank: true,
    centeredSlides: true,

    pagination: {
        el: ".swiper-pagination3",
        type: "bullets",
        clickable: true,
    },
    breakpoints: {
        640: {
            slidesPerView: 1,
        },
        1280: {
            slidesPerView: 1.92,
        }
    },
    navigation: {
        nextEl: ".btn-next3",
        prevEl: ".btn-prev3"
    }
});