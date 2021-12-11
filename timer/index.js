const hourElement = document.querySelector('.hour');
const minuteElement = document.querySelector('.minute');
const secondElement = document.querySelector('.second');

const startButton = document.querySelector('.start')
const waitButton = document.querySelector('.wait')
const resetButton = document.querySelector('.reset')

startButton.addEventListener('click', () => {
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
})

waitButton.addEventListener("click", () => {
    clearInterval(interval)
})

resetButton.addEventListener("click", () => {
    clearInterval(interval)
    clearFields()
})

function clearFields() {
    hour = 00
    minute = 00
    second = 00
    hourElement.innerHTML = "00"
    minuteElement.innerHTML = "00"
    secondElement.innerHTML = "00"
}

let hour = 00,
    minute = 00,
    second = 00,
    interval

function startTimer() {
    second++
    if (second > 59) {
        minute++
        minuteElement.innerHTML = "0" + minute
        second = 0
        secondElement.innerHTML = "0" + second
    }

    if (minute < 9) {
        minuteElement.innerHTML = "0" + minute
    }
    if (minute > 9) {
        minuteElement.innerHTML = minute
    }
    if (minute > 59) {
        hour++
        hourElement.innerHTML = "0" + hour
        minute = 0
        minuteElement.innerHTML = "0" + minute

    }

}