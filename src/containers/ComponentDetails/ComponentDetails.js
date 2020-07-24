import React, { Component } from "react";
// import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { loadComponentDetails } from "../../actions/component";
import { connect } from "react-redux";
import Loading from "../../components/Loading/Loading";

class ComponentDetails extends Component {
  state = {
    loading: true,
    error: false,
  };

  componentDidMount = () => {
    const component_id = this.props.match.params.componentId;

    this.props.loadComponentDetails(component_id, (load, error) => {
      this.setState({
        loading: load,
        error: error,
      });
    });
  };

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }

    if (this.state.error === true) {
      return (
        <div className="container bg-white mt-4 zoomIn animated faster rounded shadow-sm p-3 text-center">
          <h2 className="text-danger">Network issue!</h2>
          <p className="text-secondary mt-2">
            there was some network issues, please try again later
          </p>
        </div>
      );
    }

    const {
      component,
      report,
      // totalCatchment,
      totalIndicator,
      totalSamplingSite,
      catchment_site_district,
    } = this.props.component;

    return (
      <div className="container ">
        <div className="row mt-5">
          <div className="col-md-6">
            <h1 className="">{component.comp_name}</h1>
            <p className="text-secondary small">{component.comp_descrip}</p>
          </div>
          <div className="col-md-6">
            <div className="btn btn-default  p-2 float-right">
              <Link to="/" className="btn btn-primary pb-0 pl-4 pr-4 m-1">
                <h4 className="mb-0">View</h4>
                <p className="small text-light mb-2">Mode</p>
              </Link>
              <Link
                to={`/edit-component/${component.component_id}`}
                className="btn btn-info pb-0 pl-4 pr-4 m-1"
              >
                <h4 className="mb-0">Edit</h4>
                <p className="small text-light mb-2">Mode</p>
              </Link>
              <Link
                to={`/visualize/${component.component_id}`}
                className="btn btn-info pb-0 pl-4 pr-4 m-1"
              >
                <h4 className="mb-0">Visualize</h4>
                <p className="small text-light mb-2">Mode</p>
              </Link>
            </div>
          </div>
        </div>
        <hr className="mt-0" />
        <div className="row">
          <div className="col-md-7">
            <div className="row">
              <div className="col-md-6">
                <h1>
                  <b>Reports</b>
                </h1>
              </div>
              <div className="col-md-6">
                <Link
                  to="/report/add"
                  className="btn btn-warning float-right mt-3"
                >
                  Add report
                </Link>
              </div>
            </div>
            <div className="row text-secondary small">
              <div className="col-md-5 pl-4 ml-2 pr-0">Report date</div>
              <div className="col-md-6 pl-0">Academic year</div>
            </div>
            <hr className="mt-1 mb-2" />

            {report.length >= 1 ? (
              report.map((rep) => (
                <div
                  key={rep.report_id}
                  className="card shadow-sm p-2 m-0 mb-2"
                >
                  <div className="row pr-3">
                    <div className="col-md-5 m-0">
                      <h5 className="m-0 pt-1">{rep.report_name}</h5>
                    </div>
                    <div className="col-md-2 m-0 pl-2 float-right">
                      <h6 className="m-0 pt-2 text-secondary">
                        <b>{rep.report_date}</b>
                      </h6>
                    </div>
                    <div className="col-md-3 m-0 p-0">
                      <Link
                        to="/viewReport/1"
                        className="btn btn-success float-right mr-2"
                      >
                        View report
                      </Link>
                    </div>
                    <div className="col-md-2 m-0 p-0">
                      <Link to="/report/1" className="btn btn-info float-right">
                        Edit report
                      </Link>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <h1 className="p-5 text-center text-secondary">
                Reports not found!
              </h1>
            )}
          </div>

          <div className="col-md-5">
            <div className="row ml-5">
              <div className="col-md-12 pl-0 text-left">
                <h3 className="text-secondary">General statistics</h3>
                <hr className="mt-3 mb-4" />
              </div>
              <div className="col-md-4 pl-0 text-info">
                <h5 className="mb-0">
                  <b>Reports</b>
                </h5>
                <h1 className="display-3 mt-0">{report.length}</h1>
              </div>
              <div className="col-md-4 pl-0 text-danger">
                <h5 className="mb-0">
                  <b>Indicators</b>
                </h5>
                <h1 className="display-3 mt-0">{totalIndicator}</h1>
              </div>
              <div className="col-md-4 pl-0 text-success">
                <h5 className="mb-0">
                  <b>Sites</b>
                </h5>
                <h1 className="display-3 mt-0">{totalSamplingSite}</h1>
              </div>
              <div className="col-md-12">
                <hr className="mb-3 mt-0" />
              </div>

              {catchment_site_district.length > 0 ? (
                catchment_site_district[0].sampling_site_id !== null ? (
                  <div className="col-md-4 pl-0 text-success">
                    <h5 className="mb-0">
                      <b>Sites</b>
                    </h5>
                    <h1 className="display-3 mt-0">
                      {catchment_site_district.length}
                    </h1>
                  </div>
                ) : null
              ) : null}

              {catchment_site_district.length > 0 ? (
                catchment_site_district[0].catchment_id !== null ? (
                  <div className="col-md-4 pl-0 text-primary">
                    <h5 className="mb-0">
                      <b>Catchments</b>
                    </h5>
                    <h1 className="display-3 mt-0">
                      {catchment_site_district.length}
                    </h1>
                  </div>
                ) : null
              ) : null}

              {catchment_site_district.length > 0 ? (
                catchment_site_district[0].district_id !== null ? (
                  <div className="col-md-4 pl-0 text-info">
                    <h5 className="mb-0">
                      <b>Districts</b>
                    </h5>
                    <h1 className="display-3 mt-0">
                      {catchment_site_district.length}
                    </h1>
                  </div>
                ) : null
              ) : null}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

ComponentDetails.propTypes = {
  loadComponentDetails: PropTypes.func.isRequired,
  component: PropTypes.object.isRequired,
};

const mapPropsToState = (state) => ({
  component: state.component,
});
export default connect(mapPropsToState, { loadComponentDetails })(
  ComponentDetails
);
