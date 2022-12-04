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
    console.log(response);
    if (response.ok) {
      const json = await response.json();
      console.log(json);
      const token = json.accessToken;
      localStorage.setItem("token", token);
      location.replace("/feed.html");
    } else {
      alert("Something went wrong");
    }
  } catch (error) {
    alert("error", error);
  }
}

document
  .querySelector("#register-btn")
  .addEventListener("submit", async (e) => {
    e.preventDefault();

    const userToRegister = {
      name: document.querySelector("#username").value,
      email: document.querySelector("#email").value,
      password: document.querySelector("#password").value,
    };

    registerUser(registerUrl, userToRegister);
  });

//   name: john_the_blacksmith
//   email: blacksmith_john@noroff.no
//   password: abc12345
