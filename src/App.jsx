import "./App.css";
import Fetch from "./component/Fetch";
import "bootstrap/dist/css/bootstrap.min.css";
import JFetch from "./component/JFetch";
// import Fetch2 from "./component/Fetch2";
// import { useState, useEffect } from "react";
// import axios from "axios";

function App() {
  <div>hello</div>
  // const [search, setSearch] = useState([]);

  // const getDataAxios = () => {
  //   axios
  //     .get("/db/userJson.json")
  //     .then((response) => {
  //       // console.log("a..", response.data);
  //       // setSearch(response.data); //% 1.1
  //       setSearch(response.data.data); //*2.2 {search.map((user, index) => ( use this only
  //       // console.log("a..", search[2]); //* 2.2
  //       console.log("b..", search); //* 2.2
  //       // console.log("bbb..", search.data[2]); //% 1.1
  //     })
  //     .catch((err) => console.log(err.message));
  // };

  // useEffect(() => {
  //   getDataAxios();
  // });

  return (
    <>
      <div className="App">
        <div><h1>Welcome</h1></div>
        {/* <Fetch /> */}
        <JFetch/>
        {/* <Fetch2 /> */}
      </div>
      {/* <div>
        <ul>
          {search.map((user, index) => (
            <li key={index}>
              {user.price} {user.seat_number}
            </li>
          ))}
        </ul>
      </div> */}
    </>
  );
}

export default App;
