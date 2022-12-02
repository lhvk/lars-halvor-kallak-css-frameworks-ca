"use strict";
// import { addNewPost } from "./api/newPost.js";
import { allPosts } from "./modules/allPosts.js";

let limit = 100;
let offset = 0;
const API_BASE_URL = "https://nf-api.onrender.com";
const postsUrl = `${API_BASE_URL}/api/v1/social/posts?&_author=true&_comments=true&_reactions=true&limit=${limit}&offset=${offset}
`;

async function getAllPosts(url) {
  try {
    //
    const token = localStorage.getItem("token");
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions);
    console.log(response);
    const json = await response.json();

    //html
    allPosts(json);

    console.log(json);
  } catch (error) {
    console.log(error);
  }
}

getAllPosts(postsUrl);

// Show more results button //
document.querySelector("#load-more").addEventListener("click", () => {
  getAllPosts(postsUrl);
});

// Sign out
document.querySelector("#signOut").addEventListener("click", (e) => {
  localStorage.clear("token");
});
