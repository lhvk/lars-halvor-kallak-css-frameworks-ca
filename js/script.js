// importing module
import { getUserData } from './getUser';
console.log('Importing module');

document.querySelector('#return').addEventListener('click', () => {
  history.back();
});

// Change document title //
document.title = `Social Media Page | ${userData.name}`;

const API_BASE_URL = 'https://nf-api.onrender.com',
  queryString = document.location.search,
  params = new URLSearchParams(queryString),
  userId = params.get('id');

const getUserPosts = `${API_BASE_URL}/api/v1/social/profiles/${userId}/posts`;

getUserData(getUserPosts);
