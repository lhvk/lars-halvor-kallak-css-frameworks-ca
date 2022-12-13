"use strict";

import { formatDate } from "../components/components.js";
import { allPosts } from "../modules/allPosts.js";

/**
 *
 * @param {getAllPosts} url url for the fetch
 * @param {getAllPosts} fetchOptions options for the fetch
 */
/*======================================================================================================
Get all posts
======================================================================================================*/

export const getAllPosts = async function (url, fetchOptions) {
  try {
    //
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
      const {
        author: { name },
        id,
        title,
        body,
        tags,
      } = post;
      listContainer.innerHTML += `
      <li class="list-group-item"><a class="text-decoration-none text-body" href="#${id}">
      <div>
      <span class="fw-bold">${name}</span>
      <span class="fw-semibold">${title}</span>
      ${body}
      <span class="clr-pink text-break">${tags}</span>
      </div>
      </a>
      </li>`;
    });

    // searchfield input function
    searchInput.addEventListener("input", () => {
      const filter = searchInput.value.toUpperCase();
      const listItems = document.querySelectorAll(".list-group-item");

      for (let i = 0; i < listItems.length; i++) {
        const items = listItems[i].getElementsByTagName("a")[0];
        const textValue = items.textContent || items.innerText;
        // clear search when clicking on a result
        listItems[i].addEventListener("click", () => {
          listContainer.style.display = "none";
          searchInput.value = "";
        });
        // search
        if (textValue.toUpperCase().indexOf(filter) > -1) {
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
