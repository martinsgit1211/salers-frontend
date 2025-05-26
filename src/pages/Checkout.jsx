// src/pages/Checkout.jsx
import CheckoutPayment from "../components/CheckoutPayment";
import { useSelector } from "react-redux"; // or from context/state

const Checkout = () => {
  const cartItems = useSelector((state) => state.cart.items); // adjust to your state management
  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const formattedItems = cartItems.map((item) => ({
    product: item._id,
    quantity: item.quantity,
  }));

  return (
    <div>
      <h2 className="text-white text-xl mb-4">Complete Payment</h2>
      <CheckoutPayment items={formattedItems} totalAmount={total} />
    </div>
  );
};

export default Checkout;
