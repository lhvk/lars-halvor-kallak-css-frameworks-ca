"use strict";

import { singlePost } from "./modules/singlePost.js";
import { commentsPost } from "./modules/commentsPost.js";
import { reactionsPost } from "./modules/reactionsPost.js";
import { deletePost } from "./api/deletePost.js";
import { formatDate, signOut } from "./components/components.js";
import { getSinglePost } from "./api/getSinglePost.js";
import { changeDocTitle } from "./components/components.js";
import { userDropDown } from "./modules/headerProfile.js";
import { editPost } from "./api/editPost.js";

document.querySelector("#return").addEventListener("click", () => {
  history.back();
});

/*======================================================================================================
GET SINGLE POST
======================================================================================================*/

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const postId = params.get("id");
const postUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postId}`;
//
const singlePostUrl = `${postUrl}?_author=true&_comments=true&_reactions=true`;
const user = JSON.parse(localStorage.getItem("userLoggedIn"));
const { token } = user;
//
const singlePostOptions = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
};

const getHtml = function (post) {
  changeDocTitle(post.title);
  singlePost(post, formatDate);
  commentsPost(post);
  reactionsPost(post);
  deletePost();

  /*======================================================================================================
UPDATE SINGLE POST
======================================================================================================*/

  const { body, media, title, tags } = post;
  const editTitle = document.querySelector("#edit-post-title");
  const editBody = document.querySelector("#edit-post-text");
  const editTags = document.querySelector("#edit-post-tags");
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
      tags: [editTags.value],
      media: editMedia.value,
    };

    const editOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };
    editPost(postUrl, editOptions);
  });

  /*======================================================================================================
DELETE POST 
======================================================================================================*/

  document.querySelector("#delete-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const deleteOptions = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    deletePost(postUrl, deleteOptions);
  });
};

getSinglePost(singlePostUrl, singlePostOptions, getHtml);

/*======================================================================================================
HEADER
======================================================================================================*/

// Profile
userDropDown();

// Sign out
signOut();
