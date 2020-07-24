import React, { useState } from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";
import ImportExcel from "./ImportExcel";
import AddManualy from "./AddManualy";
import AddMaps from "./AddMaps";
import AddImages from "./AddImages";

const AddReport = (props) => {
  const [switchTab, setSwitchTab] = useState("excel");

  const ComponentTap = () => {
    switch (switchTab) {
      case "excel":
        return <ImportExcel />;
      case "manual":
        return <AddManualy />;
      case "maps":
        return <AddMaps />;
      case "images":
        return <AddImages />;
      default:
        return <ImportExcel />;
    }
  };
  return (
    <section className="container px-0">
      <div className="container mt-2 bg-light px-1 pt-3 pb-2 mt-2 rounded bordered">
        <div className="container header text-dark d-flex flex-row">
          <Link
            to="#"
            className="text-primary h1  mr-n2 text-light align-self-center"
          >
            <MdArrowBack className="text-primary" />
          </Link>

          <div className="header ml-3">
            <h1 className=" text-primary h2">Report Data</h1>
            <h1 className="text-secondary h4 mt-n2">Water Quality Data</h1>
          </div>
        </div>
      </div>

      <div className="content mt-3">
        {/* Nav tabs */}
        <ul className="nav nav-tabs justify-content-center" role="tablist">
          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer ${
                switchTab === "excel" ? "active" : ""
              }`}
              onClick={() => setSwitchTab("excel")}
            >
              Upload Excel document
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer ${
                switchTab === "manual" ? "active" : ""
              }`}
              onClick={() => setSwitchTab("manual")}
            >
              Insert data manualy
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer ${
                switchTab === "maps" ? "active" : ""
              }`}
              onClick={() => setSwitchTab("maps")}
            >
              Upload Maps
            </span>
          </li>

          <li className="nav-item">
            <span
              className={`nav-link cursor-pointer ${
                switchTab === "images" ? "active" : ""
              }`}
              onClick={() => setSwitchTab("images")}
            >
              Upload Images
            </span>
          </li>
        </ul>
        {/* Tab panes */}
        <div className="tab-content bg-white rounded shadow-sm">
          {ComponentTap()}
        </div>
      </div>
    </section>
  );
};

AddReport.propTypes = {};

export default AddReport;
