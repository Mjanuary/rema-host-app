import React from "react";
import PropTypes from "prop-types";

const CatchmentSampling = (props) => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card p-3 mb-3 shadow-sm">
          <div className="row">
            <div className="col-md-12 pl-5 mb-2">
              <h1 className="text-primary">Catchment &amp; Sampling</h1>
              <p>
                You can add the catchment, sampling site, and district by
                checking or unchecking the box in the description
              </p>
            </div>
            <div className="col-md-4 pl-5">
              <label htmlFor="name">Options</label>
              <table className="table ml-2">
                <tbody>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios1"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios1"
                      >
                        &nbsp;Sampling sites
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios2"
                        defaultChecked
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios2"
                      >
                        &nbsp;Catchments
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios3"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios3"
                      >
                        &nbsp;Districts
                      </label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        className="form-check-input"
                        type="checkbox"
                        name="exampleRadios"
                        id="exampleRadios4"
                      />
                      <label
                        className="form-check-label"
                        htmlFor="exampleRadios4"
                      >
                        &nbsp;Coordinates
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="row">
            <div className="col-md-8" />
            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-primary btn-lg pl-5 pr-5 mt-3 mb-3 mr-3 float-right"
              >
                Save &amp; Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

CatchmentSampling.propTypes = {};

export default CatchmentSampling;
