"use strict";

/**
 * @param {addNewPost} url
 * @param {addNewPost} newPostData
 */

export async function addNewPost(url, newPostData) {
  try {
    //
    const token = localStorage.getItem("token");
    const fetchOptions = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(newPostData),
    };
    const response = await fetch(url, fetchOptions);
    console.log("post response", response);
    const json = await response.json();
    console.log("post", json);
  } catch (error) {
    console.log(error);
  }
}
