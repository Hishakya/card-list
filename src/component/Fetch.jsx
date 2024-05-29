import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import CardList from "./CardList";
import fetchData from "./FetchJsonData.json";
import Search from "./Search";
const Fetch = () => {
  const [data, setData] = useState(fetchData);
  // const [search, setSearch] = useState([]);
  //   const [filter, setFilter] = useState();

  //   const getData = () => {
  //     fetch("FetchJsonData.json")
  //       .then((res) => res.json())
  //       .then((userData) => {
  //         console.log("userData..", userData);
  //         setData(userData.data);
  //         setSearch(userData);
  //         console.log("cnsl", data);
  //       });
  //   };

  const getData = () => {
    fetch("/db/usersJson.json")
      .then((response) => response.json())
      .then((userData) => {
        console.log("userData..", userData);
        setData(userData.data);
        // setSearch(userData);
        // console.log("srch..", search);
        // console.log("cnsl.", data);
      })
      .catch((error) => console.log(error.message));
  };

  //   const hadleFilter = (e) => {
  //     if (e.target.value === "") {
  //       setData(search);
  //     }else{
  //         const flterResult = search.filter((item) => item.value.event_type);

  //     }
  //   };

  useEffect(() => {
    console.log("user..use", data);
    getData();
  });
  return (
    <>
      <div>
        <div className="d-flex justify-content-center py-4">
          <Search />
        </div>
        <CardList inputData={data} />
      </div>
    </>
  );
};

export default Fetch;
