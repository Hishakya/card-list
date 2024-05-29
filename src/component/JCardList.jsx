import React from "react";
import JFetchCard from "./JFetchCard";

const JCardList = ({ inputData }) => {

  return (
    <>
      <div className="container-xxl py-4 ">
        <div className="col-12">
          <div className="row">
            {inputData.map((val, index) => (
              <div className="col-3  py-2" key={index}>
                <JFetchCard
                  // key={index}
                  seat_number={val.id}
                  price={val.title}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default JCardList;
