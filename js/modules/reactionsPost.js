"use strict";

/*======================================================================================================
Reactions to a post
======================================================================================================*/

export const reactionsPost = function (post) {
  post.reactions.forEach((reaction) => {
    console.log(reaction);
    document.querySelector(
      ".reactions-container"
    ).innerHTML += `<p class="p-1">${reaction.symbol}</p>`;
  });
};
