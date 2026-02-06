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
const btn = document.querySelector('.load-more');

let query = '';
let page = 1;
const perPage = 15;
let totalPages = 0;

async function loadImages() {
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    const { hits, totalHits } = data;

    if (page === 1 && hits.length === 0) {
      iziToast.warning({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
      });
      hideLoadMoreButton();
      return;
    }

    createGallery(hits);

    totalPages = Math.ceil(totalHits / perPage);

    if (page < totalPages) {
      showLoadMoreButton();
    } else {
      hideLoadMoreButton();
      if (page !== 1) {
        iziToast.info({
          position: 'topRight',
          message: "We're sorry, but you've reached the end of search results.",
        });
      }
    }
  } catch (error) {
    hideLoadMoreButton();
    iziToast.error({
      message: 'Please try again later.',
    });
  } finally {
    hideLoader();
  }
}

btn.addEventListener('click', async () => {
  hideLoadMoreButton();
  page += 1;
  await loadImages();

  const gallaryImg = document.querySelector('.gallery-item');
  if (gallaryImg) {
    const { height } = gallaryImg.getBoundingClientRect();
    window.scrollBy({
      top: height * 2,
      behavior: 'smooth',
    });
  }
});

form.addEventListener('submit', async event => {
  hideLoadMoreButton();

  event.preventDefault();
  query = input.value.trim();
  page = 1;

  if (query === '') {
    iziToast.warning({ message: 'Please enter the text' });
    return;
  }

  clearGallery();
  await loadImages();
  form.reset();
});
