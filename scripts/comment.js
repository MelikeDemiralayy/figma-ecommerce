const comments = [
  {
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    author: "Sarah M.",
    authorIcon: "assets/ok-icon.svg",
    ratingIcon: "assets/5.0star.svg",
  },
  {
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    author: "Sarah M.",
    authorIcon: "assets/ok-icon.svg",
    ratingIcon: "assets/5.0star.svg",
  },
  {
    text: "Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.",
    author: "Alex K.",
    authorIcon: "assets/ok-icon.svg",
    ratingIcon: "assets/5.0star.svg",
  },
  {
    text: "As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends",
    author: "James L.",
    authorIcon: "assets/ok-icon.svg",
    ratingIcon: "assets/5.0star.svg",
  },
  {
    text: "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.",
    author: "Sarah M.",
    authorIcon: "assets/ok-icon.svg",
    ratingIcon: "assets/5.0star.svg",
  },
];

function renderComments() {
  const container = document.getElementById("comment-container");
  container.innerHTML = comments
    .map(
      (comment) => `
          <div class="comment-box">
              <div class="comment-rating">
                  <img src="${comment.ratingIcon}" alt="Rating Icon" />
              </div>
              <div class="comment-author">
                  <span>${comment.author}</span>
                  <img src="${comment.authorIcon}" alt="Author Icon" />
              </div>
              <p class="comment-text">${comment.text}</p>
          </div>
      `
    )
    .join("");
}
window.onload = renderComments;
