import React,{useEffect} from 'react'
import{useDispatch,useSelector} from "react-redux";
import {getContacts} from "../JS/actions/contacts"

const ContactList = () => {
const dispatch = useDispatch();
const contacts = useSelector((state) => state.contactReducer.contacts);
const loadContacts = useSelector((state) => state.contactReducer.loadContacts);
console.log(contacts,loadContacts );
useEffect(() => {
    dispatch(getContacts());
}, []);
    return <div> Contact List </div>;
};

export default ContactList;
