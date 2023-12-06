/* Hamburger menu start */
$(document).on(`click`, `nav #hamburger`, function () {
    $(`nav #menu, div#backdrop-navbar`).toggleClass(`invisible`);
    $(this).toggleClass(`active`);
})

$(document).on(`click`, `div#backdrop-navbar`, function () {
    $(`nav #menu, div#backdrop-navbar`).addClass(`invisible`);
    $(`nav #hamburger`).removeClass(`active`);
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