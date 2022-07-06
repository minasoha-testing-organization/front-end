import React from "react";
import { Stack, Pagination } from "@mui/material";

export const PaginationMaker = ({ totalPages, paginate }) => {
 const pageNumbers = [];
 for (let i = 1; i <= totalPages; i++) {
  pageNumbers.push(i);
 }
 return (
  <Stack spacing={2}>
   <Pagination
    count={totalPages}
    style={{
     display: "flex",
     justifyContent: "center",
     alignItems: "center",
     paddingTop: "5px",
    }}
    onChange={(event, value) => paginate(value)}
    color='primary'
    variant='outlined'
   />
  </Stack>
 );
};
