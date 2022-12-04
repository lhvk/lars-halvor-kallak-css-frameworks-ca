"use strict";

import { allPosts } from "../modules/allPosts.js";

/**
 *
 * @param {getAllPosts} url
 */
/*======================================================================================================
Get all posts
======================================================================================================*/

export const getAllPosts = async function (url, limit) {
  try {
    //
    const token = localStorage.getItem("token");
    const fetchOptions = {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };
    const response = await fetch(url, fetchOptions, limit++);
    const json = await response.json();
    // html for all posts in the feed
    allPosts(json);
  } catch (error) {
    alert(error);
  }
};
