"use strict";

/*======================================================================================================
Delete Post
======================================================================================================*/
// TODO: Not tested

let postId;
const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postId}`;
const token = localStorage.getItem("token");

export const deletePost = fetch(deleteUrl, {
  method: "DELETE",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log("delete response", response);
  alert(`${response} has been deleted`);
});

document.querySelector(".delete-button").addEventListener("click", () => {
  deletePost(deleteUrl);
});
