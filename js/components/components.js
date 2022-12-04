"use strict";

/*======================================================================================================
COMPONENTS
======================================================================================================*/
// Change document title
export const changeDocTitle = (title) => {
  document.title = `Social Media Page | ${title}`;
};

// Sign out eventhandler
export const signOut = () => {
  document.querySelector("#signOut").addEventListener("click", () => {
    localStorage.clear();
    location.replace("/index.html");
  });
};

// Return button eventhandler
export const returnBack = () => {
  document.querySelector("#return").addEventListener("click", () => {
    history.back();
  });
};
