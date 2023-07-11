console.log("Script Connected..")

// Generate a Random Color

let intervalId

const randomColor = function () {
    const hex = "0123456789ABCDEF"
    let color = '#'

    for (let i = 0; i < 6; i++) {
        color += hex[Math.floor(Math.random() * 16)]
    }
    return color
}
// console.log(randomColor())

const startChangingColor = function () {

    if (!intervalId) {
        intervalId = setInterval(changeBgColor, 1000)
    }
    function changeBgColor() {
        const colorChange = document.body.style.backgroundColor = randomColor()
        // console.log(colorChange)
        heading.innerHTML = `Current Color : ${colorChange}`
    }
}

const stopChangingColor = function () {
    clearInterval(intervalId)
    intervalId = null
}

document.querySelector('#start').addEventListener('click', startChangingColor)

document.querySelector('#stop').addEventListener('click', stopChangingColor)

const heading = document.querySelector('h2')