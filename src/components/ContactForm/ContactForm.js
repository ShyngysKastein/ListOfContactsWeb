import React from "react";
import { useNavigate } from 'react-router-dom';
import { Container, FormControl, Input, InputLabel, Avatar, Button } from '@mui/material';


const ContactForm = ({photo, phone, name, email, handleChange, submitHandler, buttonText = "Save", buttonMain = "Back to contacts"}) => {
    const navigate = useNavigate();

    const mainHandler = () => {
        navigate({
            pathname: '/'
        })
    };

    return (
        <Container>
            <form onSubmit={submitHandler}>
                <FormControl sx={{ mb: '40px' }} fullWidth>
                    <InputLabel htmlFor="name-field">Name</InputLabel>
                    <Input name='name' id="name-field" aria-describedby="my-helper-text" value={name} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ mb: '40px' }} fullWidth>
                    <InputLabel htmlFor="email-field">Email</InputLabel>
                    <Input name='email' id="email-field" value={email} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ mb: '40px' }} fullWidth>
                    <InputLabel htmlFor="phone-field">Phone</InputLabel>
                    <Input name='phone' id="phone-field" value={phone} onChange={handleChange} required />
                </FormControl>
                <FormControl sx={{ mb: '40px' }} fullWidth>
                    <InputLabel htmlFor="photo-field">Photo</InputLabel>
                    <Input name='photo' id="photo-field" value={photo} onChange={handleChange} required />
                </FormControl>
                <FormControl>
                    <Avatar sx={{ width: 150, height: 150 }} alt="Cindy Baker" src={photo} />
                </FormControl>

                <div style={{ marginTop: '2em' }}>
                    <Button type='submit' variant="contained" color="success" size="medium">{buttonText}</Button>
                    <Button style={{ marginLeft: '2em' }} onClick={mainHandler} variant="contained">{buttonMain}</Button>
                </div>
            </form>
        </Container>
    )
}

export default ContactForm;