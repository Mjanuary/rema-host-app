import React, { Component } from "react";
// import PropTypes from 'prop-types'

import Progress from "./Progress/Progress";
// import NamesDetails from "./Steps/NamesDetails";
// import CatchmentSampling from "./Steps/CatchmentSampling";
// import SamplingSiteList from "./Steps/SamplingSiteList";
import IndicatorList from "./Steps/IndicatorList";
// import Complete from "./Steps/Complete";

export default class CreateComponent extends Component {
  // static propTypes = {
  //     prop: PropTypes
  // }

  render() {
    return (
      <div className="container">
        <Progress />

        {/* Components list start */}

        {/* <NamesDetails /> */}
        {/* <CatchmentSampling /> */}
        {/* <SamplingSiteList /> */}
        <IndicatorList />
        {/* <Complete /> */}
      </div>
    );
  }
}
