import React from "react";
// import PropTypes from "prop-types";
import image_1 from "../../assets/maps/Administrative and Geographical Characteristics of NAKU.png";
import image_2 from "../../assets/maps/Existing Soil Control Mechanisms.png";
import image_3 from "../../assets/maps/Flood and Landslide Hazards Risk.png";
import image_4 from "../../assets/maps/Geology.png";
import image_5 from "../../assets/maps/Hydrographic Characteristics.png";
import image_6 from "../../assets/maps/Location of the catchments.png";
// import image_7 from "../../assets/maps/Pollution Hotspots in NAKU.png";
// import image_121212 from "../../assets/image_121212.png";
// import image_121212 from "../../assets/image_121212.png";
// import image_121212 from "../../assets/image_121212.png";
// import image_121212 from "../../assets/image_121212.png";
// import image_121212 from "../../assets/image_121212.png";
// import image_121212 from "../../assets/image_121212.png";
// import image_121212 from "../../assets/image_121212.png";

const Photos = (props) => {
  const Images = [
    {
      id: "1223soeirj23rlijf",
      title: "this is the title od the umages",
      description:
        "this is the non stop of the dta we are workig on and it is verry good",
      src: image_1,
    },
    {
      id: "sfdiu98weqhfnweo80fq",
      title: "this is the title od the umages",
      description:
        "this is the non stop of the dta we are workig on and it is verry good",
      src: image_2,
    },
    {
      id: "alsdjqe89udq83w9ewdq",
      title: "this is the title od the umages",
      description:
        "this is the non stop of the dta we are workig on and it is verry good",
      src: image_3,
    },
    {
      id: "qwiljfqeof79q3ye31232er",
      title: "this is the title od the umages",
      description:
        "this is the non stop of the dta we are workig on and it is verry good",
      src: image_4,
    },
    {
      id: "qwildfdfjfqeof79q3ye31232er",
      title: "this is the title od the umages",
      description:
        "this is the non stop of the dta we are workig on and it is verry good",
      src: image_5,
    },
    {
      id: "qwiljfqdfdfeof79q3ye31232er",
      title: "this is the title od the umages",
      description:
        "this is the non stop of the dta we are workig on and it is verry good",
      src: image_6,
    },
  ];

  return (
    <div className="p-0 bg-white">
      <h1 className="m-0 p-2 bg-primary text-white text-center">Maps</h1>
      <div className="p-2 bg-light">
        <div className="bg-info text-white">
          <h4 className="m-0 p-2 text0primary">
            Report 1 - 2019 - Water Qaulity results of Rema Projects (25 june
            2020)
          </h4>
          <h5 className="m-0 p-2 text0primary">INDOCATOR 2</h5>
        </div>
        <div className="p-2 mb-3">
          {Images.map((image) => (
            <div className="images-container" key={image.id}>
              <div className="bg-white border p-2 rounded shadow-sm">
                <img src={image.src} alt="..." class="img-thumbnail" />
                <h5 className="m-0 text-center">{image.title}</h5>
              </div>
            </div>
          ))}
          <div className="clear-both">thi</div>
        </div>
      </div>

      <div className="p-2 bg-light">
        <div className="bg-info text-white">
          <h4 className="m-0 p-2 text0primary">
            Report 1 - 2019 - Water Qaulity results of Rema Projects (25 june
            2020)
          </h4>
          <h5 className="m-0 p-2 text0primary">INDOCATOR 2</h5>
        </div>
        <div className="p-2 mb-3">
          {Images.map((image) => (
            <div className="images-container" key={image.id}>
              <div className="bg-white border p-2 rounded shadow-sm">
                <img src={image.src} alt="..." class="img-thumbnail" />
                <h5 className="m-0 text-center">{image.title}</h5>
              </div>
            </div>
          ))}
          <div className="clear-both">thi</div>
        </div>
      </div>
    </div>
  );
};

// Photos.propTypes = {};

export default Photos;
