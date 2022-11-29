'use strict';

document
  .querySelector('#return-from-post-specific')
  .addEventListener('click', () => {
    history.back();
  });

const API_BASE_URL = 'https://nf-api.onrender.com',
  queryString = document.location.search,
  params = new URLSearchParams(queryString),
  singlePostId = params.get('id');

// Fetch unique author ID //

export async function getUser(url) {
  try {
    // console.log(url);
    const token = localStorage.getItem('token');
    // console.log(token);
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const userData = await response.json();

    // Change document title //
    document.title = `Social Media Page | ${userData.name}`;

    // Call the html function //

    // Catch error //
  } catch (error) {
    alert(error);
  }
}

const shareButton = document.querySelector('.share-button');
const postUrl = `${API_BASE_URL}/api/v1/social/posts
`;
const singlePost = `${postUrl}${singlePostId}`;

async function postComment(url, newPost) {
  try {
    //
    const token = localStorage.getItem('token');
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPost),
    };
    const response = await fetch(url, fetchOptions);
    console.log('post response', response);
    const json = await response.json();
    console.log('post', json);
  } catch (error) {
    console.log(error);
  }
}

const newPost = {
  title: document.querySelector('#new-post-title').value,
  body: document.querySelector('#new-post-text').value,
  tags: [document.querySelector('#new-post-tags')].value,
  media: document.querySelector('#new-post-media').value,
};

// Delete post
let postId;
const deleteButton = document.querySelector('.delete-button');
const deleteUrl = `${API_BASE_URL}/api/v1/social/posts/4454`;
const token = localStorage.getItem('token');

const deletePost = fetch(deleteUrl, {
  method: 'DELETE',
  headers: {
    'Content-type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log('delete response', response);
});

// deleteButton.addEventListener('click', () => {
//   deletePost(deleteUrl);
// });

// Post new post

const newPostForm = document.querySelector('#new-post-form');

shareButton.addEventListener('click', function (e) {
  e.preventDefault(postComment(postUrl, newPost));
  newPostForm.reset();
});
