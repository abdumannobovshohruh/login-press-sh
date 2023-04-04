let up = document.querySelector(".up")
let menu = document.querySelector(".menu")
let zero = document.querySelector(".zero")
up.onclick = () => {
    menu.style.display = "block"
}
zero.onclick = () => {
    menu.style.display = "none"
}