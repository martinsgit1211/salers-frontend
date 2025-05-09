import React from "react";
import { useAuth } from "../../auth/AuthContext";

const Cart = () => {
  const { cart, removeFromCart, updateCartQty, user, clearCart } = useAuth();

  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  const handlePlaceOrder = async () => {
    try {
      const res = await fetch("http://localhost:5000/api/orders", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          items: cart.map((item) => ({
            product: item.product._id,
            quantity: item.quantity,
          })),
        }),
      });

      if (res.ok) {
        clearCart();
        alert("Order placed successfully!");
      } else {
        alert("Failed to place order");
      }
    } catch (err) {
      console.error("Order error:", err);
    }
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h2 className="text-2xl font-semibold mb-6">🛒 Your Cart</h2>

      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4">
            {cart.map((item) => (
              <div
                key={item.product._id}
                className="flex items-center justify-between bg-[#1c1c1c] p-4 rounded-lg"
              >
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.image}
                    alt={item.product.name}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <div>
                    <p className="font-medium">{item.product.name}</p>
                    <p className="text-sm text-gray-400">₦{item.product.price}</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartQty(item.product._id, parseInt(e.target.value))
                    }
                    className="w-16 px-2 py-1 rounded bg-[#2a2a2a] text-white border border-gray-600"
                  />
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="text-red-400 hover:text-red-300 text-sm"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-between items-center">
            <p className="text-lg font-semibold">Total: ₦{total.toLocaleString()}</p>
            <button
              onClick={handlePlaceOrder}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
              Proceed to Checkout
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
