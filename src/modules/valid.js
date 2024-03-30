export const valid = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const formMessage = document.getElementById('form2-message')
    const formEmail = document.querySelectorAll('.form-email')
    const formPhone = document.querySelectorAll('.form-phone')

    calcSquare.addEventListener('input', () => {
        calcSquare.value = calcSquare.value.replace(/\D+/, '')
    })
    calcCount.addEventListener('input', () => {
        calcCount.value = calcCount.value.replace(/\D+/, '')
    })
    calcDay.addEventListener('input', () => {
        calcDay.value = calcDay.value.replace(/\D+/, '')
    })

    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/[^\-\sа-яА-Я]+/, '')
    })

    formEmail.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\@\-\.\_\!\*\'\~\w]+/, '')
        })
    })
    formPhone.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\(\)\-\d]+/, '')
        })
    })
}
