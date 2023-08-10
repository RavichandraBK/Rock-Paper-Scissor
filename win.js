let popUp = document.getElementsByClassName("pop-up-btn");

popUp[0].children[0].addEventListener('click', rules)

document.getElementsByClassName("win-btns")[0].children[0].addEventListener('click', rules)
document.getElementsByClassName("win-replay")[0].addEventListener('click', () => {
    location.href = 'index.html';
    localStorage.setItem('mcScore', '0')
    localStorage.setItem('humScore', '0')
})
function rules() {
    popUp[0].classList.toggle("trans");
    console.log("clicked")
}