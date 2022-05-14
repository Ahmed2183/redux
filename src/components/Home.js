//import in HomeContainer.js in containers folder
//We transfer data from Component to Container in redux bcz we map(connect) component and redux
//All className property in App.css

import React from "react";

function Home(props) {
  //props get from HomeContainer in mapDispatchToProps
  // console.log("Home",props.data);  //For HomeContainer in mapStateToProps
  // console.log("props",props); 
  return (
    <div>
      <h1>Home Component</h1>
      <div className="corners1">
        <div className="image-wrapper">
          <img
            className="image"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7mbW1cA0eBfXvnxiek7ozVUx3IKo8-cAxIw&usqp=CAU"
          />
        </div>
        <div className="text-wrapper item">
          <span>I-Phone</span>
          <br></br>
          <span>Price: $1000.00</span>
        </div>{" "}
        <div>
          <button
            type="button"
            className="btn btn-primary"
            onClick={() => {
              props.addToCartHandler({ pice: 1000, name: "i phone 11" });
            }}
          >
            Add To Cart
          </button>
          <br></br>
          <button
            type="button"
            className="button"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
