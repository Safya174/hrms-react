import Regsiter from "../../assets/Regsiter.webp";
import Logo from "../../assets/Logo.webp";
import Box from "@mui/material/Box";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

export default function RegsiterHeader() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${Regsiter})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // بياخد طول الـ Grid item اللي محطوط جواه
        m:0,
        p: { xs: 3, md: 5 }, // Padding متناسق بدون تثبيت أبعاد
        boxSizing: "border-box",
      }}
    >
      {/* 1. اللوجو */}
      <Box sx={{ width: "fit-content" }}>
        <CardMedia
          component="img"
          image={Logo}
          alt="logo"
          sx={{ height: 35, width: "auto" }}
        />
      </Box>

      {/* 2. المحتوى والشريط الأسطواني */}
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%"}}>
        <Typography
          component="h2"
          sx={{
            fontFamily: "Product Sans",
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "42px" },
            color: "white",
            lineHeight: 1.2,
            mb: 1.5,
          }}
        >
          HR Management Platform
        </Typography>

        {/* الشريط الأسطواني */}
        <Box
          sx={{
            width: "80px",
            height: "10px",
            backgroundColor: "white",
            borderRadius: "20px",
            mb: 2,
          }}
        />

        <Typography
          component="p"
          sx={{
            fontFamily: "Product Sans",
            fontWeight: 400,
            fontSize: { xs: "16px", md: "22px" },
            color: "white",
            opacity: 0.9,
          }}
        >
          Manage all employees, payrolls, and other human resource operations.
        </Typography>
      </Box>
    </Box>
  );
}