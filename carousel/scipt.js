const buttons = document.querySelectorAll("#buttons button")
const counter = document.querySelector("#counter")
let count = 0

buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        if (button.id == "Lower") {
            count--
        } else if (button.id == "Add") {
            count++
        }
        counter.textContent = count

        if (parseInt(counter.textContent) < 0) {
            counter.style.color = "red"
        } else {
            counter.style.color = "green"
        }
    })
})










