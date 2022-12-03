"use strict";

/*======================================================================================================
Delete Post
======================================================================================================*/
// TODO: Not tested

const queryString = document.location.search,
  params = new URLSearchParams(queryString),
  postId = params.get("id");
const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postId}`;
const token = localStorage.getItem("token");

const deletePost = fetch(deleteUrl, {
  method: "DELETE",
  headers: {
    "Content-type": "application/json",
    Authorization: `Bearer ${token}`,
  },
}).then((response) => {
  console.log("delete response", response);
  switch (response.status) {
    case 200:
      alert("Message successfully deleted");
      break;
    case 403:
      alert("You can't delete other people's messages!");
      break;
    default:
      "Dunno what's wrong";
  }
});
