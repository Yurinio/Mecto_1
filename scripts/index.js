const editbutton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const сlosePopupButton = document.querySelector('.popup__close-img');
const formElement = document.querySelector('.popup__form');

editbutton.addEventListener('click', openPopup)
сlosePopupButton.addEventListener('click', сlosePopup)

function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup__opened')
    const nameInput = document.getElementById('title').textContent
    const jobInput = document.querySelector('.profile__subtitle').textContent
    document.getElementById('name').value = nameInput
    document.getElementById('job').value = jobInput
}
function сlosePopup() {
    popup.classList.remove('popup__opened')
}
function formSubmitHandler(event) {
    event.preventDefault()
    const nameInput = document.getElementById('name').value
    const jobInput = document.getElementById('job').value
    document.getElementById('title').textContent = nameInput
    document.querySelector('.profile__subtitle').textContent = jobInput
    сlosePopup()
}
popup.addEventListener('click', (event) => {
    if (event.target.className === 'popup__container') {
        сlosePopup()
    }
}, false)

formElement.addEventListener('submit', formSubmitHandler); 