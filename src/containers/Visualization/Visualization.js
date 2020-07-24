import React, { Component } from "react";
import PropTypes from "prop-types";
import SamplingSites from "../../shared/SamplingSites/SamplingSites";
// import DistrictsVisualisations from "../../shared/DistrictsVisualisations/DistrictsVisualisations";
// import CatchmentVisualisation from "../../shared/CatchmentVisualisation/CatchmentVisualisation";
import IndicatorSelctor from "../../shared/Indicator/IndicatorSelector";
// import Map from "../../shared/Map/Map";
import TableData from "../../shared/TableData/TableData";
import Photos from "../../shared/Photos/Photos";
import Loading from "../../components/Loading/Loading";
import { connect } from "react-redux";
import Backdrop from "../../components/BackDrop/BackDrop";
// actions
import { loadComponentDetails } from "../../actions/component";
import {
  loadVisualisationItems,
  loadVisualisationData,
} from "../../actions/visualisation";
import "./Visualization.css";
import BarChart from "./BarChart/BarChart";
import LineChart from "./LineChart/LineChart";
import {
  MdInsertChart,
  MdPoll,
  MdCallMade,
  MdGridOn,
  MdImage,
  MdMap,
} from "react-icons/md";
import { Fragment } from "react";
//
import SelectCatchment from "./SelectCatchment/SelectCatchment";

class Visualization extends Component {
  state = {
    loading: true,
    error: false,
    selected_indicators: [],
    allSamplingSites: [],
    selected_samplingSite: [],
    selected_catchments: [],
    selected_districts: [],
    district: {
      district: null,
      district_name: "",
    },
    catchment: {
      catchment_name: "",
      catchment_id: null,
    },
    selected: "sampling",
    selected_tab: "bar",
    changed: false,
    selectCatchment: false,
    selectDistrict: false,
    loadingData: false,
    dataLoaded: false,
  };

  componentDidMount = () => {
    // check of there (component is loaded)
    const component_id = this.props.match.params.componentId;

    this.props.loadVisualisationItems(component_id, (state) => {
      if (state) {
        this.setState({
          loading: false,
          error: false,
          allSamplingSites: this.props.visualisation.catchment_site_district,
        });
      } else {
        this.setState({
          loading: false,
          error: true,
        });
      }
    });
  };

  submitDatas = () => {
    this.setState({
      loadingData: true,
      dataLoaded: false,
    });
    this.props.loadVisualisationData(
      this.props.match.params.componentId,
      {
        catchment_site_district: this.state.selected_samplingSite,
        indicators: this.state.selected_indicators,
      },
      (status) => {
        if (status) {
          this.setState({
            loadingData: true,
            dataLoaded: true,
          });
        } else {
          this.setState({
            loadingData: false,
            dataLoaded: false,
          });
        }
        // console.log();
        console.log({
          catchment_site_district: this.state.selected_samplingSite,
          indicators: this.state.selected_indicators,
        });
      }
    );
  };

  /**
   * render the chart depend on the data
   */
  loadCharts = () => {
    if (this.state.selected_tab === "bar") {
      return <BarChart data={this.props.visualisation.data} />;
    } else if (this.state.selected_tab === "line") {
      return (
        <LineChart
          data={this.props.visualisation.data}
          samplingSites={this.state.selected_samplingSite}
        />
      );
    } else if (this.state.selected_tab === "images") {
      return <Photos />;
    } else if (this.state.selected_tab === "maps") {
      return <Photos />;
    } else if (this.state.selected_tab === "table") {
      return <TableData />;
    } else {
      return <div>this is the other charts</div>;
    }
  };

  // chenge the samplingSItes
  renderSamplingSites = (id) => {
    console.log("this is good...");

    if (id === null) {
      return this.props.visualisation.catchment_site_district;
    } else {
      return this.props.visualisation.catchment_site_district.filter(
        (item) => item.catchment_id === id
      );
    }
  };

  // select catchment
  selectedCatchment = (data) => {
    console.log({ selectedCatchment: data });
    this.setState({
      selectCatchment: false,
      catchment: data,
      allSamplingSites: this.renderSamplingSites(data.catchment_id),
      selected_samplingSite: [],
    });
  };

