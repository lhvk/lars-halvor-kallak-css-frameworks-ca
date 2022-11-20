'use strict';

const API_BASE_URL = 'https://nf-api.onrender.com';

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
    console.log(`Unable to register profile: ${json.errors[0].message}`);
  } catch (error) {
    console.log(error);
  }
}

const userToRegister = {
  name: 'john_the_blacksmith',
  email: 'blacksmith_john@noroff.no',
  password: 'abc12345',
};

const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

registerUser(registerUrl, userToRegister);
