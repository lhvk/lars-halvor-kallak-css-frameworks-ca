'use strict';

const homeFeed = document.querySelector('#home-feed');
const API_BASE_URL = 'https://nf-api.onrender.com';
const loadMore = document.querySelector('#load-more');

async function getWithToken(url) {
  try {
    //
    const token = localStorage.getItem('token');
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log('response token', response);
    const json = await response.json();
    console.log('json token', json);

    // Loop through the data and create html //
    json.forEach((post) => {
      const author = post.author.name;
      const avatar = post.author.avatar;
      const title = post.title;
      const created = post.created.substring(0, 10);
      const media = post.media;
      const text = post.body;
      const likes = post._count.reactions;
      const commentsCount = post._count.comments;
      const comments = post.comments;
      const commentOwner = post.comments.owner;

      // html //
      homeFeed.innerHTML += `<div class="card mb-3 shadow">
          <div
            class="card-header bg-white d-flex justify-content-between border-bottom border-0"
          >
            <div class="d-flex">
              <a href="profile.html?id=${author}" class="text-decoration-none text-dark"
                ><img
                  src="${avatar}" 
                  alt="user avatar"
                  class="post-avatar rounded-circle"
                  onerror="this.onerror=null; this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
                />
              </a>
              <div class="d-flex flex-column ms-2 mt-1">
                <h5 class="card-title mb-0">${author}</h5>
                <p class="card-text">
                  <small class="text-muted">Posted ${created}</small>
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
          <img class="card-img-top rounded-0" src="${media}" alt="Card image" onerror="this.style.display='none'"/>
          <div class="card-body">
          <h6 class="card-subtitle mb-2">${title}</h6>
            <p class="card-text">
              ${text}
            </p>
            <div class="d-flex">
              <p class="bi bi-hand-thumbs-up me-4">&nbsp;${likes} Likes</p>
              <p class="bi bi-chat-dots">&nbsp;${commentsCount} Comments</p>
            </div>
            <div class="card-footer bg-white">
            
            <!-- Comment start -->
            <div class="input-group mb-3 mt-2">
              <a href="profile.html?id=${commentOwner}">
                <img
                  src="${avatar}"
                  alt="user avatar"
                  class="post-avatar-sm rounded-circle me-2"
                  onerror="this.onerror=null; this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"/>
              </a>
              <div class="form-floating">
                <input
                  class="form-control rounded bg-secondary bg-opacity-10"
                  type="text"
                  value="${'comments'}"
                  aria-label="readonly input example"
                  readonly />
                <label class="opacity-100 fw-semibold">${'commentOwner'}</label>
              </div>
            </div>
            <!-- Comment end -->

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
  
          </div>
        </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}
const postsUrl = `${API_BASE_URL}/api/v1/social/posts/?_author=true&_comments=true&_reactions=true`;

getWithToken(postsUrl);
