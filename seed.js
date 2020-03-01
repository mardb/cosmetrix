
const db = require("./models");
const products = [
  {
    brand: "nyx",
    name: "NYX Mosaic Powder Blush Paradise",
    price: "10.49",
    description:
      "NYX Mosaic Powder Blush is a medley of that creates a flush of color and dazzling glow for every skin tone. Features:Five shades in one palette, this blush is bright pink with gold shimmerWorks as blush and highlighterFlattering on every skin toneUse to highlight, enhance & brighten Each mosaic of color blends beautifully with magical results",
    category: null,
    productType: "bronzer",
    rating: 5,
    tags: [],
    productColor: [
      {
        hexValue: "#D5838E",
        colorName: ""
      }
    ],
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/deedb7bd74bda43f062a09aab2ee1ec8_ra,w158,h184_pa,w158,h184.png",
    product_link:
      "https://well.ca/products/nyx-mosaic-powder-blush-paradise_106230.html?cat=328",
    website_link: "https://well.ca",
    // post: [Post.schema]
  },
  {
    brand: null,
    name: "Saint Cosmetics Bronzer",
    price: "30.96",
    description:
      "Saint Cosmetics' velvety smooth bronzing formulation gives the skin a soft, healthy and naturally radiant skin.Features:Comes in a range of shades to enhance all complexionsLong- lastingProvides skin with a sun-kissed healthy glowMade in Canada from naturally derived ingredientsChemical Free, Vegan, Gluten Free",
    category: null,
    productType: "bronzer",
    rating: null,
    tags: ["Canadian", "Gluten Free", "Vegan", "Natural"],
    productColor: [
      {
        hexValue: "#B98963",
        colorName: "On Cloud 9"
      },
      {
        hexValue: "#B77C59",
        colorName: "Glowing Halo"
      }
    ],
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/4f8578c9a7588249e95d463078b84de1_ra,w158,h184_pa,w158,h184.jpg",
    product_link:
      "https://well.ca/products/saint-cosmetics-bronzer_116816.html",
    website_link: "https://well.ca",
    // post: [Post.schema]
  },
  {
    brand: "marcelle",
    name: "Marcelle Monochromatic Bronzer",
    price: "19.99",
    description:
      " Marcelle Monochromatic Bronzer gives you a touch of sun for a radiant complexion! Enjoy a sun-kissed complexion all year long without experiencing the sun's harmful effects! Marcelle's versatile bronzer let you choose your how you want to look: enjoy the look of a luminous bronze goddess or a more natural healthy looking complexion. Let your beauty glow with Marcelle's hypoallergenic and perfume-free bronzer! Without preservatives or parabens. ",

    category: null,
    productType: "bronzer",
    rating: null,
    tags: ["Canadian"],
    productColor: [
      {
        hexValue: "#A27B67",
        colorName: "null"
      },
      {
        hexValue: "#B77C59",
        colorName: "Glowing Halo"
      }
    ],
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/1f2cd5b946f5e1d5bea2a7a7273c6fa4_ra,w158,h184_pa,w158,h184.jpg",
    product_link:
      "https://well.ca/products/marcelle-monochromatic-bronzer_94564.html",
    website_link: "https://well.ca",
    // post: [Post.schema]
  },
  {
    brand: "annabelle",
    name: "Annabelle Biggy Bronzer Haute Gold",
    price: "11.99",
    description:
      "Bronzed to perfection! Get sun-kissed, radiant skin in seconds with this Annabelle Biggy Bronzer mix of bronze and golden shades.",

    category: null,
    productType: "bronzer",
    rating: 5,
    tags: [],
    productType: "bronzer",
    productColor: [
      {
        hexValue: "#BC8B72",
        colorName: "Matter Gold"
      },
      {
        hexValue: "#B78A77",
        colorName: "Haute Gold"
      }
    ],
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/0bd612799d7958f7b1b98cc02bad5d09_ra,w158,h184_pa,w158,h184.jpg",
    product_link:
      "https://well.ca/products/annabelle-biggy-bronzer-haute-gold_108729.html",
    website_link: "https://well.ca",

    // post: [Post.schema]
  },
  {
    brand: "covergirl",
    name: "CoverGirl truBLEND Bronzer",
    price: "13.99",
    description:
      "CoverGirl's New truBLEND Bronzer has a marble-baked formula that blends instantly with skin making bronzer lines a thing of the past.Features:Baked blend of colors for the perfect glowBaked to get the perfect bronze for every skin toneBlends instantly, no bronzer linesSuitable for sensitive skin How to Apply: Step 1: Lightly dip brush into bronzer, being careful to tap or blow off excess powder. Step 2: Next, sweep the bronzer over cheeks and temples to create a warm, even, sun-kissed glow. ",
    category: null,
    product_type: "bronzer",
    rating: null,
    tags: [],
    productColor: [],
    image_link:
      "https://d3t32hsnjxo7q6.cloudfront.net/i/60f9f4f29be5221ff70cf20fabc03564_ra,w158,h184_pa,w158,h184.png",
    product_link:
      "https://well.ca/products/covergirl-trublend-bronzer_112764.html",
    website_link: "https://well.ca",
    // post: [Post.schema]
  }
];
//------------
const posts = [
  {
    title: "Post One",
    body: "This is the body for Post One."
  },
  {
    title: "Post Two",
    body: "This is the body for Post Two."
  },
  {
    title: "Post Three",
    body: "This is the body for Post Three."
  },
  {
    title: "Post Four",
    body: "This is the body for Post Four."
  }
];

//---------------
//Delete all Products
console.log("Deleting all products.. ");

db.Product.deleteMany({}, (err, result) => {
  if (err) {
    console.log(err);
    process.exit();
  }
  // console.log(result); //
  console.log(`Successfully deleted ${result.deletedCount} products.`);

  //create new products
  console.log('Creating new Products')
db.Product.create(products, (err, newProducts) =>{
  if(err){
    console.log();
    process.exit();

  }
  console.log(`Successfully created${newProducts.length} products.`);


  //delete all Posts
  console.log("Deleting all posts");
  db.Post.deleteMany({}, (err, result) => {
    if (err) {
      console.log(err);
      process.exit();
    }
    console.log(`Successfully deleted ${result.deletedCount} posts.`);
    //create new post
    console.log("Creating new post...");
    db.Post.create(posts, (err, newPosts) => {
      if (err) {
        console.log(err);
        process.exit();
      }
      console.log(`Successfully created${newPosts.length} posts.`);
      process.exit();
    });
  });
});
});

//-------------

// module.exports = seedData;
