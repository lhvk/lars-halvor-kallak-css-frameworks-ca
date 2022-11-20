'use strict';

const API_BASE_URL = 'https://nf-api.onrender.com';
const errorMessage = document.querySelector('.error-message');
const registerBtn = document.querySelector('#register-btn');

async function registerUser(url, userData) {
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    console.log(response);
    const json = await response.json();

    console.log(json.errors[0].message);
    errorMessage.innerHTML = `<span class="text-danger">Unable to register: ${json.errors[0].message}</span>`;

    console.log(json);
  } catch (error) {
    console.log(error);
    errorMessage.innerHTML = `<span class="text-danger">Unable to register: ${error}</span>`;
  }
}
const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

const userToRegister = {
  name: document.querySelector('#username').value,
  email: document.querySelector('#email').value,
  password: document.querySelector('#password').value,
};

registerBtn.addEventListener('click', function (e) {
  console.log(registerUser(registerUrl, userToRegister));
});

//   name: john_the_blacksmith
//   email: blacksmith_john@noroff.no
//   password: abc12345
