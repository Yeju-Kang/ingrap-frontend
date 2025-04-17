import { Dialog, Box, Button, Typography } from "@mui/material";

const ModeSelectModal = ({ open, onClose, onSelect }) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        sx: {
          borderRadius: "16px",
          padding: "32px 28px",
          backgroundColor: "#fdfdfb",
          boxShadow: "0 8px 24px rgba(0,0,0,0.15)",
          minWidth: 360,
        },
      }}
    >
      <Typography
        variant="h6"
        fontWeight={600}
        textAlign="center"
        color="#333"
        mb={2}
      >
        공간을 어떻게 시작할까요?
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Button
          variant="contained"
          onClick={() => onSelect("empty")}
          sx={{
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "15px",
            py: 1.2,
            backgroundColor: "#b5ae91",
            '&:hover': {
              backgroundColor: "#a7a080",
            },
          }}
        >
          빈 공간으로 시작하기
        </Button>
        <Button
          variant="outlined"
          disabled="true"
          onClick={() => onSelect("mine")}
          sx={{
            borderRadius: "8px",
            fontWeight: 600,
            fontSize: "15px",
            py: 1.2,
            borderColor: "#b5ae91",
            color: "#7a7657",
            backgroundColor: "#fff",
            '&:hover': {
              backgroundColor: "#f2f1e7",
            },
          }}
        >
          내 공간으로 시작하기
        </Button>
      </Box>
    </Dialog>
  );
};

export default ModeSelectModal;