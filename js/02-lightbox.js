import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const imagesCardsMarkup = createImgCardsMarkup(galleryItems)

// Create img markup
function createImgCardsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `
            <a class="gallery__item" onclick="event.preventDefault()" href="${original}">
                <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>`
    }).join('')
}

// Insert img markup
galleryContainer.insertAdjacentHTML('beforeend', imagesCardsMarkup)

const gallery = new SimpleLightbox(".gallery a", {
	captions: true,
	captionSelector: "img",
	captionType: "attr",
	captionsData: "alt",
	captionPosition: "bottom",
	captionDelay: 250,
});

