
const db = require("./models");
const products = [


  {
    brand: "covergirl",
    name: "CoverGirl Professional Waterproof Mascara Very Black",
    price: "6.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/d44d5338e9dfa2b5234a02d25af64a26_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/covergirl-professional-waterproof_97253.html",
    website_link: "https://well.ca",
    description: "Volumize, lengthen and define like a pro! CoverGirl Professional 3-in-1 mascara for all day beautiful lashes.Features:Volume + length + definition in one easy stepHypoallergenic and suitable for contact lens wearersWaterproofApplication Tips: Hold brush as close as possible to base of lashes, and wiggle it as you move it up through lashes.",
    rating: null,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "physicians formula",
    name: "Physicians Formula Organic Wear CC Curl + Care Mascara ",
    price: "15.79",

    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/91995140b7749badeb17c41a7e035354_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/physicians-formula-organic-wear-cc_90023.html",
    website_link: "https://well.ca",
    description: "The ​1st ever 100% natural mascara with 70% organic ingredients combines the benefits of curl and care for eyelash curler results without the risk of lash loss.  Innovative formula features Physicians Formula's proprietary 100% Natural Origin CurlBooster™ Technology for 2 levels of CC Performance: Curl & Volumize Lashes Condition & Nourish LashesHypoallergenic. Fragrance Free. Gluten Free. Opthalmologist Approved. 100% Free of Harsh Chemicals. 100% Free of Synthetic Preservatives. 100% Free of Parabens. 100% Free of GMO's (Genetically Modified Organisms). 100% Free of Synthetic Colors. ",
    rating: 3.2,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Gluten Free",
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Ultra Black "
    },
    {
    hex_value: "#1B1B1B",
    colorName: "Black "
    }
    ]
    },
    {
    brand: "marcelle",
    name: "Marcelle Ultimate Lash Mascara",
    price: "10.99",

    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/6f521dc72d362855a605105854a6a54f_ra,w158,h184_pa,w158,h184.jpg",
    product_link: "https://well.ca/products/marcelle-ultimate-lash-mascara_100275.html",
    website_link: "https://well.ca",
    description: "Fabulously full lashes for star-like appeal.Marcelle Ultimate Lash Mascara is all about transformation, from thin to plump, thick and full lashes. Specially designed wand is easy to use and applies just the right amount of mascara for maximum lash volume that is free of clumps and mess. Formulated with proteins and revitalizing ingredients to give lashes the royal treatment and last a long, long time without flaking. Strong, full lashes are guaranteed, plus it's hypoallergenic and perfume-free so it's perfect for everyone.",
    rating: 4.5,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Canadian",
    "Gluten Free"
    ],
    product_colors: [
    {
    hex_value: "#403426",
    colorName: "Dark Brown "
    },
    {
    hex_value: "#000000",
    colorName: "Black "
    }
    ]
    },
    {
    brand: "e.l.f.",
    name: "e.l.f. Studio Lengthening & Volumizing Mascara",
    price: "4.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/8797938435b2e7f995aa632d5f2b2ba2_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/elf-studio-lengthening_93445.html",
    website_link: "https://well.ca",
    description: "Achieve thicker, fuller, and longer lashes that are beautiful and natural with e.l.f. Studio Lengthening & Volumizing Mascara. The enlarged brush coats your lashes evenly for an enhanced appeal. The unique formula is clump free and quick drying so you can have color that stays on all day with no smudging and no flaking.Ingredients: Aqua(Water), Caprylic/Caprictri Glycerides, Cera Carnauba (Carnauba) Wax, Synthetic Beeswax, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Stearic Acid, Cetyl Alcohol, Glyceryl,Stearate SE, PVP, Triethanolamine, Triacontanyl PVP, Hydroxyethyl Cellulose, Benzyl Alcohol, Methylchloroisothiazolinone, Methylisothiazolinone May Contain: Iron Oxides(CI 77891, CI 77892, CI 77899) ",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Vegan"
    ],
    product_colors: [ ]
    },
    {
    brand: "wet n wild",
    name: "Wet n Wild Mega Protein Mascara",
    price: "3.49",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/8b5c28e396504d8fb54c91c791f36749_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/wet-n-wild-mega-protein-mascara_82250.html",
    website_link: "https://well.ca",
    description: "Wet n Wild Mega Protein Mascara is a nourishing mascara conditions lashes with soy and wheat proteins and acai oil for healthier, fuller lashes.",
    rating: 5,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "covergirl",
    name: "CoverGirl Lashblast Volume Blasting Waterproof Mascara",
    price: "9.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/527f52aaaba663227d70de7c0a34ff80_ra,w158,h184_pa,w158,h184.jpg",
    product_link: "https://well.ca/products/covergirl-lashblast-volume-blasting_74927.html",
    website_link: "https://well.ca",
    description: "Get a blast of lush, volumized lashes! LashBlast’s patented volume-boosting formula and patent-pending brush are designed to max-out each and every lash, leaving you with the ultimate big lash look.Features: Instant volume and fullnessSmudge and smear-proofHypoallergenic and suitable for contact lens wearers",
    rating: 5,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "covergirl",
    name: "CoverGirl LashBlast Fusion Mascara ",
    price: "9.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/fcd915ee80b8b9cfaa71225020b8df3b_ra,w158,h184_pa,w158,h184.jpg",
    product_link: "https://well.ca/products/covergirl-lashblast-fusion-mascara_74817.html",
    website_link: "https://well.ca",
    description: "Experience COVERGIRL's first ever volume + length mascara!The fiberstretch formula and oversized brush make every little lash bigger, fuller, longer -looking and more dramatic.* *vs bare lashesFeatures: Super-Volumizing + Buildable fiber-strength lengtheningThickens and extends the look of your natural lashes",
    rating: 4.8,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "covergirl",
    name: "CoverGirl Professional Natural Lash Mascara Clear",
    price: "6.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/fa655a2751adc3d38050d08325f2d97f_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/covergirl-professional-natural-lash_97249.html",
    website_link: "https://well.ca",
    description: "For natural beautiful looking lashes! The CoverGirl clear gel formula and curved brush separates lashes while conditioning. It helps tame unruly brows too!Features:Natural looking lashesBeautifully tamed browsLasts all dayApplication Tips: Hold brush as close as possible to base of lashes, and wiggle it as you move it up through lashes.",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Define-A-Lash Lengthening & Defining Mascara",
    price: "10.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/cf9136ade1dd304b8cb81deb4b87e333_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-define-a-lash-lengthening_3744.html",
    website_link: "https://well.ca",
    description: "Define-A-Lash Lengthening & Defining Mascara is a zero-clump mascara that creates stunning length and clean definition. The flexible brush is shaped to the lash to elongate and define lashes, one by one. The built-in wiper contours brush to remove excess formula, ensuring clean deposit on lashes. There is no smudging, smearing or flaking, and the smooth, lightweight formula feels comfortable on lashes.Allergy tested, ophthalmologist tested and contact lens safe. ",
    rating: 4.4,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Very Black "
    }
    ]
    },
    {
    brand: "covergirl",
    name: "CoverGirl LastBlast Clump Crusher Mascara ",
    price: "9.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/df2f212e8449edcaff4876f592c4311e_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/covergirl-lastblast-clump-crusher_74593.html",
    website_link: "https://well.ca",
    description: "A breakthrough in no-clump mascara! Get 200% more volume and zero clumps. Features an innovative double-sided brush with lash-loading and clump-combing zones to crush clumps.Features: 200% more volume, zero clumpsInnovative curved brushSuper-volumized, beautifully separated lashes",
    rating: 4.5,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "almay",
    name: "Almay One Coat Get Up & Grow Mascara",
    price: "10.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/c4d0fba49172b419bc64cd92d31544c2_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/almay-one-coat-get-up-grow-mascara_30881.html",
    website_link: "https://well.ca",
    description: "Almay One Coat Get Up & Grow Mascara instantly lengthens and strengthens lashes every time you use it.Features: Anti-breakage pro-vitamin formula defends against damage so lashes continue to grow their longest Unique brush shape fits eye contours perfectly so that you reach every last lash in just one coat Clump free Extra gentle formula is safe even for sensitive eyes Hypoallergenic. Ophthalmologist Tested.",
    rating: 4.3,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#413025",
    colorName: "Black Brown "
    },
    {
    hex_value: "#262633",
    colorName: "Black "
    },
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Great Lash - Clear",
    price: "7.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/6cce75ce02a6694e1c89f7d5a68c8174_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/maybelline-great-lash-clear_3752.html",
    website_link: "https://well.ca",
    description: "Great Lash Clear Washable Mascara is a crystal clear formula that gives a softer, fuller look.The gentle brush separates lashes into a perfect fan. It contains panthenol to condition lashes, glycerin for a soft feel. This is great for shaping and setting brows. Contact lens safe, opthalmologist tested.  ",
    rating: 3.8,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "physicians formula",
    name: "Physicians Formula Organic Wear Jumbo Lash Mascara",
    price: "15.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/f0aa3e9c67743493c5caf4ecccccf57a_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/physicians-formula-organic-wear_58516.html",
    website_link: "https://well.ca",
    description: "Physicians Formula Organic Wear Jumbo Lash Mascara gives you 100% Dramatic Volume & Glamour. Additional Features: 100% of the Total Ingredients are from Natural Origin. 47% of the Total Ingredients are from Organic Farming. OrganiSoy Moisturizes and helps nourish lashes. Eco-Olive a natural antioxidant, shields lashes from harsh environmental aggressors. Directions for Use: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume. Can easily be washed off with soap and water or removed with Physicians Formula Eye Makeup Remover Pads or Lotions.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water.* Glycerin. Iron Oxide. Microcrystalline Cellulose. Glyceryl Stearate. Water. Beeswax.* Jojoba Esters. Tapioca Starch.* Copernicia Cerifera (Carnauba) Wax.* Stearic Acid. Glyceryl Caprylate. Aloe Barbadensis Leaf Juice.* Cellulose Gum. Cucumis Sativus (Cucumber) Fruit Extract.* Glycine Soya (Soybean) Oil.* Hydrolyzed Oryza Sativa (Rice) Protein. Leuconostoc/Radish Root Ferment Filtrate. Magnesium Aluminum Silicate. Olea Europaea (Olive) Leaf Extract.* May Contain: Titanium Dioxide.Hypoallergenic. Fragrance free. Opthamologist approved.",
    rating: 3.1,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Gluten Free",
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#282828",
    colorName: "Black Organics "
    },
    {
    hex_value: "#000000",
    colorName: "Ultra Black Organics "
    }
    ]
    },
    {
    brand: "dr. hauschka",
    name: "Dr. Hauschka Mascara",
    price: "33.0",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/85c6b509ae9d55d4cf6ab9208ea98aee_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/dr-hauschka-mascara_34274.html",
    website_link: "https://well.ca",
    description: "Mascara creates fuller lashes that accentuate your eyes. Medicinal extracts of eyebright, black tea and neem leaves have a soothing effect on the sensitive eye area while rose wax and jojoba oil protect and fortify each individual eyelash. Ophthalmologically and dermatologically tested.Features:Truly natural and organic cosmetics, certified to NATRUE and/or BDIH standardsFree from chemical/synthetic fragrances and preservativesFree from mineral oils, parabens, silicone and PEGDermatologically tested for sensitive skinWherever possible, all raw materials come from controlled organic or Demeter cultivation and are recovered under fair conditionsIngredients (Black, Blue):Ingredients Water (Aqua), Alcohol, Sorbitol, Ricinus Communis (Castor) Seed Oil, Cetearyl Alcohol, Camellia Sinensis Leaf Extract, Melia Azadirachta Leaf Extract, Euphrasia Officinalis Extract, Hectorite, Hydrogenated Jojoba Oil, Beeswax (Cera Alba), Rosa Damascena Flower Wax, Fragrance (Parfum), Citronellol*, Geraniol*, Linalool*, Xanthan Gum, Lysolecithin, Silica, Iron Oxides (CI 77499), Titanium Dioxide (CI 77891), Ultramarines (CI 77007).  *component of natural essential oilsIngredients (Brown):Water (Aqua), Alcohol, Sorbitol, Ricinus Communis (Castor) Seed Oil, Cetearyl Alcohol, Camellia Sinensis Leaf Extract, Melia Azadirachta Leaf Extract, Euphrasia Officinalis Extract, Hectorite, Hydrogenated Jojoba Oil, Beeswax (Cera Alba), Rosa Damascena Flower Wax, Fragrance (Parfum), Citronellol*, Geraniol*, Linalool*, Xanthan Gum, Lysolecithin, Maltodextrin, Silica, Carmine (CI 75470), Iron Oxides (CI 7749¹, CI 77492, CI 77499).  *component of natural essential oils",
    rating: 4.3,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#202217",
    colorName: "Brown "
    },
    {
    hex_value: "#26364C",
    colorName: "Blue "
    },
    {
    hex_value: "#1B2D2D",
    colorName: "Black "
    }
    ]
    },
    {
    brand: "e.l.f.",
    name: "e.l.f. Studio Waterproof Lengthening & Volumizing Mascara",
    price: "4.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/90787a47b829c5d11e1e4f001e68d90d_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/elf-studio-waterproof-lengthening_93449.html",
    website_link: "https://well.ca",
    description: "Achieve thicker, fuller, and longer lashes that are beautiful and natural with e.l.f. Studio Waterproof Lengthening & Volumizing Mascara. The enlarged brush coats your lashes evenly for an enhanced appeal. The unique formula is clump free and quick drying so you can have color that stays on all day with no smudging and no flaking. Waterproof, tear-proof and sweat proof for a look that lasts against all odds.Ingredients: Aqua (Water), Caprylic/Caprictri Glycerides, Cera Carnauba (Carnauba) Wax, Synthetic Beeswax Styrene/Acrylates/Ammonium Methacrylate Copolymer, Stearic Acid, Cetyl Alcohol, Glyceryl Stearate SE PVP, Triethanolamine, Triacontanyl PVP, Hydroxyethyl Cellulose, Benzyl Alcohol, Methylchloroisothiazolinone, Methylisothiazolinone. May Contain: Iron Oxides(CI 77491, CI 77492, CI 77499) ",
    rating: 4.8,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Vegan"
    ],
    product_colors: [ ]
    },
    {
    brand: "l'oreal",
    name: "L'Oreal Paris Extra Volume Collagen Mascara",
    price: "13.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/7bcefaf1f12f609b2d3d1df2cfbcf6db_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/loreal-paris-extra-volume-collagen_12581.html",
    website_link: "https://well.ca",
    description: "L'Oreal's biggest volume builder! Introducing the latest innovation in mascara technology--Extra Volume Collagen Mascara. It's made with hydra-collagen and enhances the thickness of your lashes for up to 12x more impact without any clumps. Our patented brush is 50% bigger so it builds that incredible volume fast. Your lashes will build extra body and extra impact in just one sweep.",
    rating: 4.8,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "almay",
    name: "Almay One Coat Thickening Mascara",
    price: "10.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/a49009aa8bdc3aab2b07a78fbfe0bcb8_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/almay-one-coat-thickening-mascara_17457.html",
    website_link: "https://well.ca",
    description: "Almay One Coat Thickening Mascara gives you up to 100% thicker lashes in one smooth, even coat. This volumizing formula builds lashes double thick in one quick, clump-free application. Nourishing formula is infused with aloe and vitamin B5 to help keep lashes conditioned and silky. Extra gentle, non irritating formula.Hypoallergenic. Ophthalmologist tested.",
    rating: 4.1,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#413025",
    colorName: "Black Brown "
    },
    {
    hex_value: "#262633",
    colorName: "Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Great Lash Big Mascara",
    price: "7.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/0795abd7feaf855f88055e181652d65a_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-great-lash-big-mascara_15818.html",
    website_link: "https://well.ca",
    description: "Live Big! Great Lash Big has a Bigger Brush for Great Big Live-It-Up Lashes! The Great Big Brush provides a bigger, bolder lash effect Great buildable formula still conditions as it thickens with even greater intensity No clumps or globs ",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#0E0F11",
    colorName: "Very Black "
    },
    {
    hex_value: "#120C0A",
    colorName: "Brownish Black "
    },
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "e.l.f.",
    name: "e.l.f. Studio Mineral Infused Mascara",
    price: "4.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/be704396ee7b24ec4783787df9be1eeb_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/elf-studio-mineral-infused_93447.html",
    website_link: "https://well.ca",
    description: "e.l.f. Studio Mineral Infused Mascara creates fuller, healthier looking lashes. Enhance lashes for a naturally thicker and more volumized look. The long-wear formula and unique silicone brush creates a clump free and defined application for gorgeous lashes all day.Ingredients: Aqua (Water), Caprylic/Capric Triglyceride, Cera Carnauba (Carnauba) Wax, Synthetic Beeswax, Styrene/Acrylates/Ammonium Methacrylate Copolymer, Stearic Acid, Cetyl Alcohol, Glyceryl Stearate SE, PVP, Triethanolamine , Triacontanyl PVP, Hydroxyethyl Cellulose, Caprylyl Glycol, Phenoxyethanol, Potassium Sorbate May Contain: Iron Oxides (CI 77491 , CI 77492 , CI 77499), Manganese Violet (CI 77742) ",
    rating: 4.3,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Vegan"
    ],
    product_colors: [ ]
    },
    {
    brand: null,
    name: "Earth Lab Raw Mascara",
    price: "24.0",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/823cecb5e0d139ff5a98c253aa68c876_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/earth-lab-raw-mascara_78795.html",
    website_link: "https://well.ca",
    description: "This 100% natural, botanical based formula glides on effortlessly. You'll enjoy the silky smooth application which easily separates lashes and the best part - No Clumping, No Flaking, No Smudging, No Toxic Chemicals and No Parabens!Ingredients: Water/Aqua, Natural Beeswax, Copernicia Cerifera (Carnauba) Wax, Lecithin, Glyceryl Stearate, Glycerin, Xanthan Gum, Celluloses, Carthamus Tinctorius (Safflower) Seed Oil, Aloe Barbadensis Leaf Extract, Jojoba (Simmondsia Chinensis) Oil, Tocopherol, Chamomilla Recutita (Matricaria) Flower Extract, Rosmarinus Officinalis (Rosemary) Leaf Extract, Cucumis Sativus (Cucumber) Fruit Extract, Phenoxyethanol, Silica, Mica, Iron OxidesRaw Mascara guaranteed 12 months sealed and expires within 3 months of opening.For usage tips for Earth Lab Raw Mascara read our blog post.  ",
    rating: 4.1,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Canadian",
    "Natural"
    ],
    product_colors: [ ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Great Lash Mascara",
    price: "7.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/6b4d354890177a73b4d6630d723c2f21_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-great-lash-mascara_3735.html",
    website_link: "https://well.ca",
    description: "Great Lash Waterproof Mascara conditions as it thickens lashes. The lash-doubling formula glides on smoothly to build great-looking smudge-proof lashes. The lash-building brush makes it easy to get a full lash look without clumps. Hypoallergenic and contact lens safe. Allure 2008 Reader's Choice Award Winner for drugstore mascara. ",
    rating: 4.2,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#0E0F11",
    colorName: "Very Black "
    },
    {
    hex_value: "#120C0A",
    colorName: "Brownish Black "
    }
    ]
    },
    {
    brand: "l'oreal",
    name: "L'Oreal Paris Double Extend Beauty Tubes",
    price: "14.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/45fea1eb913d55d6e1586ea66c1c82a0_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/loreal-paris-double-extend-beauty_9193.html",
    website_link: "https://well.ca",
    description: "Get the look of salon lash extensions with the new Double Extend Beauty Tubes Mascara! This new lash extension effect mascara visibly lengthens your lashes up to an astonishing 80%.Step 1: Ultra nourishing base coat infused with Ceramide R and D-Panthenol protects and strengthens lashes creating the perfect base for tube application.Step 2: Ultra-lengthening tube top coat sets to form lash-extending beauty tubes that visibly lengthen lashes to amazing new heights. Beauty tubes will not run, clump, flake or smudge and will stay on all-day.Step 3: Beauty tubes remove easily with just warm water – no makeup remover or rubbing required! Clump-free length. Smudge-proof. Flake-proof. Long wear hold. Ophthalmologist and allergy tested. Suitable for sensitive eyes and contact lens wearers. Removes easily with plenty of warm water. Fragrance-free.  ",
    rating: 4.6,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#231F20",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "l'oreal",
    name: "L'Oreal Paris Telescopic Mascara",
    price: "13.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/a5add7c57e2a69456749c0e8263175f7_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/loreal-paris-telescopic-mascara_4410.html",
    website_link: "https://well.ca",
    description: "Want longer, more defined lashes in a single sweep?L'Oreal Paris introduces amazing new technology that lengthens lashes to the extreme and intensifies them at their base. It will change the way women think about lengthening mascara.It's the 1st spectacular stretch-effect mascara from L'Oreal Paris.The High-Precision Flexible Brush stretches the formula towards infinity for up to 60% longer lashes.",
    rating: 4.7,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "suncoat",
    name: "Suncoat Sugar-Based Mascara",
    price: "16.49",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/04362753156bc96b10e1a3f16d585ff0_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/suncoat-sugar-based-mascara_10692.html",
    website_link: "https://well.ca",
    description: "This sugar-based natural mascara is another unique product from Suncoat. Made with natural sugar-based biopolymer, kaolin clay, earth pigments and enriched with Vitamin E, it naturally builds lash volume and length! It is a superior alternative for your sensitive eyes and for our environment!Features: Free of PVP (polyvinyl pyrrolidone polymer), acrylic copolymer, VA (vinyl acetate) polymerFree of fragrance, parabens, alcohol and glycolKind to sensitive eyesNaturally builds lash volume and lengthBiodegradable ingredientsVeganNot tested on animals Although NOT waterproof, this natural mascara has GREAT wear-ability. It resists smudging, but washes off easily with regular skin cleanser and water.Ingredients: Aqua (water), kaolin clay, vegetable glycerin, hydrolyzed Zee mays (corn) starch (natural sugar-based biopolymer), lecithin, Citrus grandis (grapefruit) seed extract, tocopherol (vitamin E), citric acid, pigments.",
    rating: 3.4,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Canadian",
    "Vegan",
    "Natural"
    ],
    product_colors: [ ]
    },
    {
    brand: "pacifica",
    name: "Pacifica Aquarian Gaze Water-Resistant Mascara",
    price: "21.0",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/5e9ec049ea72f7ec853bcdb996201dd7_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/pacifica-aquarian-gaze_93483.html",
    website_link: "https://well.ca",
    description: "This Pacifica Aquarian Gaze Water-Resistant and long wearing is a deep blue super lush natural mineral mascara. Amazing lengthening brush (100% vegan) makes your lashes insanely long and gorgeous as it separates to build volume. It is nourishing formula is infused with coconut oil, kelp extract and vitamin B to hydrate each lash as it lengthens and strengthens.Features:Coconut Oil- Studies have shown coconut oil to be an excellent hair strengthener and moisturizer that can reduce breakagePanthenol (Vitamin B)- Helps strengthen and nourish hairKelp Extract- Moisturize and condition lashesView IngredientsFormulated without: Animal ingredients (including carmine, beeswax and lanolin), animal testing. FD&C colors, mineral oil, parabens, phthalates, petroleum, propylene glycol, SLS, gluten, peanut oil and other ingredients you don’t want on your skin.Ingredients: Water (Aqua), Copernicia cerifera (Carnauba) Wax (thickener), Euphorbia cerifera (Candelilla) Wax (thickener), Acrylates Crosspolymer, Butylene Glycol, Stearic Acid, Glyceryl Stearate, Polyisobutene, Phenoxyethanol, Hydroxyethylcellulose Sodium Hydroxide, Caprylyl Glycol, Ethylhexylglycerin, Steareth-21, Cocos Nucifera (coconut) Oil, Panthenol (vitamin B), macrocystis pyrifera (kelp) extract, Sodium Dehydroacetate, Disodium EDTA, Hexylene Glycol, Iron Oxides CI 77491, 77492, CI 77499. ",
    rating: 4.8,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Vegan",
    "Natural"
    ],
    product_colors: [ ]
    },
    {
    brand: "physicians formula",
    name: "Physicians Formula Organic Wear 100% Natural Origin Mascara",
    price: "15.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/78e3d20b744ec40691dd7357c9db6dd3_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/physicians-formula-organic-wear-100_58518.html",
    website_link: "https://well.ca",
    description: "Physicians Formula Organic Wear 100% Natural Origin Mascara's revolutionary 100% Natural Origin formula contains the purest ingredients and provides 5x Lash Boosting for lash length, volume & definition naturally. 100% Recyclable Eco-Brush defines each lash with ultra-soft plastic bristles. 100% Free of Harsh Chemicals, Synthetic Preservatives, Parabens, Clumping, Smudging, Flaking, Fibers & Dyes.Directions for Use: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water*, Glycerin, Iron Oxide, Microcrystalline Cellulose, Glyceryl Stearate, Water, Beeswax*, Jojoba Esters, Tapioca Starch*, Copernicia Cerifera (Carnauba) Wax*, Stearic Acid, Glyceryl Caprylate, Aloe Barbadensis Leaf Juice*, Cellulose Gum, Cucumis Sativus (Cucumber) Fruit Extract*, Glycine Soya (Soybean) Oil*, Hydrolyzed Oryza Sativa (Rice) Protein, Leuconostoc/Radish Root Ferment Filtrate, Magnesium Aluminum Silicate, Olea Europaea (Olive) Leaf Extract*. May Contain: Titanium Dioxide *Produced from Organic Farming.Hypoallergenic. Safe for Sensitive Eyes and Contact Lens Wearers.",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Gluten Free",
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#282828",
    colorName: "Black Organics (1063C) "
    },
    {
    hex_value: "#000000",
    colorName: "Ultra Black Organics (1062C) "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Volum' Express Colossal Mascara",
    price: "9.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/5d6e0d96f6dedbc3aadd88d9403cb26e_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-volum-express-colossal_7663.html",
    website_link: "https://well.ca",
    description: "Why You'll Love It Creates 9X the volume, instantly. Patented MegaBrush + Collagen Formula plump lashes one by one Dramatic Volume with no clumps Washable ",
    rating: 4.5,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Glam Black "
    },
    {
    hex_value: "#0D090A",
    colorName: "Classic Black "
    }
    ]
    },
    {
    brand: "l'oreal",
    name: "L'Oreal Paris Voluminous Volume Building Mascara",
    price: "9.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/c9288fc106afdf3f7039a5128e0f621d_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/loreal-paris-voluminous-volume_4415.html",
    website_link: "https://well.ca",
    description: "4X Fuller Lashes Dramatic Volume Effect Separates & Builds Every Lash Patented Volume Maximizing Brush L'Oreal presents Voluminous Volume Building Mascara. Uniquely formulated to resist clumping, soften lashes and build lashes to 4X their natural thickness. Unique maximizing formula quickly thickens and builds lashes in a single application for a full and dramatic lash look. Patented Volume Maximizing Brush thickens lashes evenly, smoothly leaving them soft with virtually no flakes, smudges or clumps. Voluminous with Panthenol and Ceramide-R protects and conditions lashes leaving them supple and soft to the touch, resisting clumping and flaking. Opththalmologist and allergy tested. Suitable for sensitive eyes and contact lens wearers. Clump-resistant. Fragrance-free. All day wear. ",
    rating: 2.5,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Carbon Black "
    },
    {
    hex_value: "#262626",
    colorName: "Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Illegal Length Fiber Extensions Mascara",
    price: "11.49",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/086bd6bba51f630f60511cdc24c68096_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-illegal-length-fiber_84357.html",
    website_link: "https://well.ca",
    description: "Build 4mm of measurable extensions! Features: Fiber-fix brush has 6 different contact points with each lash for optimal fiber placementBreakthrough formula contains fibers up to 4mm in lengthSealing formula stretches lashes and seals fibers to lashesWashable, also available in waterproof formula  For Best Results: Extend lashes upward with Fiber-Fix brush, from root to tip. Only a few strokes necessary. For best results, do not let dry between coats.  Removes easily with soap and water or Maybelline® Expert Eyes® 100% Oil-Free Eye Makeup Remover. ",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Volum' Express The Rocket Mascara",
    price: "10.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/0b04408a84154f14800e4c9477f8a924_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/maybelline-volum-express-the-rocket_84350.html",
    website_link: "https://well.ca",
    description: "Explosive Volume in Rocket Time! 8X Bigger, Smoother. Now, the most explosive, beautiful lashes ever! Maybelline's patented supersonic brush with micro bristles loads on big, sleek volume instantly. The fast-glide formula keeps lashes smooth. Zero clumps!",
    rating: null,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#202020",
    colorName: "Very Black "
    },
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "l'oreal",
    name: "L'Oreal Paris Voluminous Million Lashes Mascara",
    price: "13.29",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/7a372820b4a151ec62a6ce4261948421_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/loreal-paris-voluminous-million_28968.html",
    website_link: "https://well.ca",
    description: "For lashes that look a million times multiplied and perfectly defined, there's only one mascara - Voluminous® Million Lashes™. The built-in Clean Sweep Wiping System wipes the brush free of clumps leaving the perfect amount of mascara for an ultra-volumized clean lash look. The Millionizing Brush evenly thickens lashes from root to tip. The result? Lashes look so multiplied, so clean, it's like seeing millions. Features: Ophthalmologist-tested and allergy-testedSuitable for sensitive eyes an contact len wearersClump-free.Fragrance-free  ",
    rating: 4.6,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#4D2C00",
    colorName: "Black Brown "
    },
    {
    hex_value: "#231F20",
    colorName: "Black "
    },
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    },
    {
    hex_value: "#030001",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Great Lash Lots of Lashes Mascara",
    price: "7.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/dfaf77464a8cb52a1a8f2a15e8abf920_ra,w158,h184_pa,w158,h184.png",
    product_link: "https://well.ca/products/maybelline-great-lash-lots-of-lashes_50739.html",
    website_link: "https://well.ca",
    description: "Introducing a Great Lash innovation - Great Lash Lots of Lashes!The favourite Maybelline mascara now gives the look of more lashes than ever, thanks to the exclusive Great Little Grabber Brush. In just one swipe, the Grabber Brush easily reaches all lashes - even in the corners - for a multiplied lash look without the clumps. The result? Great lashes with lots of impact and not a lot of work.For best results: sweep brush from root to tip of lashes. Continue building volume until the desired lash look is achieved. Do not let dry between coats. Removes easily with soap and water or eye makeup remover. ",
    rating: 4.2,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#2d1e17",
    colorName: "Brownish Black "
    },
    {
    hex_value: "#000000",
    colorName: "Blackest Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Lash Stiletto Ultimate Length Mascara",
    price: "10.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/812b5ae27df9be983052063d52d7ab7a_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-lash-stiletto-ultimate_17287.html",
    website_link: "https://well.ca",
    description: "The only mascara that does for lashes what stilettos do for legs.     The Grip & Extend brush grasps each lash and coats from every angle     Elastic formula stretches lashes for provocative length     Pro-Vitamin B-5 formula conditions and smoothes for black-patent shine     Contact lens safe and Ophthalmologist tested     Waterproof  ",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#0E0F11",
    colorName: "Very Black "
    }
    ]
    },
    {
    brand: "maybelline",
    name: "Maybelline Volum'Express the Falsies Mascara",
    price: "9.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/af1f35f15ee64cc1003f1ccfc6451d71_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/maybelline-volumexpress-the-falsies_26311.html",
    website_link: "https://well.ca",
    description: "False lash glam in a tube, instantly!The Falsies Mascara delivers a false lash look, giving you a full set of voluminous, bold, fanned-out lashes and the appearance of no gaps from any angle.The Pro-Keratin Fiber enriched formula is designed to deliver immediate results, distributing volume and visible intensity to your lashes. The spoon-shaped brush helps fan lashes out.The Falsies Mascara is designed to give the appearance of no gaps and spaces. In a wink, lashes you didn’t even know you had look visibly thickened!",
    rating: 4,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#0E0F11",
    colorName: "Very Black "
    }
    ]
    },
    {
    brand: "covergirl",
    name: "CoverGirl Lashblast Volume Blasting Mascara ",
    price: "9.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/18790b1fce6ddd2c7c20e73ce964eadd_ra,w158,h184_pa,w158,h184.jpg",
    product_link: "https://well.ca/products/covergirl-lashblast-volume-blasting_74922.html",
    website_link: "https://well.ca",
    description: "Get a blast of lush, volumized lashes! LashBlast’s patented volume-boosting formula and patent-pending brush are designed to max-out each and every lash, leaving you with the ultimate big lash look.Features: Instant volume and fullnessSmudge and smear-proofHypoallergenic and suitable for contact lens wearers",
    rating: 4.8,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [ ]
    },
    {
    brand: "pacifica",
    name: "Pacifica Stellar Gaze Length & Strength Mineral Mascara",
    price: "28.0",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/b4a5f31a499b42938980fb369d0213ab_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/pacifica-stellar-gaze-length_90822.html",
    website_link: "https://well.ca",
    description: "You will fall in love with Pacifica's long lasting, nourishing, natural mineral mascara.  This amazing formula is infused with coconut oil and vitamin B to hydrate each lash as it lengthens, strengthens and adds volume. Apply for a natural look by day, or layer for more volume with the super plush 100% vegan brush that provides effortless coverage.100% vegan. Cruelty-free. Formulated without FD & C color, parabens, talc and mineral oil. Read our blog post for tips on how to Green & Clean your makeup bag.  Ingredients: Aqua, glycerin (vegetable), glyceryl stearate se, jojoba esters, tapioca starch, stearic acid ( vegetable), copernicia cerfera (carnauba) wax, euphorbia cerifera (candelilla) wax, arabic/acacia gum, acrylates, crosspolymer, potassium cetyl phosphate, microcrystalline cellulse (plant), cocos nucifera (coconut) oil, panthenol (vitamin b), cellulose gum, gluconolactone, macrocystis pyifera (brown kelp) extract, hydrolyzed oryza sativa (rice) protein, sodium benzoate, iron oxides c1 77499.",
    rating: 4.2,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Vegan",
    "Natural"
    ],
    product_colors: [ ]
    },
    {
    brand: "physicians formula",
    name: "Physicians Formula Organic Wear FakeOut Mascara",
    price: "15.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/2b3d5588b073bfae89c6308dcfe96436_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/physicians-formula-organic-wear_70944.html",
    website_link: "https://well.ca",
    description: "Physicians Formula Organic Wear FakeOut Mascara is the 1st EVER mascara with 100% natural origin lash extension fibers for the full-on fringe of false lashes without irritation.The innovative formula amplifies lash volume, length & curl. Plus the oversized brush creates a fabulously false lash effect instantly!Features: 100% of the Total Ingredients are from Natural Origin 70% of the Total Ingredients are from Organic FarmingDirections: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water*, Glycerin*, Glyceryl Stearate SE, Beeswax*, Microcrystalline Cellulose, Copernicia Cerifera (Carnauba) Wax*, Tapioca Starch*, Hydrolyzed Corn Starch, Stearic Acid, Jojoba Esters, Oryza Sativa (Rice) Powder*, Oryza Sativa (Rice) Extract*, Ceiba Pentandra Fiber Powder, Cellulose, Nylon-10/10, Aloe Barbadensis Leaf Extract*, Cucumis Sativus (Cucumber) Fruit Extract*, Glycine Soja (Soybean) Oil*, Olea Europaea (Olive) Leaf Extract*, Glycerin, Magnesium Aluminum Silicate, Water, Glyceryl Caprylate, Leuconostoc / Radish Root Ferment Filtrate May Contain: Iron Oxides, Titanium Dioxide* Ingredients from Organic FarmingHypoallergenic. Fragrance Free. Safe for Sensitive Eyes and Contact Lens Wearers. Ophthalmologist Approved.",
    rating: 3.9,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Gluten Free",
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#2d2d2d",
    colorName: "Black (7884C) "
    },
    {
    hex_value: "#000000",
    colorName: "Ultra Black (7883C) "
    }
    ]
    },
    {

    brand: "physicians formula",
    name: "Physicians Formula Organic Wear Lash Boosting Mascara",
    price: "15.79",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/ca3136ce9bff5df45b34b25b3bbf99aa_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/physicians-formula-organic-wear-lash_58514.html",
    website_link: "https://well.ca",
    description: "Physicians Formula Organic Wear Lash Boosting Mascara is the 1st Ever 100% Natural Lash Boosting formula enhances the appearance of lash length, thickness and volume for dramatic lashes instantly and long-term.Additional Features:100% of the Total Ingredients are from Natural Origin. 44% of the Total Ingredients are from Organic Farming. 100% saw enhanced lashes INSTANLY!Delivers ingredients to the base of lashes for best results!93% saw thicker & longer looking lashes instantly! 92% saw extended & fuller looking lashes after 4 weeks! *Based on individual perception of results of a panel of women wearing Organic Wear Lash Boosting Mascara.Directions for Use: Sweep mascara brush from lash base to tips. Apply multiple coats for added volume. Can easily be washed off with soap and water or removed with Physicians Formula Eye Makeup Remover Pads or Lotions.Ingredients: Citrus Aurantium Dulcis (Orange) Fruit Water *, Glycerin, Iron Oxides, Microcrystalline Cellulose, Glyceryl Stearate SE, Water, Lactobacillus Bulgaricus Ferment Filtrate, Beeswax *, Jojoba Esters, Copernicia Cerifera (Carnauba) Wax *, Tapioca Starch *, Stearic Acid, Glyceryl Caprylate, Aloe Barbadensis Leaf Juice *, Cellulose Gum, Cucumis Sativus (Cucumber) Fruit Extract *, Glycine Soja (Soybean) Oil *, Hydrolyzed Oryza Sativa (Rice) Protein, Magnesium Aluminum Silicate, Olea Europaea (Olive) Leaf Extract *, Saccharomyces/Copper Ferment, Saccharomyces/Iron Ferment, Saccharomyces/Magnesium Ferment, Saccharomyces/Silicon Ferment, Saccharomyces/Zinc Ferment, Leuconostoc/Aloe Barbadensis Leaf/Sorbus Aucuparia Fruit Ferment Filtrate, Leuconostoc/Radish Root Ferment Filtrate, Populus Tremuloides Bark Extract, Citric Acid May Contain: Titanium DioxideHypoallergenic. Fragrance free. Ophthalmologist approved. Gluten Free.",
    rating: 3.7,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Gluten Free",
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#282828",
    colorName: "Black Organics (7562C) "
    },
    {
    hex_value: "#000000",
    colorName: "Ultra Black Organics (7561C) "
    }
    ]
    },
    {

    brand: null,
    name: "L' Oreal Paris Voluminous Mascara",
    price: "9.99",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/4d671a9af4d2ce8d310ae263569018fb_ra,w158,h184_pa,w158,h184.jpeg",
    product_link: "https://well.ca/products/l-oreal-paris-voluminous-mascara_25094.html",
    website_link: "https://well.ca",
    description: "Voluminous - Volume Building Waterproof Mascara’s unique waterproof formula builds lashes to four times their natural thickness. Patented Volume-Maximizing Brush™ thickens lashes evenly and smoothly, leaving them soft with virtually no flakes, smudges, or clumps.Uniquely formulated to resist clumping, soften lashes, and build lashes to four times their natural thickness, with waterproof wear. Patented Volume Maximizing Brush™ thickens lashes evenly and smoothly, leaving them soft with virtually no flakes, smudges, or clumps.Ophthalmologist-tested and allergy-tested.Suitable for sensitive eyes and contact lens wearers.Clump-resistant.Fragrance-free.All-day wear.Ingredients:ISODODECANE • AQUA / WATER / EAU • CERA ALBA / BEESWAX / CIRE D'ABEILLE • DISTEARDIMONIUM HECTORITE • CARNAUBA / CARNAUBA WAX / CIRE DE CARNAUBA • PARAFFIN • ALCOHOL DENAT • ALLYL STEARATE/VA COPOLYMER • VA/VINYL BUTYL BENZOATE/CROTONATES COPOLYMER • PROP",
    rating: 4.5,
    category: null,
    product_type: "mascara",
    tag_list: [ ],
    product_colors: [
    {
    hex_value: "#030000",
    colorName: "Carbon Black "
    },
    {
    hex_value: "#4D2C00",
    colorName: "Black Brown "
    },
    {
    hex_value: "#231F20",
    colorName: "Black "
    }
    ]
    },
    {
    brand: "pure anada",
    name: "Pure Anada Natural Mascara",
    price: "14.0",
    image_link: "https://d3t32hsnjxo7q6.cloudfront.net/i/afefede002b8d94f6e53ea07dd4070f9_ra,w158,h184_pa,w158,h184.jpg",
    product_link: "https://well.ca/products/pure-anada-natural-mascara_83255.html",
    website_link: "https://well.ca",
    description: "Finally, a natural mascara you can feel good about putting on your lashes! It is naturally paraben-free, gluten-free, and mercury-free. You will be amazed at how well this mascara builds volume and length to your lashes. This is the natural mascara you’ve been waiting for!Ingredients: Aqua (Water), Oryza Sativa Wax (Rice Bran Wax), Olea Europea fruit oil (Olive Oil), Vegetable Source Cetyl Alcohol (Coconut), Coernica Cerifera (Carnauba Wax), Euphorbia Cerifera (Candelilla Wax), Vegetable Glycerin, Stearic Acid, Acacia Gum, Black Iron oxide (CI 77499),  Aminomethyl Popandiol (Ph Adjuster), Phenoxyethanol (Preservative).",
    rating: 4.6,
    category: null,
    product_type: "mascara",
    tag_list: [
    "Canadian",
    "Gluten Free",
    "Natural"
    ],
    product_colors: [
    {
    hex_value: "#3E2829",
    colorName: "Brown "
    },
    {
    hex_value: "#000000",
    colorName: "Black "
    }
    ]
    },
    
//----------------------------





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
