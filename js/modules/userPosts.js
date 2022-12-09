"use strict";

/*======================================================================================================
List of the user's posts
======================================================================================================*/

export const userPosts = function (userData, formatDate) {
  const profilePosts = document.querySelector("#profile-posts");
  const loaderContainer = document.querySelector(".loader-container");
  //
  userData.posts.length === 0
    ? (profilePosts.innerHTML = "")
    : userData.posts.forEach((post) => {
        console.log(post);
        //
        const { body, created, id, media, owner, title, tags, updated } = post;
        //
        loaderContainer.innerHTML = "";
        profilePosts.innerHTML += `
    <div class="card mb-3 shadow">
    <div
      class="card-header bg-white d-flex justify-content-between border-bottom border-0"
    >
      <div class="d-flex">
        <a href="profile.html?id=${owner}" class="text-decoration-none text-dark"
          ><img
            src="${"avatar"}" 
            alt="user avatar"
            class="post-avatar rounded-circle"
            onerror="this.onerror=null; this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
          />
        </a>
        <div class="d-flex flex-column ms-2 mt-1">
          <h5 class="card-title mb-0">${owner}</h5>
          <p class="card-text">
            <small class="text-muted">Posted ${formatDate(
              new Date(created)
            )}</small>
            )}</small>
            </p>
            <p class="card-text">
            <small class="text-muted">Updated ${formatDate(
              new Date(updated)
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
          <li><a class="dropdown-item" href="/post.html?id=${id}">View Post</a></li>
        </ul>
      </div>
    </div>
    <!-- Dropdown end -->     
    <img class="card-img-top rounded-0" src="${media}" alt="Card image" onerror="this.style.display='none'"/>
    <div class="card-body">
    <h6 class="card-subtitle mb-2">${title}</h6>
      <p class="card-text">
        ${body}
      </p>      
      <p class="card-text clr-pink">
        ${tags}
      </p>      
    </div>
  </div>`;
      });
};
