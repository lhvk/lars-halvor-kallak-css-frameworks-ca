'use strict';

/*======================================================================================================
List of the user's followers
======================================================================================================*/

export const userFollowers = function (userData) {
  userData.followers.forEach((followers) => {
    // Following
    document.querySelector('.followers').innerHTML += `
      <div class="col">
      <a href="profile.html?id=${followers.name}" class="text-dark text-decoration-none">
        <img
          src="${followers.avatar}"
          class="card-img-top profile-avatar rounded-circle mt-2 mb-2"
          alt="..."
          onerror="this.onerror=null; 
          this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
        />
        <h6>${followers.name}</h6>
      </a>
    </div>
      `;
  });
};
