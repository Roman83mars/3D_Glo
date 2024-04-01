import { animate } from './helpers'
export const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalContent = modal.querySelector('.popup-content')
    const width = document.documentElement.clientWidth

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (width > 768) {
                animate({
                    duration: 1000,
                    timing(timeFraction) {
                        return timeFraction;
                    },
                    draw(progress) {
                        modal.style.opacity = progress
                        modalContent.style.left = (progress * 100 - 62) + '%'
                    }
                });
            }
        })
    })

    modal.addEventListener('click', (e) => {
        if (!e.target.closest('.popup-content') ||
            e.target.classList.contains('popup-close')) {
            modal.style.display = 'none'
        }
    })
}
