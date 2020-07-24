import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types'
import axios from "axios";
import { API_URL, CONFIG } from "../../utils/api";
import setAuthToken from "../../utils/setAuthToken";
import IndicatorItem from "./IndicatorItem";
import Loading from "../../components/Loading/Loading";

const Indicators = (props) => {
  const [loading, setloading] = useState(true);
  const [error, seterror] = useState(true);
  const [indicators, setIndicators] = useState([]);

  // didmount
  // load components
  const loadIndicators = async () => {
    setloading(true);
    seterror(false);
    try {
      setAuthToken();
      const res = await axios.get(`${API_URL}/indicator`, CONFIG);
      setloading(false);
      setIndicators(res.data.data);
    } catch (error) {
      console.log(error);
      setloading(false);
      seterror(true);
    }
  };

  useEffect(() => {
    console.log("didmount... 33");
    loadIndicators();
  }, []);

  // loading item
  if (loading === true) {
    return <Loading />;
  }

  if (error === true) {
    return (
      <div className="conteiner mt-4 bg-white text center text-danger p-4">
        <h1>Failed to load indicators</h1>
      </div>
    );
  }

  return (
    <section className="container">
      <div className="header bg-primary text-light text-center py-5 rounded">
        <h1 className="display-3 mt-1">Indicators</h1>
      </div>

      <div className="content mt-5">
        {indicators !== null && indicators !== undefined ? (
          indicators.length > 0 ? (
            indicators.map((item) => (
              <IndicatorItem key={item.component_id} data={item} />
            ))
          ) : (
            <h1>No component found </h1>
          )
        ) : (
          <h1>noting found</h1>
        )}
      </div>
    </section>
  );
};

Indicators.propTypes = {};

export default Indicators;
