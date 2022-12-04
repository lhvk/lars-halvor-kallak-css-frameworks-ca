"use strict";

import { singlePost } from "./modules/singlePost.js";
import { commentsPost } from "./modules/commentsPost.js";
import { reactionsPost } from "./modules/reactionsPost.js";
import { deletePost } from "./api/deletePost.js";
import { signOut } from "./components/components.js";
import { updatePost } from "./api/updatePost.js";

document.querySelector("#return").addEventListener("click", () => {
  history.back();
});

const API_BASE_URL = "https://nf-api.onrender.com",
  queryString = document.location.search,
  params = new URLSearchParams(queryString),
  postId = params.get("id"),
  singlePostUrl = `${API_BASE_URL}/api/v1/social/posts/${postId}?_author=true&_comments=true&_reactions=true`;
// Fetch unique post ID //
async function getSinglePost(url) {
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
    const post = await response.json();
    // End of fetch //

    singlePost(post);
    commentsPost(post);
    reactionsPost(post);
    deletePost();
    updatePost();

    // Change document title //
    document.title = `Social Media Page | ${post.title}`;

    // Catch error //
  } catch (error) {
    alert(error);
  }
}
console.log(document.querySelector(".edit-submit-btn"));

getSinglePost(singlePostUrl);

// Sign out
signOut();
