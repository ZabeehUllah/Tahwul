import { useMemo, useState } from "react";
import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
} from "@mui/material";
import ArrowUpwardIcon from "@mui/icons-material/ArrowUpward";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import type { EvidenceTableProps } from "./table-component.types";
import styles from "./table-component.styles";

type Order = "asc" | "desc";

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
  const [order, setOrder] = useState<Order>("asc");
  const [orderBy, setOrderBy] = useState<keyof T | null>(null);

  const handleSort = (columnId: keyof T) => {
    const isAsc = orderBy === columnId && order === "asc";
    setOrder(isAsc ? "desc" : "asc");
    setOrderBy(columnId);
  };

  const sortedRows = useMemo(() => {
    if (!orderBy) return rows;

    return [...rows].sort((a, b) => {
      const aValue = a[orderBy];
      const bValue = b[orderBy];

      if (aValue == null) return 1;
      if (bValue == null) return -1;

      if (aValue < bValue) return order === "asc" ? -1 : 1;
      if (aValue > bValue) return order === "asc" ? 1 : -1;
      return 0;
    });
  }, [rows, order, orderBy]);

  return (
    <TableContainer component={Paper} sx={styles.tableContainer(borderRadius)}>
      <Table size={size} stickyHeader={stickyHeader}>
        <TableHead>
          <TableRow>
            {columns.map((column) => (
              <TableCell
                key={column.id as string}
                align={column.align || "left"}
                sx={styles.headerCell(
                  headerBgColor,
                  borderRadius,
                  column.minWidth,
                )}
              >
                {column.sortable ? (
                  <Box
                    sx={styles.sortableHeaderContainer}
                    onClick={() => handleSort(column.id as keyof T)}
                  >
                    <Box component="span">{column.label}</Box>

                    <Box sx={styles.sortIndicatorContainer}>
                      <Box
                        sx={{
                          ...styles.azStack,
                          ...(orderBy === column.id
                            ? styles.azStackActive(order)
                            : {}),
                        }}
                      >
                        <Box component="span">A</Box>
                        <Box component="span">Z</Box>
                      </Box>

                      {orderBy === column.id ? (
                        order === "asc" ? (
                          <ArrowUpwardIcon sx={styles.arrowIcon} />
                        ) : (
                          <ArrowDownwardIcon sx={styles.arrowIcon} />
                        )
                      ) : (
                        <ArrowUpwardIcon
                          sx={{ ...styles.arrowIcon, color: "#999" }}
                        />
                      )}
                    </Box>
                  </Box>
                ) : (
                  column.label
                )}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>

        <TableBody>
          {sortedRows.map((row) => (
            <TableRow
              key={keyExtractor(row)}
              hover={rowHover}
              onClick={() => onRowClick?.(row)}
              sx={styles.bodyRow(Boolean(onRowClick))}
            >
              {columns.map((column) => {
                const value =
                  column.id in row ? row[column.id as keyof T] : null;
                return (
                  <TableCell
                    key={column.id as string}
                    align={column.align || "left"}
                    sx={column.cellStyle}
                  >
                    {column.format ? column.format(value, row) : value}
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
