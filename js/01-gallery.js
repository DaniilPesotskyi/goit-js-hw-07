import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryContainer = document.querySelector('.gallery')
const imagesCardsMarkup = createImgCardsMarkup(galleryItems)

// Create img markup
function createImgCardsMarkup(images) {
    return images.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" onclick="event.preventDefault()" href="${original}">
                <img
                    class="gallery__image"
                    src="${preview}"
                    data-source="${original}"
                    alt="${description}"
                />
            </a>
        </div>`
    }).join('')
}

// Insert img markup
galleryContainer.insertAdjacentHTML('beforeend', imagesCardsMarkup)

// Open modal
galleryContainer.addEventListener('click', onGalleryContainerClick)

// Function open modal
function openModalWindow(e) {
    const originalImgLink = e.target.dataset.source
    const originalImgModalMarkup = basicLightbox.create(`<img src="${originalImgLink}">`)
    originalImgModalMarkup.show()

    // Add event listener to escape click
    window.addEventListener('keydown', onEscapeClick)

    function clouseModalWindow(e) {
        console.log('clouse')
        originalImgModalMarkup.close()
    }
    
    // Function escape click
    function onEscapeClick(e) {
        if (e.key === 'Escape') {
            console.log('CLOUSE')
            clouseModalWindow()
            window.removeEventListener('keydown', onEscapeClick)
        }
        
    }
}

// Function img click
function onGalleryContainerClick(e) {
    if(e.target.nodeName !== 'IMG') {
        return
    }
    openModalWindow(e)
}

// Function clouse modal















