import React from "react";
import PropTypes from "prop-types";

const CategoryContent = (props) => {
  const { contentId, contentName } = props;
  return (
    <li className="list-group-item">
      <div className="form-check">
        <input
          className="form-check-input"
          type="checkbox"
          id="defaultCheck1"
          value={contentId}
        />
        <label className="form-check-label" htmlFor="defaultCheck1">
          {contentName}
        </label>
      </div>
    </li>
  );
};

CategoryContent.propTypes = {
  contentId: PropTypes.string.isRequired,
  contentName: PropTypes.string.isRequired,
};

CategoryContent.defaultProps = {
  contentId: "",
  contentName: "",
};

export default CategoryContent;
