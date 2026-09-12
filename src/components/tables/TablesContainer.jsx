import Grid from "@mui/material/Grid";
import Birthdays from "./Birthdays";
import AvailableLeaveDays from "./AvailableLeaveDays";
import PayrollTable from "./PayrollTable";
import Todo from "./CustomAccordion";

export default function TablesContainer() {
  return (
    <Grid
      container
      sx={{ backgroundColor: "#E3EDF9", p: 3 }}
      columnSpacing={3} 
      rowSpacing={4} 
      alignItems="stretch"
    >
      <Grid size={{ sm: 12, md: 6 }}>
        <AvailableLeaveDays />
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <Todo />
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <PayrollTable />
      </Grid>
      <Grid size={{ sm: 12, md: 6 }}>
        <Birthdays />
      </Grid>
    </Grid>
  );
}
