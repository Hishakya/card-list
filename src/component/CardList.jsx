import React from "react";
import FetchCard from "./FetchCard";

const CardList = ({ inputData }) => {
  return (
    <>
      <div className="container-xxl py-4 ">
        <div className="col-12">
          <div className="row">
            {inputData.data.map((id, index) => (
              <div className="col-3  py-2" key={index}>
                <FetchCard
                  // key={index}
                  seat_number={id.seat_number}
                  price={id.price}
                  event_type={id.event_type}
                  gender={id.gender}
                  age={id.age}
                  event_date_time={id.event_date_time}
                  seat_type={id.seat_type}
                  seat_type_id={id.seat_type_id}
                  route_id={id.route_id}
                  pnr_number={id.pnr_number}
                  // ={id.}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CardList;
