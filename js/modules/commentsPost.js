"use strict";

/*======================================================================================================
Comments on a post
======================================================================================================*/

export const commentsPost = function (post) {
  post.comments.forEach((comment) => {
    document.querySelector(".comment-container").innerHTML += `
      <div class="comment-wrapper d-flex mb-3 w-100"
      <a href="/profile.html?id=${comment.id}">
        <img
          src="${comment.author.avatar}"
          alt="user avatar"
          class="post-avatar-sm rounded-circle me-2"
          onerror="this.onerror=null; this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'" />
      </a>
      <div class="form-floating post-comment w-100">
        <input
          class="form-control rounded bg-secondary bg-opacity-10"
          type="text"
          value="${comment.body}"
          aria-label="readonly input example"
          readonly />
        <label class="opacity-100 fw-semibold">${comment.owner}</label>
      </div>
    </div>`;
  });
};
