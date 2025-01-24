const FALLBACK_IMAGE = "https://placehold.co/500x500?text=Image+Not+Found";

export const products = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99.99,
    category: "Electronics",
    description: "High-quality wireless headphones with noise cancellation.",
    image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
      "https://images.unsplash.com/photo-1583394838336-acd977736f90?w=500",
      "https://images.unsplash.com/photo-1487215078519-e21cc028cb29?w=500",
      "https://images.unsplash.com/photo-1484704849700-f032a568e944?w=500",
    ],
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 199.99,
    category: "Electronics",
    description: "Feature-rich smartwatch with health tracking capabilities.",
    image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
      "https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500",
      "https://images.unsplash.com/photo-1508685096489-7aacd43bd3b1?w=500",
      "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?w=500",
      "https://images.unsplash.com/photo-1579586337278-3befd40fd17a?w=500",
    ],
  },
  {
    id: 3,
    name: "Premium Backpack",
    price: 79.99,
    category: "Fashion",
    description: "Durable and stylish backpack for everyday use.",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500",
      "https://images.unsplash.com/photo-1581605405669-8e6c62159d64?w=500",
      "https://images.unsplash.com/photo-1491637639811-60e2756cc1c7?w=500",
      "https://images.unsplash.com/photo-1546938576-6e6a64f317cc?w=500",
      "https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=500",
    ],
  },
  {
    id: 4,
    name: "Running Shoes",
    price: 129.99,
    category: "Fashion",
    description: "Comfortable running shoes with advanced cushioning.",
    image: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500",
      "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?w=500",
      "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500",
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500",
      "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?w=500",
    ],
  },
  {
    id: 5,
    name: "Coffee Maker",
    price: 89.99,
    category: "Home & Living",
    description: "Programmable coffee maker with thermal carafe.",
    image: "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500",
      "https://images.unsplash.com/photo-1520232644591-c5e83350f9c0?w=500",
      "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=500",
      "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?w=500",
      "https://images.unsplash.com/photo-1606937898055-33f161e25305?w=500",
    ],
  },
  {
    id: 6,
    name: "Desk Lamp",
    price: 49.99,
    category: "Home & Living",
    description: "Modern LED desk lamp with adjustable brightness.",
    image: "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500",
      "https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?w=500",
      "https://images.unsplash.com/photo-1621447980929-6438f2f89fe3?w=500",
      "https://images.unsplash.com/photo-1524484485831-a92ffc0de03f?w=500",
      "https://images.unsplash.com/photo-1540932239986-30128078f3c5?w=500",
    ],
  },
  {
    id: 7,
    name: "Bluetooth Speaker",
    price: 59.99,
    category: "Electronics",
    description: "Portable Bluetooth speaker with high-quality sound.",
    image:
      "https://images.unsplash.com/photo-1518188689134-aa7854b27574?q=80&w=1036&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1495186113773-72cf345623ee?w=500",
      "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500",
      "https://images.unsplash.com/photo-1563330232-57114bb0823c?w=500",
      "https://images.unsplash.com/photo-1617813480385-dd940d8d6c1c?w=500",
      "https://images.unsplash.com/photo-1612198790700-0ff55e5c1d1f?w=500",
    ],
  },
  {
    id: 8,
    name: "4K Ultra HD TV",
    price: 699.99,
    category: "Electronics",
    description: "Stunning 4K Ultra HD TV with HDR and smart features.",
    image:
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1506347201773-1ff4d38bc1e1?w=500",
      "https://images.unsplash.com/photo-1593784991095-a205069470b6?w=500",
      "https://images.unsplash.com/photo-1461151304267-38535e780c79?w=500",
      "https://images.unsplash.com/photo-1593305841991-05c297ba4575?w=500",
      "https://images.unsplash.com/photo-1574375927938-d5a98e8ffe85?w=500",
    ],
  },
  {
    id: 9,
    name: "Gaming Mouse",
    price: 49.99,
    category: "Electronics",
    description: "Ergonomic gaming mouse with customizable buttons.",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=500",
      "https://images.unsplash.com/photo-1586349906319-47f6c1c9ce19?w=500",
      "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500",
      "https://images.unsplash.com/photo-1592375601764-5dd6be536f99?w=500",
      "https://images.unsplash.com/photo-1625895197185-efcec01cffe0?w=500",
    ],
  },
  {
    id: 10,
    name: "Laptop Stand",
    price: 29.99,
    category: "Electronics",
    description: "Adjustable laptop stand for better ergonomics.",
    image: "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500",
      "https://images.unsplash.com/photo-1593642634524-b40b5baae6bb?w=500",
      "https://images.unsplash.com/photo-1593642634315-48f5414c3ad9?w=500",
      "https://images.unsplash.com/photo-1593642532744-d377ab507dc8?w=500",
      "https://images.unsplash.com/photo-1593642532454-e138e28a63f4?w=500",
    ],
  },
  {
    id: 11,
    name: "Leather Jacket",
    price: 199.99,
    category: "Fashion",
    description: "Stylish and premium quality leather jacket.",
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    fallbackImage: FALLBACK_IMAGE,
    images: [
      "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
      "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=500",
      "https://images.unsplash.com/photo-1520975954732-35dd22299614?w=500",
      "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=500",
      "https://images.unsplash.com/photo-1605518216938-7c31b7b14ad0?w=500",
    ],
  },
  {
    id: 12,
    name: "Sneakers",
    price: 69.99,
    category: "Fashion",
    description: "Casual sneakers for everyday wear.",
    image:
      "https://plus.unsplash.com/premium_photo-1682125177822-63c27a3830ea?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 13,
    name: "Winter Coat",
    price: 159.99,
    category: "Fashion",
    description: "Warm and cozy winter coat for cold weather.",
    image:
      "https://images.unsplash.com/photo-1521060413616-2a0cf7c2b98a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 14,
    name: "Fitness Tracker",
    price: 49.99,
    category: "Electronics",
    description: "Track your fitness activities with this sleek tracker.",
    image:
      "https://images.unsplash.com/photo-1557935728-e6d1eaabe558?q=80&w=1173&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 15,
    name: "Electric Kettle",
    price: 39.99,
    category: "Home & Living",
    description: "Quick-boiling electric kettle with automatic shut-off.",
    image:
      "https://images.unsplash.com/photo-1647619124290-10fb9273b4b5?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 16,
    name: "Wall Art",
    price: 49.99,
    category: "Home & Living",
    description: "Decorative wall art to brighten up your home.",
    image:
      "https://plus.unsplash.com/premium_photo-1705262413765-5fe7a310d4e6?q=80&w=1016&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 17,
    name: "Smart Thermostat",
    price: 149.99,
    category: "Home & Living",
    description:
      "Smart thermostat that learns your schedule and adjusts temperatures.",
    image:
      "https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8U21hcnQlMjBUaGVybW9zdGF0fGVufDB8fDB8fHww",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 18,
    name: "Air Purifier",
    price: 179.99,
    category: "Home & Living",
    description: "Air purifier with HEPA filter to improve air quality.",
    image:
      "https://images.unsplash.com/photo-1632928274371-878938e4d825?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 19,
    name: "Smart Light Bulbs",
    price: 39.99,
    category: "Home & Living",
    description: "Smart light bulbs with adjustable color and brightness.",
    image:
      "https://images.unsplash.com/photo-1711006155490-ec01a0ecf0de?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8U21hcnQlMjBMaWdodCUyMEJ1bGJzfGVufDB8fDB8fHww",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 20,
    name: "Couch Throw Blanket",
    price: 29.99,
    category: "Home & Living",
    description: "Soft and cozy blanket for your couch.",
    image:
      "https://images.unsplash.com/photo-1507138451611-3001135909fa?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 21,
    name: "Outdoor Grill",
    price: 249.99,
    category: "Home & Living",
    description: "High-quality outdoor grill for barbecues.",
    image:
      "https://images.unsplash.com/photo-1529262365544-55d1707e64e6?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 22,
    name: "Portable Air Conditioner",
    price: 349.99,
    category: "Home & Living",
    description: "Compact portable air conditioner to cool down your space.",
    image:
      "https://plus.unsplash.com/premium_photo-1670537995267-424ea54025b5?q=80&w=1035&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 23,
    name: "Hoodie Sweatshirt",
    price: 49.99,
    category: "Fashion",
    description: "Comfy and stylish hoodie sweatshirt for all seasons.",
    image:
      "https://images.unsplash.com/photo-1685328403755-de1d57e12e63?q=80&w=1031&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 24,
    name: "Smartphone Case",
    price: 19.99,
    category: "Fashion",
    description: "Durable and sleek smartphone case for protection.",
    image:
      "https://images.unsplash.com/photo-1520970802623-5ce51ced3006?q=80&w=978&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 25,
    name: "T-Shirt",
    price: 25.99,
    category: "Fashion",
    description: "Simple and stylish cotton t-shirt.",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 26,
    name: "Yoga Mat",
    price: 29.99,
    category: "Sports & Outdoors",
    description: "Non-slip yoga mat for a comfortable practice.",
    image:
      "https://plus.unsplash.com/premium_photo-1675155952889-abb299df1fe7?q=80&w=1029&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 27,
    name: "Tent",
    price: 159.99,
    category: "Sports & Outdoors",
    description: "4-person camping tent with waterproof features.",
    image:
      "https://plus.unsplash.com/premium_photo-1681169152396-f22381eae362?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 28,
    name: "Camping Lantern",
    price: 24.99,
    category: "Sports & Outdoors",
    description: "Rechargeable LED lantern for outdoor adventures.",
    image:
      "https://images.unsplash.com/photo-1725007219008-9223be69a98a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 29,
    name: "Tennis Racket",
    price: 79.99,
    category: "Sports & Outdoors",
    description: "Professional-grade tennis racket for beginners.",
    image:
      "https://images.unsplash.com/photo-1599280174407-fdc3e8c47856?q=80&w=1168&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 30,
    name: "Water Bottle",
    price: 19.99,
    category: "Sports & Outdoors",
    description: "Durable water bottle with temperature retention.",
    image:
      "https://images.unsplash.com/photo-1560847468-5eef330f455a?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 31,
    name: "Massage Gun",
    price: 129.99,
    category: "Health & Wellness",
    description:
      "Professional-grade percussion massage device for muscle recovery.",
    image:
      "https://images.unsplash.com/photo-1611908200005-b898ddde09cf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 32,
    name: "Essential Oil Diffuser",
    price: 34.99,
    category: "Health & Wellness",
    description: "Ultrasonic aromatherapy diffuser with LED mood lighting.",
    image:
      "https://images.unsplash.com/photo-1564278047230-a632a9d6acf4?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 33,
    name: "Digital Scale",
    price: 29.99,
    category: "Health & Wellness",
    description: "Smart digital scale with body composition analysis.",
    image: "https://images.unsplash.com/photo-1518644961665-ed172691aaa1?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 34,
    name: "Hair Dryer",
    price: 89.99,
    category: "Beauty",
    description: "Professional ionic hair dryer with multiple heat settings.",
    image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 35,
    name: "Skincare Set",
    price: 79.99,
    category: "Beauty",
    description:
      "Complete skincare routine with cleanser, toner, and moisturizer.",
    image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 36,
    name: "Makeup Brush Set",
    price: 45.99,
    category: "Beauty",
    description: "Professional makeup brush set with storage case.",
    image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 37,
    name: "Board Game Collection",
    price: 49.99,
    category: "Toys & Games",
    description: "Classic board game collection for family entertainment.",
    image: "https://images.unsplash.com/photo-1632501641765-e568d28b0015?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 38,
    name: "Remote Control Car",
    price: 59.99,
    category: "Toys & Games",
    description: "High-speed RC car with precise controls.",
    image:
      "https://images.unsplash.com/photo-1517676109075-9a94d44145d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8UmVtb3RlJTIwQ29udHJvbCUyMENhciUyMHRveXxlbnwwfHwwfHx8MA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 39,
    name: "Building Blocks Set",
    price: 39.99,
    category: "Toys & Games",
    description: "Creative building blocks for endless possibilities.",
    image: "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 40,
    name: "Gourmet Coffee Beans",
    price: 24.99,
    category: "Food & Beverages",
    description: "Premium roasted coffee beans from selected regions.",
    image: "https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 41,
    name: "Artisan Tea Set",
    price: 39.99,
    category: "Food & Beverages",
    description: "Collection of premium loose leaf teas with infuser.",
    image: "https://images.unsplash.com/photo-1576092768241-dec231879fc3?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 42,
    name: "Chocolate Gift Box",
    price: 29.99,
    category: "Food & Beverages",
    description: "Assorted premium chocolates in an elegant gift box.",
    image: "https://images.unsplash.com/photo-1549007994-cb92caebd54b?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 43,
    name: "Fitness Supplements",
    price: 54.99,
    category: "Health & Wellness",
    description: "Premium protein powder and workout supplements.",
    image: "https://images.unsplash.com/photo-1593095948071-474c5cc2989d?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 44,
    name: "Facial Roller Set",
    price: 34.99,
    category: "Beauty",
    description: "Jade and rose quartz facial rollers for skincare.",
    image:
      "https://images.unsplash.com/photo-1585652757173-57de5e9fab42?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 45,
    name: "Strategy Board Game",
    price: 44.99,
    category: "Toys & Games",
    description: "Complex strategy board game for advanced players.",
    image: "https://images.unsplash.com/photo-1610890716171-6b1bb98ffd09?w=500",
    fallbackImage: FALLBACK_IMAGE,
  },
  {
    id: 46,
    name: "Craft Beer Set",
    price: 49.99,
    category: "Food & Beverages",
    description: "Selection of premium craft beers from local breweries.",
    image:
      "https://plus.unsplash.com/premium_photo-1695558758845-fa0cce84b3bf?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
  },
];

