import React from "react";
import Card from "react-bootstrap/Card";

const JFetchCard = ({
  seat_number,
  price,
  event_type,
  gender,
  age,
  event_date_time,
  seat_type,
  seat_type_id,
  route_id,
  pnr_number,
}) => {
  return (
    <>
      <div>
        <Card className="bg-light">
          <Card.Body>
            <h2> User Data</h2>
            <p>Id : {seat_number}</p>
            <p>Title :{price}</p>
            <p>event_type :{event_type}</p>
            <p>gender : {gender}</p>
            <p>{age}</p>

          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default JFetchCard;

// const handleSubmit = async (e) => {
//   e.preventDefault();
//   const request = await axios
//     .post("/api/signup", { ...state })
//     .then((res) => console.log("->>", res))
//     .catch((error) => console.log(error));
// }; nextjs
