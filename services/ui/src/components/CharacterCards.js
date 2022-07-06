import React, { useEffect, useState } from "react";
import CardMaker from "./CardMaker";
import { Grid } from "@mui/material";
import axios from "axios";

export const CharacterCards = () => {
 const [characters, setCharacters] = useState([]);

 useEffect(() => {
  axios.get("http://localhost:3030/characters").then(({ data }) => {
   setCharacters(data);
  });
 }, []);
 return (
  <>
   <h1>Characters</h1>
   <Grid container spacing={4}>
    {characters.map((character, index) => (
     <Grid item xs={12} sm={6} md={4} lg={2} key={index}>
      <CardMaker character={character} />
     </Grid>
    ))}
   </Grid>
  </>
 );
};
