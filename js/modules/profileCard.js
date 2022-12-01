'use strict';

/*======================================================================================================
Profile Card
======================================================================================================*/

export const profileCard = function (userData) {
  document.querySelector('#user-card').innerHTML = `  
    <div class="card border-0 align-items-center d-flex flex-column">
      <div 
      class="d-flex justify-content-center align-items-end w-100"
      style="
            background-image: url(${userData.banner}); 
            background-position: center; 
            background-size: cover; 
            background-repeat: no-repeat;
            height: 400px;
            ">
        <img
          src="${userData.avatar}"
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
        <h5 class="mb-3 text-center card-title">${userData.name}</h5>
        <h6 class="card-subtitle text-muted text-center">${userData.email}</h6>
        <div class="card-footer border-0 bg-white">
  
          <small
            style="cursor: pointer"
            class="card-text"
            data-bs-toggle="modal"
            data-bs-target="#followersModal"
          >
            <strong>Followers: </strong>${userData._count.followers}
          </small>
          
          <small
            style="cursor: pointer"
            class="card-text"
            data-bs-toggle="modal"
            data-bs-target="#followingModal"
          >
            <strong>Following: </strong>${userData._count.following}
          </small>
    
          <small class="card-text">
            <strong> Posts: </strong>${userData._count.posts}
          </small>
  
        </div>
      </div>
    </div>`;

  // Prompts a modal when avatar is clicked on
  document.querySelector('#modal-body').innerHTML = `
    <img
      src="${userData.avatar}"
      class="modal-avatar"
      alt="..."
      onerror="this.onerror=null; 
      this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
    />
    `;
};
