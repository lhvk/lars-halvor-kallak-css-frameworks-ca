"use strict";

import { addNewPost } from "./api/newPost.js";

const newPostData = {
  title: document.querySelector("#new-post-title").value,
  body: document.querySelector("#new-post-text").value,
  tags: [document.querySelector("#new-post-tags")].value,
  media: document.querySelector("#new-post-media").value,
};

const API_BASE_URL = "https://nf-api.onrender.com";
const CREATE_ENTRY = "/api/v1/social/posts";
const addNewPostUrl = `${API_BASE_URL}${CREATE_ENTRY}`;

// New Post Button
document.querySelector(".share-button").addEventListener("click", function (e) {
  e.preventDefault(
    addNewPost(addNewPostUrl, newPostData),
    document.location.reload()
  );
});
