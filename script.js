$(function () {
    $(".owl-carousel").owlCarousel({
        items: 6,
        margin: 15,
        loop: true,
        autoplay: true,
        autoplayTimeout: 5000,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            },
            992: {
                items: 5
            },
            1200: {
                items: 6
            }
        }
    })
});
