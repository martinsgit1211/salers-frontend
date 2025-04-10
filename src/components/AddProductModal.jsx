import React, { useState } from "react";

function AddProductModal({ isOpen, onClose, onSubmit }) {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    quantity: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData({
      ...formData,
      [name]: files ? files[0] : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData); // Hook for later backend integration
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <form
        onSubmit={handleSubmit}
        className="bg-[#1c1c1c] p-6 rounded-lg w-full max-w-md shadow-lg"
      >
        <h2 className="text-xl font-bold mb-4">Add New Product</h2>
        <input
          name="name"
          type="text"
          placeholder="Product Name"
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 rounded bg-[#2c2c2c] text-white"
        />
        <textarea
          name="description"
          placeholder="Description"
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 rounded bg-[#2c2c2c] text-white"
        />
        <input
          name="price"
          type="number"
          placeholder="Price"
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 rounded bg-[#2c2c2c] text-white"
        />
        <input
          name="quantity"
          type="number"
          placeholder="Quantity"
          onChange={handleChange}
          required
          className="w-full mb-3 p-2 rounded bg-[#2c2c2c] text-white"
        />
        <input
          name="image"
          type="file"
          accept="image/*"
          onChange={handleChange}
          className="w-full mb-4 text-white"
        />
        <div className="flex justify-end gap-2">
          <button type="button" onClick={onClose} className="text-gray-400 hover:underline">
            Cancel
          </button>
          <button type="submit" className="bg-yellow-400 text-black px-4 py-2 rounded">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}

export default AddProductModal;
