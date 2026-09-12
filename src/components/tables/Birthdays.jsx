import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GenralTable from "../common/Table";
import Button from "@mui/material/Button";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
const birthdaysData = [
  { id: 1, name: "Biruk Kidan", date: "April 25th" },
  { id: 2, name: "Sarah Ahmed", date: "April 28th" },
  { id: 3, name: "Omar Hassan", date: "May 2nd" },
  { id: 4, name: "Jessica Taylor", date: "May 10th" },
];
 const birthdayColumns = [
  {
    id: "info",
    label: "Birthdays",
    renderCell: (row) => (
      <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        {/* الجزء الأيسر: الأيقونة والنص */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <CalendarMonthIcon sx={{ color: "#1e293b" }} />
          <span>{row.name}'s Day - {row.date}</span>
        </Box>

        {/* الجزء الأيمن: الزرار */}
        <Button
          variant="contained"
          disableElevation
          sx={{
            backgroundColor: "#ffc107",
            color: "#000",
            fontWeight: "bold",
            fontSize: "12px",
            textTransform: "none",
            borderRadius: "6px",
            "&:hover": { backgroundColor: "#e0a800" },
          }}
        >
          Send Wishes
        </Button>
      </Box>
    ),
  },
];

export default function Birthdays() {
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "15px",p:2 ,height:"90%"}}>
      <Typography
        sx={{
          fontFamily: "Product Sans",
          fontSize: { sm: "15px", md: "30px" },
          fontWeight: "bold",
          color: "#545559",
        }}
      >
        birthdaysData
      </Typography>
      <GenralTable rows={birthdaysData} Columns={birthdayColumns}/>
    </Box>
  );
}