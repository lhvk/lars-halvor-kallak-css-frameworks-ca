"use strict";

import { addNewPost } from "./api/newPost.js";
import { getAllPosts } from "./api/getAllPosts.js";
import { signOut } from "./components/components.js";
import { userDropDown } from "./modules/headerProfile.js";

/*======================================================================================================
CREATE NEW POST
======================================================================================================*/
const API_BASE_URL = "https://nf-api.onrender.com";
const POSTS = "/api/v1/social/posts";
const addNewPostUrl = `${API_BASE_URL}${POSTS}`;
const user = JSON.parse(localStorage.getItem("userLoggedIn"));
const { token } = user;
const fetchAllPosts = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

// New Post Button
document.querySelector(".share-button").addEventListener("click", async (e) => {
  e.preventDefault();

  const newPostData = {
    title: document.querySelector("#new-post-title").value,
    body: document.querySelector("#new-post-text").value,
    tags: [document.querySelector("#new-post-tags")].value,
    media: document.querySelector("#new-post-media").value,
  };

  await addNewPost(addNewPostUrl, newPostData);
});

/*======================================================================================================
GET ALL POSTS
======================================================================================================*/
let limit = 30;
let offset = 0;
const LIMIT_OFFSET = `&limit=${limit}&offset=${offset}`;
const ALL_POSTS = "?&_author=true&_comments=true&_reactions=true";
const postsUrl = `${API_BASE_URL}${POSTS}${ALL_POSTS}${LIMIT_OFFSET}
`;

getAllPosts(postsUrl, fetchAllPosts);

/*======================================================================================================
SHOW MORE RESULTS
======================================================================================================*/

// Show more results button
document.querySelector("#load-more").addEventListener("click", () => {
  getAllPosts(postsUrl, fetchAllPosts);
});

/*======================================================================================================
HEADER
======================================================================================================*/

// Profile
userDropDown();

// Sign out
signOut();
