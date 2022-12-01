'use strict';

const homeFeed = document.querySelector('#home-feed');
const loadMore = document.querySelector('#load-more');
let limit = 4;
let offset = 700;
const API_BASE_URL = 'https://nf-api.onrender.com';
const postsUrl = `${API_BASE_URL}/api/v1/social/posts?&_author=true&_comments=true&_reactions=true&limit=${limit}&offset=${offset}
`;

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
    console.log(response);
    const json = await response.json();

    console.log(json);

    for (let i = 0; i < json.length; i++) {
      const post = json[i];

      const postId = post.id;
      const author = post.author.name;
      const avatar = post.author.avatar;
      const title = post.title;
      const created = post.created.substring(0, 10);
      const media = post.media;
      const text = post.body;
      const likes = post._count.reactions;
      const commentsCount = post._count.comments;

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
                <li><a class="dropdown-item" href="/post.html?id=${postId}">View Post</a></li>
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
            <hr>
            <div class="d-flex">
              <p class="bi bi-hand-thumbs-up me-4">&nbsp;${likes} Reactions</p>
              <p class="bi bi-chat-dots">&nbsp;${commentsCount} Comments</p>
            </div>
          </div>
        </div>`;
    }
  } catch (error) {
    console.log(error);
  }
}

getWithToken(postsUrl);

// Show more results button //
loadMore.addEventListener('click', () => {
  getWithToken(postsUrl);
});

// Sign out
const signOut = document.querySelector('#signOut');

signOut.addEventListener('click', () => {
  localStorage.clear('token');
});
