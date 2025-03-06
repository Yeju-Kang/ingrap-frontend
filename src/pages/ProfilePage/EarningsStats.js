import React from "react";
import { Box, Typography } from "@mui/material";

const EarningsStats = ({ totalEarned, sold }) => (
    <Box sx={{ display: "flex", gap: 4, mb: 3 }}>
      <Box>
        <Typography variant="h6" fontWeight="bold">{totalEarned}</Typography>
        <Typography variant="body2" color="gray">Total earned</Typography>
      </Box>
      <Box>
        <Typography variant="h6" fontWeight="bold">{sold}</Typography>
        <Typography variant="body2" color="gray">Sold</Typography>
      </Box>
    </Box>
  );

  export default EarningsStats
