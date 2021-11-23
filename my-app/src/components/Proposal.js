import React, { useCallback, useState } from "react";
import { Controlled as ControlledZoom } from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import beforeWedding from "./../data";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Zoom from "react-medium-image-zoom";
export default function Proposal() {
  const [isZoomed, setIsZoomed] = useState(false);
  const handleImgLoad = useCallback(() => {
    setIsZoomed(true);
  }, []);

  const handleZoomChange = useCallback((shouldZoom) => {
    setIsZoomed(shouldZoom);
  }, []);
  const handleOnClick = (e) => {};
  return (
    <div>
      <h3>Proposal Pictures</h3>
      <section className="container">
        {/* <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}> */}

        <div className="pic">
          {beforeWedding.map((img) => {
            console.log(img);
            return (
              <div className="pic">
                <Zoom>
                  <img
                    alt="Pictures of Noura's and Mario's proposal"
                    onLoad={handleImgLoad}
                    className="pictures"
                    src={img.img}
                    width="250"
                    height="250"
                  />
                </Zoom>
              </div>
            );
          })}
        </div>

        {/* </ControlledZoom> */}
      </section>

      {/* <Carousel
        className="pictures"
        autoPlay={true}
        centerSlidePercentage="50"
        dynamicHeight={true}
        infiniteLoop={true}
      >
        <ControlledZoom isZoomed={isZoomed} onZoomChange={handleZoomChange}>
          {beforeWedding.map((img) => {
            console.log(img);
            return (
              <div className="proposalPictures">
                <img
                  onLoad={handleImgLoad}
                  className="pictures"
                  src={img.img}
                />
              </div>
            );
          })}
        </ControlledZoom>
      </Carousel> */}
    </div>
  );
}
