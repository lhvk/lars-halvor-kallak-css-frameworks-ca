"use strict";

const API_BASE_URL = "https://nf-api.onrender.com";
const errorMessage = document.querySelector(".error-message");

async function loginUser(url, userData) {
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

    const json = await response.json();
    const token = json.accessToken;
    localStorage.setItem("token", token);
    await loginUser(loginUrl, userLogin);
    location.replace("/feed.html");
  } catch (error) {
    console.log("error", error);
  }
}
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

const userLogin = {
  email: document.querySelector("#email").value,
  password: document.querySelector("#password").value,
};

document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  loginUser(loginUrl, userLogin);
});
