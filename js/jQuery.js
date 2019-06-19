var links = $(".nav-link");
var nav = $("header .navbar-nav");
var navBurger = $("header .navbar-toggler");
$(document).ready(function () {
    // Smooth scrolling
    $('.in-link').click(function (e) {
        e.preventDefault();
        $("body,html").animate(
            {
                scrollTop: $(this.hash).offset().top
            },
            1000
        );
    });
});
$(window).scroll(function () {
    nav.removeClass("open-md-nav");
    navBurger.removeClass("Burgeractive");
})
$(".in-link").click(function (e) {
    e.preventDefault();
    nav.removeClass("open-sm-nav");
    navBurger.removeClass("Burgeractive");
});