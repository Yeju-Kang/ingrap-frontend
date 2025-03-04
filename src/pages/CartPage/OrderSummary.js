import React from "react";
import { Box, Typography, Divider, Select, MenuItem, TextField, Button } from "@mui/material";

const OrderSummary = ({ totalItems, subtotal, shipping, setShipping, promoCode, setPromoCode, totalCost }) => {
  return (
    <Box width="30%" bgcolor="white" p={3} borderRadius={2} boxShadow={2} ml={3}>
      <Typography variant="h6" fontWeight="bold">Order Summary</Typography>
      <Divider sx={{ my: 2 }} />

      <Box display="flex" justifyContent="space-between" mb={1}>
        <Typography>ITEMS {totalItems}</Typography>
        <Typography fontWeight="bold">£{subtotal.toFixed(2)}</Typography>
      </Box>

      <Typography variant="subtitle2" mt={2}>SHIPPING</Typography>
      <Select value={shipping} onChange={(e) => setShipping(Number(e.target.value))} fullWidth size="small">
        <MenuItem value={5.00}>Standard Delivery - £5.00</MenuItem>
        <MenuItem value={10.00}>Express Delivery - £10.00</MenuItem>
      </Select>

      <Typography variant="subtitle2" mt={2}>PROMO CODE</Typography>
      <TextField
        placeholder="Enter your code"
        fullWidth
        size="small"
        value={promoCode}
        onChange={(e) => setPromoCode(e.target.value)}
        sx={{ mt: 1 }}
      />
      <Button variant="contained" color="error" fullWidth sx={{ mt: 1 }}>APPLY</Button>

      <Divider sx={{ my: 2 }} />
      <Box display="flex" justifyContent="space-between">
        <Typography fontWeight="bold">TOTAL COST</Typography>
        <Typography fontWeight="bold">£{totalCost.toFixed(2)}</Typography>
      </Box>

      <Button variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>CHECKOUT</Button>
    </Box>
  );
};

export default OrderSummary;