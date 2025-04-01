import React from "react";
import { Box, Typography, Avatar, Button, Card, CardContent } from "@mui/material";
import { Add } from "@mui/icons-material";

const LinkedAccounts = () => (
    <Card sx={{ flex: 1 }}>
      <CardContent>
        <Typography variant="h6" fontWeight="bold">Linked Accounts</Typography>
        <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2 }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Avatar src="/images/facebook.png" sx={{ width: 30, height: 30 }} />
            <Typography variant="body2">Facebook</Typography>
          </Box>
          <Button color="error" size="small">Unlink</Button>
        </Box>
        <Button startIcon={<Add />} sx={{ mt: 1 }}>Link Twitter Account</Button>
      </CardContent>
    </Card>
  );

  export default LinkedAccounts