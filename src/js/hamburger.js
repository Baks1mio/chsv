window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.nav_menu'),
        menuItem = document.querySelectorAll('.nav_menu_link'),
        hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('nav_menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('nav_menu_active');
        })
    })
})