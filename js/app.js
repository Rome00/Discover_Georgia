/* $(document).ready(function () {
    $(window).scroll(function () {

        console.log(scroll);
        var Topscroll = $(window).scrollTop();
        if (Topscroll >= 100) {
            $('header').addClass('fixed');
        } else {
            $('header').removeClass('fixed');
        }
    });
}); */

const header = document.querySelector("header");
const navBox = document.querySelector("header .navbar-nav");
const burger = document.querySelector("header .navbar-toggler");

burger.addEventListener("click", () => {
    // burger animation
    burger.classList.toggle("Burgeractive");
    if (header.clientWidth <= 992 && header.clientWidth >= 576) {
        navBox.classList.toggle("open-md-nav");
    } else {
        navBox.classList.toggle("open-sm-nav");
    }
    console.log(header.clientWidth);
});

