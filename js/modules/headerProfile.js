"use strict";

/*======================================================================================================
Access a logged in user's profile from the header
======================================================================================================*/

const headerUserDropDown = document.querySelector(".header-user-dropdown");

export const userDropDown = () => {
  //
  const user = JSON.parse(localStorage.getItem("userLoggedIn"));
  const { avatar, userName } = user;

  headerUserDropDown.innerHTML = `
    <a
    href="#"
    class="d-block text-decoration-none dropdown-toggle"
    id="dropdown-user"
    data-bs-toggle="dropdown"
    aria-expanded="false">
    <img
      src="${avatar}"
      onerror="this.onerror=null; 
      this.src='https://img.freepik.com/free-vector/mysterious-mafia-man-wearing-hat_52683-34829.jpg?w=1380&t=st=1669211874~exp=1669212474~hmac=731dee4b6e9b61f93cf5e9547959b08ff3f5fb379e6996422a80d8e27ccaa2b4'"
      alt="mdo"
      width="32"
      height="32"
      class="rounded-circle" />
    </a>
    <ul
    class="dropdown-menu text-small shadow"
    aria-labelledby="dropdown-user">
    <li>
      <a class="dropdown-item text-white" href="profile.html?id=${userName}">
        Profile
      </a>
    </li>
    <li><hr class="dropdown-divider bg-white" /></li>
    <li>
      <button id="signOut" class="dropdown-item text-white">
        Sign out
      </button>
    </li>
    </ul>
    `;
};
