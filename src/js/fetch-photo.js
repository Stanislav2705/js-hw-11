import axios from 'axios';
import { refs } from '../index';
import { currentPage } from '../index';

const BASE_URL = 'https://pixabay.com/api';
const KEY = '29403206-b29e9098c0ff3e75ea37bca5c';
export const PAGE_SIZE = 40;

export async function fetchPhoto() {
  try {
    const response = await axios.get(
      `${BASE_URL}/?key=${KEY}&q=${refs.input.value}&image_type=photo&orientation=horizontal&safesearch=true&per_page=${PAGE_SIZE}&page=${currentPage}`
    );
  } catch (error) {
    console.log(error);
  }
}
