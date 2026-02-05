import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const lightbox = new SimpleLightbox('.gallery a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

const galleryItems = document.querySelector('.gallery');
const loaderItem = document.querySelector('.loader');

export function createGallery(images) {
  const markup = images
    .map(
      ({
        webformatURL,
        largeImageURL,
        tags,
        likes,
        views,
        comments,
        downloads,
      }) => `
      <li class="gallery-item">
      <a class="gallery-link" href="${largeImageURL}">
      <div class="photo-item">
        <img
          class="gallery-image"
          src="${webformatURL}"
          alt="${tags}"
        />
        <div class="photo-information">
        <p class="information-item"><b>Likes</b> ${likes}</p>
                <p class="information-item"><b>Views</b> ${views}</p>
        <p class="information-item"><b>Comments</b> ${comments}</p>
        <p class="information-item"><b>Downloads</b> ${downloads}</p>
</div>
</div>
      </a>
      </li>
  `
    )
    .join('');

  galleryItems.insertAdjacentHTML('beforeend', markup);

  lightbox.refresh();
}

export function clearGallery() {
  galleryItems.innerHTML = '';
}

export function showLoader() {
  loaderItem.classList.remove('is-hidden');
}
export function hideLoader() {
  loaderItem.classList.add('is-hidden');
}
