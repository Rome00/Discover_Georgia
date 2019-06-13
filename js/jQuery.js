var links = $(".nav-link");
var nav = $("header .navbar-nav");
var navBurger = $("header .navbar-toggler");
var windowPage = $("window");
$(document).ready(function () {
    // hide
    links.click(function () {
        nav.removeClass("open-md-nav");
        navBurger.removeClass("Burgeractive");
    });
});
$(window).scroll(function () {
    nav.removeClass("open-md-nav");
    navBurger.removeClass("Burgeractive");
})