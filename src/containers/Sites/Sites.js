import React from "react";
// import PropTypes from "prop-types";

const Sites = (props) => {
  return (
    <section className="container">
      <div className="header bg-primary text-light text-center py-5 rounded">
        <h1 className="display-3 mt-1">Sites</h1>
      </div>
      <div className="content mt-5">
        <div className="item row mt-4">
          <div className="item-title col-12">
            <span className="text-secondary">Component:</span>
            <h1 className="font-weight-bold display-4 text-dark">
              Water Quality - Indicators
            </h1>
          </div>
          <div className="item-content card col-lg-10 pt-2">
            <input
              className="form-control"
              id="myInput"
              type="text"
              placeholder="Search.."
            />
            <br />
            <table className="table table-responsive-sm table-hover mt-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Indicator Name</th>
                  <th colSpan={2}>Indicator - description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-1">1</td>
                  <td className="col-4">Mark</td>
                  <td className="col-6">Otto</td>
                  <td className="col-1">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-4"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="col-1">2</td>
                  <td className="col-4">Job</td>
                  <td className="col-6">Thornton</td>
                  <td className="col-1">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-4"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
        <div className="item row mt-4">
          <div className="item-title col-12">
            <span className="text-secondary">Component:</span>
            <h1 className="font-weight-bold display-4 text-dark">
              Wetland Management - Indicators
            </h1>
          </div>
          <div className="item-content card col-lg-10 pt-2">
            <input
              className="form-control"
              id="myInput"
              type="text"
              placeholder="Search.."
            />
            <br />
            <table className="table table-responsive-sm table-hover mt-2">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Indicator Name</th>
                  <th colSpan={2}>Indicator - description</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="col-1">1</td>
                  <td className="col-4">Mark</td>
                  <td className="col-6">Otto</td>
                  <td className="col-1">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-4"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
                <tr>
                  <td className="col-1">2</td>
                  <td className="col-4">Job</td>
                  <td className="col-6">Thornton</td>
                  <td className="col-1">
                    <button
                      type="button"
                      className="btn btn-primary btn-sm px-4"
                    >
                      Edit
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};

Sites.propTypes = {};

export default Sites;
