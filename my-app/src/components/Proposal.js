import React, { useCallback, useState } from 'react'
import { Controlled as ControlledZoom } from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'
import beforeWedding from "./../data";
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
      <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
        {beforeWedding.map((img) => {
          console.log(img);
          return <img src={img.img} width="500" onLoad={handleImgLoad} />;
        })}
      </ControlledZoom>
    </div>
  );
}