  render() {
    if (this.state.loading === true) {
      return <Loading />;
    }
    // return <div>this is to</div>;

    const {
      indicators,
      component_details,
      catchment_site_district,
    } = this.props.visualisation;

    return (
      <Fragment>
        <section className="container-fluid pt-3 pb-1">
          <div className="row">
            <div className="col-md-3">
              <h6 className="text-secondary">Component name</h6>
              <h5 className="mt-n2 mb-n1 font-weight-bold text-primar">
                {component_details.comp_name}
              </h5>

              {/* select district values */}
              <div className="bg-white my-3 rounded shadow-sm border">
                <div className="border-bottom pb-1 pr-2 pt-2">
                  <div className="row mx-0">
                    <div
                      className="col-10 text-secondary cursor-pointer"
                      onClick={() => this.setState({ selectCatchment: true })}
                    >
                      Catchments:
                      <h5 className="text-primary m-0 font-weight-bold">
                        {this.state.catchment.catchment_id === null
                          ? "All Catchment"
                          : this.state.catchment.catchment_name}
                      </h5>
                    </div>
                  </div>
                </div>
                {/* districts */}
                <div className="border-down pt-1 pr-2 pb-2 zoomIn animated faster">
                  <div className="row mx-0">
                    <div
                      className="col-10 text-secondary cursor-pointer"
                      onClick={() => this.setState({ selectDistrict: true })}
                    >
                      District:
                      <h5 className="text-primary m-0 font-weight-bold">
                        All Districts
                      </h5>
                    </div>
                  </div>
                </div>
              </div>

              {/* SIMPLING SITES */}
              {this.state.selected_tab !== "line" &&
                this.state.selectCatchment === false && (
                  <div className="card-body zoomIn animated faster delay-1ms p-0 overflow-auto">
                    <SamplingSites
                      indicators={[]}
                      catchment_site_district={this.state.allSamplingSites}
                      selected_samplingSite={this.state.selected_samplingSite}
                      setSelected_samplingSite={(samplingSites) =>
                        this.setState({
                          selected_samplingSite: samplingSites,
                          changed: true,
                        })
                      }
                    />
                  </div>
                )}

              {/* INDICATORS */}
              {this.state.selectCatchment === false && (
                <IndicatorSelctor
                  indicators={indicators}
                  selected_indicators={this.state.selected_indicators}
                  setSelected_indicators={(indicators) =>
                    this.setState({ selected_indicators: indicators })
                  }
                />
              )}

              <div className="mt-3 mb-4 bounceIn animated delay-4ms">
                <button
                  className="btn btn-lg btn-success btn-block shadow-lg"
                  onClick={this.submitDatas}
                >
                  Apply Change
                </button>
              </div>
            </div>

            <div className="col-md-9 p-0 pr-1 delay-6ms fadeIn animated">
              {this.state.dataLoaded === false ? (
                <div className="bg-light p-4 border rounded text-center">
                  <div className="py-4 my-4">
                    {this.state.loadingData !== true ? (
                      <div className="zoomIn animated">
                        <MdInsertChart
                          className="text-secondary mt-3 mb-2"
                          style={{ fontSize: "15rem" }}
                        />
                        <h1 className="text-secondary">
                          Select Sampling sites & Indicators
                        </h1>
                        <p className="mt-2 text-secondary">
                          In order to see the graphs, you need to select the
                          sample sites <br /> and the indicators and click Apply
                          changes.
                        </p>
                      </div>
                    ) : (
                      <div>
                        <MdInsertChart
                          className="text-secondary mt-3 mb-n5"
                          style={{ fontSize: "15rem" }}
                        />
                        <Loading />
                        <h4 className="mt-n4 text-primary">
                          Loading charts...
                        </h4>
                      </div>
                    )}
                  </div>
                </div>
              ) : (
                <Fragment>
                  <div className="zoomIn animated faster">
                    <ul className="nav nav-tabs text-primary">
                      <li className="nav-item cursor-pointer">
                        <b
                          className={`nav-link ${
                            this.state.selected_tab === "bar" ? "active" : ""
                          }`}
                          onClick={() => this.setState({ selected_tab: "bar" })}
                        >
                          <MdPoll /> Bar chart
                        </b>
                      </li>
                      <li className="nav-item cursor-pointer">
                        <b
                          className={`nav-link ${
                            this.state.selected_tab === "line" ? "active" : ""
                          }`}
                          onClick={() =>
                            this.setState({ selected_tab: "line" })
                          }
                        >
                          <MdCallMade /> Line Chart
                        </b>
                      </li>
                      {/* <li className="nav-item cursor-pointer">
                        <b
                          className={`nav-link ${
                            this.state.selected_tab === "gouge" ? "active" : ""
                          }`}
                          onClick={() =>
                            this.setState({ selected_tab: "gouge" })
                          }
                        >
                          Gouge Chart
                        </b>
                      </li> */}
                      <li className="nav-item cursor-pointer">
                        <b
                          className={`nav-link ${
                            this.state.selected_tab === "table" ? "active" : ""
                          }`}
                          onClick={() =>
                            this.setState({ selected_tab: "table" })
                          }
                        >
                          <MdGridOn /> Table Data
                        </b>
                      </li>
                      <li className="nav-item cursor-pointer">
                        <b
                          className={`nav-link ${
                            this.state.selected_tab === "images" ? "active" : ""
                          }`}
                          onClick={() =>
                            this.setState({ selected_tab: "images" })
                          }
                        >
                          <MdImage /> Images
                        </b>
                      </li>
                      <li className="nav-item cursor-pointer">
                        <b
                          className={`nav-link ${
                            this.state.selected_tab === "maps" ? "active" : ""
                          }`}
                          onClick={() =>
                            this.setState({ selected_tab: "maps" })
                          }
                        >
                          <MdMap /> Maps
                        </b>
                      </li>
                    </ul>

                    <div className="bg-white border-right border-left border-bottom">
                      {this.loadCharts()}
                    </div>
                    <br />
                  </div>
                </Fragment>
              )}

              {/* <TableData /> */}

              {/* lorem */}
            </div>
          </div>
        </section>

        {this.state.selectCatchment === true && (
          <Fragment>
            <Backdrop close={() => this.setState({ selectCatchment: false })} />
            <div className="pop-div-select zoomIn animated faster">
              <SelectCatchment
                catchment_site_district={catchment_site_district}
                selectedCatchment={this.selectedCatchment}
                close={() => this.setState({ selectCatchment: false })}
                catchment={this.state.catchment}
              />
            </div>
          </Fragment>
        )}
      </Fragment>
    );
  }
}

Visualization.propTypes = {
  component: PropTypes.object,
  loadComponentDetails: PropTypes.func.isRequired,
  loadVisualisationItems: PropTypes.func,
  loadVisualisationData: PropTypes.func,
};

const mapStateToProps = (state) => ({
  component: state.component,
  visualisation: state.visualisation,
});

export default connect(mapStateToProps, {
  loadComponentDetails,
  loadVisualisationItems,
  loadVisualisationData,
})(Visualization);
