import React from "react";
import axios from "axios";

const App = () => {
  //dummy data
  const data = [
    {
      /*  "user": 2,
  cartItems: [
    {
     " product": "Bag",
      "quandity": 1,
      "price": 1500,
      
    },
  ], */
    },
  ];

  //api end point
  const url = "http://localhost:5000/addTocart";

  const onClickhandler = () => {
    axios
      .post(url, data)
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: 200,
      }}
    >
      <button onClick={() => onClickhandler()}>submit</button>
    </div>
  );
};

export default App;
