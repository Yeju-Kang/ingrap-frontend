import React from "react";
import { Box, Typography, Divider, Button } from "@mui/material";
import CartItem from "./CartItem";

const CartList = ({ cartItems, onQuantityChange, onRemove }) => {
  return (
    <Box width="60%" bgcolor="white" p={3} borderRadius={2} boxShadow={2}>
      <Typography variant="h5" fontWeight="bold">Shopping Cart</Typography>
      <Typography variant="subtitle1" color="gray">{cartItems.length} Items</Typography>
      <Divider sx={{ my: 2 }} />

      {cartItems.map(item => (
        <CartItem key={item.id} item={item} onQuantityChange={onQuantityChange} onRemove={onRemove} />
      ))}

      <Button variant="text" color="primary" sx={{ mt: 2 }}>← Continue Shopping</Button>
    </Box>
  );
};

export default CartList;