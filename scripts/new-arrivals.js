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

const topSelling = [
  {
    image: "assets/image/top-selling1.png",
    name: "Vertical Striped Shirt",
    price: "$212",
    isDiscounted: true,
    discountPercentage: 20,
    rating: 5,
    maxRating: 5,
  },
  {
    image: "assets/image/top-selling2.png",
    name: "Courage Graphic T-shirt",
    price: "$145",
    isDiscounted: false,
    rating: 4.0,
    maxRating: 5,
  },
  {
    image: "assets/image/top-selling3.png",
    name: "Loose Fit Bermuda Short",
    price: "$80",
    isDiscounted: false,
    rating: 3.0,
    maxRating: 5,
  },
  {
    image: "assets/image/top-selling-4.png",
    name: "Faded Skinny Jeans",
    price: "$210",
    isDiscounted: false,
    rating: 4.5,
    maxRating: 5,
  },
];

const starRatings = {
  3.0: "assets/3.0star.svg",
  3.5: "assets/3.5star.svg",
  4.0: "assets/4.0star.svg",
  4.5: "assets/4.5star.svg",
  5.0: "assets/5.0star.svg",
};

const productContainer = document.getElementById("product-container");
const topSellingContainer = document.getElementById("top-selling-container");

const createProductCard = (product) => {
  const card = document.createElement("div");
  card.className = "product-card";
  // Yıldız değerlendirme için
  const ratingUrl = starRatings[product.rating] || starRatings[5];
  // indrimsiz fiyatı hesaplamak için fonksiyon
  const calculateOldPrice = (price, discountPercentage) => {
    const numericPrice = parseFloat(price.slice(1));
    return `$${(numericPrice / (1 - discountPercentage / 100)).toFixed(2)}`;
  };
  //indirimsiz fiyat
  const oldPriceHtml = product.isDiscounted
    ? `<p class="product-old-price">${calculateOldPrice(
        product.price,
        product.discountPercentage
      )}</p>`
    : "";
  //indirim oranındaki svgyi bulmak için
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
     <img src="${product.image}" alt="${product.name}" class="product-image" />
      <h3 class="product-name">${product.name}</h3>
      <div class="product-rating">
        <img src="${ratingUrl}" alt="${product.rating} stars" />
        <span class="rating-text">${product.rating}/${product.maxRating}</span>
      </div>
      <div class="price-container">
        <p class="product-price">${product.price}</p>
        ${oldPriceHtml}
        ${discountHtml}
      </div>
    `;

  return card;
};

products.forEach((product) => {
  const card = createProductCard(product);
  productContainer.appendChild(card);
});

topSelling.forEach((product) => {
  const card = createProductCard(product);
  topSellingContainer.appendChild(card);
});
