export const valid = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const formMessage = document.getElementById('form2-message')
    const formEmail = document.querySelectorAll('.form-email')
    const formPhone = document.querySelectorAll('.form-phone')

    const addInputValidationHandler = (element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D+/g, '')
        })
    }
    addInputValidationHandler(calcSquare)
    addInputValidationHandler(calcCount)
    addInputValidationHandler(calcDay)

    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/[^\-\sа-яА-Я]+/g, '')
    })

    formEmail.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\@\-\.\_\!\*\'\~\w]+/g, '')
        })
    })
    formPhone.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\(\)\-\d]+/g, '')
        })
    })
}
