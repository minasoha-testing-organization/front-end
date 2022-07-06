import React from "react";
import { Container } from "@mui/system";
import { CircularProgress } from "@mui/material";

export const TextData = ({ text, loading }) => {
 if (loading) {
  return <CircularProgress />;
 }

 return (
  <Container
   style={{
    display: "flex",
    backgroundColor: "gray",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "left",
    flexDirection: "column",
    borderRadius: "5px",
    border: "1px solid black",
   }}>
   {text.map((line, index) => (
    <p key={index}>{line || <br />}</p>
   ))}
  </Container>
 );
};
