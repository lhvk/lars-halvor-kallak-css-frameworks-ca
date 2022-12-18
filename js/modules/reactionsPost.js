"use strict";

/*======================================================================================================
Reactions to a post
======================================================================================================*/

export const reactionsPost = function (post) {
  post.reactions.forEach((reaction) => {
    //
    const reactionsContainer = document.querySelector(".reactions-container");
    //
    reactionsContainer.innerHTML += `<p class="p-1">${reaction.symbol}</p>`;
  });
};
