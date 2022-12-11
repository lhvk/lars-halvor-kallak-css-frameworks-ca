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

    //
    const listContainer = document.querySelector(".list-group");
    //
    json.forEach((post) => {
      listContainer.innerHTML += `
      <li class="list-group-item">${post.title}</li>`;
    });
    const searchInput = document.querySelector("#search");
    //
    searchInput.addEventListener("input", (e) => {
      console.log("event", e);
      const filter = searchInput.value.toUpperCase();
      const listItems = document.querySelectorAll(".list-group-item");

      // Loop through all list items, and hide those who don't match the search query
      for (let i = 0; i < listItems.length; i++) {
        //
        let txtValue = listItems[i].innerText;
        //
        console.log(txtValue);

        //
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          listItems[i].style.display = "";
        } else {
          listItems[i].style.display = "none";
        }
      }
    });
  } catch (error) {
    alert(error);
  }
};
