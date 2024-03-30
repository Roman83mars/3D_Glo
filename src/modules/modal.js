export const modal = () => {
    const modal = document.querySelector('.popup')
    const buttons = document.querySelectorAll('.popup-btn')
    const modalContent = modal.querySelector('.popup-content')
    const width = document.documentElement.clientWidth

    buttons.forEach(btn => {
        btn.addEventListener('click', () => {
            modal.style.display = 'block'
            if (width > 768) {
                let count = 0
                let idInterval
                const modalAnimate = () => {
                    count++
                    idInterval = requestAnimationFrame(modalAnimate)

                    if (count / 100 <= 1) {
                        modal.style.opacity = count / 100
                        modalContent.style.left = (count - 62) + '%'
                    } else {
                        cancelAnimationFrame(modalAnimate)
                    }

                }
                modalAnimate()
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
