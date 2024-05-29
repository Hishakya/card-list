import React from "react";
import { useEffect } from "react";
import { useState } from "react";
// import CardList from "./CardList";
import axios from "axios";

const Fetch2 = () => {
  const [userData, setUserData] = useState([]);

  const getDataAxios = () => {
    axios
      .get("./userJson.json")
      .then((response) => {
        // console.log("a..", response.data);
        setUserData(response.data.data);
        console.log("bbb..", userData);
      })
      .catch((err) => console.log(err.message));
  };

  useEffect(() => {
    getDataAxios();
  });

  return (
    <>
      <div>
        <div className="d-flex justify-content-center py-4">
          {/* <Search /> */}
        </div>
        {/* <CardList inputData2={userData.data} /> */}
        {/* old method */}
        {/* <div>
          <h1>Users Data</h1>
          {userData.data.map((id, index) => (
            <div key={index}>
              {id.name}
              <div>{id.id}</div>
              <div>{id.lang}</div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default Fetch2;
