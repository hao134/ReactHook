// 一個帶有非常多資料的物件
const product = {
  name: "iPhone",
  image: "https://i.imgur.com/b3qRKiI.jpg",
  description:
    "全面創新的三相機系統，身懷萬千本領，卻簡練易用。電池續航力突飛猛進，前所未見。令你大為驚豔的晶片更加碼機器學習技術，並突破智慧型手機所能成就的極限。第一部威力強大，Pro 如其名的 iPhone，全新登場。",
  brand: {
    name: "Apple",
  },
  aggregateRating: {
    ratingValue: "4.6",
    reviewCount: "120",
  },
  offers: {
    priceCurrency: "TWD",
    price: "26,900",
  },
};

// tradition
// const name = product.name;
// const description = product.description;

// 自動產生名為 name 和 description 的變數
// 並把 product 物件內的 name 和 description 當作變數的值
const { name, description } = product;
console.log(name);
console.log(description);

// Array destructuring
const mobileBrands = [
  "Samsung",
  "Apple",
  "Huawei",
  "Oppo",
  "Vivo",
  "Xiaomi",
  "LG",
  "Lenovo",
  "ZTE",
];

const [best, second, third] = mobileBrands;

console.log(best);
console.log(second);
console.log(third);
