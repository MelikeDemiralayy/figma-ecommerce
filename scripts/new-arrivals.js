const products = [
  {
    image: "assets/image/new-arrivals1.png",
    name: "T-shirt With Tape Details",
    price: "$120",
    isDiscounted: false,
    rating: 4.5,
    maxRating: 5,
  },
  {
    image: "assets/image/new-arrivals2.png",
    name: "Skinny Fit Jeans",
    price: "$240",
    isDiscounted: true,
    discountPercentage: 20,
    rating: 3.5,
    maxRating: 5,
  },
  {
    image: "assets/image/new-arrivals3.png",
    name: "Checkered Shirt",
    price: "$180",
    isDiscounted: false,
    rating: 4.5,
    maxRating: 5,
  },
  {
    image: "assets/image/new-arrivals4.png",
    name: "Sleve Striped T-shirt",
    price: "$130",
    isDiscounted: true,
    discountPercentage: 30,
    rating: 4.5,
    maxRating: 5,
  },
];

const starRatings = {
  3.5: "assets/3.5star.svg",
  4.5: "assets/4.5star.svg",
};

const productContainer = document.getElementById("product-container");

products.forEach((product) => {
  const card = document.createElement("div");
  card.className = "product-card";

  // Yıldız değerlendirme için
  const ratingUrl = starRatings[product.rating] || starRatings[5];

  // İndirimsiz fiyatı hesaplamak için fonksiyon
  const calculateOldPrice = (price, discountPercentage) => {
    const numericPrice = parseFloat(price.slice(1));
    // İndirimli fiyatı eski fiyata çevirmek için
    return `$${(numericPrice / (1 - discountPercentage / 100)).toFixed(2)}`;
  };

  // İndirimsiz fiyat
  const oldPriceHtml = product.isDiscounted
    ? `<p class="product-old-price">${calculateOldPrice(
        product.price,
        product.discountPercentage
      )}</p>`
    : "";

  // İndirim oranı için SVG'yi bulmak için
  const getDiscountSvg = () => {
    if (product.discountPercentage >= 30) {
      return "assets/discount30.svg";
    } else if (product.discountPercentage === 20) {
      return "assets/discount20.svg";
    } else {
      return "";
    }
  };

  const discountHtml = product.isDiscounted
    ? `<div class="discount-badge">
           <img src="${getDiscountSvg()}" alt="Discount Badge" />
         </div>`
    : "";

  card.innerHTML = `
      ${discountHtml}
      <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">
        <img src="${ratingUrl}" alt="${product.rating} stars" />
        <span class="rating-text">${product.rating}/${product.maxRating}</span>
      </div>
      <div class="price-container">
        ${oldPriceHtml}
        <p class="product-price">${product.price}</p>
      </div>
    `;

  productContainer.appendChild(card);
});
