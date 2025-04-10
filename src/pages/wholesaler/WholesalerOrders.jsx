import React, { useState } from "react";

const Orders = () => {
  const [orders, setOrders] = useState([
    {
      id: "ORD123",
      date: "2025-04-09",
      items: [
        { name: "Product A", quantity: 2 },
        { name: "Product B", quantity: 1 },
      ],
      total: 3300,
      status: "Pending",
    },
    {
      id: "ORD124",
      date: "2025-04-06",
      items: [{ name: "Product C", quantity: 3 }],
      total: 2700,
      status: "Shipped",
    },
    {
      id: "ORD125",
      date: "2025-04-01",
      items: [{ name: "Product D", quantity: 1 }],
      total: 1200,
      status: "Delivered",
    },
  ]);

  const statusStyles = {
    Pending: "bg-yellow-500",
    Shipped: "bg-blue-500",
    Delivered: "bg-green-500",
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h2 className="text-2xl font-semibold mb-6">📦 My Orders</h2>

      <div className="space-y-4">
        {orders.map((order) => (
          <div
            key={order.id}
            className="bg-[#1c1c1c] p-4 rounded-lg border border-[#2c2c2c]"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="font-semibold text-lg">Order #{order.id}</p>
                <p className="text-sm text-gray-400">Date: {order.date}</p>
              </div>
              <span
                className={`text-xs px-3 py-1 rounded-full font-semibold ${statusStyles[order.status]}`}
              >
                {order.status}
              </span>
            </div>

            <div className="text-sm text-gray-300 mb-2">
              {order.items.map((item, index) => (
                <p key={index}>
                  {item.name} x {item.quantity}
                </p>
              ))}
            </div>

            <div className="text-right font-semibold">
              Total: ₦{order.total}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
