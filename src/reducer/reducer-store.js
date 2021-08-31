import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from "redux-thunk";
import testReducer from "./tesr-reducer";






let reducers = combineReducers({
  test: testReducer
})







let store = createStore(reducers, applyMiddleware(thunkMiddleware));




export default store;