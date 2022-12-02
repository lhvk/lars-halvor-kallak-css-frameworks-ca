"use strict";

import { singlePost } from "./modules/singlePost.js";
import { commentsPost } from "./modules/commentsPost.js";
import { reactionsPost } from "./modules/reactionsPost.js";

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

    // Change document title //
    document.title = `Social Media Page | ${post.title}`;

    singlePost(post);
    commentsPost(post);
    reactionsPost(post);

    // Catch error //
  } catch (error) {
    alert(error);
  }
}

getSinglePost(singlePostUrl);
