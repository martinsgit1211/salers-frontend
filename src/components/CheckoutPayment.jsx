import React, { useEffect, useState } from "react";
import { usePaystackPayment } from "react-paystack";
import { useNavigate, useLocation } from "react-router-dom";
import { useAuth } from "../auth/AuthContext";
import { motion, AnimatePresence } from "framer-motion";
import { CheckCircle } from "lucide-react";
import emailjs from "@emailjs/browser";

const CheckoutPayment = () => {
  const location = useLocation();
  const { items, totalAmount } = location.state || {};
  const navigate = useNavigate();
  const { user, clearCart } = useAuth();

  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const total = parseFloat(localStorage.getItem("total")) || 0;
  const [email, setEmail] = useState(user?.email || "");
  const [showSuccess, setShowSuccess] = useState(false);
  const [sending, setSending] = useState(false);
  const [success, setSuccess] = useState("");

  useEffect(() => {
    document.title = "Checkout | Payment";
  }, []);

const config = {
  reference: new Date().getTime().toString(),
  email: email,
  amount: Math.round(total * 100), // always use an integer
  publicKey: "pk_test_aa9595381d858c49d21f6378ac51c418418dec90",
};


  const onSuccess = async (reference) => {
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
        localStorage.removeItem("cart");
        localStorage.removeItem("total");
        sendEmail();
      } else {
        alert("Payment was successful, but order placement failed.");
      }
    } catch (err) {
      console.error("Order error:", err);
      alert("Something went wrong after payment.");
    }
  };

  const onClose = () => {
    console.log("Payment popup closed");
  };

  const initializePayment = usePaystackPayment(config);

  const handlePayment = (e) => {
    e.preventDefault();
    if (!email) {
      alert("Please provide your email.");
      return;
    }
    initializePayment(onSuccess, onClose);
  };

  const sendEmail = () => {
    setSending(true);

    const itemSummary = items
      .map(
        (item) =>
          `${item.product.name} (₦${item.product.price}) × ${item.quantity}`
      )
      .join("\n");

    const templateParams = {
      to_email: email,
      message: itemSummary,
      total_amount: `₦ ${totalAmount.toLocaleString()}`,
    };

    emailjs
      .send(
        "service_e028x4q", // replace with actual ID
        "template_32vt93n", // replace with actual template
        templateParams,
        "n6yp0XxF3h9CUUxL7" // replace with actual key
      )
      .then(() => {
        setSuccess("Payment details sent successfully!");
        setShowSuccess(true);
        setTimeout(() => {
          setShowSuccess(false);
          navigate("/wholesaler/products");
        }, 3000);
      })
      .catch((error) => {
        console.error("EmailJS error:", error);
        setSending(false);
      });
  };

  const SuccessPopup = ({ visible }) => {
    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/60"
          >
            <motion.div
              className="bg-white rounded-xl p-8 flex flex-col items-center text-green-600"
              initial={{ rotate: 0 }}
              animate={{ rotate: 360 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            >
              <CheckCircle size={64} className="mb-4 text-green-500" />
              <p className="text-xl font-semibold">Payment Successful!</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  };

  return (
    <div className="min-h-screen bg-[#0f0f0f] pt-[10%] text-white">
      <div className="max-w-2xl mx-auto p-6 mt-6 bg-[#1c1c1c] rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">💳 Checkout Payment</h2>

        <form onSubmit={handlePayment} className="space-y-4">
          <div>
            <label className="block text-gray-300 mb-2">Email Address</label>
            <input
              type="email"
              className="w-full p-2 rounded bg-[#2c2c2c] text-white border border-gray-600"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          <div>
            {items?.map((item) => (
              <div key={item.product._id} className="mb-2">
                <p>
                  {item.product.name} × {item.quantity}
                </p>
              </div>
            ))}
          </div>
          <div>
            <p className="text-lg font-semibold">
              Total Amount: <strong>₦ {totalAmount?.toLocaleString()}</strong>
            </p>
          </div>

          <button
            type="submit"
            className="bg-green-400 text-black px-6 w-full py-2 rounded-lg hover:bg-yellow-300 transition"
          >
            {sending ? "Processing..." : "Pay Now!"}
          </button>
        </form>
      </div>

      <SuccessPopup visible={showSuccess} />
    </div>
  );
};

export default CheckoutPayment;
