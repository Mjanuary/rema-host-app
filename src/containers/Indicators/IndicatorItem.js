import React, { useState } from "react";
import PropTypes from "prop-types";
import searchData from "../../utils/search";

const IndicatorItem = ({ data }) => {
  const [search, setSearch] = useState("");
  console.log(data);
  return (
    <div className="item row mt-4">
      <div className="item-title col-12">
        <span className="text-secondary">Component:</span>
        <h1 className="font-weight-bold display-4 text-dark">
          {data.comp_name}
        </h1>
      </div>
      <div className="item-content card col-lg-10 pt-2">
        <input
          className="form-control"
          id="myInput"
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search.."
        />
        <br />

        <table className="table table-responsive-sm table-hover mt-2">
          <thead>
            <tr>
              <th>#</th>
              <th>Indicator Name</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.indicators === undefined ? (
              <h1>the ondicators are not available</h1>
            ) : data.indicators.length > 0 ? (
              searchData(data.indicators, search, {
                indicator_name: true,
              }).map((item, i) => (
                <tr key={item.indicator_id}>
                  <td>{i + 1}</td>
                  <td>{item.indicator_name}</td>
                  <td className="text-right">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-4"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr colSpan={3}>
                <td className="p-3 text-center">
                  <h2 className="text-center text-secondary">
                    No indicators found!
                  </h2>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

IndicatorItem.propTypes = {
  data: PropTypes.object.isRequired,
};

export default IndicatorItem;
