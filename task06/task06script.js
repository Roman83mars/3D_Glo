'use strict'

const data = new Date()
const body = document.querySelector('body')
const dateElem = document.createElement('div')
const newYear = new Date(2025, 0, 1)

let waitingForNewYear = Math.ceil((newYear - data) / 24 / 60 / 60 / 1000)

let timeOfDay

let dayType

if (waitingForNewYear == 1) {
    dayType = 'день'
} else if (waitingForNewYear < 5) {
    dayType = 'дня'
} else if (waitingForNewYear < 20) {
    dayType = 'дней'
} else if (waitingForNewYear % 10 == 1) {
    dayType = 'день'
} else if (waitingForNewYear % 10 < 5) {
    dayType = 'дня'
} else {
    dayType = 'дней'
}

if (data.getHours() < 5) {
    timeOfDay = 'Доброй ночи'
} else if (data.getHours() < 12) {
    timeOfDay = 'Доброе утро'
} else if (data.getHours() < 18) {
    timeOfDay = 'Добрый день'
} else if (data.getHours() < 23) {
    timeOfDay = 'Добрый вечер'
} else {
    timeOfDay = 'Доброй ночи'
}

dateElem.innerHTML = `
<p>${timeOfDay}</p>
<p>Сегодня: ${data.toLocaleString("ru", { weekday: 'long' })}</p>
<p>Текущее время: ${data.toLocaleString('en-US', {
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    hour12: true
})}</p>
<p>До нового года осталось ${waitingForNewYear} ${dayType}</p>
`
body.append(dateElem)

