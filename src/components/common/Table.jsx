import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

export default function GeneralTable({ rows, Columns, hideHeader = false }) {
  return (
    <TableContainer sx={{ width: "100%", overflowX: "auto" }}>
      <Table
        sx={{
          minWidth: { xs: 300, sm: 400 }, // بيمنع انكماش الأعمدة في الموبايل
          borderRadius: "8px",
          borderCollapse: "separate",
          borderSpacing: "0 8px",
        }}
      >
        {!hideHeader && (
          <TableHead>
            <TableRow
              sx={{
                backgroundColor: "#E3EDF9",
                "& th:first-of-type": {
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                },
                "& th:last-of-type": {
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                },
              }}
            >
              {Columns.map((col) => (
                <TableCell
                  key={col.id}
                  align={col.align || "left"}
                  sx={{
                    fontWeight: "bold",
                    fontSize: { xs: "12px", sm: "14px" },
                    p: { xs: 1, sm: 2 }, // تقليل البادنج في الشاشات الصغيرة
                    border: "none",
                    whiteSpace: "nowrap",
                  }}
                >
                  {col.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
        )}

        <TableBody>
          {rows.map((row, index) => (
            <TableRow
              key={row.id || index}
              sx={{
                backgroundColor: "#E3EDF9",
                "& td:first-of-type": {
                  borderTopLeftRadius: "10px",
                  borderBottomLeftRadius: "10px",
                },
                "& td:last-of-type": {
                  borderTopRightRadius: "10px",
                  borderBottomRightRadius: "10px",
                },
              }}
            >
              {Columns.map((col) => {
                let value = row[col.id];
                let cellContent;
                if (col.renderCell) {
                  cellContent = col.renderCell(row);
                } else if (col.format && typeof value === "number") {
                  cellContent = col.format(value);
                } else {
                  cellContent = value;
                }

                return (
                  <TableCell
                    key={col.id}
                    align={col.align || "left"}
                    sx={{
                      fontSize: { xs: "11px", sm: "13px" },
                      p: { xs: 1, sm: 2 }, // تقليل البادنج في الشاشات الصغيرة
                      border: "none",
                      whiteSpace: "nowrap", // بيمنع نزول الأرقام تحت بعضها
                    }}
                  >
                    {cellContent}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}