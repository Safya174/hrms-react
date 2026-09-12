import Grid from "@mui/material/Grid";
import LoginHeader from "./LoginHeader";
import LoginForm from "./LoginContent";
export default function Login() {
  return (
    <Grid container spacing={3} sx={{ overflow: "hidden" }}>
      <Grid size={{ xs: 12, md: 7 }}>
        <LoginForm />
      </Grid>
      <Grid size={{ xs: 12, md: 5 }}>
        <LoginHeader />
      </Grid>

    </Grid>
  );
}
