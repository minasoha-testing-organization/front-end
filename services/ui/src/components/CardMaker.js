import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

export default function CardMaker({ character }) {
 return (
  <div>
   <Card sx={{ minWidth: 150, minHeight: 150 }}>
    <CardContent>
     <Typography variant='h5' component='div'>
      {character.name}
     </Typography>
     <Typography variant='body2'>{character.description}</Typography>
    </CardContent>
   </Card>
  </div>
 );
}
