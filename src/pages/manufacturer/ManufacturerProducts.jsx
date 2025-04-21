import React, { useEffect, useState } from "react";
import axios from "axios";
import AddProductModal from "../../components/AddProductModal";
import { Plus } from "lucide-react";

function ManufacturerProducts() {
  const [showModal, setShowModal] = useState(false);
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    // Fetch products from the server
    const fetchProducts = async () => {
      try {
        const res = await axios.get(
          "http://localhost:5000/api/products", // Adjust your API endpoint
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem('manufacturerToken')}`,
            },
          }
        );
        setProducts(res.data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch products");
      }
    };
    fetchProducts();
  }, []);

  const handleAddProduct = (data) => {
    setProducts([...products, data]);
  };

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold">My Products</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          <Plus size={16} />
          Add New Product
        </button>
      </div>

      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddProduct}
      />

      <div className="bg-[#1c1c1c] p-4 rounded-lg border border-gray-700">
        {error && <p className="text-red-500">{error}</p>}
        {products.length > 0 ? (
          <ul>
            {products.map((product) => (
              <li key={product._id} className="py-2">
                <p className="text-white">{product.name}</p>
                <p className="text-gray-400">{product.description}</p>
                <p className="text-yellow-400">Price: ${product.price}</p>
                <p className="text-gray-500">Stock: {product.stock}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-400">You have no products yet. Start by adding one.</p>
        )}
      </div>
    </div>
  );
}

export default ManufacturerProducts;
