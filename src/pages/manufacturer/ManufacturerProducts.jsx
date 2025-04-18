import React, { useState } from "react";
import { Plus } from "lucide-react";
import AddProductModal from "../../components/AddProductModal";

function ManufacturerProducts() {
  const [showModal, setShowModal] = useState(false);

  const handleAddProduct = (data) => {
    console.log("Product Data:", data);
    // Integrate with backend API later
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
        <p className="text-gray-400">You have no products yet. Start by adding one.</p>
      </div>
    </div>
  );
}

export default ManufacturerProducts;
