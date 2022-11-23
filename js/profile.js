'use strict';

document.querySelector('#return').addEventListener('click', () => {
  history.back();
});

const API_BASE_URL = 'https://nf-api.onrender.com';
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const userId = params.get('id');

console.log(userId);

// Fetch unique author ID //

async function getUser(url) {
  try {
    // console.log(url);
    const token = localStorage.getItem('token');
    // console.log(token);
    const fetchOptions = {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const userData = await response.json();

    console.log(userData);

    // Change document title //
    document.title = `Social Media Page | ${userData.name}`;

    // Call the html function //
    // User Profile
    profileCard(userData);
    // List of users the profile is following
    followingUser(userData);
    // List of users who follow the profile
    followersUser(userData);
    // Modal for larger avatar image
    avatarUser(userData);

    // Catch error //
  } catch (error) {
    alert(error);
  }
}

const userUrl = `${API_BASE_URL}/api/v1/social/profiles/${userId}?_following=true&_followers=true`;

getUser(userUrl);

const userContainer = document.querySelector('#user-card');

function profileCard(userData) {
  const author = userData.name;
  const avatar = userData.avatar;
  const banner = userData.banner;
  const email = userData.email;
  const followers = userData._count.followers;
  const following = userData._count.following;
  const posts = userData._count.posts;

  userContainer.innerHTML = `  
  <div class="card border-0 align-items-center d-flex flex-column">
    <div 
    class="d-flex justify-content-center align-items-end w-100"
    style="
          background-image: url(${banner}); 
          background-position: center; 
          background-size: cover; 
          background-repeat: no-repeat;
          height: 400px;
          ">
      <img
        src="${avatar}"
        alt="user avatar"
        class="card-img-top profile-avatar rounded-circle border border-5 border-white mb-1"
        onerror="this.onerror=null; 
        this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
        style="cursor: pointer"
        data-bs-toggle="modal" 
        data-bs-target="#userAvatarModal"
        />
    </div>
    <div class="card-body" style="max-width: 720px">
      <h5 class="mb-3 text-center card-title">${author}</h5>
      <h6 class="card-subtitle text-muted text-center">${email}</h6>
      <div class="card-footer border-0 bg-white">

        <small
          style="cursor: pointer"
          class="card-text"
          data-bs-toggle="modal"
          data-bs-target="#followersModal"
        >
          <strong>Followers: </strong>${followers}
        </small>
        
        <small
          style="cursor: pointer"
          class="card-text"
          data-bs-toggle="modal"
          data-bs-target="#followingModal"
        >
          <strong>Following: </strong>${following}
        </small>
  
        <small class="card-text">
          <strong> Posts: </strong>${posts}
        </small>

      </div>
    </div>
  </div>`;
}

function avatarUser(userData) {
  const userAvatarContainer = document.querySelector('#modal-body');

  userData.following.forEach((avatarModal) => {
    // Avatar
    console.log(avatarModal);
    userAvatarContainer.innerHTML = `
    <img
      src="${avatarModal.avatar}"
      class=""
      alt="..."
      onerror="this.onerror=null; 
      this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
    />
    `;
  });
}

function followingUser(userData) {
  const followingContainer = document.querySelector('.following');

  userData.following.forEach((following) => {
    // Following
    const name = following.name;
    const avatar = following.avatar;
    followingContainer.innerHTML += `
    <div class="col">
    <a href="profile.html?id=${name}" class="text-dark text-decoration-none">
      <img
        src="${avatar}"
        class="card-img-top profile-avatar rounded-circle mt-2 mb-2"
        alt="..."
        onerror="this.onerror=null; 
        this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
      />
      <h6>${name}</h6>
    </a>
  </div>
    `;
  });
}

function followersUser(userData) {
  const followersContainer = document.querySelector('.followers');

  userData.followers.forEach((followers) => {
    // Following
    const name = followers.name;
    const avatar = followers.avatar;
    followersContainer.innerHTML += `
    <div class="col">
    <a href="profile.html?id=${name}" class="text-dark text-decoration-none">
      <img
        src="${avatar}"
        class="card-img-top profile-avatar rounded-circle mt-2 mb-2"
        alt="..."
        onerror="this.onerror=null; 
        this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
      />
      <h6>${name}</h6>
    </a>
  </div>
    `;
  });
}
