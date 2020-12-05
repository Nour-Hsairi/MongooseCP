// import constants
import {GET_CONTACTS_FAIL,GET_CONTACTS_SUCCESS,GET_CONTACTS_LOAD,GET_CONTACT} from "../constants/contacts";
//initial State
const initialState={
    contacts:[],
    loadContacts:false,
    errors: null,
    user: {},
};

export const contactReducer=(state=initialState,{type,payload})=>{
    switch (type) {
        case GET_CONTACTS_LOAD: 
        return {...state,loadContacts:true};
        case GET_CONTACTS_SUCCESS:
             return {...state,contacts: payload ,loadContacts:false};
        case GET_CONTACTS_FAIL:
             return {...state,loadContacts:false, errors:payload };
             case GET_CONTACT:
                return { ...state, user: payload };
             default: 
             return state;
         
    }
}