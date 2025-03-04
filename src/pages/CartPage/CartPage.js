import React, { useState } from "react";
import { Box } from "@mui/material";
import CartList from "./CartList";
import OrderSummary from "./OrderSummary";

const initialCartItems = [
  { id: 1, name: "Fifa 19", platform: "PS4", price: 44.00, quantity: 2, image: "/fifa.jpg" },
  { id: 2, name: "Glacier White 500GB", platform: "PS4", price: 249.99, quantity: 1, image: "/ps4-white.jpg" },
  { id: 3, name: "Platinum Headset", platform: "PS4", price: 110.99, quantity: 1, image: "/headset.jpg" },
];

const CartPage = () => {
  const [cartItems, setCartItems] = useState(initialCartItems);
  const [shipping, setShipping] = useState(5.00);
  const [promoCode, setPromoCode] = useState("");

  const handleQuantityChange = (id, delta) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, quantity: Math.max(1, item.quantity + delta) } : item
    ));
  };

  const handleRemoveItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalCost = subtotal + shipping;

  return (
    <Box display="flex" justifyContent="center" p={4} bgcolor="#f5f5f5" sx={{marginTop: '80px'}}>
      <CartList cartItems={cartItems} onQuantityChange={handleQuantityChange} onRemove={handleRemoveItem} />
      <OrderSummary totalItems={totalItems} subtotal={subtotal} shipping={shipping} setShipping={setShipping} promoCode={promoCode} setPromoCode={setPromoCode} totalCost={totalCost} />
    </Box>
  );
};

export default CartPage;