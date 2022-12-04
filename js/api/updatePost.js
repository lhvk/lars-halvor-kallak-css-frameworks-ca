"use strict";

/*======================================================================================================
Update post
======================================================================================================*/

const API_BASE_URL = "https://nf-api.onrender.com";
const updatePostUrl = `${API_BASE_URL}/api/v1/social/posts/359`;
const token = localStorage.getItem("token");

export const updatePost = () => {
  document.querySelector(".edit-submit-btn").addEventListener("click", (e) => {
    e.preventDefault();

    const data = {
      title: document.querySelector("#edit-post-title").value,
      body: document.querySelector("#edit-post-text").value,
      tags: [document.querySelector("#edit-post-tags")].value,
      media: document.querySelector("#edit-post-media").value,
    };

    const fetchOptions = {
      method: "PUT",
      body: JSON.stringify(data),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(updatePostUrl, fetchOptions)
      .then((response) => response.json())
      .then((json) => console.log(json));

    // if (response.json().ok) {
    //   document
    //     .querySelector(".edit-submit-btn")
    //     .setAttribute("data-bs-dismiss", "modal"),
    //     location.reload();
    // } else {
    //   return;
    // }
    // .then((json) => console.log(json));
  });
};
