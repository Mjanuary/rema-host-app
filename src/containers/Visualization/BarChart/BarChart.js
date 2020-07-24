import React, { useState, useEffect } from "react";
import Chart from "./Chart";

const BarChart = (props) => {
  const [report, setReport] = useState(props.data.reports[0].report_id);
  const [series, setSeries] = useState([]);
  const [labels, setLabels] = useState([]);
  const [prepared, setPrepared] = useState(false);

  const PrepareData = (data) => {
    setPrepared(false);
    setSeries(
      props.data.reportData
        .find((item) => item.report_details.report_id === data)
        .data.map((item) => ({
          name: item.indicator_name,
          data: item.data,
        }))
    );
    //

    setLabels(props.data.labels);
    setPrepared(true);
    setReport(data);
  };

  // didmount
  useEffect(() => {
    // setReport(props.data.reports[0].report_id);
    setPrepared(false);
    setSeries(
      props.data.reportData
        .find((item) => item.report_details.report_id === report)
        .data.map((item) => ({
          name: item.indicator_name,
          data: item.data,
        }))
    );
    //
    setLabels(props.data.labels);
    setPrepared(true);
  }, [props.data, report]);

  const { data } = props;

  return (
    <div>
      <div>
        <div className="px-4 py-3 mb-n1 border-bottom bg-light">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <div className="input-group-text">Report</div>
            </div>
            <select
              name=""
              onChange={(e) => PrepareData(e.target.value)}
              className="form-control form-control-lg"
              id=""
            >
              {data.reports.map((item) => (
                <option key={item.report_id} value={item.report_id}>
                  {item.report_name}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* <div className="col">asdasda</div> */}
      </div>
      <br />
      <div className="p-4">
        {prepared === true && <Chart categories={labels} series={series} />}
      </div>
    </div>
  );
};

export default BarChart;
