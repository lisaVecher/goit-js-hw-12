import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const form = document.querySelector('.form');
const input = document.querySelector('input[name="search-text"]');

form.addEventListener('submit', event => {
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

  getImagesByQuery(query)
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
