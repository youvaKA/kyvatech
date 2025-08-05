document.addEventListener('DOMContentLoaded', function() {
    const mobileMenu = document.getElementById('mobile-menu');
    const mainNav = document.querySelector('.main-nav');

    if (mobileMenu && mainNav) {
        mobileMenu.addEventListener('click', function() {
            mobileMenu.classList.toggle('open');
            mainNav.classList.toggle('open');
        });
    }
});