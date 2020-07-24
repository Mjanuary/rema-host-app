import React from "react";
import CategoryItem from "./CategoryItem";
import CategoryContent from "./CategoryContent";

const SampleSite = () => {
  return (
    <div className="card">
      <div className="card-header">
        <select className="custom-select">
          {" "}
          {[
            {
              categoryId: 1,
              categoryName: "Sampling Sites",
            },
            {
              categoryId: 2,
              categoryName: "Cachtment & Sites",
            },
            {
              categoryId: 3,
              categoryName: "District",
            },
          ].map((categoryItem) => (
            <CategoryItem
              key={categoryItem.categoryId}
              categoryId={`${categoryItem.categoryId}`}
              categoryName={categoryItem.categoryName}
            />
          ))}{" "}
        </select>{" "}
      </div>{" "}
      <div className="card-body overflow-auto mx-height">
        <ul className="list-group list-group-flush mb-3">
          {" "}
          {[
            {
              contentId: 1,
              contentName: "GACURABWENGE",
            },
            {
              contentId: 2,
              contentName: "RUBUMBA",
            },
            {
              contentId: 3,
              contentName: "INILAK",
            },
            {
              contentId: 4,
              contentName: "RWAMPARA",
            },
            {
              contentId: 5,
              contentName: "RUGERAMIGOZI I",
            },
            {
              contentId: 6,
              contentName: "INILAK",
            },
            {
              contentId: 7,
              contentName: "GACURABWENGE",
            },
            {
              contentId: 8,
              contentName: "RUBUMBA",
            },
          ].map((contentItem) => (
            <CategoryContent
              key={contentItem.contentId}
              contentId={`${contentItem.contentId}`}
              contentName={contentItem.contentName}
            />
          ))}{" "}
        </ul>{" "}
      </div>{" "}
    </div>
  );
};

export default SampleSite;
