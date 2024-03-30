export const menu = () => {
    const menuBtn = document.querySelector('.menu')
    const menu = document.querySelector('menu')
    const closeBtn = menu.querySelector('.close-btn')
    const menuItems = menu.querySelectorAll('ul>li>a')
    const body = document.querySelector('body')

    const toggleMenu = (e) => {
        if (e.target.closest('.menu') ||
            e.target.closest('.close-btn') ||
            e.target.closest('menu>ul>li>a')) {
            menu.classList.toggle('active-menu')
        } else if (menu.classList.contains('active-menu') &&
            !e.target.closest('menu')) {
            menu.classList.remove('active-menu')
        }
    }
    body.addEventListener('click', toggleMenu)
}
