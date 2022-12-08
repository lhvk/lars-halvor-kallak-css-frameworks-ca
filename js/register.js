"use strict";

const API_BASE_URL = "https://nf-api.onrender.com";
const registerUrl = `${API_BASE_URL}/api/v1/social/auth/register`;

async function registerUser(url, userData) {
  try {
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);
    const json = await response.json();

    if (response.ok) {
      alert("User has been created. You can now log in");
      location.replace("/index.html");
    } else {
      json.errors.forEach((error) => {
        alert(error.message);
      });
    }
  } catch (error) {
    alert("error", error);
  }
}

document.querySelector("#register-btn").addEventListener("click", async (e) => {
  e.preventDefault();

  const userToRegister = {
    name: document.querySelector("#username").value,
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
    avatar: document.querySelector("#user-avatar").value,
    banner: document.querySelector("#banner").value,
  };

  registerUser(registerUrl, userToRegister);
});
