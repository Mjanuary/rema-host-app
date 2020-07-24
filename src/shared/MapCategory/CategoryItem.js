import React from "react";
import PropTypes from "prop-types";

const CategoryItem = (props) => {
  const { categoryId, categoryName } = props;
  return <option value={categoryId}>{categoryName}</option>;
};

CategoryItem.propTypes = {
  categoryId: PropTypes.string.isRequired,
  categoryName: PropTypes.string.isRequired,
};

CategoryItem.defaultProps = {
  categoryId: "",
  categoryName: "",
};

export default CategoryItem;
