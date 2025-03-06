import React from "react";
import { Box, Typography, CardContent, Card } from "@mui/material";

const StatisticsCards = ({ stats }) => (
    <Box sx={{ display: "flex", gap: 3, mt: 3 }}>
      {stats.map((stat, index) => (
        <Card key={index} sx={{ flex: 1 }}>
          <CardContent>
            <Typography variant="h6" fontWeight="bold">{stat.value}</Typography>
            <Typography variant="body2" color="gray">{stat.label}</Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  export default StatisticsCards