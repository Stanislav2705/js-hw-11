import './css/styles.css';
import { fetchPhoto, PAGE_SIZE } from './js/fetch-photo';

export const refs = {
  form: document.querySelector('#search-form'),
  input: document.querySelector('[name="searchQuery"]'),
  searchBtn: document.querySelector('button'),
  gallery: document.querySelector('.gallery'),
};

export let currentPage = 1;
