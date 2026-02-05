import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
  showLoadMoreButton,
  hideLoadMoreButton,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

let query = '';
let page = 1;
const perPage = 15;

function loadImages() {
  showLoader();
  getImagesByQuery(query, page).then(data => {
    const { hits, totalHits } = data;

    if (hits.length === 0) {
    }

    const totalPages = Math.ceil(totalHits / 15);
  });
}

form.addEventListener('submit', event => {
  hideLoadMoreButton();

  event.preventDefault();
  const query = input.value.trim();

  if (query === '') {
    iziToast.warning({
      message: 'Please enter the text',
    });
    return;
  }

  clearGallery();
  showLoader();
  getImagesByQuery(query, page)
    .then(data => {
      if (data.hits.length === 0) {
        iziToast.warning({
          message:
            'Sorry, there are no images matching your search query. Please try again!',
        });

        return;
      }

      createGallery(data.hits);
    })
    .catch(() => {
      iziToast.error({
        message: 'Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
      form.reset();
    });
});
