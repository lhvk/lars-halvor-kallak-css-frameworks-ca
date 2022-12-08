"use strict";

import { formatDate } from "../components/components.js";
import { allPosts } from "../modules/allPosts.js";

/**
 *
 * @param {getAllPosts} url
 */
/*======================================================================================================
Get all posts
======================================================================================================*/

export const getAllPosts = async function (url, fetchOptions) {
  try {
    //
    fetchOptions;
    const response = await fetch(url, fetchOptions);
    const json = await response.json();
    // html for all posts in the feed
    allPosts(json, formatDate);
  } catch (error) {
    alert(error);
  }
};
