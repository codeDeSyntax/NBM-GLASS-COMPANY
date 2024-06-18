// pages/api/products.js

export default function handler(req, res) {
    const products = Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `Product ${i + 1}`,
      description: `Description for product ${i + 1}`,
      image: `https://via.placeholder.com/150?text=Product+${i + 1}`,
    }));
  
    res.status(200).json(products);
  }
  