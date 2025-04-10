import React, { useState } from "react";
import { ShoppingCart } from "lucide-react";

function WholesalerProducts() {
  const [cart, setCart] = useState([]);

  const products = [
    {
      id: 1,
      name: "High Quality Rice",
      price: 18000,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 2,
      name: "Cooking Oil (25L)",
      price: 23000,
      image: "https://via.placeholder.com/200",
    },
    {
      id: 3,
      name: "Spaghetti Pack (20pcs)",
      price: 7500,
      image: "https://via.placeholder.com/200",
    },
  ];

  const handleAddToCart = (product, quantity) => {
    const existing = cart.find((item) => item.id === product.id);
    if (existing) {
      const updated = cart.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
      );
      setCart(updated);
    } else {
      setCart([...cart, { ...product, quantity }]);
    }
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-6">Available Products</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>

      {/* Cart Preview (optional, will flesh this out in the next step) */}
      {cart.length > 0 && (
        <div className="fixed bottom-4 right-4 bg-yellow-400 text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 cursor-pointer">
          <ShoppingCart size={18} />
          <span>Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})</span>
        </div>
      )}
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#1c1c1c] border border-gray-700 rounded-lg overflow-hidden">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-yellow-400 font-medium mb-2">₦{product.price.toLocaleString()}</p>
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="quantity" className="text-sm text-gray-400">Qty:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 text-black rounded"
          />
        </div>
        <button
          onClick={() => onAddToCart(product, quantity)}
          className="w-full bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default WholesalerProducts;
