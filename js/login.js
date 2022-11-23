"use strict";

const API_BASE_URL = "https://nf-api.onrender.com";
const errorMessage = document.querySelector(".error-message");
const loginBtn = document.querySelector("#login-button");

async function loginUser(url, userData) {
  try {
    console.log("user data", url, userData);
    const postData = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    };
    const response = await fetch(url, postData);

    console.log("postdata ", postData);
    console.log("response ", response);
    const json = await response.json();
    console.log("json ", json);
    const token = json.accessToken;
    localStorage.setItem("token", token);
  } catch (error) {
    console.log("error", error);
  }
}
const loginUrl = `${API_BASE_URL}/api/v1/social/auth/login`;

const userLogin = {
  email: document.querySelector("#email").value,
  password: document.querySelector("#password").value,
};

loginBtn.onclick = loginUser(loginUrl, userLogin);

//   name: john_the_blacksmith
//   email: blacksmith_john@noroff.no
//   password: abc12345

// REFACTOR IN TO RE-USABLE CODE MAYBE

{
  /* <div class="card mb-3 shadow">
            <div
              class="card-header bg-white d-flex justify-content-between border-0"
            >
              <div class="d-flex">
                <a href="profile.html" class="text-decoration-none text-dark"
                  ><img
                    src="/images/profileImages/profile01.jpg"
                    alt="user avatar"
                    class="post-avatar rounded-circle"
                  />
                </a>
                <div class="d-flex flex-column ms-2 mt-1">
                  <h5 class="mb-0">John Denver Smithsonian</h5>
                  <p class="card-text">
                    <small class="text-muted">Posted 3 mins ago</small>
                  </p>
                </div>
              </div>
              <!-- Dropdown start -->
              <div class="dropdown">
                <a
                  class=""
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i class="bi bi-three-dots"></i>
                </a>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" href="#">Hide post</a></li>
                </ul>
              </div>
            </div>
            <!-- Dropdown end -->
            <div class="card-body">
              <p class="card-text">
                This is a wider card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </p>
              <div class="d-flex">
                <p class="bi bi-hand-thumbs-up me-4">&nbsp;Like</p>
                <p class="bi bi-chat-dots">&nbsp;Comment</p>
              </div>
              <div class="input-group">
                <label for="text"></label>
                <input
                  style="border-radius: 25px 0 0 25px"
                  type="text"
                  class="form-control bg-secondary bg-opacity-10"
                  placeholder="Add your comment.."
                />
                <button class="btn" style="border-radius: 0 25px 25px 0">
                  Post
                </button>
              </div>
            </div>
          </div> */
}
