import React from "react";
// import PropTypes from 'prop-types'

const AddManualy = (props) => {
  return (
    <div className="container  text-center">
      <br />
      <h3 className="text-secondary font-weight-bold">Insert data</h3>
      <div className="table-responsive">
        <table className="table table-bordered">
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
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
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
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
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
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
                  className="form-control form-control-sm"
                  id="indicator1"
                />
              </td>
              <td>
                <input
                  type="text"
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
                  Save data
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    </div>
  );
};

AddManualy.propTypes = {};

export default AddManualy;
