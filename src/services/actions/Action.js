//Create Action 

import {ADD_TO_CART,REMOVE_TO_CART} from '../Constants';  //-->For Add to cart and Remove to cart

export const addToCart =(data)=>{  //Take data as parameter data is our item name,price,image
   // console.log("action",data)
    return { //Two things return type and data, data is our parameter
              //type name is different in every new arrow function
        type:ADD_TO_CART,
        data:data
    }
}



export const removeToCart =()=>{  
    //  console.log("action")
     return { //Two things return type and data, data is our parameter
               //type name is different in every new arrow function
         type:REMOVE_TO_CART,
     }
 }