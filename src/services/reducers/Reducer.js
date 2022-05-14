//Create Reducer


import { ADD_TO_CART,REMOVE_TO_CART } from '../Constants'
const initialState = {  //initialState is variable name
    cardData: []  //In cardData we store our data in array
}

//In this function we pass two things InitialState and action where action is Action.js
//action is we define in containers
//We use switch cases in Reducer in following function
export default function cardItems(state = [], action) {
    switch (action.type) {  //type is in Action.js
        case ADD_TO_CART:   //ADD_To_CART means our ADD_To_CART type in which Action.js
            // console.log("reducer",action)
            return [
                ...state,
                {cardData: action.data}
            ]
            case REMOVE_TO_CART:  
            // console.log("reducer",action)
            state.pop();  //For Removing Items Number menas Removing Cart
            return [
                ...state,
            ]
        default:
            return state
    }


}
