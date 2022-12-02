"use strict";

import { deletePost } from "../api/deletePost.js";

document.querySelector(".delete-button").addEventListener("click", (e) => {
  deletePost(deleteUrl);
  console.log(e);
});

/*======================================================================================================
Single Post
======================================================================================================*/

export const singlePost = (post) => {
  document.querySelector(".loader-container").innerHTML = "";
  document.querySelector("#single-post-container").innerHTML += `
    <div class="card mb-3 shadow">
    <div
      class="card-header bg-white d-flex justify-content-between border-bottom border-0"
    >
      <div class="d-flex">
        <a href="profile.html?id="${"id"}" class="text-decoration-none text-dark"
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
            <small class="text-muted">Posted ${post.created}</small>
          </p>
          <p class="card-text">
            <small class="text-muted">Updated ${post.updated}</small>
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
          <li><a class="dropdown-item" href="#">Edit</a></li>
          <li><a class="dropdown-item delete-button href="#">Delete</a></li>
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
    <div class="card-footer bg-white">
    <p>
      <button
        class="bg-transparent border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#reactions"
        aria-expanded="false"
        aria-controls="reactions">
        <p class="bi bi-hand-thumbs-up me-4">&nbsp;${
          post._count.reactions
        } Reactions</p>
      </button>
      <button
        class="bg-transparent border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#comments"
        aria-expanded="false"
        aria-controls="comments">
        <p class="bi bi-chat-dots me-4">&nbsp;${
          post._count.comments
        } Comments</p>
      </button>
    </p>
    <div class="row">
      <div class="col-12">
        <div class="collapse" id="reactions">
  
          <!-- Reactions start -->
          <div class="card reactions-container d-flex flex-row"></div>
          <!-- Reactions end -->
  
        </div>
      </div>
      <div class="col">
        <div class="collapse" id="comments">
     
            <!-- Comment start -->
            <div class="input-group comment-container mb-3 mt-2"></div>
            <!-- Comment end -->            
        
        </div>
      </div>
    </div>
  </div>
  </div>`;
};
