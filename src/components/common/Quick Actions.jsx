import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

let Actions = [
  { id: 1, name: "Apply for Leave" },
  { id: 2, name: "KPI Goals" },
  { id: 3, name: "Take Appraisal" },
  { id: 4, name: "View Payslip" },
  { id: 5, name: "Update Profile" },
  { id: 6, name: "Events" },
];

export default function QuickActions() {
  return (
    <Box sx={{ my: 4 ,overflowX:"hidden"}}>
      <Typography
        component="h4"
        sx={{
          fontFamily: "Product Sans",
          fontSize: { xs: "15px", md: "30px" }, // حجم الخط بيصغر في الموبايل
          fontWeight: "400",
          color: "#1D1D1D",
          mb: 2,
          mx:3
        }}
      >
        Quick Actions
      </Typography>

      {/* حزمة الأزرار مع التجاوب */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap", // ينزل الأزرار في صف جديد لو المساحة خلصت
          gap: 1.5, 
          mx:2
        }}
      >
        {Actions.map((Action) => (
          <Button
            key={Action.id}
            sx={{
              py: { xs: 1, md: 1.5 },
              px: { xs: 2, md: 3 },
              borderRadius: 6,
              fontFamily: "Product Sans",
              fontSize: { xs: "14px", sm: "16px", md: "18px" }, // تكيف حجم الخط مع الشاشة
              fontWeight: "400",
              color: "#1D1D1D",
              backgroundColor: "white",
              textTransform: "none", // يمنع الحروف الكبيرة الإجبارية
              boxShadow: "0px 2px 4px rgba(0,0,0,0.05)",
              "&:hover": {
                backgroundColor: "#f5f5f5",
              },
            }}
          >
            {Action.name}
          </Button>
        ))}
      </Box>
    </Box>
  );
}