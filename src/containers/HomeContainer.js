//Create Container
//Components import in Contianer
//import in App.js

import Home from "../components/Home"; //Home Component
import { connect } from "react-redux";
import { addToCart,removeToCart } from "../services/actions/Action"; //addToCart is function name in Action.js similar that we import components

//mapDispatchToProps and mapStateToProps are names of variables we use y names

//To get data from redux store
const mapStateToProps=state=>({
   //data:state
  // data:state.cardItems
})

//To send data in redux store
const mapDispatchToProps=dispatch=>({
  addToCartHandler:data=>dispatch(addToCart(data)),
  removeToCartHandler:data=>dispatch(removeToCart(data))


})
export default connect(mapStateToProps,mapDispatchToProps)(Home)