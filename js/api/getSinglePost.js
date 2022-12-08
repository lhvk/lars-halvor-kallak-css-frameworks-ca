"use strict";

/**
 *
 * @param {*} url
 * @param {*} fetchOptions
 * @param {*} getHtml
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
