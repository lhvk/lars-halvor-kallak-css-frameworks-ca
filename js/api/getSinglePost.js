"use strict";

/**
 *
 * @param {string} url url for the fetch
 * @param {Object} fetchOptions options for the fetch
 * @param {function} getHtml html for the UI of the fetch
 */

/*======================================================================================================
Get single post
======================================================================================================*/

export const getSinglePost = async (url, fetchOptions, getHtml) => {
  try {
    fetchOptions;
    const response = await fetch(url, fetchOptions);
    const post = await response.json();
    // End of fetch //

    // html
    getHtml(post);

    // Catch error //
  } catch (error) {
    alert(error);
  }
};
