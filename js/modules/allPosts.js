"use strict";

/*======================================================================================================
All posts in the home feed
======================================================================================================*/
export const allPosts = function (json) {
  for (let i = 0; i < json.length; i++) {
    const post = json[i];

    document.querySelector(
      "#home-feed"
    ).innerHTML += `<div class="card mb-3 shadow">
      <div
        class="card-header bg-white d-flex justify-content-between border-bottom border-0"
      >
        <div class="d-flex">
          <a href="profile.html?id=${
            post.author.name
          }" class="text-decoration-none text-dark"
            ><img
              src="${post.author.avatar}" 
              alt="user avatar"
              class="post-avatar rounded-circle"
              onerror="this.onerror=null; this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
            />
          </a>
          <div class="d-flex flex-column ms-2 mt-1">
            <h5 class="card-title mb-0">${post.author.name}</h5>
            <p class="card-text">
              <small class="text-muted">Posted ${post.created.substring(
                0,
                10
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
            <li><a class="dropdown-item" href="/post.html?id=${
              post.id
            }">View Post</a></li>
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
        <hr>
        <div class="d-flex">
          <p class="bi bi-hand-thumbs-up me-4">&nbsp;${
            post._count.reactions
          } Reactions</p>
          <p class="bi bi-chat-dots">&nbsp;${post._count.comments} Comments</p>
        </div>
      </div>
    </div>`;
  }
};
