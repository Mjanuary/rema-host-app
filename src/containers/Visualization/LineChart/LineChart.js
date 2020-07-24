import React, { useState } from "react";
import Chart from "./Chart";
// import { useEffect } from "react";
import { STRING_SLICE, DATE } from "../../../utils/tools";

const BarChart = (props) => {
  const [accademicYears, setaccademicYears] = useState([]);
  const [indicatorsList, setindicatorsList] = useState([]);
  const [select, setSelect] = useState("");

  const RendeValuesChart = (position) => {
    let accademicYearsArray = [];
    let indicatorsListArray = [];

    props.data.reportData.forEach((element) => {
      accademicYearsArray.push(
        STRING_SLICE(
          `${DATE(element.report_details.report_date)}  - ${
            element.report_details.report_title
          }`,
          28
        )
      );

      element.data.forEach((el) => {
        // console.log("+++> ", el);
        // insert the indicator into the array
        let exists = indicatorsListArray.find(
          (key) => key.indicator_id === el.indicator_id
        );
        let info = el.data[position];

        if (exists === undefined) {
          // push data into the array
          indicatorsListArray.push({
            indicator_id: el.indicator_id,
            name: el.indicator_name,
            data: [info],
          });
        } else {
          // update the data
          indicatorsListArray = indicatorsListArray.map((itm) =>
            itm.indicator_id === el.indicator_id
              ? { ...itm, data: [...itm.data, info] }
              : itm
          );
        }
      });
    });

    // console.log("wewe => ", accademicYearsArray);

    setaccademicYears(accademicYearsArray);
    setindicatorsList(indicatorsListArray);
  };

  // useEffect(() => {
  //   RendeValuesChart(select);

  // }, [RendeValuesChart, select]);

  const { samplingSites } = props;

  return (
    <div>
      <div className="p-4 mb-n1 border-bottom bg-light">
        <div className="row">
          <div className="col"></div>
          <div className="col-7">
            <div className="input-group input-group-sm">
              <div className="input-group-prepend">
                <div className="input-group-text">Sampling sites</div>
              </div>
              <select
                value={select}
                onChange={(e) => {
                  setSelect(e.target.value);
                  RendeValuesChart(e.target.value);
                }}
                className="form-control form-control-sm"
                id=""
              >
                <option value={""}>Select Sampling sites</option>
                {samplingSites.map((item, i) => (
                  <option key={item.sampling_site_id} value={i}>
                    {item.sampling_site_name}
                  </option>
                ))}
              </select>
            </div>
          </div>
          <div className="col"></div>
          {/* <div className="col">asdasda</div> */}
        </div>

        {select !== "" && (
          <h2 className="m-0 mt-2 text-center font-weight-bold text-primary mb-n2 h1">
            {/* {
              samplingSites.find((item) => item.sampling_site_id === select)
                .sampling_site_name
            } */}
            {samplingSites[select].sampling_site_name}
          </h2>
        )}
      </div>

      <div className="p-4">
        {select !== "" ? (
          <div>
            <Chart categories={accademicYears} series={indicatorsList} />
          </div>
        ) : (
          <div className="bg-white p-4">
            <h1 className="m-4 display-2 p-4 text-center text-secondary">
              Select <br /> Sampling site
            </h1>
          </div>
        )}
      </div>
    </div>
  );
};

export default BarChart;
