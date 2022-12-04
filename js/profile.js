"use strict";
import { signOut } from "./components/components.js";
import { profileCard } from "./modules/profileCard.js";
import { userFollowers } from "./modules/userFollowers.js";
import { userFollowing } from "./modules/userFollowing.js";
import { userPosts } from "./modules/userPosts.js";

document.querySelector("#return").addEventListener("click", () => {
  history.back();
});

const API_BASE_URL = "https://nf-api.onrender.com",
  queryString = document.location.search,
  params = new URLSearchParams(queryString),
  userId = params.get("id"),
  userUrl = `${API_BASE_URL}/api/v1/social/profiles/${userId}?_following=true&_followers=true&_posts=true`;

// Fetch unique user ID //
export async function getUser(url) {
  try {
    const token = localStorage.getItem("token");
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    const userData = await response.json();

    console.log(token);
    // End of fetch //

    // Change document title //
    document.title = `Social Media Page | ${userData.name}`;

    // User Profile
    profileCard(userData);
    // List of users the profile is following
    userFollowing(userData);
    // List of users who follow the user
    userFollowers(userData);
    // List of the users post
    userPosts(userData);

    // Catch error //
  } catch (error) {
    alert(error);
  }
}
getUser(userUrl);

// Sign out
signOut();
