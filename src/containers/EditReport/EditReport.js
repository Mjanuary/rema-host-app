import React from "react";
// import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { MdArrowBack } from "react-icons/md";

export const EditReport = (props) => {
  return (
    <div className="container  text-center">
      <div className="container mt-2 bg-light px-1 pt-3 pb-2 mt-2 rounded bordered">
        <div className="container header text-dark d-flex flex-row">
          <Link
            to="#"
            className="text-primary h1  mr-n2 text-light align-self-center"
          >
            <MdArrowBack className="text-primary" />
          </Link>

          <div className="header ml-3">
            <h1 className=" text-primary h2">Edit Data</h1>
            <h1 className="text-secondary h4 mt-n2">05 May 2020</h1>
          </div>
        </div>
      </div>
      <br />
      <h3 className="text-secondary font-weight-bold">Update data</h3>
      <div className="table-responsive">
        <table className="table table-bordered bg-white">
          <thead>
            <tr>
              <th>#</th>
              <th />
              <th>COND.</th>
              <th>TDS</th>
              <th>D.O</th>
              <th>Country</th>
              <th>PH</th>
              <th>TEMP.</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>MUKUNGWA AFTER GICIYE</td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>MUHAZI UPSTREAM</td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
            </tr>
            <tr>
              <td>3</td>
              <td>MUGESERA LAC</td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  value="24.65"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colSpan={8}>
                <button
                  type="button"
                  className="btn btn-primary btn-lg float-right"
                >
                  Update data
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

export default EditReport;
