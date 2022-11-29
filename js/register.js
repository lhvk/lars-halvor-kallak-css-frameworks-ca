'use strict';

const API_BASE_URL = 'https://nf-api.onrender.com';
const errorMessage = document.querySelector('.error-message');
const registerBtn = document.querySelector('#register-btn');

async function registerUser(url, userData) {
  console.log('user data', userData);
  try {
    const postData = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);

    console.log('post data ', postData);
    console.log('response ', response);
    const json = await response.json();

    console.log('json errors ', json.errors[0].message);

    console.log('json ', json);
  } catch (error) {
    console.log('error', error);
  }
}
const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

const userToRegister = {
  name: document.querySelector('#username').value,
  email: document.querySelector('#email').value,
  password: document.querySelector('#password').value,
};

registerBtn.onclick = registerUser(registerUrl, userToRegister);

//   name: john_the_blacksmith
//   email: blacksmith_john@noroff.no
//   password: abc12345
