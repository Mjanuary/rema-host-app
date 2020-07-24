import React from "react";

const Loading = () => {
  return (
    <div className="container p-5 text-center">
      <div className="spinner-border text-primary" role="status">
        <span className="sr-only">Loading...</span>
      </div>
    </div>
  );
};

export default Loading;
