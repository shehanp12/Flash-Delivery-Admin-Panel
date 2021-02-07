import { combineReducers } from 'redux';
import auth from './auth';
import runtime from './runtime';
import navigation from './navigation';
import posts from './posts';
import {firestoreReducer} from "redux-firestore";
import  {getFirebase} from "react-redux-firebase";


export default combineReducers({
  auth,
  runtime,
  navigation,
  posts,
  firestore:firestoreReducer
});
