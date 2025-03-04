import React, { useState } from "react";
import { Box } from "@mui/material";
import Sidebar from "./Sidebar";
import RoomArea from "./RoomArea";
import FilterPanel from "./FilterPanel";
import ProductList from "./ProductList";

const DrawingPage = () => {
  const [filters, setFilters] = useState({
    brand: "ALEX MULLER",
    type: "Table",
    material: "Wood",
    color: "None",
    price: [0, 10000000],
  });

  return (
    <Box display="flex" height="100vh" sx={{marginTop: '100px'}}>
      <Sidebar />
      <RoomArea />
      <Box width="300px" display="flex" flexDirection="column">
        <FilterPanel filters={filters} setFilters={setFilters} />
        <ProductList />
      </Box>
    </Box>
  );
};

export default DrawingPage;