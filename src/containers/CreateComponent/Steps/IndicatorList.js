import React, { Fragment, useState } from "react";
// import PropTypes from "prop-types";
import Modal from "../../../components/Modal/Modal";

const SamplingSiteList = (props) => {
  const [modal, setModal] = useState(false);
  return (
    <Fragment>
      <div className="row">
        <div className="col-md-12">
          <div className="card p-3 pt-4 mb-3 shadow-sm">
            <div className="row">
              <div className="col-md-12 pl-5 mb-2">
                <h1 className="text-primary">Indicator list</h1>
                <p>
                  You can add the catchment, sampling site, and district by
                  checking or unchecking the box in the description
                </p>
              </div>
              <div className="col-md-8 pl-5">
                <table className="table table-striper table-hover table-sm text-dark ml-2">
                  <thead>
                    <tr className="table-secondary">
                      <td>
                        <b>#</b>
                      </td>
                      <td>
                        <b>Indicator name</b>
                      </td>
                      <td>
                        <b>Description</b>
                      </td>
                      <td>
                        <b />
                      </td>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>1</td>
                      <td>
                        <a className="text-dark" href>
                          Erosion
                        </a>
                      </td>
                      <td>
                        <a className="text-dark" href>
                          description
                        </a>
                      </td>
                      <td style={{ width: "200px" }} className="text-right">
                        <button className="btn btn-outline-danger info btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>2</td>
                      <td>
                        <a className="text-dark" href>
                          Flood
                        </a>
                      </td>
                      <td>
                        <a className="text-dark" href>
                          description
                        </a>
                      </td>
                      <td style={{ width: "200px" }} className="text-right">
                        <button className="btn btn-outline-danger info btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                    <tr>
                      <td>3</td>
                      <td>
                        <a className="text-dark" href>
                          Eutrophication
                        </a>
                      </td>
                      <td>
                        <a className="text-dark" href>
                          description
                        </a>
                      </td>
                      <td style={{ width: "200px" }} className="text-right">
                        <button className="btn btn-outline-danger info btn-sm">
                          Remove
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <button
                  className="btn btn-outline-primary"
                  onClick={() => setModal(true)}
                >
                  Add sampling
                </button>
              </div>
            </div>
            <div className="row">
              <div className="col-md-8" />
              <div className="col-md-4">
                <button className="btn btn-primary btn-lg pl-5 pr-5 mt-3 mb-3 mr-3 float-right">
                  Save &amp; Continue
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/*========= this is the list ==========*/}

      {modal === true && (
        <Modal
          close={() => setModal(false)}
          backDrop={true}
          closeBackdrop={false}
          theme="primary"
          title="Select sampling site"
        >
          <h3 className="mb-0 m-0 h4 text-center py-3 border-bottom  bg-light text-secondary">
            Add sample site
          </h3>

          <div className="col-md-12">
            <table className="table table-striped table-hover text-dark mr-2 mt-3">
              <thead>
                <tr>
                  <td>
                    <b>#</b>
                  </td>
                  <td>
                    <b>Sampling sites name</b>
                  </td>
                  <td>
                    <b>Sampling sites description</b>
                  </td>
                  <td style={{ width: "170px" }} />
                </tr>
              </thead>
              <tbody>
                {[1, 2, 3, 4, 5].map((item) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>
                      <a className="text-dark" href>
                        UMUSHUMBAMWIZA
                      </a>
                    </td>
                    <td colSpan={2}>
                      <a className="text-dark" href>
                        Description here
                      </a>
                    </td>
                    {/* <td className="text-right">
                      <button className="btn btn-info btn-sm">
                        Edit sampling
                      </button>
                    </td> */}
                  </tr>
                ))}

                <tr>
                  <td>3</td>
                  <td>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Type new sampling here"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      name
                      id
                      placeholder="Type new sampling description here"
                      className="form-control"
                    />
                  </td>
                  <td>
                    <button className="btn btn-success btn-sm">
                      Save new sampling
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Modal>
      )}
    </Fragment>
  );
};

// SamplingSiteList.propTypes = {};

export default SamplingSiteList;
