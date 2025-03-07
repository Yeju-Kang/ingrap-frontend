import React, { useState } from "react";
import { Box, Typography, Button, TextField, RadioGroup, FormControlLabel, Radio } from "@mui/material";
import { useNavigate } from "react-router-dom";

const CheckoutPage = () => {
    const navigate = useNavigate();
    
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        address: "",
        paymentMethod: "credit_card",
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleCheckout = () => {
        // ✅ 실제 결제 요청을 백엔드에 보낼 수 있음
        alert("주문이 완료되었습니다!");
        navigate("/payment");
    };

    return (
        <Box sx={{ maxWidth: "900px", margin: "auto", padding: "20px" }}>
            {/* 🔹 주문서 작성 타이틀 */}
            <Typography variant="h5" fontWeight="bold" mb={3}>주문서 작성 및 결제</Typography>

            {/* 🔹 상품 목록 */}
            <Box sx={{ borderBottom: "2px solid #ddd", paddingBottom: "10px", mb: 3 }}>
                <Typography variant="h6" fontWeight="bold">상품정보</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 2 }}>
                    <Typography>LUCKY CHOUETTE Stripe Loose Fit T-shirt</Typography>
                    <Typography>₩128,000</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                    <Typography>LUCKY CHOUETTE Stripe Loose Fit T-shirt</Typography>
                    <Typography>₩128,000</Typography>
                </Box>
            </Box>

            {/* 🔹 배송 정보 입력 */}
            <Typography variant="h6" fontWeight="bold">배송 정보</Typography>
            <TextField fullWidth label="이름" name="name" value={formData.name} onChange={handleChange} sx={{ my: 1 }} />
            <TextField fullWidth label="전화번호" name="phone" value={formData.phone} onChange={handleChange} sx={{ my: 1 }} />
            <TextField fullWidth label="배송지 주소" name="address" value={formData.address} onChange={handleChange} sx={{ my: 1 }} />

            {/* 🔹 결제 방법 선택 */}
            <Typography variant="h6" fontWeight="bold" mt={3}>결제 방법</Typography>
            <RadioGroup name="paymentMethod" value={formData.paymentMethod} onChange={handleChange}>
                <FormControlLabel value="credit_card" control={<Radio />} label="신용카드" />
                <FormControlLabel value="payco" control={<Radio />} label="PAYCO" />
                <FormControlLabel value="kakaopay" control={<Radio />} label="KakaoPay" />
            </RadioGroup>

            {/* 🔹 결제 요약 */}
            <Box sx={{ mt: 3, padding: "15px", backgroundColor: "#f9f9f9", borderRadius: "8px" }}>
                <Typography variant="h6" fontWeight="bold">결제 정보</Typography>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                    <Typography>총 상품금액</Typography>
                    <Typography>₩256,000</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", mt: 1 }}>
                    <Typography>배송비</Typography>
                    <Typography>₩0</Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between", fontWeight: "bold", mt: 2 }}>
                    <Typography>총 결제금액</Typography>
                    <Typography color="red">₩256,000</Typography>
                </Box>
            </Box>

            {/* 🔹 CHECKOUT 버튼 */}
            <Button 
                fullWidth variant="contained" 
                sx={{ backgroundColor: "black", color: "white", mt: 3, py: 1.5, fontSize: "18px" }}
                onClick={handleCheckout}
            >
                주문 및 결제하기
            </Button>
        </Box>
    );
};

export default CheckoutPage;
