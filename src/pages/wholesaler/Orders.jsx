import React from "react";

function WholesalerOrders() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">My Orders</h2>
      <div className="bg-[#1c1c1c] p-4 rounded-lg border border-gray-700">
        <p className="text-gray-400">You haven’t placed any orders yet.</p>
      </div>
    </div>
  );
}

export default WholesalerOrders;
