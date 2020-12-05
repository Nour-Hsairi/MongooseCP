import {
    GET_CONTACTS_LOAD,
GET_CONTACTS_SUCCESS,
GET_CONTACTS_FAIL,
TOGGLE_TRUE,
  TOGGLE_FALSE,
  GET_CONTACT,
} from "../constants/contacts";
import Axios from "axios";

export const getContacts=()=> async (dispatch)=> {
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result= await Axios.get("/api/contact");
             dispatch({type: GET_CONTACTS_SUCCESS,payload:result.data.response}) 
    } catch (error) {
      dispatch ({type: GET_CONTACTS_FAIL,payload:error});  
    }

};
export const deleteContact = (id) => (dispatch) => {
    Axios.delete(`/api/contact/${id}`)
      .then((res) => dispatch(getContacts()))
      .catch((err) => console.log(err));
  };
  export const toggleTrue = () => {
    return {
      type: TOGGLE_TRUE,
    };
  };
  export const toggleFalse = () => {
    return {
      type: TOGGLE_FALSE,
    };
  };
  export const getContact = (id) => (dispatch) => {
    Axios
    .get(`/api/contact/${id}`)
      .then((res) => dispatch({ type: GET_CONTACT, payload: res.data.response }))
      .catch((err) => console.log(err));
  };
  export const postContact = (user) => (dispatch) => {
    Axios.post("/api/contact", user)
      .then((res) => dispatch(getContacts()))
      .catch((err) => console.log(err));
  };
  export const editContact = (id, user) => (dispatch) => {
    Axios.put(`/api/contact/${id}`, user)
      .then((res) => dispatch(getContacts()))
      .catch((err) => console.log(err));
  };