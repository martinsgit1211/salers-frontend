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
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this product?")) return;
  
    try {
      await axios.delete(`http://localhost:5000/api/products/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('manufacturerToken')}`,
        },
      });
      setProducts(products.filter((p) => p._id !== id));
    } catch (err) {
      alert(err.response?.data?.message || "Failed to delete product");
    }
  };
  

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="md:text-2xl text-8 font-bold">My Products</h2>
        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-yellow-400 text-white px-4 py-2 rounded hover:bg-yellow-300 transition"
        >
          {/* <Plus size={16} /> */}
          ➕ Add New Product
        </button>
      </div>

      <AddProductModal
        isOpen={showModal}
        onClose={() => setShowModal(false)}
        onSubmit={handleAddProduct}
      />

      <div>
        {error && <p className="text-red-500">{error}</p>}
        {products.length > 0 ? (
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
         {products.map((product) => (
           <div
             key={product._id}
             className="bg-[#2a2a2a] text-white rounded-lg shadow p-4 flex flex-col"
           >
             {product.image && (
               <img
                 src={product.image}
                 alt={product.name}
                 className="w-full h-48 object-cover rounded mb-4"
               />
             )}
             <h3 className="text-xl font-semibold">{product.name}</h3>
             <p className="text-gray-300">{product.description}</p>
             <p className="text-yellow-400 mt-2">Price: ₦{product.price}</p>
             <p className="text-gray-400">Stock: {product.stock}</p>
             <button
        onClick={() => handleDelete(product._id)}
        className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
      >
        Delete
      </button>
           </div>
         ))}
       </div>
       
        ) : (
          <p className="text-gray-400">You have no products yet. Start by adding one.</p>
          
        )}
      </div>
    </div>
  );
}

export default ManufacturerProducts;
