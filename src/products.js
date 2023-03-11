const products = [
  {
    id: "1",
    Handle: "14k-wire-bloom-earrings",
    Title: "14k Wire Bloom Earrings",
    "Body (HTML)":
      '<div class="product-description rte" itemprop="description">Sed in metus nec dui consequat vestibulum. In varius pretium nunc, sed bibendum mauris lacinia non. Praesent vel neque ut ligula porttitor vestibulum ac eu erat. Pellentesque quis turpis odio. Etiam auctor laoreet ligula, vel aliquam urna ornare sed. Praesent laoreet diam vitae lectus molestie pulvinar.</div>\n<div class="product-description rte" itemprop="description">\n<ul>\n<li><span>Nullam blandit</span></li>\n<li><span>Vestibulum euismod</span></li>\n<li><span>Nullam venenatis </span></li>\n<li><span>Aenean a magna eros</span></li>\n</ul>\n</div>',
    Vendor: "Supply Dark",
    Type: "Earrings",
    Tags: "Rose Gold",
    rating: 12,
    numReveiws: 3,
    price: "10$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-wire-bloom-earrings_afcace12-edfb-4c82-aba0-11462409947f.jpg?v=1406749652",
  },
  {
    id: "2",
    Handle: "14k-solid-bloom-earrings",
    Title: "14k Solid Bloom Earrings",
    "Body (HTML)":
      '<div class="product-description rte" itemprop="description">Sed in metus nec dui consequat vestibulum. In varius pretium nunc, sed bibendum mauris lacinia non. Praesent vel neque ut ligula porttitor vestibulum ac eu erat. Pellentesque quis turpis odio. Etiam auctor laoreet ligula, vel aliquam urna ornare sed. Praesent laoreet diam vitae lectus molestie pulvinar.</div>\n<div class="product-description rte" itemprop="description">\n<ul>\n<li><span>Nullam blandit</span></li>\n<li><span>Vestibulum euismod</span></li>\n<li><span>Nullam venenatis </span></li>\n<li><span>Aenean a magna eros</span></li>\n</ul>\n</div>',
    Vendor: "Supply Dark",
    Type: "Earrings",
    Tags: "Rose Gold",
    rating: 12,
    numReveiws: 4,
    price: "40$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-solid-bloom-earrings_35415c7b-3053-4247-a017-f60f03ade244.jpg?v=1406749643",
  },
  {
    id: "3",
    Handle: "14k-intertwined-earrings",
    Title: "14k Intertwined Earrings",
    "Body (HTML)":
      '<div class="product-description rte" itemprop="description">Sed in metus nec dui consequat vestibulum. In varius pretium nunc, sed bibendum mauris lacinia non. Praesent vel neque ut ligula porttitor vestibulum ac eu erat. Pellentesque quis turpis odio. Etiam auctor laoreet ligula, vel aliquam urna ornare sed. Praesent laoreet diam vitae lectus molestie pulvinar.</div>\n<div class="product-description rte" itemprop="description">\n<ul>\n<li><span>Nullam blandit</span></li>\n<li><span>Vestibulum euismod</span></li>\n<li><span>Nullam venenatis </span></li>\n<li><span>Aenean a magna eros</span></li>\n</ul>\n</div>',
    Vendor: "Supply Dark",
    Type: "Earrings",
    Tags: "Rose Gold",
    rating: 12,
    numReveiws: 7,
    price: "60$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-intertwined-earrings_2bcb98e2-ac48-44c8-bf3a-1fddc37e936a.jpg?v=1406749634",
  },
  {
    id: "4",
    Handle: "14k-interlinked-earrings",
    Title: "14k Interlinked Earrings",
    "Body (HTML)":
      '<div class="product-description rte" itemprop="description">Sed in metus nec dui consequat vestibulum. In varius pretium nunc, sed bibendum mauris lacinia non. Praesent vel neque ut ligula porttitor vestibulum ac eu erat. Pellentesque quis turpis odio. Etiam auctor laoreet ligula, vel aliquam urna ornare sed. Praesent laoreet diam vitae lectus molestie pulvinar.</div>\n<div class="product-description rte" itemprop="description">\n<ul>\n<li><span>Nullam blandit</span></li>\n<li><span>Vestibulum euismod</span></li>\n<li><span>Nullam venenatis </span></li>\n<li><span>Aenean a magna eros</span></li>\n</ul>\n</div>',
    Vendor: "Supply Dark",
    Type: "Earrings",
    Tags: "White Gold",
    rating: 12,
    numReveiws: 6,
    price: "80$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-white-interlinked-earrings_f954bffe-d751-48bd-903f-18b5c74e16cd.jpg?v=1406749625",
  },
  {
    id: "5",
    Handle: "14k-dangling-pendant-earrings-1",
    Title: "14k Dangling Pendant Earrings",
    "Body (HTML)":
      '<div class="product-description rte" itemprop="description">Sed in metus nec dui consequat vestibulum. In varius pretium nunc, sed bibendum mauris lacinia non. Praesent vel neque ut ligula porttitor vestibulum ac eu erat. Pellentesque quis turpis odio. Etiam auctor laoreet ligula, vel aliquam urna ornare sed. Praesent laoreet diam vitae lectus molestie pulvinar.</div>\n<div class="product-description rte" itemprop="description">\n<ul>\n<li><span>Nullam blandit</span></li>\n<li><span>Vestibulum euismod</span></li>\n<li><span>Nullam venenatis </span></li>\n<li><span>Aenean a magna eros</span></li>\n</ul>\n</div>',
    Vendor: "Supply Dark",
    Type: "Earrings",
    Tags: "White Gold",
    rating: 12,
    numReveiws: 10,
    price: "30$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-white-gold-dangling-pendant-earrings_17e71027-81d8-4a49-a455-2e5c205963ee.jpg?v=1406749608",
  },
  {
    id: "6",
    Handle: "14k-dangling-pendant-earrings",
    Title: "14k Dangling Pendant Earrings",
    "Body (HTML)":
      '<div class="product-description rte" itemprop="description">Sed in metus nec dui consequat vestibulum. In varius pretium nunc, sed bibendum mauris lacinia non. Praesent vel neque ut ligula porttitor vestibulum ac eu erat. Pellentesque quis turpis odio. Etiam auctor laoreet ligula, vel aliquam urna ornare sed. Praesent laoreet diam vitae lectus molestie pulvinar.</div>\n<div class="product-description rte" itemprop="description">\n<ul>\n<li><span style="line-height: 1.5;">Nullam blandit</span></li>\n<li><span style="line-height: 1.5;">Vestibulum euismod</span></li>\n<li><span style="line-height: 1.5;">Nullam venenatis </span></li>\n<li><span style="line-height: 1.5;">Aenean a magna eros</span></li>\n</ul>\n</div>',
    Vendor: "Supply Dark",
    Type: "Earrings",
    Tags: "Rose Gold",
    rating: 12,
    numReveiws: 11,
    price: "10$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-infinite-link-earrings_d3d4fd54-7016-4f3c-b3be-66aeb5c24d5f.jpg?v=1406749599",
  },
  {
    id: "7",
    Handle: "14k-dangling-pendant-earrings",
    Title: "14k Dangling Pendant Earrings",
    "Body (HTML)": "",
    Vendor: "",
    Type: "",
    Tags: "",
    price: "120$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-infinite-link-earrings---3_d6c3d6dc-ebd4-480c-be8a-fa7422e672d2.jpg?v=1406749600",
  },
  {
    id: "8",
    Handle: "14k-dangling-pendant-earrings",
    Title: "14k Dangling Pendant Earrings",
    "Body (HTML)": "",
    Vendor: "",
    Type: "",
    Tags: "",
    rating: 12,
    numReveiws: 3,
    price: "100$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-infinite-link-earrings---2_197e4e51-6b44-4e54-9244-d3666bc5b514.jpg?v=1406749601",
  },
  {
    id: "9",
    Handle: "14k-dangling-pendant-earrings",
    Title: "14k Dangling Pendant Earrings",
    "Body (HTML)": "",
    Vendor: "",
    Type: "",
    Tags: "",
    rating: 12,
    numReveiws: 5,
    price: "100$",
    Image:
      "https://cdn.shopify.com/s/files/1/0597/2185/products/18k-rose-gold-infinite-link-earrings---2_197e4e51-6b44-4e54-9244-d3666bc5b514.jpg?v=1406749601",
  },
];
export default products;
