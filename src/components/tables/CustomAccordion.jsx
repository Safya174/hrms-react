import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CustomAccordion from "../common/CustomAccordion";
const todosData = [
  {
    id: 1,
    title: "Complete Onboarding Document Upload",
    details: "Upload national ID, passport copy, and signed contract to the portal before Friday."
  },
  {
    id: 2,
    title: "Follow up on clients on documents",
    details: "Reach out to ACME Corp regarding the missing tax declaration forms."
  },
  {
    id: 3,
    title: "Design wireframes for LMS",
    details: "Create high-fidelity Figma screens for the student learning module."
  },
  {
    id: 4,
    title: "Create case study for next IT project",
    details: "Draft the technical architecture outline and client success metrics."
  },
  {
    id: 5,
    title: "Review quarterly team KPIs",
    details: "Evaluate sprint velocity and code quality metrics for Q3."
  }
];
export default function Todo(){
  return (
    <Box sx={{ backgroundColor: "white", borderRadius: "15px",p:2,height:"90%"}}>
      <Typography
        sx={{
          fontFamily: "Product Sans",
          fontSize: { sm: "15px", md: "30px" },
          fontWeight: "bold",
          color: "#545559",
        }}
      >
       To-dos 
      </Typography>
      {todosData.map((todo)=>(
        <CustomAccordion key={todo.id} title={todo.title} details={todo.details} />
  
      ))}
    </Box>
  );
}