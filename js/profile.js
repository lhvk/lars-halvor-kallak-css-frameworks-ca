"use strict";
import {
  changeDocTitle,
  formatDate,
  signOut,
} from "./components/components.js";
import { userDropDown } from "./modules/headerProfile.js";
import { profileCard } from "./modules/profileCard.js";
import { userFollowers } from "./modules/userFollowers.js";
import { userFollowing } from "./modules/userFollowing.js";
import { userPosts } from "./modules/userPosts.js";

document.querySelector("#return").addEventListener("click", () => {
  history.back();
});

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const userId = params.get("id");
const API_BASE_URL = `https://nf-api.onrender.com/api/v1/social/profiles/${userId}`;
const userUrl = `${API_BASE_URL}?_following=true&_followers=true&_posts=true`;
const user = JSON.parse(localStorage.getItem("userLoggedIn"));
const { token } = user;
// Fetch unique user ID //
export async function getUser(url) {
  try {
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const userData = await response.json();

    // End of fetch //

    // Change document title //
    changeDocTitle(`${userData.name}`);

    // User Profile
    profileCard(userData);
    // List of users the profile is following
    userFollowing(userData);
    // List of users who follow the user
    userFollowers(userData);
    // List of the users post
    userPosts(userData, formatDate);

    // Catch error //
  } catch (error) {
    alert(error);
  }
}
getUser(userUrl);

/*======================================================================================================
HEADER
======================================================================================================*/

// Profile
userDropDown();

// Sign out
signOut();
