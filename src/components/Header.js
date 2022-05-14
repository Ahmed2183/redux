import React from "react";

function Header(props) {
  //props get from HeaderContainer in mapDispatchToProps
  //console.log("Header",props.data.cartItems); //For HeaderContainer in mapStateToProps
  return (
    <div>
      <div className="addcartimage">
        <button type="button" className="btn btn-primary position-relative">
          Cart
          <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
            {props.data.cartItems.length}{" "}
            {/*//-->Show cart numbers data here */}
          </span>
        </button>
      </div>
    </div>
  );
}

export default Header;
