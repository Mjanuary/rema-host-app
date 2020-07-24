import React from "react";
import PropTypes from "prop-types";

const Map = (props) => {
  const { graphType, graphCategory, lat, lng, fromDate, toDate } = props;
  return (
    <div className="card">
      <div className="card-header">
        <h5 className="card-title text-primary">
          {graphCategory} from {fromDate} to {toDate}
        </h5>
      </div>
      <div className="card-body">
        <p className="card-text">
          {graphType} === lat: {lat} === long: {lng}
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maxime
          facere nulla ut nihil voluptatum optio. Dolore laudantium, qui
          dignissimos sit iure recusandae placeat velit ipsam molestiae facilis
          laborum tempora nam dolor vitae odio maiores, eligendi provident optio
          magni, perspiciatis itaque nisi? Consequuntur aliquam molestias eum
          vel suscipit sed quod dolore voluptatem sunt. Rem, delectus beatae
          animi pariatur obcaecati alias corrupti tempora repellat, iste
          expedita minus enim numquam esse ipsam explicabo quisquam ex magni
          nisi quaerat doloremque! In voluptas voluptatem ducimus iure libero
          magni adipisci fugiat deserunt, non laudantium. Similique quia tenetur
          odit dolorum ipsum distinctio in quod nobis explicabo non debitis
          corrupti voluptatibus omnis, dolorem ex velit sunt facere. Quidem ea
          at, numquam quod sunt sequi nulla, maiores nisi fugit hic saepe amet
          eius culpa esse perferendis voluptate deserunt dolorem iure delectus
          animi. Nesciunt pariatur vero, soluta, commodi expedita error
          consequatur accusamus ratione maiores quibusdam cum illo, neque quo
          iure!
        </p>
      </div>
    </div>
  );
};

Map.propTypes = {
  graphType: PropTypes.string.isRequired,
  graphTitle: PropTypes.string.isRequired,
  graphCategory: PropTypes.string.isRequired,
  fromDate: PropTypes.string,
  toDate: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

Map.defaultProps = {
  graphType: "",
  graphTitle: "",
  graphCategory: "",
  fromDate: "",
  toDate: "",
  lat: "",
  lng: "",
};

export default Map;
