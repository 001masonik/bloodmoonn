  $(function () {
    let header = $("#header");
    let header_top = $("#header_top");
    let headerH = header.height();

    $(window).on("scroll", function () {
        let scrollPos = $(this).scrollTop();
        if (scrollPos > headerH) {
            header_top.addClass("fixed");
        } else {
            header_top.removeClass("fixed");
        }
    });
});


