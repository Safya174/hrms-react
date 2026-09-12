import Navbar from "../../layouts/employee/employeeNav";
import TablesContainer from "../../components/tables/TablesContainer";
import ProfileBanner from "./ProfileBanner";
import { Box } from "@mui/material";
import QuickActions from "../../components/common/Quick Actions";

export default function UserDashboard() {
  return (
    <Box sx={{ backgroundColor: "#E3EDF9" }}>
      
      <Navbar />

      {/* 1. البانر العلوي الخاص باليوزر */}
     
      <ProfileBanner />
       <QuickActions />
      {/* 2. الجداول الأربعة */}
      <Box sx={{ mt: 3 }}>
        <TablesContainer />
      </Box>
    </Box>
  );
}
