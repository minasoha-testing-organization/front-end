import React from "react";
import beforeWedding from "./../data";
export default function Proposal() {
  return (
    <div>
      <h3>Proposal Pictures</h3>
      {beforeWedding.map((img) => {
        console.log(img);
        return <img src={img.img} width="500" height="500" />;
      })}
    </div>
  );
}
