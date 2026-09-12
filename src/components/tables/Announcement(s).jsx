import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomAccordion from "../common/CustomAccordion";
const announcementsData = [
  {
    id: 1,
    title: "Welcome saron - We have a new staff joining us",
    details:
      "Please welcome Saron to the Product Design team! She starts this Monday.",
  },
  {
    id: 2,
    title: "Sendforth for Project Manager : Kindly gather at the meeting hall",
    details:
      "Join us today at 4:00 PM in the Main Hall to bid farewell to Ahmed.",
  },
  {
    id: 3,
    title: "Marriage Alert",
    details:
      "Congratulations to Sarah from HR on her upcoming wedding this weekend!",
  },
  {
    id: 4,
    title: "Office Space Update",
    details:
      "The 3rd floor cafeteria will be closed for maintenance tomorrow from 10 AM to 2 PM.",
  },
];
export default function Announcement() {
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "15px" }}>
      <Typography
        sx={{
          fontFamily: "Product Sans",
          fontSize: { sm: "15px", md: "30px" },
          fontWeight: "bold",
          color: "#545559",
        }}
      >
        Announcement(s)
      </Typography>
      {announcementsData.map((announcement) => (
        <CustomAccordion
          key={announcement.id}
          title={announcement.title}
          details={announcement.details}
        />
      ))}
    </Box>
  );
}
