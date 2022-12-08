"use strict";

const API_BASE_URL = "https://nf-api.onrender.com";
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

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
    if (response.ok) {
      const json = await response.json();
      const token = json.accessToken;
      const userName = json.name;
      const avatar = json.avatar;

      const userLoggedIn = { token, userName, avatar };

      localStorage.setItem("userLoggedIn", JSON.stringify(userLoggedIn));
      location.replace("/feed.html");
    } else {
      alert("Wrong username or password");
    }
  } catch (error) {
    alert("error", error);
  }
}

document.querySelector("form").addEventListener("submit", async (e) => {
  e.preventDefault();

  const userLogin = {
    email: document.querySelector("#email").value,
    password: document.querySelector("#password").value,
  };

  await loginUser(loginUrl, userLogin);
});

// LarKal69841@stud.noroff.no
// abc12345
