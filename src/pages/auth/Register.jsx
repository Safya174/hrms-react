import Grid from "@mui/material/Grid";
import RegsiterHeader from "./RegisterHeader";
import RegisterForm from "./RegisterContent";
export default function Regsister() {
  return (
    <Grid container spacing={3} sx={{overflowX:"hidden"}}>
      <Grid size={{ xs: 12, md: 5 }}>
        <RegsiterHeader />
      </Grid>
      <Grid size={{ xs: 12, md: 7}}>
        <RegisterForm />
      </Grid>
    </Grid>
  );
}
