export const valid = () => {
    const calcSquare = document.querySelector('.calc-square')
    const calcCount = document.querySelector('.calc-count')
    const calcDay = document.querySelector('.calc-day')

    calcSquare.addEventListener('input', () => {
        calcSquare.value = calcSquare.value.replace(/\D+/, '')
    })
    calcCount.addEventListener('input', () => {
        calcCount.value = calcCount.value.replace(/\D+/, '')
    })
    calcDay.addEventListener('input', () => {
        calcDay.value = calcDay.value.replace(/\D+/, '')
    })


}
