"use strict";

/*======================================================================================================
Delete Post
======================================================================================================*/

const queryString = document.location.search,
  params = new URLSearchParams(queryString),
  postId = params.get("id");
const deleteUrl = `https://nf-api.onrender.com/api/v1/social/posts/${postId}`;
const user = JSON.parse(localStorage.getItem("userLoggedIn"));
const { token } = user;

export const deletePost = () => {
  document.querySelector("#delete-btn").addEventListener("click", (e) => {
    e.preventDefault();

    fetch(deleteUrl, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    }).then((response) => {
      switch (response.status) {
        case 200:
          alert("Message successfully deleted");
          document.referrer
            ? (window.location = document.referrer)
            : history.back();
          break;
        case 403:
          alert("You can't delete other people's messages!");
          break;
        default:
          "Something went wrong..";
      }
    });
  });
};
