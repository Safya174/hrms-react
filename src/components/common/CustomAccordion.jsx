import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Typography from "@mui/material/Typography";

export default function CustomAccordion({ title, details }) {
  return (
    <Accordion elevation={0} sx={{ backgroundColor: '#E3EDF9', mb: 1, borderRadius: '8px !important', '&:before': { display: 'none' } }}>
      <AccordionSummary expandIcon={<ExpandMoreIcon color='#545559'  />}>
        <Typography variant="body2" fontWeight="500" color='#545559' >{title}</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography variant="caption">{details || "No extra details available."}</Typography>
      </AccordionDetails>
    </Accordion>
  );
}