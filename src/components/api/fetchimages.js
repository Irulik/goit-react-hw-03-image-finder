import axios from 'axios';
import { Notify } from 'notiflix';

const KEY = "24829575-d5f7f7183fea4abe30a8e83a0";
const URL = "https://pixabay.com/api";

export const fetchImages = async (inputValue, pageNr) => {
  try {
    const response = await axios.get(
      `${URL}/?q=${inputValue}&page=${pageNr}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`
    );
    return response.data.hits.map(image => ({
      id: image.id,
      webformatURL: image.webformatURL,
      largeImageURL: image.largeImageURL,
      tags: image.tags,
    }));
  } catch (error) {
    onFetchError();
    throw error;
  }
};

export const onFetchError = () => {
  Notify.failure('Oops! Something went wrong! Try reloading the page or make another choice!');
};
