'use strict';

async function getPost(url, body) {
  try {
    //
    const token = localStorage.getItem('token');
    const fetchOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(body),
    };
    const response = await fetch(url, fetchOptions);
    console.log('post response', response);
    const json = await response.json();
    console.log('post', json);
  } catch (error) {
    alert(error);
    console.log(error);
  }
}

const newPost = {
  title: document.querySelector('#new-post-title').value,
  body: document.querySelector('#new-post-text').value,
  tags: [document.querySelector('#new-post-tags')].value,
  media: document.querySelector('#new-post-media').value,
};
