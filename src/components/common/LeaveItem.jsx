import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LinearProgress from "@mui/material/LinearProgress";
export default function LeaveItem({ label, used, total }) {
  let Progress = (used / total) * 100;
  return (
    <Box sx={{ mb: 2 }}>
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 0.5 }}>
        <Typography variant="body2" color="#545559">
          {label}
        </Typography>
        <Typography variant="body2" color="#545559" fontWeight="bold">
          {used} of {total} day's
        </Typography>
      </Box>
      <LinearProgress
        variant="determinate"
        value={Progress}
        sx={{
          height: 20,
        
          backgroundColor: "#E0E3EC",
          "& .MuiLinearProgress-bar": { backgroundColor: "#253D90" },
        }}
      />
    </Box>
  );
}
