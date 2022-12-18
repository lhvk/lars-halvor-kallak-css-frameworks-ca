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
    localStorage.removeItem("userLoggedIn");
    location.replace("/index.html");
  });
};

// Return button eventhandler
export const returnBack = () => {
  document.querySelector("#return").addEventListener("click", () => {
    history.back();
  });
};

// Date/time

export const formatDate = function (date, locale) {
  const calcDaysPassed = (date1, date2) =>
    Math.round(Math.abs(date2 - date1) / (1000 * 60 * 60 * 24));

  const daysPassed = calcDaysPassed(new Date(), date);

  if (daysPassed === 0) return "today";
  if (daysPassed === 1) return "yesterday";
  if (daysPassed <= 7) return `${daysPassed} days ago`;

  return new Intl.DateTimeFormat(locale).format(date);
};
