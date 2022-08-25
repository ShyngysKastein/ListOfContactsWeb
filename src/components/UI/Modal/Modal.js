import React from "react";
import { handleClose } from "../../../store/services/contactSlice";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { Button, Avatar, Dialog, DialogTitle, DialogContent, DialogActions, DialogContentText } from '@mui/material';

const Modal = ({ el, removeContact, editContact }) => {
    const dispatch = useDispatch();
    const { open } = useSelector(state => state, shallowEqual);
    return (
        <Dialog
            key={el.id}
            open={open}
            onClose={() => dispatch(handleClose())}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
        >
            <DialogTitle style={{ textAlign: 'center' }} id="alert-dialog-title">
                {el.name}
            </DialogTitle>
            <Avatar style={{ position: 'relative', left: 20 }} sx={{ width: 200, height: 200 }} alt="Cindy Baker" src={el.photo} />
            <DialogContent>
                <DialogTitle><DialogContentText>Email:</DialogContentText> {el.email}</DialogTitle>
                <DialogTitle><DialogContentText>Number:</DialogContentText>{el.phone}</DialogTitle>
            </DialogContent>
            <DialogActions>
                <Button variant="contained" startIcon={<EditIcon />} onClick={() => editContact(el.id)}>Edit</Button>
                <Button variant="contained" color="error" startIcon={<DeleteIcon />} onClick={() => removeContact(el.id)} autoFocus>
                    Delete
                </Button>
            </DialogActions>
        </Dialog>
    )
}

export default Modal;