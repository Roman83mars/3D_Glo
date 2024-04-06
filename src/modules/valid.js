export const valid = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')
    const formMessage = document.getElementById('form2-message')
    const formEmail = document.querySelectorAll('.form-email')
    const formPhone = document.querySelectorAll('.form-phone')
    const userName = document.querySelectorAll('[name="user_name"]')

    const addInputValidationHandler = (element) => {
        element.addEventListener('input', () => {
            element.value = element.value.replace(/\D+/g, '')
            if (element.value !== '') {
                element.classList.add('success')
            }
        })
    }
    addInputValidationHandler(calcSquare)
    addInputValidationHandler(calcCount)
    addInputValidationHandler(calcDay)

    formMessage.addEventListener('input', () => {
        formMessage.value = formMessage.value.replace(/[^\-\sа-яА-Я]+/g, '')
        if (formMessage.value !== '') {
            formMessage.classList.add('success')
        }
    })

    formEmail.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\@\-\.\_\!\*\'\~\w]+/g, '')
            if (input.value !== '') {
                input.classList.add('success')
            }
        })
    })
    formPhone.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\+\(\)\-\d]+/g, '')
            if (input.value !== '') {
                input.classList.add('success')
            }
        })
    })
    userName.forEach((input) => {
        input.addEventListener('input', () => {
            input.value = input.value.replace(/[^\sа-яА-Я]+/g, '')
            if (input.value !== '') {
                input.classList.add('success')
            }
        })
    })
}
