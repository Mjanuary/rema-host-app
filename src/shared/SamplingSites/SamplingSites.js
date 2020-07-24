import React, { useState } from "react";
import SearchData from "../../utils/search";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const IndicatorSelctor = ({
  indicators,
  selected_samplingSite,
  setSelected_samplingSite,
  catchment_site_district,
}) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(catchment_site_district);

  // check /uncheck indicator
  const checkIndicator = (indicator) => {
    // check if indicator exist
    let exists = selected_samplingSite.find(
      (item) =>
        item.sampling_site_id === catchment_site_district.sampling_site_id
    );

    if (exists === undefined) {
      // insert into selected
      setSelected_samplingSite([...selected_samplingSite, indicator]);
    } else {
      // remove into the list
      setSelected_samplingSite(
        selected_samplingSite.filter(
          (item) =>
            item.sampling_site_id !== catchment_site_district.sampling_site_id
        )
      );
    }
  };

  return (
    <div
      className="card shadow-sm mt-0 border-bottom"
      style={{ height: "250px" }}
    >
      <div className="card-header p-2 bg-primary">
        <b className="font-weight-bold text-white">Sampling sites</b>{" "}
        <span className="badge bg-primary text-white">
          {selected_samplingSite.length}/{catchment_site_district.length}
        </span>
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
                SearchData(catchment_site_district, e.target.value, {
                  sampling_site_name: true,
                })
              );
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col  mx-0 px-0 pl-1">
          {catchment_site_district.length === selected_samplingSite.length ? (
            <button
              className="btn btn-sm btn-secondary btn-block"
              onClick={() => setSelected_samplingSite([])}
            >
              Uncheck all
            </button>
          ) : (
            <button
              className="btn btn-sm btn-secondary btn-block"
              onClick={() => setSelected_samplingSite(catchment_site_district)}
            >
              Check all
            </button>
          )}
        </div>
      </div>
      <div className="card-body overflow-auto mx-height">
        <ul className="list-group list-group-flush mb-3">
          {results.length <= 0 ? (
            <li className="list-group-item py-4">No results found!</li>
          ) : (
            results.map((item) => {
              let exists = selected_samplingSite.find(
                (x) => x.sampling_site_id === item.sampling_site_id
              );
              return (
                <li
                  className={`list-group-item p-1 ${
                    exists !== undefined ? "bg-primary-selected" : ""
                  }`}
                  onClick={() => checkIndicator(item)}
                  key={item.sampling_site_id}
                >
                  <div className="pl-3">
                    {exists === undefined ? (
                      <MdCheckBoxOutlineBlank className="text-secondary checkbox-icon-list pr-2 zoomIn animated faster" />
                    ) : (
                      <MdCheckBox className="text-primary  checkbox-icon-list pr-2 zoomIn animated faster" />
                    )}
                    {item.sampling_site_name}
                  </div>
                  <div className="pl-4" style={{ fontSize: "1rem" }}>
                    <div className="ml-1 badge bg-info text-white">
                      {item.catchment_name}
                    </div>
                  </div>
                </li>
              );
            })
          )}
        </ul>
      </div>
    </div>
  );
};

export default IndicatorSelctor;
