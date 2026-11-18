
//1.

const counter = document.querySelector("#timer_message")

let count = 0

const timer = setInterval(() => {
    count++

    counter.textContent =
        `Повідомлення №${count}`
    counter.style.color = 'red'

    if (count === 5) {
        clearInterval(timer)
    }
}, 1000)



//2.

const boxes = document.querySelectorAll(".animation-container--box")

let size = 50

setInterval(() => {
    size = size === 50 ? 100 : 50
    boxes.forEach((circle) => {
        circle.style.width = `${size}px`
        circle.style.height = `${size}px`

        circle.style.backgroundColor =
            size === 100 ? "red" : "orange"
    })
}, 1000)


//3.
const startButton = document.querySelector("#start-game")
const clickButton = document.querySelector("#click-button")
const scoreText = document.querySelector("#score")
const timeText = document.querySelector("#game-time")
const result = document.querySelector("#game-result")

let score = 0
let time = 10
let gameInterval

startButton.addEventListener("click", () => {
    score = 0
    time = 10

    scoreText.textContent = score
    timeText.textContent = time
    result.textContent = ""

    clickButton.disabled = false
    startButton.disabled = true

    gameInterval = setInterval(() => {
        time--

        timeText.textContent = time

        if (time === 0) {
            clearInterval(gameInterval)

            clickButton.disabled = true
            startButton.disabled = false

            result.textContent = `Game finished! Your score: ${score}`
        }
    }, 1000)
})

clickButton.addEventListener("click", () => {
    score++;

    scoreText.textContent = score
})

//4.

const input = document.querySelector("#user-time")
const button = document.querySelector("#start-timer")
const timerResult = document.querySelector("#timer-result")

button.addEventListener("click", () => {
    const seconds = Number(input.value)

    if (seconds <= 0 || !Number.isInteger(seconds)) {
        timerResult.textContent = "Введіть правильний час!"
        return
    }

    timerResult.textContent = "Таймер запущено!"

    setTimeout(() => {
        timerResult.textContent = "Час вийшов!"
    }, seconds * 1000)
})