import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import GenralTable from "../common/Table";
const payrollRowsData = [
  {
    id: 1,
    earnings: "Basic Wage",
    amount: 150000,
    deductions: -30000,
    total: 120000
  },
  {
    id: 2,
    earnings: "Tax",
    amount: 15000,
    deductions: -3000,
    total: 12000
  },
  {
    id: 3,
    earnings: "Pension",
    amount: 15000,
    deductions: -3000,
    total: 12000
  },
  {
    id: 4,
    earnings: "Total Earnings",
    amount: 150000,
    deductions: -36000,
    total: 114000
  }
];
 const payrollColumns = [
  { 
    id: "earnings", 
    label: "Earnings" 
  },
  { 
    id: "amount", 
    label: "Amount",
    format: (val) => val.toLocaleString()
  },
  { 
    id: "deductions", 
    label: "Deductions",
    format: (val) => val.toLocaleString()
  },
  { 
    id: "total", 
    label: "Total",
    format: (val) => val.toLocaleString()
  }
];

export default function PayrollTable() {
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
        April Pay slip breakdown
      </Typography>
      <GenralTable rows={payrollRowsData} Columns={payrollColumns} />
    </Box>
  );
}
