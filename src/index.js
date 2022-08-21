import './css/styles.css';
import { refs } from './js/refs';
import { fetchPhoto, PAGE_SIZE } from './js/fetch-photo';
import { generateContentGallery } from './js/markup-list';
import Notiflix, { Notify } from 'notiflix';

export let currentPage = 1;

refs.form.addEventListener('submit', handleSearchPhoto);
refs.loadMoreBtn.addEventListener('click', handleSearchPhoto);

function handleSearchPhoto(e) {
  e.preventDefault();
  const value = refs.input.value.trim();
  if (value === '') {
    return;
  }

  fetchPhoto()
    .then(data => {
      if (data.hits.length === 0) {
        Notify.failure(
          'Sorry, there are no images matching your search query. Please try again.'
        );
        return;
      }
      refs.loadMoreBtn.classList.remove('hide');
      currentPage += 1;

      if (currentPage > Math.ceil(data.totalHits / PAGE_SIZE)) {
        refs.loadMoreBtn.classList.add('hide');
        Notify.failure(
          "We're sorry, but you've reached the end of search results."
        );
        currentPage = 1;
      }
      const markup = generateContentGallery(data.hits);
      if (e.type === 'submit') {
        refs.gallery.innerHTML = markup;
        Notify.success(`Hooray! We found ${data.totalHits} images.`);
        return;
      }
      refs.gallery.insertAdjacentHTML('beforeend', markup);
    })
    .catch(error => console.error(error));
}
