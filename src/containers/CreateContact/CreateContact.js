import React, { useEffect } from "react";
import ContactForm from '../../components/ContactForm/ContactForm';
import { useSelector, shallowEqual, useDispatch, } from "react-redux";
import { inputHandler, createContact, clearInputs } from "../../store/services/contactSlice";
import { useNavigate } from "react-router-dom";
import Spinner from '../../components/UI/Spinner/Spinner';

const CreateContact = () => {
    const { isLoading, photo, phone, name, email } = useSelector(state => state, shallowEqual);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(clearInputs());
    }, [dispatch]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        dispatch(inputHandler({ name, value }));
    };

    const createContactHandler = (e) => {
        e.preventDefault();
        const contact = {
            name,
            email,
            phone,
            photo
        }
        dispatch(createContact(contact));
        navigate({ pathname: '/' });
    };

    return (
        isLoading ? <Spinner /> :
            <div>
                <h1>add new contact</h1>
                <ContactForm
                    photo={photo}
                    phone={phone}
                    name={name}
                    email={email}
                    handleChange={handleChange}
                    submitHandler={createContactHandler} />
            </div>
    );
}

export default CreateContact;