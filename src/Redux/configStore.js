import { combineReducers, createStore, applyMiddleware } from "redux";
import { QuanLyNhacReducer } from "./Reducer/QuanLyNhacReducer";
import reduxThunk from 'redux-thunk';

const rootReducer = combineReducers({
    QuanLyNhacReducer,
})

export const store = createStore(rootReducer, applyMiddleware(reduxThunk));