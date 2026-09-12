import Login from "../../assets/Login.webp";
import Box from "@mui/material/Box";

import Typography from "@mui/material/Typography";

export default function LoginHeader() {
  return (
    <Box
      sx={{
        position: "relative",
        backgroundImage: `url(${Login})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh", // بياخد طول الـ Grid item اللي محطوط جواه
        m:0,
        p: { xs: 3, md: 5 }, // Padding متناسق بدون تثبيت أبعاد
        boxSizing: "border-box",
        "&::after":{
          content: '""',
          position:"absolute",
          top:0,
          left:0,
          width:"100%",
          height:"100%",
          backgroundColor:"rgba(20, 45, 135, 0.82)",
          mixBlendMode:"multiply"
        }
      }}
    >
    

      {/* 2. المحتوى والشريط الأسطواني */}
      <Box sx={{display:"flex",flexDirection:"column",justifyContent:"center",height:"100%",zIndex:778,position:"absolute"}}>
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
          Manage all <Typography component={"span"}  sx={{
            fontFamily: "Product Sans",
            fontWeight: "bold",
            fontSize: { xs: "28px", md: "42px" },
            color: "#FFC20E",
            lineHeight: 1.2,
            mx:1,
            mb: 1.5,
          }}>HR Operations</Typography>from the comfort of your home.
        </Typography>

        <Box sx={{display:"flex",justifyContent:"flex-start",mt:{sm:2,md:4}}}>
        <Box
          sx={{
            width: "60px",
            height: "10px",
            backgroundColor: "#FFC20E",
            borderRadius: "20px",
            mb: 2,
          }}
        />
        <Box
          sx={{
            width: "60px",
            height: "10px",
            backgroundColor: "white",
            borderRadius: "20px",
            mb: 2,
            mx:2
          }}
        />
        <Box
          sx={{
            width: "60px",
            height: "10px",
            backgroundColor: "white",
            borderRadius: "20px",
            mb: 2,
          }}
        />
         </Box>
     
      </Box>
    </Box>
  );
}