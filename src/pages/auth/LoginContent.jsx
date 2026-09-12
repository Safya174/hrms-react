import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";
export default function LoginForm() {
  const fields = [
    { label: "E-mail Address", name: "email", type: "email" },
    { label: "Password", name: "password", type: "password" },
  ];
  return (
    <Box>
      <Typography
        component="h2"
        sx={{
          fontFamily: "Product Sans",
          fontWeight: "bold",
          fontSize: { xs: "28px", md: "56px" },
          color: "#253D90",
          lineHeight: 1.2,
          mb: 1.5,
          mt: 2,
        }}
      >
        Login
      </Typography>
      <Typography
        component="h2"
        sx={{
          fontFamily: "Product Sans",
          fontWeight: "400",
          fontSize: { xs: "12px", md: "30px" },
          color: "#969696",
          lineHeight: 1.2,
          mb: 2,
        }}
      >
        Login to your account.
      </Typography>
      <Box sx={{ width: "100%" }}>
        <Grid container spacing={1}>
          {fields.map((field, index) => (
            <Grid key={index} size={{ xs: 12 }}>
              <p
                style={{
                  color: "#253D90",
                  fontWeight: "bold",
                  fontFamily: "Product Sans",
                  fontSize: "20px",
                }}
              >
                {field.label}
              </p>
              <OutlinedInput
                variant="outlined"
                size="small"
                type={field.type}
                name={field.name}
                sx={{
                  backgroundColor: "#fff",
                  borderRadius: "8px",
                  maxWidth: "600px",
                  width: "90%",
                  // إضافة Shadow وخلفية الحقل بنفس الشكل
                  boxShadow: "0px 2px 6px rgba(0, 0, 0, 0.06)",
                  "& .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#e2d5d5", // لون البوردر الخفيف
                  },
                  "&:hover .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1e3a8a",
                  },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    borderColor: "#1e3a8a",
                  },
                  height: "45px", // ارتفاع الحقل
                }}
              />
            </Grid>
          ))}
        </Grid>
      </Box>
      <FormControlLabel
        control={<Checkbox defaultChecked />}
        label="Remember me"
        sx={{
          color: "#8F8F8F", // لون النص
          "& .MuiSvgIcon-root": { fontSize: 22 },
          display: "block",
        }}
      />

      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{
          mt: 2,
          backgroundColor: "#253D90",
          fontFamily: "Product Sans",
          fontSize: "20px",
          fontWeight: "400",
        }}
      >
        Sign In
      </Button>

      <Typography variant="body2" sx={{ mt: 2 }}>
        Don’t have an account yet?{""}
        <Link
          href="/login"
          underline="hover"
          sx={{ color: "#1e3a8a", fontWeight: "bold" }}
        >
          Join KRIS today.
        </Link>
      </Typography>
    </Box>
  );
}
