import React from "react";
import { Box, Typography, Button, Card, CardContent, IconButton } from "@mui/material";
import {  Edit, Add } from "@mui/icons-material";

const PaymentMethods = () => (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">Payment Methods</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2 }}>
          <Box>
            <Typography variant="body2">Card Number: **** 4567</Typography>
            <Typography variant="body2" color="gray">Paul Warrior</Typography>
          </Box>
          <IconButton><Edit /></IconButton>
        </Box>
        <Button startIcon={<Add />} sx={{ mt: 1 }}>Add Payment Method</Button>
      </CardContent>
    </Card>
  );

  export default PaymentMethods