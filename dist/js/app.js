/* Hamburger menu start */
$(document).on(`click`, `nav #hamburger`, function () {
    $(`nav #menu`).toggleClass(`invisible`);
    $(this).toggleClass(`active`);
})
/* Hamburger menu end */

/* Navbar fixed start */
$(window).on(`scroll`, function() {
    let scrollTop = $(window).scrollTop()
    let navbarScroll = $(`nav`).scrollTop() + 10

    if (scrollTop > navbarScroll) {
        $(`nav`).addClass(`navbar-fixed`)
    }else {
        $(`nav`).removeClass(`navbar-fixed`)
    }
})
/* Navbar fixed end */