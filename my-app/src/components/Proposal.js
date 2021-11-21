import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import beforeWedding from "./../data";
import {Carousel} from 'react-responsive-carousel'
import "react-responsive-carousel/lib/styles/carousel.min.css";
export default function Proposal() {
  const [isZoomed, setIsZoomed] = useState(false)
  const handleImgLoad = useCallback(() => {
    setIsZoomed(true)
  }, [])

  const handleZoomChange = useCallback(shouldZoom => {
    setIsZoomed(shouldZoom)
  }, [])
  return (
    <div>
      <h3>Proposal Pictures</h3>
      <Carousel className="pictures" autoPlay={true} centerSlidePercentage="100" dynamicHeight={true} infiniteLoop={true}>
      {/* <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}> */}
        {beforeWedding.map((img) => {
          console.log(img);
          return <div className="proposalPictures"><img className="pictures" src={img.img} width="500"  /></div>;
        })}

      {/* </ControlledZoom> */}
      </Carousel>
         </div>
         
  );
}
