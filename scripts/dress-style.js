document.addEventListener("DOMContentLoaded", () => {
  const imageItems = document.querySelectorAll(".image-item");

  imageItems.forEach((item) => {
    item.addEventListener("click", () => {
      const category = item.getAttribute("data-category");
      if (category) {
        window.location.hash = `#${category}`;
      } else {
        console.error("Data-category attribute is missing or empty.");
      }
    });
  });

  function showCategoryContent() {
    const hash = window.location.hash.substring(1);
    if (hash) {
      console.log(`Current category: ${hash}`);
    }
  }
  showCategoryContent();
});
