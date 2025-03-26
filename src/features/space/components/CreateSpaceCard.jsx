import React, { useState } from "react";
import { Box, Card } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import CreateSpaceModal from "../components/CreateSpaceModal";

const CreateSpaceCard = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Card
        onClick={() => setOpen(true)}
        sx={{
          width: "400px",
          height: "500px",
          backgroundColor: "#F9F8F6",
          borderRadius: "12px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          cursor: "pointer",
        }}
      >
        <Box
          sx={{
            width: 80,
            height: 80,
            borderRadius: "50%",
            backgroundColor: "var(--primary-color)",
            color: "var(--white-color)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            fontSize: "2rem",
            border: "1px solid #D0D0D0",
            mb: 2,
          }}
        >
          <AddIcon fontSize="inherit" />
        </Box>
      </Card>

      <CreateSpaceModal open={open} onClose={() => setOpen(false)} />
    </>
  );
};

export default CreateSpaceCard;
