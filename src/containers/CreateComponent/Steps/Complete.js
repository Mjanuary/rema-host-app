import React from "react";
import PropTypes from "prop-types";

const Complete = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card pl-0 pr-0 pb-3 pt-4 mb-3 shadow-sm">
          <div className="row">
            <div className="col-md-12 text-center">
              <img src="img/success_icon.png" alt />
              <h3 className="text-success">You have created a new component</h3>
            </div>
          </div>
          <hr />
          <div className="row">
            <div className="col-md-4">
              <a href className="float-right h5">
                Download report template
              </a>
            </div>
            <div className="col-md-4 text-center">
              <a href className="h5">
                Go to the created component
              </a>
            </div>
            <div className="col-md-4">
              <a href className="float-left ml-5 h5 text-danger">
                Close
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Complete.propTypes = {};

export default Complete;
