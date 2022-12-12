"use strict";

/*======================================================================================================
Edit Post
======================================================================================================*/

export const editPost = (url, options) =>
  fetch(url, options).then((response) => {
    if (response.ok) {
      response.json().then(() => {
        alert("post updated!");
        location.reload();
      });
    } else {
      alert("Something went wrong: Post not updated");
    }
  });
