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
const scrollPosition = () => {
    let scrollTop = $(window).scrollTop()
    let navbarScroll = $(`nav`).scrollTop() + 10

    if (scrollTop > navbarScroll) {
        $(`nav`).addClass(`navbar-fixed`)
        $(`#back-to-top`).addClass(`visible`).removeClass(`invisible`)
    }else {
        $(`nav`).removeClass(`navbar-fixed`)
        $(`#back-to-top`).removeClass(`visible`).addClass(`invisible`)
    }
}

scrollPosition()

$(window).on(`scroll`, function() {
    scrollPosition()
})
/* Navbar fixed end */

/* Back to top start */
$(document).on(`click`, `#back-to-top`, function() {
    $(window).scrollTop(0)
})
/* Back to top end */

/* Dark or light mode start */
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}

$(document).on(`click`, `#dark-or-light`, function() {
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        localStorage.theme = 'light'
        $(`html`).removeClass(`dark`)
    } else {
        $(`html`).addClass(`dark`)
        localStorage.theme = 'dark'
    }
})
/* Dark or light mode end */