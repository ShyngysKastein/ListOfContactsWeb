import { Avatar, Alert } from "@mui/material";
import React, { useEffect } from "react";
import { shallowEqual, useSelector, useDispatch } from "react-redux";
import { getContacts, deleteContact, handleClose, clickCardContact } from "../../store/services/contactSlice";
import './ContactPage.css';
import { useNavigate } from "react-router-dom";
import Spinner from "../../components/UI/Spinner/Spinner";
import Modal from "../../components/UI/Modal/Modal";

const ContactPage = () => {
    const { isLoading, contacts, contact } = useSelector(state => state, shallowEqual);
    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getContacts());
    }, [dispatch]);

    const removeContact = (id) => {
        dispatch(deleteContact(id));
        dispatch(handleClose());
    };

    const editContact = (id) => {
        dispatch(handleClose());
        navigate(`${id}/edit`);
    };

    return (
        <div>
            {isLoading ? <Spinner /> :
                <div className="container_card">
                    {contacts.length > 0 ? contacts.map(el => {
                        return (
                            <div className="card_contactpage" key={el.id} onClick={() => dispatch(clickCardContact(el.id))}>
                                <Avatar sx={{ width: 56, height: 56 }} alt="Cindy Baker" src={el.photo} />
                                <div className="card_title">{el.name}</div>
                            </div>
                        )
                    })
                        : <Alert severity="error">Записи отсутствуют,добавьте новую запись</Alert>}
                </div>}
            {contact !== null ?
                contact.map(el => (
                    <Modal key={el.id} el={el} removeContact={removeContact} editContact={editContact} />
                )) : null}
        </div>
    )
}

export default ContactPage;