import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";

// الأيقونات
import NotificationsIcon from "@mui/icons-material/Notifications";
import MailIcon from "@mui/icons-material/Mail";

const navItems = ["Dashboard", "Requests", "Payroll", "Company", "Extras"];

export default function Navbar() {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <AppBar
      position="static"
      elevation={0}
      sx={{
        backgroundColor: "#ffffff",
        borderBottom: "1px solid #e5e7eb",
        px: 2,
        mb:4
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between", minHeight: "64px" }}>
        {/* قسم فارغ على اليسار للموازنة أو لو ضعنا اللوجو هنا */}
        <Box sx={{ width: { xs: 0, md: 100 } }} />

        {/* 1. روابط التنقل في المنتصف */}
        <Box sx={{ display: "flex", gap: 3 }}>
          {navItems.map((item) => {
            const isActive = activeTab === item;
            return (
              <Button
                key={item}
                onClick={() => setActiveTab(item)}
                disableRipple
                sx={{
                  color: "#000000",
                  fontWeight: isActive ? "700" : "500",
                  fontSize: "15px",
                  textTransform: "none",
                  position: "relative",
                  paddingBottom: "8px",
                  borderRadius: 0,
                  "&::after": isActive
                    ? {
                        content: '""',
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        width: "100%",
                        height: "2px",
                        backgroundColor: "#FFC20E",
                        borderRadius: "2px",
                      }
                    : {},
                }}
              >
                {item}
              </Button>
            );
          })}
        </Box>

        {/* 2. الأيقونات والبروفايل على اليمين */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          {/* أيقونة الإشعارات (الجرس) */}
          <IconButton
            sx={{
              backgroundColor: "#253D90",
              color: "#fff",
              borderRadius: "50%",
              width: 38,
              height: 38,
              p: 1,
              "&:hover": { backgroundColor: "#1d4ed8" },
            }}
          >
            <Badge badgeContent={12} color="error" max={99}>
              <NotificationsIcon sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>

          {/* أيقونة الرسائل */}
          <IconButton
            sx={{
              backgroundColor: "#2e7d32", // أو نفس درجة الأزرق إذا أردتِ توحيد اللون
              color: "#fff",
              borderRadius: "50%",
              p: 1,
              width: 38,
              height: 38,
              "&:hover": { backgroundColor: "#1b5e20" },
            }}
          >
            <Badge badgeContent={12} color="error" max={99}>
              <MailIcon sx={{ fontSize: 20 }} />
            </Badge>
          </IconButton>

          {/* صورة البروفايل */}
          <Avatar
            alt="Redwan husein"
            src="/static/images/avatar/1.jpg" // غيري المسار لصورتك
            sx={{
              width: 38,
              height: 38,
              cursor: "pointer",
              border: "2px solid #1e3a8a",
            }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
}
