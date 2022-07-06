import React from "react";
import PropTypes from "prop-types";
import { AppBar, Box } from "@mui/material";

export const Layout = ({ children }) => {
 const layoutStyle = {
  display: "flex",
  flexDirection: "column",
  minHeight: "100vh",
  main: {
   flex: 1,
   padding: "1rem",
  },
  ".MuiAppBar-root": {
   padding: "1rem",
  },
  footer: {
   backgroundColor: "#eee",
   padding: "1rem",
   textAlign: "center",
  },
 };

 return (
  <Box sx={layoutStyle}>
   <AppBar position='sticky'>Alice in Wonderland</AppBar>
   <main>{children}</main>
   <Box component='footer'>&copy; {new Date().getFullYear()}</Box>
  </Box>
 );
};

Layout.propTypes = {
 children: PropTypes.node,
};
