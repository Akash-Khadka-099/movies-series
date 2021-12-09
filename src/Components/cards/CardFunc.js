import React from "react";
import Wdata from "./CardsData";
import Cards from "./Cards";

export default function CardFunc() {
  return (
    <>
      <div className="d-flex justify-content-around flex-wrap m-2">
        {Wdata.map((val) => {
          return (
            <Cards
              heading={val.name}
              imgLink={val.imageLink}
              watch={val.watchLink}
              category={val.category}
              site={val.type}
            />
          );
        })}
      </div>
    </>
  );
}
