import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { usePaystackPayment } from "react-paystack";
import axios from "axios";

const CheckoutPayment = ({ items, totalAmount }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  const config = {
    reference: new Date().getTime().toString(),
    email,
    amount: totalAmount * 100, // Paystack uses kobo
    publicKey: "pk_test_aa9595381d858c49d21f6378ac51c418418dec90",
  };

  const onSuccess = async (reference) => {
    try {
      const token = localStorage.getItem("wholesalerToken");
      await axios.post(
        "http://localhost:5000/api/orders",
        { items },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      alert("Payment successful & order created!");
      navigate("/wholesaler/orders");
    } catch (error) {
      console.error("Order saving failed:", error);
    }
  };

  const onClose = () => {
    console.log("Payment closed.");
  };

  const initializePayment = usePaystackPayment(config);

  return (
    <div className="p-6 bg-black min-h-screen text-white">
      <h2 className="text-2xl mb-4">Checkout Payment</h2>
      <input
        type="email"
        placeholder="Enter your email"
        className="p-2 rounded mb-4 w-full text-black"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <button
        onClick={() => initializePayment(onSuccess, onClose)}
        className="bg-green-600 px-6 py-2 rounded"
      >
        Pay ₦{totalAmount}
      </button>
    </div>
  );
};

export default CheckoutPayment;
