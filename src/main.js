import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';

const formEl = document.querySelector('.form');

formEl.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();

  const inputQuerry = event.currentTarget.elements['search-text'].value.trim();

  if (!inputQuerry) {
    iziToast.warning({
      title: 'Warning',
      message: 'please enter a search query',
    });
    return;
  }

  clearGallery();
  showLoader();

  getImagesByQuery(inputQuerry)
    .then(response => {
      const photosArr = response;

      if (photosArr.length === 0) {
        iziToast.error({
          title: 'Error',
          message: `❌ Sorry, there are no images matching your search query. Please try again!`,
        });
        return;
      }

      createGallery(photosArr);
    })
    .catch(error => {
      console.error('Error fetching images:', error);
      iziToast.error({
        title: 'Error',
        message: 'Something went wrong. Please try again later.',
      });
    })
    .finally(() => {
      hideLoader();
      formEl.reset();
    });
}
