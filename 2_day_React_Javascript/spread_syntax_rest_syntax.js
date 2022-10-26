const mobilePhone = {
  name: "mobile phone",
  publishedYear: "2019",
};

const iPhone = {
  ...mobilePhone,
  name: "iPhone",
  os: "iOS",
};

console.log(iPhone);

const mobilesOnSale = ["Samsung", "Apple", "Huawei"];
const allMobiles = [...mobilesOnSale, "Oppo", "Vivo", "Xiaomi"];

console.log(allMobiles); // [ 'Samsung', 'Apple', 'Huawei', 'Oppo', 'Vivo', 'Xiaomi' ]

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

/* 物件解構賦值時使用其餘語法 */
const { name, description, ...other } = product;
console.log(other);

// {
//   image: 'https://i.imgur.com/b3qRKiI.jpg',
//   brand: { name: 'Apple' },
//   aggregateRating: { ratingValue: '4.6', reviewCount: '120' },
//   offers: { priceCurrency: 'TWD', price: '26,900' }
// }

/* 物件解構賦值時使用其餘語法 */
// const { name, description, ...other } = product;
// console.log(other);

// {
//   image: 'https://i.imgur.com/b3qRKiI.jpg',
//   brand: { name: 'Apple' },
//   aggregateRating: { ratingValue: '4.6', reviewCount: '120' },
//   offers: { priceCurrency: 'TWD', price: '26,900' }
// }
