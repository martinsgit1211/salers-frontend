import React, { useState, useEffect } from "react";
import { ShoppingCart } from "lucide-react";
import { useAuth } from "../../auth/AuthContext";
import { Link } from "react-router-dom"; // Don't forget this!

function WholesalerProducts() {
  const [products, setProducts] = useState([]);
  const { user, cart, addToCart } = useAuth(); // use global cart & addToCart

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch("http://localhost:5000/api/products", {
          headers: {
            Authorization: `Bearer ${user?.token}`,
          },
        });

        if (!res.ok) throw new Error("Failed to fetch products");

        const data = await res.json();
        setProducts(data);
      } catch (err) {
        console.error("Error loading products:", err.message);
      }
    };

    if (user?.role === "Wholesaler") {
      fetchProducts();
    }
  }, [user]);

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <span>
      <h2 className="text-lg lg:text-2xl font-bold mb-6">Available Products</h2>

        </span>
        <span>
               {cart.length === 0 ? (
  <div className="fixed top-5 right-5 bg-yellow-400 text-black px-4 py-2 rounded shadow-lg flex items-center gap-2">
    <ShoppingCart size={18} />
    <span>Cart (0)</span>
  </div>
) : (
  <Link
    to="/wholesaler/cart"
    className="fixed top-5 right-5 bg-yellow-400 text-black px-4 py-2 rounded shadow-lg flex items-center gap-2 cursor-pointer"
  >
    <ShoppingCart size={18} />
    <span>
      Cart ({cart.reduce((acc, item) => acc + item.quantity, 0)})
    </span>
  </Link>
)}
        </span>
        </div>
      {products.length === 0 && <p>No products available.</p>}
      {products.length > 0 && (
        <p className="mb-4">Select products to add to your cart.</p>
      )}

      {/* Add Product Modal Button */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard key={product._id} product={product} onAddToCart={addToCart} />
        ))}
      </div>

   

      
    </div>
  );
}

function ProductCard({ product, onAddToCart }) {
  const [quantity, setQuantity] = useState(1);

  return (
    <div className="bg-[#1c1c1c] rounded-lg overflow-hidden shadow-lg w-3/4">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
        <p className="text-yellow-400 font-medium mb-2">Price: ₦{product.price.toLocaleString()}</p>
        <div className="flex items-center gap-2 mb-4">
          <label htmlFor="quantity" className="text-sm text-gray-400">Quantity:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="w-16 px-2 py-1 text-yellow-200 rounded"
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
