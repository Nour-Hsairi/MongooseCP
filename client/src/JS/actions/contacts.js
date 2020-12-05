import {
    GET_CONTACTS_LOAD,
GET_CONTACTS_SUCCESS,
GET_CONTACTS_FAIL,
} from "../constants/contacts";
import Axios from "axios";

export const getContacts=()=> async (dispatch)=> {
    dispatch({type:GET_CONTACTS_LOAD})
    try {
        let result= await Axios.get("api/contact");
             dispatch({type: GET_CONTACTS_SUCCESS,payload:result.data.response}) 
    } catch (error) {
      dispatch ({type: GET_CONTACTS_FAIL,payload:error});  
    }

};