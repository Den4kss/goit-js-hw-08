// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
// Change code below this line

console.log(galleryItems);
const palettePicturesRef = document.querySelector('.gallery');
const palettePictures = createCardsGallery(galleryItems);
palettePicturesRef.insertAdjacentHTML('beforeend', palettePictures);

function createCardsGallery(galleryItems) {
  return galleryItems
    .map(({ preview, original, description }) => {
      return `<a class="gallery__item" href="${original}">
  <img class="gallery__image" src="${preview}" alt="${description}" />
</a>`;
    })
    .join('');
}
palettePicturesRef.addEventListener('click', onImageClick);

var lightbox = new SimpleLightbox('.gallery a', {
  overlayOpacity: 0.8,
  navText: ['←', '→'],
  captionDelay: 250,
  captionsData: 'alt',
  animationSpeed: 400,
});

function onImageClick(event) {
  event.preventDefault();

  if (event.target.nodeName !== 'IMG') {
    return;
  }
}
