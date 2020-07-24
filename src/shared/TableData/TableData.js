import React from "react";
import DataRow from "./DataRow";

const TableData = () => {
  return (
    <div className="bg-white p-2 pt-3">
      <h1 className="text-center m-0 p-3 mb-3">Data Table</h1>
      <div className="table-responsive">
        <table className="table table-bordered table-hover bg-white">
          <thead>
            <tr>
              <th>#</th>
              <th>Simpling sites</th>
              <th />
              <th>S</th>
              <th>E</th>
              <th>COND.</th>
              <th>TDS</th>
              <th>D.O</th>
              <th>PH</th>
              <th>TEMP.</th>
              <th>TSS</th>
              <th>TURB.</th>
            </tr>
          </thead>
          <tbody>
            {[
              {
                id: 1,
                title: "Data 1",
              },
              {
                id: 2,
                title: "Data 1",
              },
              {
                id: 3,
                title: "Data 1",
              },
              {
                id: 4,
                title: "Data 1",
              },
              {
                id: 5,
                title: "Data 1",
              },
              {
                id: 6,
                title: "Data 1",
              },
              {
                id: 7,
                title: "Data 1",
              },
            ].map((item) => (
              <DataRow key={item.id} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableData;
