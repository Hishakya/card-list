import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Search from "./Search";
import JCardList from "./JCardList";
const JFetch = () => {
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://dummyjson.com/posts')
      .then((response) => response.json())
      .then((userData) => {
        console.log("userData..", userData.posts);
        setData(userData.posts);
      })
      .catch((error) => console.log(error.message));
  };


  useEffect(() => {
    console.log("user..use", data);
    getData();
}, []); 
  return (
    <>
      <div>
        <div className="d-flex justify-content-center py-4">
          <Search />
        </div>
        <JCardList inputData={data} />
      </div>
    </>
  );
};

export default JFetch;
