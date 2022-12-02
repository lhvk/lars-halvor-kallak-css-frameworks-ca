"use strict";

/*======================================================================================================
List of the user's posts
======================================================================================================*/

export const userPosts = function (userData) {
  userData.posts.forEach((post) => {
    document.querySelector(".loader-container").innerHTML = "";
    document.querySelector("#profile-posts").innerHTML += `
    <div class="card mb-3 shadow">
    <div
      class="card-header bg-white d-flex justify-content-between border-bottom border-0"
    >
      <div class="d-flex">
        <a href="profile.html?id=${
          post.owner
        }" class="text-decoration-none text-dark"
          ><img
            src="${"avatar"}" 
            alt="user avatar"
            class="post-avatar rounded-circle"
            onerror="this.onerror=null; this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
          />
        </a>
        <div class="d-flex flex-column ms-2 mt-1">
          <h5 class="card-title mb-0">${post.owner}</h5>
          <p class="card-text">
            <small class="text-muted">Posted ${Date(post.created).substring(
              0,
              11
            )}</small>
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
          <li><a class="dropdown-item" href="/post.html/${
            post.id
          }">View Post</a></li>
          <li><a class="dropdown-item" href="#">Edit post</a></li>
          <li><a class="dropdown-item delete-button" href="/index.html">Delete post</a></li>
        </ul>
      </div>
    </div>
    <!-- Dropdown end -->     
    <img class="card-img-top rounded-0" src="${
      post.media
    }" alt="Card image" onerror="this.style.display='none'"/>
    <div class="card-body">
    <h6 class="card-subtitle mb-2">${post.title}</h6>
      <p class="card-text">
        ${post.body}
      </p>      
    </div>
  </div>`;
  });
};
