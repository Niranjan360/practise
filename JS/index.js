const redux = require("redux");

const createStore = redux.createStore;

//! *************ACTIONS*************

// 1. string constraints for actions.
const BUY_PHONE = "BUY_PHONE";

// 2.Action creators.b
function buyPhone() {
    return {
        type: BUY_PHONE,
    };
}

//! *************REDUCERS*************

// 3. Initialze the state value
const initialState = {
    numOfPhones: 100,
};

// 4. creating the reducers. (previousState,actions) => reducer
const phoneReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_PHONE:
        return {
            //   copy of state objects
            ...state,
            numOfPhones: state.numOfPhones - 10,
        };
        default:
        return state;
    }
};

//! *************STORE************* store(reducer)
const store = createStore(phoneReducer);

// getState() gives the initial value of the appln
console.log("Initial value", store.getState());

// to the updated value from the store.=> Subscribe()
store.subscribe(() => {
    console.log("the updated state value is", store.getState());
});

//! *************DISPATCH************* dispatch(action as parameter)
store.dispatch({type: BUY_PHONE });
store.dispatch(buyPhone());
store.dispatch(buyPhone());
store.dispatch(buyPhone());

