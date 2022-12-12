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

    // SEARCH //
    const listContainer = document.querySelector(".list-group");
    const searchInput = document.querySelector("#search");
    listContainer.style.display = "none";

    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && listContainer.style.display === "block") {
        listContainer.style.display = "none";
        searchInput.value = "";
      }
    });

    // create list of posts to search through
    json.forEach((post) => {
      const { id, title, body, tags } = post;
      listContainer.innerHTML += `
      <li class="list-group-item"><a class="text-decoration-none text-body" href="#${id}">
      <span class="fw-semibold">${title}</span>
      ${body}
      <span class="clr-pink">${tags}</span>
      </a>
      </li>`;
    });

    // searchfield input function
    searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toUpperCase();
      const listItems = document.querySelectorAll(".list-group-item");

      for (let i = 0; i < listItems.length; i++) {
        // clear search when clicking on a result
        listItems[i].addEventListener("click", () => {
          listContainer.style.display = "none";
          searchInput.value = "";
        });
        // search
        const txtValue = listItems[i].innerText;
        //
        if (txtValue.toUpperCase().indexOf(filter) > -1) {
          listItems[i].style.display = "";
          listContainer.style.display = "none";
        } else {
          listItems[i].style.display = "none";
          listContainer.style.display = "block";
        }
      }
    });

    //
  } catch (error) {
    alert(error);
  }
};
