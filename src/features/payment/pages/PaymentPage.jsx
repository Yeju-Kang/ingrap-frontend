import React from "react";
import { Box, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
    const navigate = useNavigate();

    return (
        <Box sx={{ textAlign: "center", marginTop: "100px" }}>
            <Typography variant="h4" fontWeight="bold" color="green" mb={3}>
                결제가 완료되었습니다!
            </Typography>
            <Typography variant="h6">감사합니다. 주문이 성공적으로 완료되었습니다.</Typography>
            <Button 
                variant="contained" 
                sx={{ mt: 4, backgroundColor: "black", color: "white", fontSize: "18px", py: 1.5 }}
                onClick={() => navigate("/")}
            >
                홈으로 이동
            </Button>
        </Box>
    );
};

export default PaymentPage;
