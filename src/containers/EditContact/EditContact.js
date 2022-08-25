import React, { useEffect } from "react";
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import { useNavigate, useParams } from "react-router-dom";
import { clearInputs, editContact, getContactById, inputHandler } from "../../store/services/contactSlice";
import ContactForm from "../../components/ContactForm/ContactForm";
import Spinner from "../../components/UI/Spinner/Spinner";

const EditContact = () => {
    const { isLoading, photo, phone, name, email } = useSelector(state => state, shallowEqual);
    const navigate = useNavigate();
    const params = useParams();
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(clearInputs());
        if (params.id) {
            dispatch(getContactById(params.id));
        }
    }, [dispatch, params.id]);

    const changeHandler = (e) => {
        const { name, value } = e.target;
        dispatch(inputHandler({ name, value }));
    };

    const submitHandler = (e) => {
        e.preventDefault();
        const contact = {
            name,
            phone,
            email,
            photo
        }
        dispatch(editContact({ contact, id: params.id }))
        navigate({ pathname: '/' });
    };

    return (
        isLoading ? <Spinner /> :
            <div>
                <h1>Edit page</h1>
                <ContactForm
                    photo={photo}
                    phone={phone}
                    name={name}
                    email={email}
                    handleChange={changeHandler}
                    submitHandler={submitHandler} />
            </div>
    )
}

export default EditContact;