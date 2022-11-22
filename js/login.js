'use strict';

const API_BASE_URL = 'https://nf-api.onrender.com';
const errorMessage = document.querySelector('.error-message');
const loginBtn = document.querySelector('#login-button');

async function loginUser(url, userData) {
  try {
    console.log('user data', url, userData);
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);

    console.log('postdata ', postData);
    console.log('response ', response);
    const json = await response.json();
    console.log('json ', json);
    const token = json.accessToken;
    localStorage.setItem('token', token);
  } catch (error) {
    console.log('error', error);
  }
}
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

const userLogin = {
  email: document.querySelector('#email').value,
  password: document.querySelector('#password').value,
};

// loginBtn.onclick = loginUser(loginUrl, userLogin);

//   name: john_the_blacksmith
//   email: blacksmith_john@noroff.no
//   password: abc12345

// REFACTOR IN TO RE-USABLE CODE MAYBE

async function getWithToken(url, options = {}) {
  try {
    console.log(url);
    const token = localStorage.getItem('token');
    console.log(token);
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log(response);
    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.log(error);
  }
}
const postsUrl = `${API_BASE_URL}/api/v1/social/posts`;

getWithToken(postsUrl);
