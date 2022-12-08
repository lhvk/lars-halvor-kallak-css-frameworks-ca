"use strict";

/**
 * @param {addNewPost} url
 * @param {addNewPost} newPostData
 */

/*======================================================================================================
New Post
======================================================================================================*/

export async function addNewPost(url, newPostData) {
  try {
    //
    const user = JSON.parse(localStorage.getItem("userLoggedIn"));
    const { token } = user;
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPostData),
    };
    const response = await fetch(url, fetchOptions);
    if (response.ok) {
      location.reload();
    } else {
      alert("Failed to post");
    }
  } catch (error) {
    alert(error);
  }
}
