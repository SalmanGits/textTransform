var btn = document.querySelector('#btn1')
var btnn = document.querySelector('#btn2')
var button = document.querySelector('#btn3')
var darkmode = document.querySelector('#flexSwitchCheckDefault')
var dark = document.querySelector('.dark')
var black = document.querySelector('.black')
var butto = document.querySelector('#btn4')

function change() {
    let text = document.querySelector('#text').value.toUpperCase();
    document.querySelector('#div1').textContent = text

}
btn.addEventListener('click', change)
btnn.addEventListener('click', () => {
    var text = document.querySelector('#text').value.toLowerCase()
    document.querySelector('#div2').textContent = text
})
button.addEventListener('click', () => {
    let text = document.querySelector('#text')
    let div = document.querySelector('#div3')
    string = text.value
    // div.textContent = string[0].toUpperCase() + string.slice(1).toLowerCase()
    let capitalize = (string) => string[0].toUpperCase() + string.slice(1).toLowerCase();
    let word = string.split(' ').map(capitalize)
    capitalized = word.join(' ')
    div.textContent = capitalized
})

function enabledark() {
    dark.classList.toggle('light')
}
darkmode.addEventListener('click', enabledark)
darkmode.addEventListener('click', () => {
    black.classList.toggle('white')

})
butto.addEventListener('click', () => {
    document.querySelector('#text').value = ""
})

