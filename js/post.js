'use strict';

document.querySelector('#return').addEventListener('click', () => {
  history.back();
});

const API_BASE_URL = 'https://nf-api.onrender.com',
  queryString = document.location.search,
  params = new URLSearchParams(queryString),
  postId = params.get('id'),
  singlePostUrl = `${API_BASE_URL}/api/v1/social/posts/${postId}?_author=true&_comments=true&_reactions=true`;

// Fetch unique post ID //
async function getSinglePost(url) {
  try {
    const token = localStorage.getItem('token');
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const post = await response.json();
    // End of fetch //

    console.log('post', post);
    singlePost(post);
    commentsPost(post);
    reactionsPost(post);

    // Change document title //
    document.title = `Social Media Page | ${post.title}`;

    // Catch error //
  } catch (error) {
    alert(error);
  }
}
getSinglePost(singlePostUrl);

/*======================================================================================================
Single Post
======================================================================================================*/

const singlePost = (post) => {
  document.querySelector('.loader-container').innerHTML = '';
  document.querySelector('#single-post-container').innerHTML += `
  <div class="card mb-3 shadow">
  <div
    class="card-header bg-white d-flex justify-content-between border-bottom border-0"
  >
    <div class="d-flex">
      <a href="profile.html?id="${'id'}" class="text-decoration-none text-dark"
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
      <p class="bi bi-chat-dots me-4">&nbsp;${post._count.comments} Comments</p>
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

const commentsPost = function (post) {
  post.comments.forEach((comment) => {
    console.log('comments: ', comment);
    document.querySelector('.comment-container').innerHTML += `
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

const reactionsPost = function (post) {
  post.reactions.forEach((reaction) => {
    console.log(reaction);
    document.querySelector(
      '.reactions-container'
    ).innerHTML += `<p class="p-1">${reaction.symbol}</p>`;
  });
};
