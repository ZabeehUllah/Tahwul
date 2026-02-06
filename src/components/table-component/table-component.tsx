import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import type { EvidenceTableProps } from "./table-component.types";

const CustomDataGrid = <T extends Record<string, any>>({
  rows,
  columns,
  keyExtractor,
  headerBgColor = "#F5F5F5",
  borderRadius = 3,
  stickyHeader = false,
  size = "medium",
  rowHover = false,
  onRowClick,
}: EvidenceTableProps<T>) => {
  return (
    <TableContainer
      component={Paper}
      sx={{
        borderRadius,
        overflow: "hidden",
        boxShadow: 'none',
        border: '1px solid #e0e0e0',
      }}
    >
      <Table size={size} stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id as string}
                align={column.align || "left"}
                sx={{
                  fontWeight: 600,
                  minWidth: column.minWidth,
                  backgroundColor: headerBgColor,
                  borderBottom: 'none',
                  // First cell gets left border radius
                  '&:first-of-type': {
                    borderTopLeftRadius: borderRadius,
                  },
                  // Last cell gets right border radius
                  '&:last-of-type': {
                    borderTopRightRadius: borderRadius,
                  },
                  ...column.headerStyle,
                }}
              >
                {column.label}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={keyExtractor(row)}
              hover={rowHover}
              onClick={() => onRowClick?.(row)}
              sx={{
                cursor: onRowClick ? "pointer" : "default",
                '&:last-child td': { 
                  borderBottom: 'none',
                },
              }}
            >
              {columns.map((column) => {
                const value = column.id in row 
                  ? row[column.id as keyof T] 
                  : null;
                
                return (
                  <TableCell
                    key={column.id as string}
                    align={column.align || "left"}
                    style={column.cellStyle}
                  >
                    {column.format
                      ? column.format(value, row)
                      : value}
                  </TableCell>
                );
              })}
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default CustomDataGrid;