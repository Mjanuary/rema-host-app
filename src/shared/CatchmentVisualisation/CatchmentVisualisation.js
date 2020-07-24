import React, { useState } from "react";
import SearchData from "../../utils/search";
import { MdCheckBox, MdCheckBoxOutlineBlank } from "react-icons/md";

const IndicatorSelctor = ({
  indicators,
  selected_indicators,
  setSelected_indicators,
}) => {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState(indicators);

  // check /uncheck indicator
  const checkIndicator = (indicator) => {
    // check if indicator exist
    let exists = selected_indicators.find(
      (item) => item.catchment_id === indicator.catchment_id
    );

    if (exists === undefined) {
      // insert into selected
      setSelected_indicators([...selected_indicators, indicator]);
    } else {
      // remove into the list
      setSelected_indicators(
        selected_indicators.filter(
          (item) => item.catchment_id !== indicator.catchment_id
        )
      );
    }
  };

  return (
    <div className="">
      <div className="bg-warning p-2 text-center text-white">
        Catchments
        <span className="badge bg-primary text-white">
          {selected_indicators.length}/{indicators.length}
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
                SearchData(indicators, e.target.value, { value: true })
              );
            }}
            style={{ width: "100%" }}
          />
        </div>
        <div className="col  mx-0 px-0 pl-1">
          {indicators.length === selected_indicators.length ? (
            <button
              className="btn btn-sm btn-secondary btn-block"
              onClick={() => setSelected_indicators([])}
            >
              Uncheck all
            </button>
          ) : (
            <button
              className="btn btn-sm btn-secondary btn-block"
              onClick={() => setSelected_indicators(indicators)}
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
              let exists = selected_indicators.find(
                (x) => x.catchment_id === item.catchment_id
              );
              return (
                <li
                  className="list-group-item p-1"
                  onClick={() => checkIndicator(item)}
                  key={item.catchment_id}
                >
                  <div className="pl-3">
                    {exists === undefined ? (
                      <MdCheckBoxOutlineBlank className="text-secondary checkbox-icon-list pr-2 zoomIn animated faster" />
                    ) : (
                      <MdCheckBox className="text-primary  checkbox-icon-list pr-2 zoomIn animated faster" />
                    )}

                    {item.value}
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
