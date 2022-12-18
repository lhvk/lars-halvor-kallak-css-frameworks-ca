"use strict";

/*======================================================================================================
Delete Post
======================================================================================================*/

export const deletePost = (url, options) => {
  fetch(url, options).then((response) => {
    if (response.ok) {
      alert("Message successfully deleted"), (location.href = "feed.html");
    }
  });
};
