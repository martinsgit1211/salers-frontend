import { useEffect, useState } from "react";
import axios from "axios";

const ManufacturerNotifications = () => {
  const [notifications, setNotifications] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchNotifications = async () => {
      try {
        const token = localStorage.getItem("manufacturerToken");
        const res = await axios.get("http://localhost:5000/api/notifications", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });

        setNotifications(res.data);
      } catch (err) {
        console.error("Error fetching notifications:", err);
        setNotifications([]);
      } finally {
        setLoading(false);
      }
    };

    fetchNotifications();
  }, []);

  const updateOrderStatus = async (orderId, newStatus) => {
  try {
    const token = localStorage.getItem("manufacturerToken");
    await axios.put(
      `http://localhost:5000/api/orders/${orderId}/status`,
      { status: newStatus },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    alert(`Order marked as ${newStatus}`);
    // Refresh notifications or orders list
  } catch (err) {
    console.error("Failed to update status", err);
    alert("Error updating status");
  }
};


  if (loading) {
    return <div className="text-white p-4">Loading notifications...</div>;
  }

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h2 className="text-2xl font-semibold mb-6">🔔 Notifications</h2>

      {notifications.length === 0 ? (
        <p className="text-gray-400">No notifications yet.</p>
      ) : (
        <ul className="space-y-3">
          {notifications.map((note) => (
            <li
              key={note._id}
              className="bg-[#1c1c1c] p-4 rounded-lg border border-[#2c2c2c]"
            >
              <p>{note.message}</p>
              <p className="text-xs text-gray-500 mt-1">
                {new Date(note.createdAt).toLocaleString()}
              </p>
              <p className="text-xs text-gray-500 mt-1">
                Status: {note.status}
              </p>
              <button
  onClick={() => updateOrderStatus(note.orderId, "Shipped")}
  className="bg-blue-600 text-white px-3 py-1 rounded mr-2"
>
  Mark as Shipped
</button>

<button
  onClick={() => updateOrderStatus(note.orderId, "Cancelled")}
  className="bg-red-600 text-white px-3 py-1 rounded"
>
  Cancel Order
</button>

            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ManufacturerNotifications;
