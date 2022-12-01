'use strict';

const API_BASE_URL = 'https://nf-api.onrender.com';
const errorMessage = document.querySelector('.error-message');
const loginBtn = document.querySelector('#login-button');

async function loginUser(url, userData) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);

    const json = await response.json();

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

loginBtn.onclick = loginUser(loginUrl, userLogin);

//   name: john_the_blacksmith
//   email: blacksmith_john@noroff.no
//   password: abc12345
