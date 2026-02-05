import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(``, {
      params: {
        key: '54439683-6bac37218bb416e8a78c2120a',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
