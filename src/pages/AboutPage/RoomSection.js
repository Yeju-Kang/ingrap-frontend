import React from "react"
import { Box } from "@mui/material"

const RoomSection = ({image, isLoaded, currentSection, index, first = false, last = false}) => {
    return (
        <Box
  sx={{
    position: "fixed",
    top: currentSection === index
      ? "0%" // ✅ Room1이 정상적으로 보임
      : currentSection > index
      ? last
      ? "-40vh"
      : "-100%" // ✅ Room1이 검은 화면과 함께 이동
      : first
      ? "-100%"
      : "100%", // ✅ 이후에도 유지
    left: 0,
    width: "100%",
    height: "100vh",
    backgroundImage: `url(${image})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    transform: first
    ?  !isLoaded
      ? "scale(0.3)" // ✅ 최초 축소
      : "scale(1)"
      :"none", // ✅ 확대 후 유지
    transition: first 
    ? "top 1s ease-in-out, transform 1.5s ease-out"
    :  "top 1s ease-in-out",
  }}
/>
    )

}

export default RoomSection;