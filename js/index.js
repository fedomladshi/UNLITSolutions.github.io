$(document).ready(function () {
    let button = $('.burger-menu__button');
    let burger = $('.burger__navigation');
    let button_active = $('.burger-menu__button_active');
    button.click(function () {
        button.toggleClass('burger-menu__button_active');
        burger.toggleClass('active');
    });
    button_active.click(function () {
        button.removeClass('burger-menu__button_active');
        burger.removeClass('active');
    });
});

$('.header-picture').slick({
    autoplay: true,
    autoplaySpeed: 800,
});