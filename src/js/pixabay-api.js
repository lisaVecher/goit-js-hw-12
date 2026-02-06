import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export async function getImagesByQuery(query, page) {
  return axios
    .get(``, {
      params: {
        key: '54439683-6bac37218bb416e8a78c2120a',
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
        per_page: 15,
        page,
      },
    })
    .then(response => response.data);
}

// let page = 1;
// // Controls the number of items in the group
// let limit = 40;
// // In our case total number of pages is calculated on frontend
// const totalPages = Math.ceil(100 / limit);

// fetchPostsBtn.addEventListener('click', async () => {
//   // Check the end of the collection to display an alert
//   if (page > totalPages) {
//     return iziToast.error({
//       position: 'topRight',
//       message: "We're sorry, there are no more posts to load",
//     });
//   }

//   try {
//     const posts = await fetchPosts();
//     renderPosts(posts);
//     // Increase the group number
//     page += 1;

//     // Replace button text after first request
//     if (page > 1) {
//       fetchPostsBtn.textContent = 'Fetch more posts';
//     }
//   } catch (error) {
//     console.log(error);
//   }
// });
