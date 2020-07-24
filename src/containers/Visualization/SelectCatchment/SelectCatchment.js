import React, { useState, useEffect, Fragment } from "react";
// import PropTypes from "prop-types";
import SearchData from "../../../utils/search";

const SelectCatchment = ({
  // selected_indicators,
  selectedCatchment,
  catchment_site_district,
  close,
  catchment,
}) => {
  const [search, setSearch] = useState("");
  const [Data, setData] = useState([]);
  const [results, setResults] = useState([]);

  // didmount
  useEffect(() => {
    // filter the catchments only
    let Filtered = [];
    if (catchment_site_district.length > 0) {
      catchment_site_district.forEach((element) => {
        let exists = Filtered.find(
          (key) => key.catchment_id === element.catchment_id
        );
        if (exists === undefined) {
          Filtered.push({
            catchment_id: element.catchment_id,
            catchment_name: element.catchment_name,
          });
        }
      });
      setData(Filtered);
      setResults(Filtered);
    }
  }, [catchment_site_district]);

  return (
    <div className="card shadow-sm mt-3" style={{ height: "300px" }}>
      <div className="card-header p-2 bg-success">
        <b className="font-weight-bold text-white">Select Catchment</b>{" "}
      </div>
      <div className="row mx-0 p-1 border-bottom bg-light">
        <div className="col-7 mx-0 px-0">
          <input
            type="search"
            className="form-control form-control-sm"
            name={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setResults(
                SearchData(Data, e.target.value, { catchment_name: true })
              );
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col  mx-0 px-0 pl-1">
          <button
            className="btn btn-sm btn-secondary btn-block"
            onClick={() =>
              selectedCatchment({ catchment_name: "", catchment_id: null })
            }
          >
            Check all
          </button>
        </div>
      </div>
      <div className="card-body overflow-auto mx-height m-0 p-0">
        <ul className="list-group list-group-flush m-0 p-0 mb-3">
          {results.length <= 0 ? (
            <li className="list-group-item py-4">No results found!</li>
          ) : (
            results.map((item) => (
              <Fragment key={item.catchment_id}>
                {item.catchment_id === catchment.catchment_id ? (
                  <li
                    className={`list-group-item bg-primary-selected p-1 border-bottom cursor-pointer`}
                    onClick={() => close()}
                    key={item.catchment_id}
                  >
                    <div className="pl-0">
                      <h4 className="m-0 px-3 font-weight-bolder py-2">
                        {item.catchment_name}
                      </h4>
                    </div>
                  </li>
                ) : (
                  <li
                    className={`list-group-item p-1 border-bottom cursor-pointer`}
                    onClick={() => {
                      selectedCatchment({ ...item });
                    }}
                    key={item.catchment_id}
                  >
                    <div className="pl-0">
                      <h4 className="m-0 px-3 py-2">{item.catchment_name}</h4>
                    </div>
                  </li>
                )}
              </Fragment>
            ))
          )}
        </ul>
      </div>
    </div>
  );
};

// SelectCatchment.propTypes = {};

export default SelectCatchment;
