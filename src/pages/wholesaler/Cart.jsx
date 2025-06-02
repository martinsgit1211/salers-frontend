import { useState } from "react";
// import React { useState } from "react";
import { useAuth } from "../../auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const {cart, 
        removeFromCart, 
        updateCartQty, 
        user, 
        //clearCart 
        } = useAuth();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const total = cart.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

 const handlePlaceOrder = async () => {
  setLoading(true);
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
      // Store to localStorage before navigation
      localStorage.setItem("cart", JSON.stringify(cart));
      localStorage.setItem("total", JSON.stringify(total));

      setLoading(false);
      navigate("/checkoutpayment", {
        state: { items: cart, totalAmount: total },
      });
    } else {
      setLoading(false);
      alert("Failed to place order");
    }
  } catch (err) {
    console.error("Order error:", err);
    setLoading(false);
  }
};


  return (
    <div className="min-h-screen bg-[#0f0f0f] text-white p-6">
      <h2 className="text-2xl font-semibold mb-6">🛒 Your Cart</h2>
      {cart.length === 0 ? (
        <p className="text-center">Your cart is empty.</p>
      ) : (
        <>
          <div className="grid gap-4 lg:w-[70%] lg:mx-auto">
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
                    <p className="font-medium text-lg">{item.product.name}</p>
                    <p className="text-md text-gray-300">₦ {item.product.price}</p>
                  </div>
                </div>

                <div className="flex items-center flex-col md:flex-row gap-2">
                  <input
                    type="number"
                    min={1}
                    value={item.quantity}
                    onChange={(e) =>
                      updateCartQty(item.product._id, parseInt(e.target.value))
                    }
                    className="w-14 px-2 py-0 rounded bg-[#2a2a2a] text-white border border-gray-600"
                  />
                  <button
                    onClick={() => removeFromCart(item.product._id)}
                    className="text-red-400 hover:text-red-300 lg:p-2 lg:text-sm p-0 text-0"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex fixed bottom-4 gap-4 justify-center md:right-130 border rounded-lg pl-5 border-gray-700 items-center">
            <p className="text-lg font-semibold">Total: ₦ {total.toLocaleString()}</p>
            <button
              onClick={handlePlaceOrder}
              className="bg-yellow-400 text-black px-6 py-2 rounded-lg hover:bg-yellow-300 transition"
            >
               {loading ? "Processing..." : "Proceed to Checkout"}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
