"use strict";

import { singlePost } from "./modules/singlePost.js";
import { commentsPost } from "./modules/commentsPost.js";
import { reactionsPost } from "./modules/reactionsPost.js";
import { deletePost } from "./api/deletePost.js";
import { signOut } from "./components/components.js";
import { getSinglePost } from "./api/getSinglePost.js";
import { changeDocTitle } from "./components/components.js";

document.querySelector("#return").addEventListener("click", () => {
  history.back();
});

/*======================================================================================================
GET SINGLE POST
======================================================================================================*/

const API_BASE_URL = "https://nf-api.onrender.com";
const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");
//
const singlePostUrl = `${API_BASE_URL}/api/v1/social/posts/${postId}?_author=true&_comments=true&_reactions=true`;
const token = localStorage.getItem("token");
const fetchOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const POSTS_URL = "/api/v1/social/posts/";
const updatePostUrl = `${API_BASE_URL}${POSTS_URL}${postId}`;

const getHtml = function (post) {
  changeDocTitle(post.title);
  singlePost(post);
  commentsPost(post);
  reactionsPost(post);
  deletePost();

  /*======================================================================================================
UPDATE SINGLE POST
======================================================================================================*/

  const { body, media, title, tags } = post;
  const editTitle = document.querySelector("#edit-post-title");
  const editBody = document.querySelector("#edit-post-text");
  const editTags = [document.querySelector("#edit-post-tags")];
  const editMedia = document.querySelector("#edit-post-media");

  editTitle.value = title;
  editBody.value = body;
  editTags.value = tags;
  editMedia.value = media;

  document.querySelector(".edit-submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
      title: editTitle.value,
      body: editBody.value,
      tags: editTags.value,
      media: editMedia.value,
    };

    const optionsPut = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };
    fetch(updatePostUrl, optionsPut)
      .then((response) => response.json())
      .then((json) => console.log("json update", json));
  });
};

getSinglePost(singlePostUrl, fetchOptions, getHtml);

// Sign out
signOut();
