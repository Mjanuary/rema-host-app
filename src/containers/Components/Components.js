import React, { Component } from "react";
import { Link } from "react-router-dom";
// import PropTypes from "prop-types";
import axios from "axios";
import { API_URL, CONFIG } from "../../utils/api";
import { connect } from "react-redux";
import setAuthToken from "../../utils/setAuthToken";

class Components extends Component {
  // static propTypes = {
  //   prop: PropTypes,
  // };

  state = {
    loading: false,
    components: [],
    error: false,
  };

  // load components
  loadComponetns = async () => {
    try {
      this.setState({ loading: true, error: false });
      setAuthToken();
      const res = await axios.get(`${API_URL}/component`, CONFIG);
      this.setState({
        loading: false,
        components: res.data.data,
        error: false,
      });
    } catch (error) {
      this.setState({ error: true });
    }
  };

  componentDidMount = () => {
    this.loadComponetns();
  };

  render() {
    if (this.state.loading === true) {
      return (
        <div className="container p-5 text-center">
          <div className="spinner-border text-primary" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      );
    }

    if (this.state.error === true) {
      return (
        <div className="container p-5 text-center">
          <div className="alert alert-danger">
            Something went wrong, please try again later
          </div>
        </div>
      );
    }

    return (
      <div className="container">
        {/* Components summary start */}
        <div className="row">
          <div className="col-md-12 mt-n4">
            <div className="card text-white bg-primary col-md-12 mt-3 mb-5 mt-5">
              <div className="card-body p-2">
                <div className="row">
                  <div className="col-md-8">
                    <h1 className=" text-light mb-3">Components</h1>
                    <Link
                      to="/component/create"
                      className="btn btn-info btn-lg btn-outline-light"
                    >
                      Create new component
                    </Link>
                  </div>
                  <div className="col-md-2">
                    <div className="row">
                      <h5>Reports data</h5>
                    </div>
                    <div className="row">
                      <h1 className="display-1">
                        <b>14</b>
                      </h1>
                    </div>
                  </div>
                  <div className="col-md-2">
                    <div className="row">
                      <h5>Components</h5>
                    </div>
                    <div className="row">
                      <h1 className="display-1">
                        <b>02</b>
                      </h1>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Components summary end */}
        {/* Components list start */}
        <div className="row mb-0">
          <div className="col-md-8">
            <h4 className="ml-5 mb-0">Component name</h4>
          </div>
          <div className="col-md-4">
            <h4 className="mb-0">Reports</h4>
          </div>
        </div>
        <hr />

        <div className="row">
          <div className="col-md-12">
            {this.state.components.map((item) => (
              <div key={item.component_id} className="card p-2 mb-3 shadow-sm">
                <div className="row">
                  <div className="col-md-8 border-right border-secondary align-baseline">
                    <h1 className="h3 font-weight-normal align-self-auto">
                      {item.comp_name}
                    </h1>
                  </div>
                  <div className="col-md-2">
                    <h1 className="h3 mt-2 font-weight-bold ml-3">24</h1>
                  </div>
                  <div className="col-md-2">
                    <Link
                      to={`/component/${item.component_id}`}
                      className="btn btn-primary mr-3 float-right"
                    >
                      View details
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Components list end */}
      </div>
    );
  }
}

export default connect(null, {})(Components);
