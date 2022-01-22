import * as React from "react";
import { useState } from "react";

export default function Proposal(props) {
 const handleClick = (e) => {
  e.preventDefault();
 };
 return (
  <div>
   <h1 className='title' onClick={handleClick}>
    Mario & Noura
   </h1>
   {itemData.map((item) => (
    <img
     src={`${item.img}?w=248&fit=crop&auto=format`}
     srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
     alt={item.title}
     width='250px'
     height='250px'
     className='pictures zoom'
     onClick={handleClick}
     on
    />
   ))}
  </div>
 );
}

const itemData = [
 { img: "https://i.imgur.com/omNfylG.jpeg" },
 { img: "https://i.imgur.com/lxXd7Qp.jpeg" },
 { img: "https://i.imgur.com/7RCSnID.jpeg" },
 { img: "https://i.imgur.com/m70fE0U.jpeg" },
 { img: "https://i.imgur.com/M1C4HVk.jpeg" },
 { img: "https://i.imgur.com/kPizNA2.jpeg" },
 { img: "https://i.imgur.com/KfkFGpS.jpeg" },
 { img: "https://i.imgur.com/tfHNqx1.jpeg" },
 { img: "https://i.imgur.com/XmBNbUk.jpeg" },
 { img: "https://i.imgur.com/x8tGHj2.jpeg" },
 { img: "https://i.imgur.com/OScIwAK.jpeg" },
 { img: "https://i.imgur.com/EldTOlc.jpeg" },
 { img: "https://i.imgur.com/gTYq7KC.jpeg" },
 { img: "https://i.imgur.com/FNzmouy.jpeg" },
 { img: "https://i.imgur.com/jVYo0Gr.jpeg" },
 { img: "https://i.imgur.com/RgHmtiM.jpeg" },
 { img: "https://i.imgur.com/SAX67LD.jpeg" },
 { img: "https://i.imgur.com/wGhbnsk.jpeg" },
 { img: "https://i.imgur.com/L38vRzF.jpeg" },
 { img: "https://i.imgur.com/JBqEPkY.jpeg" },
 { img: "https://i.imgur.com/s52n63t.jpeg" },
 { img: "https://i.imgur.com/vbaxN0U.jpeg" },
 { img: "https://i.imgur.com/iGcLQYD.jpeg" },
 { img: "https://i.imgur.com/tbU1J07.jpeg" },
 { img: "https://i.imgur.com/fW6Se6C.jpeg" },
 { img: "https://i.imgur.com/eruM5MH.jpeg" },
 { img: "https://i.imgur.com/l3555cF.jpeg" },
 { img: "https://i.imgur.com/KZIFcEV.jpeg" },
 { img: "https://i.imgur.com/7qCNDC8.jpeg" },
 { img: "https://i.imgur.com/0Fb42M8.jpeg" },
 { img: "https://i.imgur.com/LPmEKil.jpeg" },
 { img: "https://i.imgur.com/6FXSHt9.jpeg" },
 { img: "https://i.imgur.com/HdWlPE5.jpeg" },
 { img: "https://i.imgur.com/ZAxvLCA.jpeg" },
 { img: "https://i.imgur.com/iWblEb2.jpeg" },
 { img: "https://i.imgur.com/dXbSl4C.jpeg" },
 { img: "https://i.imgur.com/QaBPFpM.jpeg" },
 { img: "https://i.imgur.com/C7iUDoj.jpeg" },
 { img: "https://i.imgur.com/rlg3DTX.jpeg" },
 { img: "https://i.imgur.com/ZoylrFx.jpeg" },
 { img: "https://i.imgur.com/Hytk70K.jpeg" },
 { img: "https://i.imgur.com/EH4tNeG.jpeg" },
 { img: "https://i.imgur.com/ckWYWb8.jpeg" },
 { img: "https://i.imgur.com/ICNtLpa.jpeg" },
 { img: "https://i.imgur.com/pGqDTRW.jpeg" },
 { img: "https://i.imgur.com/biFdqHy.jpeg" },
 { img: "https://i.imgur.com/5yutxq4.jpeg" },
 { img: "https://i.imgur.com/SU8dgav.jpeg" },
 { img: "https://i.imgur.com/WUnksBy.jpeg" },
 { img: "https://i.imgur.com/ryHx6qY.jpeg" },
 { img: "https://i.imgur.com/oiAccei.jpeg" },
 { img: "https://i.imgur.com/ZJReqZj.jpeg" },
 { img: "https://i.imgur.com/kS70EYG.jpeg" },
 { img: "https://i.imgur.com/Z1QgFWr.jpeg" },
 { img: "https://i.imgur.com/RTqMnYr.jpeg" },
 { img: "https://i.imgur.com/3HeiATA.jpeg" },
 { img: "https://i.imgur.com/Kboyhyv.jpeg" },
];
