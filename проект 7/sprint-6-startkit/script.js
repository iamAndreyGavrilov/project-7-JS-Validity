const initialCards = [{
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    },
    {
        name: 'Нургуш',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/khrebet-nurgush.jpg'
    },
    {
        name: 'Тулиновка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/tulinovka.jpg'
    },
    {
        name: 'Остров Желтухина',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/zheltukhin-island.jpg'
    },
    {
        name: 'Владивосток',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/vladivostok.jpg'
    }
];

const placesList = document.querySelector('.places-list')

/* добавление карточек из массива */

function addCards(name, link) {

    const placeCard = document.createElement('div')
    const placeCardImage = document.createElement('div')
    const placeCardDeleteIcon = document.createElement('button')
    const placeCardDescription = document.createElement('div')
    const placeCardName = document.createElement('h3')
    const placeCardLikeIcon = document.createElement('button')

    placeCard.classList.add('place-card')
    placeCardImage.classList.add('place-card__image')
    placeCardImage.style.backgroundImage = `url(${link})`
    placeCardImage.setAttribute('data-image', link)

    placeCardDeleteIcon.classList.add('place-card__delete-icon')
        /* удаление карточки */
    placeCardDeleteIcon.addEventListener('click', function(event) {
        event.target.closest('.place-card').remove();
    })
    placeCardDescription.classList.add('place-card__description')
    placeCardName.classList.add('place-card__name')
    placeCardName.textContent = name
    placeCardLikeIcon.classList.add('place-card__like-icon')
    placeCardLikeIcon.addEventListener('click', iconLike)

    placesList.appendChild(placeCard)
    placeCard.appendChild(placeCardImage)
    placeCardImage.appendChild(placeCardDeleteIcon)
    placeCard.appendChild(placeCardDescription)
    placeCardDescription.appendChild(placeCardName)
    placeCardDescription.appendChild(placeCardLikeIcon)
    return placeCard
}



initialCards.forEach(item => {
    addCards(item.name, item.link)
})

/* открытие карточки */

const popup = document.querySelector('.popup')
const popupOpen = document.querySelector('.user-info__button')
popupOpen.addEventListener('click', openClose)


function openClose() {
    popup.classList.toggle('popup_is-opened')

}


/* закрытие карточки */

const popupClose = document.querySelector('.popup__close')
popupClose.addEventListener('click', openClose)

/* лайк карточки */

const cardLike = document.querySelectorAll('.place-card__like-icon')
cardLike.forEach(function(item) {
    item.addEventListener('click', iconLike)
})

function iconLike(event) {
    event.target.classList.toggle('place-card__like-icon_liked')
}

/* добавление новой карточки */

const popupForm = document.forms.new

function render(name, link) {
    const placeCard = addCards(name, link)
    placesList.appendChild(placeCard)
}

popupForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const popupForm = event.currentTarget;
    const name = popupForm.elements.name
    const link = popupForm.elements.link
    render(name.value, link.value)
    name.value = ''
    link.value = ''
    openClose()
})
const popupFormEdit = document.forms.new_edit

const popupEdit = document.querySelector('.edit')
const editClose = document.querySelector('.edit_close')
const btnEdit = document.querySelector('.user-info__change')

const infoName = document.querySelector('.user-info__name')
const infoJob = document.querySelector('.user-info__job')

function openCloseEdit() {
    const nameEdit = popupFormEdit.elements.name_edit
    const linkEdit = popupFormEdit.elements.link_edit
    nameEdit.value = infoName.textContent
    linkEdit.value = infoJob.textContent
    popupEdit.classList.toggle('popup_is-opened')
}



editClose.addEventListener('click', openCloseEdit)
btnEdit.addEventListener('click', openCloseEdit)



popupFormEdit.addEventListener('submit', function(event) {
    event.preventDefault();
    const popupFormEdit = event.currentTarget;
    const nameEdit = popupFormEdit.elements.name_edit
    const linkEdit = popupFormEdit.elements.link_edit
    renderEdit(nameEdit, linkEdit)
    nameEdit.value = ''
    linkEdit.value = ''
    openCloseEdit()
})

function renderEdit(nameEdit, linkEdit) {
    infoName.textContent = nameEdit.value
    infoJob.textContent = linkEdit.value
}


// Попап картинки //
const placeImage = document.querySelector('.place-card')

const popupImages = document.querySelectorAll('.place-card__image')
const imageOpen = document.querySelector('.popup_image')
const imageClose = document.querySelector('.image_close')
const imageBox = document.querySelector('.image_box')


popupImages.forEach(card => {
    card.addEventListener('click', (event) => {
        const target = event.target
        if (target.classList.contains('place-card__image')) {
            imageOpen.classList.add('popup_is-opened')
                // imageBox.src = target.getAttribute('data-image')
            imageBox.src = target.dataset.image

        }
    })
})


imageClose.addEventListener('click', () => {
    imageOpen.classList.remove('popup_is-opened')
})