const editbutton = document.querySelector('.profile__edit-button');
const popup = document.querySelector('.popup');
const ClosePopupButton = document.querySelector('.popup__close-img');
const popupForm = document.querySelector('.popup__form');

editbutton.addEventListener('click', openPopup)
ClosePopupButton.addEventListener('click', ClosePopup)

function openPopup(event) {
    event.preventDefault()
    popup.classList.add('popup__opened')

    // Set title and description
    const title = document.getElementById('title').innerHTML
    const description = document.querySelector('.profile__subtitle').innerHTML

    document.getElementById('headingTitle').value = title
    document.getElementById('headingDecription').value = description
}
function ClosePopup() {
    popup.classList.remove('popup__opened')
}

function saveData(event) {
    event.preventDefault()
    const title = document.getElementById('headingTitle').value
    const description = document.getElementById('headingDecription').value

    document.getElementById('title').innerHTML = title
    document.querySelector('.profile__subtitle').innerHTML = description
    ClosePopup()
}

popup.addEventListener('click', (event) => {
    if (event.target.className === 'popup__container') {
        ClosePopup()
    }
}, false)

popupForm.addEventListener('submit', saveData)