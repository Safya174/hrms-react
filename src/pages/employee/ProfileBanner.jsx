import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Userbackground from "../../assets/userp.webp";
import User from "../../assets/user.webp";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
export default function ProfileBanner() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center" }}>
      <Box
        sx={{
          backgroundImage: `url(${Userbackground})`,
          backgroundPosition: "center",
          borderRadius: "15px",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          p: 3,
          width: "95%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            width:"85%"
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                p: "4px",
                border: "2px solid #fff",
                borderRadius: "50%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                mx: 2,
              }}
            >
              <Avatar
                src={User}
                alt="Redwan husein"
                sx={{ width: 64, height: 64 }}
              />
            </Box>
            <Box>
              <Typography
                sx={{
                  fontFamily: "Product Sans",
                  fontSize: {xs:"15px", sm: "15px", md: "40px" },
                  fontWeight: "bold",
                  color: "white",
                }}
              >
                Redwan husein
              </Typography>
              <Typography
                sx={{
                  fontFamily: "Product Sans",
                  fontSize: { xs:"10px" ,sm: "10px", md: "30px" },
                  fontWeight: "400",
                  color: "white",
                }}
              >
                UI / UX Designer & UX Writer
              </Typography>
            </Box>
          </Box>
          <Button
            sx={{
              backgroundColor: "#FFC20E",
              color: "#000",
              fontFamily: "Product Sans",
              fontSize: { sm: "15px", md: "25" },
              fontWeight: "bold",
            }}
          >
            Edit Profile
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
