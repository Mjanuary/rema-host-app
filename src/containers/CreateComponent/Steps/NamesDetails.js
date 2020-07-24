import React from "react";

const NamesSetails = () => {
  return (
    <div className="row">
      <div className="col-md-12">
        <div className="card p-3 mb-3 shadow-sm">
          <div className="row">
            <div className="col-md-12 pl-5 mb-2">
              <h1 className="text-primary">Name &amp; Description</h1>
            </div>
            <div className="col-md-8 pl-5">
              <label htmlFor="name">
                <small>Component name</small>
              </label>
              <input
                type="text"
                className="form-control"
                placeholder="Component name"
              />
              <div className="mb-3" />
              <label htmlFor="description">
                <small>Component description</small>
              </label>
              <textarea
                className="form-control"
                placeholder="Component description"
                defaultValue={""}
              />
              <div className="mb-3" />
            </div>
          </div>
          <div className="row">
            <div className="col-md-8" />
            <div className="col-md-4">
              <button
                type="submit"
                className="btn btn-primary btn-lg pl-5 pr-5 mt-3 mb-3 mr-3 float-right"
              >
                Save &amp; Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NamesSetails;
