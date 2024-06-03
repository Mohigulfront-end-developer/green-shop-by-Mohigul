const plantsData = [
  {
    id: 1,
    image: "../../public/assets/plant1.png",
    name: "Lush Greenery Delight",
    price: 24.99,
    description: "Bring the outdoors in with this delightful green plant.",
    sizes: ["S", "M", "L"],
    categories: ["house-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 2,
    image: "../../public/assets/plant2.png",
    name: "Colorful Blossom Marvel",
    price: 34.99,
    description: "A marvel of colorful blossoms to brighten up any room.",
    sizes: ["M", "L"],
    categories: ["house-plants", "potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 3,
    image: "../../public/assets/plant3.png",
    name: "Spiky Elegance Cactus",
    price: 12.99,
    description: "An elegant cactus with spiky charm for a unique touch.",
    sizes: ["S"],
    categories: ["succulents"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 4,
    image: "../../public/assets/plant4.png",
    name: "Golden Sunflower Patch",
    price: 19.99,
    description: "A patch of golden sunflowers to bring warmth to your space.",
    sizes: ["S", "M"],
    categories: ["seeds"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 5,
    image: "../../public/assets/plant5.png",
    name: "Tiny Terrarium Wonderland",
    price: 27.99,
    description:
      "Create your own miniature wonderland with this tiny terrarium.",
    sizes: ["S"],
    categories: ["terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 6,
    image: "../../public/assets/plant6.png",
    name: "Majestic Fern Forest",
    price: 29.99,
    description: "Transform your space into a majestic fern forest retreat.",
    sizes: ["M", "L"],
    categories: ["big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 7,
    image: "../../public/assets/plant7.png",
    name: "Bamboo Zen Garden",
    price: 39.99,
    description:
      "Find tranquility with a Zen garden featuring bamboo elements.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 8,
    image: "../../public/assets/plant8.png",
    name: "Scented Lavender Fields",
    price: 18.99,
    description: "Bring the soothing aroma of lavender fields to your home.",
    sizes: ["S"],
    categories: ["small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 9,
    image: "../../public/assets/plant9.png",
    name: "Ruby Red Rose Elegance",
    price: 32.99,
    description:
      "An elegant arrangement of ruby red roses for a touch of romance.",
    sizes: ["M"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 10,
    image: "../../public/assets/plant10.png",
    name: "Succulent Surprise Set",
    price: 22.99,
    description:
      "Discover the surprise of a set featuring assorted succulents.",
    sizes: ["S"],
    categories: ["succulents", "terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 11,
    image: "../../public/assets/plant11.png",
    name: "Eternal Eucalyptus Bliss",
    price: 26.99,
    description:
      "Experience eternal bliss with the soothing aroma of eucalyptus.",
    sizes: ["S", "M"],
    categories: ["house-plants", "big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 12,
    image: "../../public/assets/plant12.png",
    name: "Floating Lotus Pond",
    price: 36.99,
    description:
      "Create a serene atmosphere with a floating lotus pond arrangement.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 13,
    image: "../../public/assets/plant13.png",
    name: "Royal Blue Hydrangea Bouquet",
    price: 17.99,
    description:
      "A bouquet of royal blue hydrangeas to add a touch of sophistication.",
    sizes: ["M"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 14,
    image: "../../public/assets/plant14.png",
    name: "Daisy Delightful Garden",
    price: 23.99,
    description: "Cultivate delight with a garden featuring cheerful daisies.",
    sizes: ["S"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 15,
    image: "../../public/assets/plant15.png",
    name: "Golden Pothos Cascade",
    price: 28.99,
    description:
      "Let the golden pothos cascade for an elegant and lush display.",
    sizes: ["M", "L"],
    categories: ["house-plants", "big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 16,
    image: "../../public/assets/plant16.png",
    name: "Succulent Paradise Pack",
    price: 21.99,
    description: "Create your own succulent paradise with this assorted pack.",
    sizes: ["S"],
    categories: ["succulents", "terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 17,
    image: "../../public/assets/plant17.png",
    name: "Bonsai Serenity Grove",
    price: 42.99,
    description:
      "Cultivate serenity with a bonsai grove that stands the test of time.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 18,
    image: "../../public/assets/plant18.png",
    name: "Sun-Kissed Marigold Patch",
    price: 15.99,
    description:
      "Enjoy the vibrant colors of a sun-kissed marigold patch in your garden.",
    sizes: ["S", "M"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 19,
    image: "../../public/assets/plant19.png",
    name: "Cactus Garden Oasis",
    price: 31.99,
    description:
      "Transform your space into a desert oasis with this cactus garden.",
    sizes: ["M"],
    categories: ["succulents"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 20,
    image: "../../public/assets/plant20.png",
    name: "Zen Bamboo Fountain",
    price: 48.99,
    description:
      "Invite tranquility with a bamboo fountain for a Zen-inspired ambiance.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 21,
    image: "../../public/assets/plant21.png",
    name: "Enchanting Lavender Bouquet",
    price: 19.99,
    description:
      "An enchanting bouquet of lavender for a calming and aromatic experience.",
    sizes: ["S", "M"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 22,
    image: "../../public/assets/plant22.png",
    name: "Rainbow Tulip Array",
    price: 27.99,
    description:
      "Create a burst of colors with a rainbow tulip array in your garden.",
    sizes: ["M"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 23,
    image: "../../public/assets/plant23.png",
    name: "Cascading Ivy Elegance",
    price: 34.99,
    description:
      "Elevate your space with cascading ivy that adds a touch of elegance.",
    sizes: ["L"],
    categories: ["big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 24,
    image: "../../public/assets/plant24.png",
    name: "Golden Zinnia Meadow",
    price: 22.99,
    description:
      "Transform your garden into a golden meadow with vibrant zinnias.",
    sizes: ["S", "M"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 25,
    image: "../../public/assets/plant25.png",
    name: "Succulent Symphony Pack",
    price: 31.99,
    description:
      "Create a symphony of succulents with this harmonious assorted pack.",
    sizes: ["S"],
    categories: ["succulents", "terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 26,
    image: "../../public/assets/plant26.png",
    name: "Jasmine Scented Garden",
    price: 38.99,
    description:
      "Immerse yourself in the sweet fragrance of a jasmine-scented garden.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 27,
    image: "../../public/assets/plant27.png",
    name: "Peace Lily Harmony",
    price: 29.99,
    description: "Achieve harmony with the timeless beauty of a peace lily.",
    sizes: ["S", "M"],
    categories: ["house-plants", "big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 28,
    image: "../../public/assets/plant28.png",
    name: "Autumn Maple Bonsai",
    price: 45.99,
    description:
      "Capture the essence of autumn with a maple bonsai in your living space.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 29,
    image: "../../public/assets/plant29.png",
    name: "Fairy Garden Retreat",
    price: 26.99,
    description:
      "Create a whimsical retreat with a fairy garden that sparks imagination.",
    sizes: ["S"],
    categories: ["terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 30,
    image: "../../public/assets/plant30.png",
    name: "Eternal Rose Elegance",
    price: 48.99,
    description:
      "Embrace everlasting elegance with an eternal rose arrangement.",
    sizes: ["M"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 31,
    image: "../../public/assets/plant31.png",
    name: "Moonlit Cactus Garden",
    price: 36.99,
    description:
      "Transform your space into a mystical oasis with a moonlit cactus garden.",
    sizes: ["L"],
    categories: ["succulents", "terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 32,
    image: "../../public/assets/plant32.png",
    name: "Cherry Blossom Bliss",
    price: 24.99,
    description:
      "Experience the bliss of spring with a cherry blossom arrangement.",
    sizes: ["S", "M"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 33,
    image: "../../public/assets/plant33.png",
    name: "Crystal Clear Terrarium",
    price: 29.99,
    description:
      "Create a crystal clear terrarium with an assortment of miniature wonders.",
    sizes: ["S"],
    categories: ["terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 34,
    image: "../../public/assets/plant34.png",
    name: "Majestic Orchid Ensemble",
    price: 39.99,
    description:
      "Adorn your space with the majestic beauty of an orchid ensemble.",
    sizes: ["M"],
    categories: ["house-plants", "big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 35,
    image: "../../public/assets/plant35.png",
    name: "Lush Monstera Paradise",
    price: 42.99,
    description:
      "Create a lush paradise with the iconic and vibrant monstera plant.",
    sizes: ["L"],
    categories: ["big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 36,
    image: "../../public/assets/plant36.png",
    name: "Radiant Rosemary Bush",
    price: 18.99,
    description:
      "Add a touch of radiance to your garden with a rosemary bush in full bloom.",
    sizes: ["S"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 37,
    image: "../../public/assets/plant37.png",
    name: "Aloe Vera Oasis",
    price: 26.99,
    description:
      "Experience the healing vibes of an aloe vera oasis in your living space.",
    sizes: ["M"],
    categories: ["succulents"],
    tags: ["Home", "Garden, Plants"],
    quantity: 1,
  },
  {
    id: 38,
    image: "../../public/assets/plant38.png",
    name: "Sunflower Symphony",
    price: 33.99,
    description:
      "Enjoy a symphony of sunflowers that brighten up any corner of your garden.",
    sizes: ["L"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 39,
    image: "../../public/assets/plant39.png",
    name: "Fern Forest Retreat",
    price: 28.99,
    description:
      "Create a retreat with a lush fern forest that brings the outdoors indoors.",
    sizes: ["S", "M"],
    categories: ["house-plants", "big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 40,
    image: "../../public/assets/plant40.png",
    name: "Soothing Lavender Fields",
    price: 23.99,
    description:
      "Experience tranquility with a garden featuring soothing lavender fields.",
    sizes: ["M"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 41,
    image: "../../public/assets/plant41.png",
    name: "Mystical Bonsai Wonderland",
    price: 45.99,
    description:
      "Step into a mystical wonderland with a captivating bonsai arrangement.",
    sizes: ["L"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 42,
    image: "../../public/assets/plant42.png",
    name: "Daisy Delight Bouquet",
    price: 19.99,
    description:
      "Delight your senses with a vibrant bouquet of cheerful daisies.",
    sizes: ["S", "M"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 43,
    image: "../../public/assets/plant43.png",
    name: "Floating Air Plant Ensemble",
    price: 32.99,
    description:
      "Create an ethereal atmosphere with a floating air plant ensemble.",
    sizes: ["S"],
    categories: ["succulents", "terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 44,
    image: "../../public/assets/plant44.png",
    name: "Sapphire Succulent Sphere",
    price: 27.99,
    description:
      "Adorn your space with a captivating sapphire succulent sphere.",
    sizes: ["M"],
    categories: ["seeds", "small-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 45,
    image: "../../public/assets/plant45.png",
    name: "Whimsical Moss Garden",
    price: 36.99,
    description: "Create a whimsical oasis with a mesmerizing moss garden.",
    sizes: ["L"],
    categories: ["terrariums"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 46,
    image: "../../public/assets/plant46.png",
    name: "Emerald Fern Elegance",
    price: 23.99,
    description:
      "Enhance your living space with the elegant beauty of emerald ferns.",
    sizes: ["S"],
    categories: ["house-plants", "big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 47,
    image: "../../public/assets/plant47.png",
    name: "Harvest Herb Haven",
    price: 29.99,
    description:
      "Create a haven of freshness with a harvest herb garden in your kitchen.",
    sizes: ["M"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 48,
    image: "../../public/assets/plant48.png",
    name: "Ruby Red Rose Bouquet",
    price: 38.99,
    description: "Express love with a radiant ruby red rose bouquet.",
    sizes: ["S"],
    categories: ["potter-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 49,
    image: "../../public/assets/plant49.png",
    name: "Tranquil Bamboo Grove",
    price: 42.99,
    description:
      "Create a tranquil escape with a bamboo grove that soothes the soul.",
    sizes: ["L"],
    categories: ["big-plants"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
  {
    id: 50,
    image: "../../public/assets/plant50.png",
    name: "Charming Bonsai Retreat",
    price: 31.99,
    description:
      "Embark on a charming retreat with a bonsai that captivates the heart.",
    sizes: ["M"],
    categories: ["gardening", "accessories"],
    tags: ["Home", "Garden", "Plants"],
    quantity: 1,
  },
];
export default plantsData;