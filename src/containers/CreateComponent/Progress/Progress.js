import React from "react";
// import PropTypes from 'prop-types'
import "./Progress.css";

const Progress = () => {
  let step = 2;
  return (
    <div className="container ProgressForm bg-white p-2 mt-2 mb-3 shadow-sm rounded">
      <h3 className="text-center m-0 text-primary">CREATE COMPONENT</h3>
      <div className="formProgressContainer px-3 pt-2">
        {[
          {
            id: 1,
            title: "Name & Description",
          },
          {
            id: 2,
            title: "Set-options",
          },
          {
            id: 3,
            title: "Catch.. & Sampling",
          },
          {
            id: 4,
            title: "Indicators",
          },
          {
            id: 5,
            title: "Complete",
          },
        ].map((item) => (
          <div key={item.id} className="item-container">
            <section className="contents-item-form">
              <div
                className={`pointer-section ${
                  step === item.id ? "border-primary" : ""
                }`}
              >
                <section
                  className={`${
                    step >= item.id ? "bg-success" : "bg-secondary"
                  }`}
                ></section>
              </div>

              <h6 className="m-0">{item.title}</h6>
            </section>
            {item.id !== 1 && (
              <section
                className={`progress-item-form ${
                  step >= item.id ? "bg-success" : "bg-secondary"
                }`}
              ></section>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

Progress.propTypes = {};

export default Progress;
