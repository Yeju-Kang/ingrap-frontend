import React from "react";
import { Box, Typography, Button, IconButton } from "@mui/material";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

const CartItem = ({ item, onQuantityChange, onRemove }) => {
  return (
    <Box display="flex" alignItems="center" justifyContent="space-between" mb={2}>
      <Box display="flex" alignItems="center">
        <img src={item.image} alt={item.name} width={80} height={80} style={{ borderRadius: 8, marginRight: 16 }} />
        <Box>
          <Typography fontWeight="bold">{item.name}</Typography>
          <Typography color="gray">{item.platform}</Typography>
          <Button size="small" color="error" startIcon={<DeleteIcon />} onClick={() => onRemove(item.id)}>
            Remove
          </Button>
        </Box>
      </Box>

      <Box display="flex" alignItems="center">
        <IconButton onClick={() => onQuantityChange(item.id, -1)}><RemoveIcon /></IconButton>
        <Typography mx={2}>{item.quantity}</Typography>
        <IconButton onClick={() => onQuantityChange(item.id, 1)}><AddIcon /></IconButton>
      </Box>

      <Typography fontWeight="bold">£{(item.price * item.quantity).toFixed(2)}</Typography>
    </Box>
  );
};

export default CartItem;