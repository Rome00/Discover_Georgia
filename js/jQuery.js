var links = $(".in-link");
$(document).ready(function () {
    // Smooth scrolling
    links.click(function (e) {
        e.preventDefault();
        $("body,html").animate(
            {
                scrollTop: $(this.hash).offset().top 
            },
            1000
        );
    });
});