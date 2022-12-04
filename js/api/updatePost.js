"use strict";

/*======================================================================================================
Update post
======================================================================================================*/
export const updatePost = () => {
  fetch(url, fetchOptions)
    .then((response) => response.json())
    .then((json) => console.log(json));

  // if (response.json.ok) {
  //   document
  //     .querySelector(".edit-submit-btn")
  //     .setAttribute("data-bs-dismiss", "modal");
  //   // location.reload();
  // } else {
  //   alert("Failed to update post");
  // }
};