export const categories = [
  {
    id: 1,
    name: "Electronics",
    image: "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=500",
    fallbackImage: FALLBACK_IMAGE,
    description: "Latest gadgets and electronic devices",
  },
  {
    id: 2,
    name: "Fashion",
    image: "https://images.unsplash.com/photo-1445205170230-053b83016050?w=500",
    fallbackImage: FALLBACK_IMAGE,
    description: "Trendy clothing and accessories",
  },
  {
    id: 3,
    name: "Home & Living",
    image: "https://images.unsplash.com/photo-1484101403633-562f891dc89a?w=500",
    fallbackImage: FALLBACK_IMAGE,
    description: "Everything for your home",
  },
  {
    id: 4,
    name: "Sports & Outdoors",
    image:
      "https://plus.unsplash.com/premium_photo-1684096758222-144a50683d3b?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    description: "Outdoor gear and sports equipment",
  },
  {
    id: 5,
    name: "Health & Wellness",
    image:
      "https://images.unsplash.com/photo-1619987396130-cda83fce794b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    description: "Products for your health and well-being",
  },
  {
    id: 6,
    name: "Beauty",
    image:
      "https://plus.unsplash.com/premium_photo-1684407616442-8d5a1b7c978e?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    description: "Beauty and skincare products",
  },
  {
    id: 7,
    name: "Toys & Games",
    image:
      "https://plus.unsplash.com/premium_photo-1701984402171-53940cb4b8ae?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    description: "Toys, games, and entertainment",
  },
  {
    id: 8,
    name: "Food & Beverages",
    image:
      "https://images.unsplash.com/photo-1654417958829-6156be64ec79?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    fallbackImage: FALLBACK_IMAGE,
    description: "Groceries, snacks, and beverages",
  },
];

// Add a new helper function to handle image errors
export const getImageWithFallback = (image, fallback = FALLBACK_IMAGE) => {
  return image || fallback;
};

// Helper function to get products by category
export const getProductsByCategory = (categoryName) => {
  return products.filter((product) => product.category === categoryName);
};

// Helper function to get product by ID
export const getProductById = (productId) => {
  return products.find((product) => product.id === productId);
};
