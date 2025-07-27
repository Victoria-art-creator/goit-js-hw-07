"use strict";
const categories = document.getElementById("categories");
const categoryItems = categories.querySelectorAll("li.item");
console.log("Number of categories: ", categoryItems.length);
categoryItems.forEach((categoryItem) => {
  const categoryName = categoryItem.querySelector("h2").textContent;
  const categoryElements = categoryItem.querySelectorAll("ul li").length;
  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});
