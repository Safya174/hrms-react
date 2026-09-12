import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import LeaveItem from "../common/LeaveItem";

const leaveDaysData = [
  { id: 1, type: "Annual Leave", used: 10, total: 60 },
  { id: 2, type: "Sick Leave", used: 0, total: 10 },
  { id: 3, type: "Compassionate Leave", used: 8, total: 15 },
];
export default function AvailableLeaveDays() {
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "15px",p:2,height:"90%" }}>
      <Typography
        sx={{
          fontFamily: "Product Sans",
          fontSize: { sm: "15px", md: "30px" },
          fontWeight: "bold",
          color: "#545559",
        }}
      >
        Available Leave Days
      </Typography>
      {leaveDaysData.map((leave)=>(
        <LeaveItem key={leave.id} label={leave.type} used={leave.used} total={leave.total}   />

      ))}
    </Box>
  );
}
