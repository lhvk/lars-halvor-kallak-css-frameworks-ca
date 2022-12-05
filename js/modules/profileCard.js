"use strict";

/*======================================================================================================
Profile Card
======================================================================================================*/

export const profileCard = function (userData) {
  //
  const userCard = document.querySelector("#user-card");
  const modalBody = document.querySelector("#modal-body");
  const {
    banner,
    avatar,
    name,
    email,
    _count: { followers, following, posts },
  } = userData;
  //
  userCard.innerHTML = `  
    <div class="card border-0 align-items-center d-flex flex-column">
      <div 
      class="d-flex justify-content-center align-items-end w-100 banner-image-container bg-light"
      style="
            background-image: url(${banner}); 
            background-position: center; 
            background-size: cover; 
            background-repeat: no-repeat;
            height: auto;
            max-height: 400px;
            aspect-ratio: 16/9;
            ">
        <div class="image-wrapper">
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
      </div>
      <div class="card-body" style="max-width: 720px">
        <h5 class="mb-3 text-center card-title">${name}</h5>
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

  // Prompts a modal when avatar is clicked on

  modalBody.innerHTML = `
    <img
      src="${avatar}"
      class="modal-avatar"
      alt="..."
      onerror="this.onerror=null; 
      this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
    />
    `;
};
