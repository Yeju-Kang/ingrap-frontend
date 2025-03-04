import React from "react";
import { Drawer, List, ListItem, ListItemText, Button } from "@mui/material";

const furnitureItems = [
  { id: 1, name: "테이블", model: "table" },
  { id: 2, name: "의자", model: "chair" },
  { id: 3, name: "침대", model: "bed" },
  { id: 4, name: "소파", model: "sofa" },
];

const FurnitureList = ({ open, onClose, onAddFurniture }) => {
  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <List>
        {furnitureItems.map((item) => (
          <ListItem button key={item.id} onClick={() => onAddFurniture(item)}>
            <ListItemText primary={item.name} />
          </ListItem>
        ))}
      </List>
      <Button onClick={onClose}>닫기</Button>
    </Drawer>
  );
};

export default FurnitureList;
